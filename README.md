# 🚀 edgetunnel 2.1
![后台页面](./img.png)

[![Stars](https://img.shields.io/github/stars/cmliu/edgetunnel?style=flat-square&logo=github)](https://github.com/cmliu/edgetunnel/stargazers)
[![Forks](https://img.shields.io/github/forks/cmliu/edgetunnel?style=flat-square&logo=github)](https://github.com/cmliu/edgetunnel/network/members)
[![License](https://img.shields.io/github/license/cmliu/edgetunnel?style=flat-square)](https://github.com/cmliu/edgetunnel/blob/main/LICENSE)
[![Telegram](https://img.shields.io/badge/Telegram-Group-blue?style=flat-square&logo=telegram)](https://t.me/CMLiussss)
[![YouTube](https://img.shields.io/badge/YouTube-Channel-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=LeT4jQUh8ok)
[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=flat-square&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/cmliu/edgetunnel)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/cmliu/edgetunnel)

---

## 📖 项目简介

**edgetunnel** 是一个基于 CF Workers/Pages 平台的边缘计算隧道解密方案。它能够高效地处理网络流量，并提供强大的管理面板和灵活的节点配置能力。

- 🖥️ **Demo 演示站点**：[https://EDT-Pages.github.io/admin](https://EDT-Pages.github.io/admin)

### ✨ 核心特性

- 🛡️ **协议支持**：支持 VLESS、Trojan、Shadowsocks 等主流协议，深度集成加密传输。
- 📊 **管理面板**：内置可视化后台，支持实时配置修改、日志查看及流量统计。
- 🛠️ **部署灵活**：完整适配 CF Workers 及 CF Pages (GitHub / 上传)。
- 🔄 **订阅系统**：内置自动订阅生成及混淆转换，适配主流客户端（Clash, Sing-box, Surge 等）。
- ⚡ **性能加速**：支持自定义 ProxyIP、SOCKS5/HTTP 链式代理及优选 API，优化网络延迟。
- 🌐 **多台适配**：完美适配 Windows, Android, iOS, MacOS 及各种软路由固件。

---

## 💡 Deploy

Every push to `main` that changes the worker publishes a [release](https://github.com/liveinaus/edgetunnel/releases/latest) with three files:

| File | Use |
| :--- | :--- |
| [`_worker.js`](https://github.com/liveinaus/edgetunnel/releases/latest/download/_worker.js) | Workers dashboard paste, or wrangler |
| [`edgetunnel-pages.zip`](https://github.com/liveinaus/edgetunnel/releases/latest/download/edgetunnel-pages.zip) | Pages direct upload |
| [`wrangler.toml`](https://github.com/liveinaus/edgetunnel/releases/latest/download/wrangler.toml) | wrangler config with the `EXIT` Durable Object |

Pick a method by the features you need:

| Method | Proxy `REGIONS` | `do=` regions / `country=` exits |
| :--- | :---: | :---: |
| Wrangler (recommended) | ✅ | ✅ |
| Workers dashboard | ✅ | ❌ |
| Pages upload | ✅ | ❌ |

>[!WARNING]
> ⚠️ **Error 1101**: always deploy with `wrangler deploy --no-bundle`. Bundling strips the trailing comment block in `_worker.js`, and a worker uploaded without it answers every request with 1101 (it stayed broken after a later `--no-bundle` deploy under the same name, so use a new name if this happens).

### ⚙️ Wrangler (full features)

<details>
<summary><code><strong>「 Wrangler deploy 」</strong></code></summary>

1. Get the files, either `git clone https://github.com/liveinaus/edgetunnel.git` or download `_worker.js` and `wrangler.toml` from the latest release into one folder.

2. Edit `wrangler.toml`:
   - Set `name` to your worker's name.
   - Create a KV namespace and uncomment the KV block with its id:
     ```sh
     npx wrangler kv namespace create KV
     ```
     ```toml
     [[kv_namespaces]]
     binding = "KV"
     id = "<id from the command above>"
     ```
   - Leave the `EXIT` Durable Object binding and migration as they are.

3. Set the admin password and deploy:
   ```sh
   npx wrangler secret put ADMIN
   npx wrangler deploy --no-bundle
   ```
   Other variables (`REGIONS`, `PROXYIP`, ...) can be added in the dashboard under `Settings` > `Variables`; `keep_vars = true` keeps them across deploys.

4. Bind a custom domain: in the dashboard, `Settings` > `Domains & Routes` > `Add` > `Custom domain`, for example `vless.example.com`.

5. Open `https://vless.example.com/admin` and log in with the admin password.

To update, download the new release files (or `git pull`) and run `npx wrangler deploy --no-bundle` again.

</details>

### ⚙️ Workers dashboard

<details>
<summary><code><strong>「 Workers dashboard deploy 」</strong></code></summary>

1. Create a Worker, open `Edit code`, replace the contents with the release [`_worker.js`](https://github.com/liveinaus/edgetunnel/releases/latest/download/_worker.js) and click `Deploy`.
2. `Settings` > `Variables`: add **ADMIN** with your admin password.
3. `Bindings` > `Add binding` > `KV namespace`: variable name **KV**, pick or create a namespace.
4. `Settings` > `Domains & Routes`: add a custom domain, then open `https://<domain>/admin`.

The editor has no Durable Object migration, so `do=` regions and `country=` exits are unavailable here. Proxy `REGIONS` work.

</details>

### 🛠 Pages upload

<details>
<summary><code><strong>「 Pages upload deploy 」</strong></code></summary>

1. Download [`edgetunnel-pages.zip`](https://github.com/liveinaus/edgetunnel/releases/latest/download/edgetunnel-pages.zip).
2. In Pages, choose `Upload assets`, name the project, `Create project`, upload the zip and `Deploy site`.
3. `Settings` > `Environment variables` > Production: add **ADMIN** with your admin password.
4. `Settings` > `Bindings` > `Add` > `KV namespace`: variable name **KV**.
5. `Deployments` > `Create new deployment`: upload the zip again so the variables and binding take effect.
6. `Custom domains` > `Set up a custom domain`: use a subdomain (for example `lizi.example.com`) and add the CNAME to `<project>.pages.dev` it asks for. Then open `https://lizi.example.com/admin`.

Pages cannot define Durable Objects, so `do=` regions and `country=` exits are unavailable here. Proxy `REGIONS` work.

</details>

---

## 🔑 环境变量说明

| 变量名 | 必填 | 示例 | 详细备注 |
| :--- | :---: | :--- | :--- |
| **ADMIN** | ✅ | `123456` | 后台管理面板登录密码 |
| **KEY** | ❌ | `CMLiussss` | 快速订阅路径密钥，访问 `/CMLiussss` 即可快速获取节点 |
| **UUID** | ❌ | `90cd4a77-141a-43c9-991b-08263cfe9c10` | 强制固定UUID，只支持**UUIDv4**标准格式 |
| **PROXYIP** | ❌ | `proxyip.cmliussss.net:443` | 全局自定义反代 IP  |
| **URL** | ❌ | `https://cloudflare-error-page-3th.pages.dev` | 默认主页伪装地址（可填写网页 URL 或 `1101`） |
| **GO2SOCKS5** | ❌ | `blog.cmliussss.com`,`*.ip111.cn`,`*google.com` | 强制走 SOCKS5 的名单 (`*` 为全局，域名用逗号分隔) |
| **DEBUG** | ❌ | `1`或`true` | **开发者模式**，默认**关闭**调试日志功能（console.log），设置`1`或`true`则**开启**调试日志功能 |
| **OFF_LOG** | ❌ | `1`或`true` | 默认**开启**KV日志记录功能，设置`1`或`true`则**关闭**日志记录功能 |
| **BEST_SUB** | ❌ | `1`或`true` | 默认**关闭**作为**优选订阅生成器**的功能，设置`1`或`true`则**开启**该功能 |
| **PRELOAD_RACE_DIAL** | ❌ | `1`或`true` | 默认**关闭**作为**预加载竞速拨号**的功能，设置`1`或`true`则**开启**该功能 |
| **TCP_CONCURRENT_DIAL**   | ❌ | `2` | **TCP 并发拨号数**，默认值为`2`；设置后不再根据中国移动网络自动降为单路 |
| **PROXY_CONCURRENT_DIAL** | ❌ | `1` | **反代并发拨号数**，默认值为`1`；数值越高连接速度越快，但 IP 切换也越频繁 |
| **REGIONS** | ❌ | `JP\|socks5://user:pass@1.2.3.4:1080` | Exit regions, one `label\|exit` per line. See [Exit regions](#-exit-regions) |
| **EXIT_SHARDS** | ❌ | `4` | EXIT objects per location hint for `do=` regions, default `4` |

### 🌏 Exit regions

Choose where each node's traffic leaves the internet from. There are three ways to do it, and you can mix them:

| Mode | Config needed | Exit IPs come from | Covers |
| :--- | :--- | :--- | :--- |
| Country exits (`country=`) | `EXIT` binding, KV recommended | Cloudflare, in the chosen country | Sites not hosted on Cloudflare |
| Proxy regions (`REGIONS` + SOCKS5/HTTP/...) | `REGIONS` | Your own proxies | All sites |
| Cloudflare location regions (`REGIONS` + `do=`) | `REGIONS`, `EXIT` binding | Cloudflare, near a location hint | Sites not hosted on Cloudflare (add a ProxyIP for the rest) |

#### Setup

- **Deploy as a Worker, not Pages.** The `do=` and `country=` modes run the tunnel inside the `EXIT` Durable Object, which only a Worker can define. `wrangler.toml` already declares the binding and migration:
  ```toml
  [[durable_objects.bindings]]
  name = "EXIT"
  class_name = "EXIT"

  [[migrations]]
  tag = "v1"
  new_sqlite_classes = ["EXIT"]
  ```
- **Deploy with `wrangler deploy --no-bundle`**, see [Deploy](#-deploy).
- **Bind KV** (`KV`) for country exits, so found exits survive cold starts and stay the same across isolates.
- Proxy-only `REGIONS` need neither the binding nor KV and also work on Pages.

#### 1. Country exits (no REGIONS needed)

Add `per_exit=1&country=<code>` to your subscription URL:

```
https://your.domain/sub?token=<token>&per_exit=1&country=sg
https://your.domain/sub?token=<token>&per_exit=1&country=sg,jp,hk&count=5&ips=2
```

It returns nodes named `SG-1`, `SG-2`, ... that exit from Cloudflare's IPs in that country.

| Parameter | Default | Range | Meaning |
| :--- | :---: | :---: | :--- |
| `country` | | ISO 3166 two-letter codes, comma separated | Countries to build nodes for |
| `count` | `3` | 1-10 | Nodes per country |
| `ips` | `1` | 1-5 | Exits behind each node; if one does not answer, the next takes over |

How it works: the worker creates EXIT objects under the location hints that reach the country, asks each one where its connections appear from, keeps the ones that land in the country, and saves them in KV under `cf-exit:<country>`. The first request for a country takes a few seconds; later ones are instant.

- Countries found so far: US, GB, FR, NL, ES, PT, DE, AT, CZ, IT, PL, RO, SE, SG, HK, JP, KR, AU. Other codes try every hint.
- A country with no Cloudflare exit (TW, for instance) answers `503`. A rarer country can come back short of `count`; requesting the subscription again carries the search on.
- Each node's path is `/country=<code>.<n>` (or `.<n>x<ips>`), for example `/country=sg.2x3` is node 2 of Singapore backed by 3 exits. A plain `/country=sg` picks a random known exit.
- Failover between `ips` exits only happens when the WebSocket upgrade fails; a POST-based transport stays on the first exit.

#### 2. Proxy regions (REGIONS)

Set `REGIONS` to one `label|exit` per line. Repeat a label to pool several exits in that region:

```
JP|socks5://user:pass@203.0.113.10:1080
JP|socks5://user:pass@203.0.113.11:1080
US|http=user:pass@198.51.100.20:8080
SG|proxyip.sg.example.net:443
```

- Labels are case-insensitive and may contain `a-z`, `0-9`, `_` and `-`.
- An exit is any proxy segment the worker already understands (`socks5://`, `socks5=`, `s5=`, `gs5=`, `http=`, `https=`, `turn=`, `sstp=`). Anything else is treated as a ProxyIP host (an optional `proxyip=` prefix and comma-separated hosts are accepted).
- A proxy exit carries **all** traffic for that node. A ProxyIP-only region merges its hosts into one ProxyIP list, which only changes the exit for sites hosted on Cloudflare.
- Node paths:
  - `/region=jp`: use the whole JP pool. Each site sticks to one exit (rendezvous hashing on the site's root domain plus UUID), so adding or removing an exit only moves the sites that were on it. If the exit does not connect within 5 s the next one takes over, and a failed exit goes to the back of the queue for 60 s.
  - `/region=jp.2`: prefer JP exit 2 and fall back to the others only when it fails, so different nodes keep different, stable IPs.
  - An unknown label falls back to the normal exit.

#### 3. Cloudflare location regions (`do=`)

```
SG|do=apac-se
SG|proxyip.sg.example.net:443
EU|do=weur
EU|do=eeur
```

- `do=<hint>` (or `cf=<hint>`) hands the connection to an EXIT object created with that location hint, so it exits from Cloudflare's IPs near there. Hints: `wnam`, `enam`, `weur`, `eeur`, `apac`, `apac-ne` (JP/KR), `apac-se` (SG/HK), `oc`, `afr`, `me`.
- Placement is best effort: a hint picks a broad area, not a country. Use country exits when the exact country matters.
- A Cloudflare-hosted site cannot be reached from a Cloudflare IP directly, so add a `label|proxyip` line to the region if those sites matter; it is used as the fallback.
- With several `do=` lines, `/region=eu.1` picks the first hint and `/region=eu` picks one at random.
- `EXIT_SHARDS` (default `4`) spreads concurrent tunnels over that many objects per hint.

#### Subscription parameters

| Parameter | Effect |
| :--- | :--- |
| (none) | Normal nodes, plus a `[JP] ...` copy of each preferred IP for every region in `REGIONS` |
| `region=jp,us` | Only the regions listed (normal nodes are left out) |
| `per_exit=1` | One node per exit (`JP-1`, `JP-2`, `US-1`, ...) using the worker's own domain as entry, so nodes stay identical between refreshes. Use this form when a client pins nodes by name (for example as a Bemby subscription provider) |
| `per_exit=1&country=sg` | Country exits, see above. Takes priority over `REGIONS` |

`region=` is passed through to the subscription converter (Clash, sing-box, ...). `per_exit` and `country` only apply to the raw subscription, so import those as a v2rayN / mixed subscription.


---

## 🔧 高级实用技巧
如需修改 **订阅地址里的TOKEN** 和 **用于节点验证的UUID** ，可通过修改变量
1. 修改`ADMIN`或`KEY`变量的值，可以随机修改 **订阅地址里的TOKEN** 和 **用于节点验证的UUID**
2. 设置`UUID`变量可以强制固定 **订阅地址里的TOKEN** 和 **用于节点验证的UUID**，注意必须是**UUIDv4**标准格式，否则会导致节点无法使用。

本工具支持通过 **PATH路径** 动态切换底层代理方案：

- 指定 `PROXYIP` 案例
   ```url
   /proxyip=proxyip.cmliussss.net
   /?proxyip=proxyip.cmliussss.net
   ```

- 指定 `SOCKS5` 案例
   ```url
   /socks5=user:password@127.0.0.1:1080
   /?socks5=user:password@127.0.0.1:1080
   /socks://dXNlcjpwYXNzd29yZA==@127.0.0.1:1080 (默认激活全局SOCKS5)
   /socks5://user:password@127.0.0.1:1080 (默认激活全局SOCKS5)
   ```

- 指定 `HTTP代理` 案例
   ```url
   /http=user:password@127.0.0.1:1080
   /http://user:password@127.0.0.1:8080 (默认激活全局SOCKS5)
   ```

- 指定 `Trojan fallback` 案例（由于使用场景为自建对接, 仅 Trojan 入站，fallback 服务需为同密码、非 WebSocket、非 TLS. 此时 UDP 透传给 fallback, 性能优秀, 功能完整）
   ```url
   /trojan=1.1.1.1:1234
   ```

---

## 💻 客户端适配情况

| 平台 | 推荐客户端 |
| :--- | :--- |
| **Windows** | [v2rayN](https://github.com/2dust/v2rayN/releases)、[Hiddify](https://github.com/hiddify/hiddify-app/releases)、[FlClash](https://github.com/chen08209/FlClash/releases)、[mihomo-party](https://github.com/mihomo-party-org/clash-party/releases)、[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases)、[Clashmi](https://github.com/KaringX/clashmi/releases)、[FlyClash](https://github.com/GtxFury/FlyClash/releases)、[Karing](https://github.com/KaringX/karing/releases)、[Bettbox](https://github.com/appshubcc/Bettbox/releases) |
| **Android** | [v2rayNG](https://github.com/2dust/v2rayNG/releases)、[ClashMetaForAndroid](https://github.com/MetaCubeX/ClashMetaForAndroid/releases/)、[FlClash](https://github.com/chen08209/FlClash/releases)、[Clashmi](https://github.com/KaringX/clashmi/releases)、[Hiddify](https://github.com/hiddify/hiddify-app/releases)、[NekoBox](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases)、[FlyClash](https://github.com/GtxFury/FlyClash/releases)、[Karing](https://github.com/KaringX/karing/releases)、[Bettbox](https://github.com/appshubcc/Bettbox/releases) |
| **iOS** | Surge、Shadowrocket、Stash、[Hiddify](https://github.com/hiddify/hiddify-app/releases)、Loon、Egern、[Clashmi](https://clashmi.app/download)、[Karing](https://karing.app/)、Quantumult X |
| **macOS** | [FlClash](https://github.com/chen08209/FlClash/releases)、[mihomo-party](https://github.com/mihomo-party-org/clash-party/releases)、[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases)、Surge、[Clashmi](https://clashmi.app/download)、[Karing](https://karing.app/)、[FlyClash](https://github.com/GtxFury/FlyClash/releases) |
| **鸿蒙** | [ClashBox](https://github.com/xiaobaigroup/ClashBox/releases) |
---

## ⭐ 项目热度

![Stargazers over time](https://github.com/cmliu/cmliu/blob/main/star/edgetunnel.svg)

---

## 🙏 特别鸣谢
### 💖 赞助支持 - 提供云服务器维持[订阅转换服务](https://sub.cmliussss.net/)
- [Yuusei Network](https://yuusei.io/)
- [VMRack](https://www.vmrack.net?ref_code=5Zk7eNhbgL7)

### 🛠 开源代码引用
- [zizifn/edgetunnel](https://github.com/zizifn/edgetunnel)
- [3Kmfi6HP/EDtunnel](https://github.com/6Kmfi6HP/EDtunnel)
- [SHIJS1999/cloudflare-worker-vless-ip](https://github.com/SHIJS1999/cloudflare-worker-vless-ip)
- [Stanley-baby](https://github.com/Stanley-baby)
- [ACL4SSR](https://github.com/ACL4SSR/ACL4SSR/tree/master/Clash/config)
- [股神](https://t.me/CF_NAT/38889)
- [Workers/Pages Metrics](https://t.me/zhetengsha/3382)
- [白嫖哥](https://t.me/bestcfipas)
- [Mingyu](https://github.com/ymyuuu/workers-vless)
- [ToiCF/CF-Workers-HTTPS](https://github.com/ToiCF/CF-Workers-HTTPS)
- [ToiCF/CF-Workers-TURN](https://github.com/ToiCF/CF-Workers-TURN)
- [ToiCF/CF-Workers-SoftEther](https://github.com/ToiCF/CF-Workers-SoftEther)
- [eooce](https://github.com/eooce/Cloudflare-proxy)
- [Sukka](https://ip.skk.moe/)
- [zhangtaile](https://github.com/cmliu/edgetunnel/pull/999)
- [1345695](https://github.com/1345695/edcloudwasm)
- [ToiCF/GrainTCP](https://github.com/ToiCF/GrainTCP)
- [xream](https://github.com/cmliu/edgetunnel/pull/1359)

---

## ⚠️ 免责声明

1. 本项目（"edgetunnel"）仅供**教育、科学研究及个人安全测试**之目的。
2. 使用者在下载或使用本项目代码时，必须严格遵守所在地区的法律法规。
3. 作者 **cmliu** 对任何滥用本项目代码导致的行为或后果均不承担任何责任。
4. 本项目不对因使用代码引起的任何直接或间接损害负责。
5. 建议在测试完成后 24 小时内删除本项目相关部署。

---

**如果您觉得项目对您有帮助，请给一个 Star 🌟，这是对我最大的鼓励！**
