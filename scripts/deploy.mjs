#!/usr/bin/env node
// Deploys _worker.js as a Worker with the EXIT Durable Object, keeping the KV bindings the live worker already has.
//
// usage: node scripts/deploy.mjs [--name edt] [--account <id>] [--kv <namespace id>] [--dry-run]
//
// Auth: CLOUDFLARE_API_TOKEN, or a `wrangler login` session (set XDG_CONFIG_HOME to pick one of several).
// Wrangler comes from WRANGLER (path to the binary) or `npx wrangler`.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => {
	const i = args.indexOf(`--${k}`);
	return i >= 0 ? args[i + 1] : d;
};
const name = opt('name', 'edt');
const dryRun = args.includes('--dry-run');

const [cmd, ...pre] = process.env.WRANGLER ? [process.env.WRANGLER] : ['npx', 'wrangler'];
const wranglerEnv = { ...process.env, WRANGLER_SEND_METRICS: 'false' };
// Wrangler refreshes an expired login token on use, before it is read below
if (!process.env.CLOUDFLARE_API_TOKEN) execFileSync(cmd, [...pre, 'whoami'], { stdio: 'ignore', env: wranglerEnv });

function token() {
	if (process.env.CLOUDFLARE_API_TOKEN) return process.env.CLOUDFLARE_API_TOKEN;
	const base = process.env.XDG_CONFIG_HOME || path.join(homedir(), '.config');
	for (const f of [path.join(base, '.wrangler/config/default.toml'), path.join(homedir(), '.wrangler/config/default.toml')]) {
		if (existsSync(f)) {
			const m = /oauth_token\s*=\s*"([^"]+)"/.exec(readFileSync(f, 'utf8'));
			if (m) return m[1];
		}
	}
	throw new Error('No Cloudflare credentials: set CLOUDFLARE_API_TOKEN or run `wrangler login`');
}

async function api(p) {
	const r = await fetch(`https://api.cloudflare.com/client/v4${p}`, { headers: { Authorization: `Bearer ${token()}` } });
	const j = await r.json().catch(() => ({}));
	return { ok: r.ok && j.success, status: r.status, result: j.result, errors: j.errors };
}

const accounts = await api('/accounts');
if (!accounts.ok) throw new Error(`Cannot list accounts: ${JSON.stringify(accounts.errors)}`);
const account = opt('account', accounts.result.length === 1 ? accounts.result[0].id : undefined);
if (!account) throw new Error(`Several accounts, pick one with --account: ${accounts.result.map(a => `${a.id} (${a.name})`).join(', ')}`);

// A deploy replaces every binding, so carry over the KV namespaces the live worker has
const live = await api(`/accounts/${account}/workers/scripts/${name}/settings`);
const kv = opt('kv') ? [{ name: 'KV', namespace_id: opt('kv') }] : (live.result?.bindings || []).filter(b => b.type === 'kv_namespace');
console.log(`account ${account}, worker ${name} (${live.ok ? 'exists' : 'new'}), KV: ${kv.map(b => `${b.name}=${b.namespace_id}`).join(', ') || 'none'}`);
if (!kv.length) console.log('Warning: no KV bound; country exits are re-found after each cold start. Pass --kv <id> to bind one.');

const config = `name = "${name}"
main = ${JSON.stringify(path.join(root, '_worker.js'))}
compatibility_date = "2025-11-04"
keep_vars = true
${kv.map(b => `\n[[kv_namespaces]]\nbinding = "${b.name}"\nid = "${b.namespace_id}"\n`).join('')}
[[durable_objects.bindings]]
name = "EXIT"
class_name = "EXIT"

[[migrations]]
tag = "v1"
new_sqlite_classes = ["EXIT"]
`;
const dir = mkdtempSync(path.join(tmpdir(), 'edt-deploy-'));
const file = path.join(dir, 'wrangler.toml');
writeFileSync(file, config);
try {
	// --no-bundle: bundling strips the worker's padding and it answers 1101
	execFileSync(cmd, [...pre, 'deploy', '--no-bundle', '-c', file, ...(dryRun ? ['--dry-run'] : [])], {
		stdio: 'inherit',
		env: { ...wranglerEnv, CLOUDFLARE_ACCOUNT_ID: account },
	});
} finally {
	rmSync(dir, { recursive: true, force: true });
}
