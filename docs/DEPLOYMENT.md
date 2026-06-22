# Deployment & repository setup

One-time setup for hosting the Burrow Bunnies site and protecting the `main` branch. These steps are
for whoever owns the club's Cloudflare account and the GitHub repo (admin access required).

## 1. Branch protection (GitHub)

Repo → **Settings → Branches → Add branch ruleset** (or "Add rule") targeting `main`:

- ✅ Require a pull request before merging
- ✅ Require approvals: **1**
- ✅ Require status checks to pass before merging → select **Build & lint** (the CI job; it appears in
  the list after the workflow has run once)
- ✅ Require branches to be up to date before merging
- ✅ Do not allow bypassing the above settings (or restrict bypass to a named admin only)
- ✅ Block force pushes

Result: no one can push straight to `main`; every change goes through a PR + green CI + one approval.

## 2. Access (GitHub org)

- Contributors → **Write** access to this repo only.
- Reviewer → Sunny Brar (sbrar@rabbitohs.com.au): **Maintain** (can review, approve, merge).
- Owner / admin → Ben Clink (bclink@rabbitohs.com.au): **Admin** + Cloudflare account owner (manages
  access, settings, hosting, rollbacks). Keep the admin/owner list short.

## 3. Hosting — Cloudflare Pages

This is a static Vite site. Build settings:

| Setting | Value |
|---|---|
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` (set env var `NODE_VERSION=20` if needed) |

### Option A — Dashboard (recommended; you stay in control)

1. Log in to **dash.cloudflare.com** → **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorise the `South-Sydney-Rabbitohs` GitHub org and pick the `mascots` repo.
3. Enter the build settings from the table above. Deploy.
4. Cloudflare now auto-deploys: **`main` → production**, and **every PR → a preview URL** posted on the
   pull request.
5. Add the custom domain: project → **Custom domains → Set up a domain** (e.g.
   `bunnies.rabbitohs.com.au`). If the domain's DNS is already on Cloudflare this is one click;
   otherwise add the CNAME Cloudflare gives you at your DNS provider.

### Option B — CLI (if you want Claude/automation to run it)

Never paste a token into chat or commit it. Instead:

1. In Cloudflare: **My Profile → API Tokens → Create Token**, scoped to **Account → Cloudflare Pages →
   Edit** only. Copy the token.
2. On your machine, put it in your shell environment (not in the repo):
   ```bash
   export CLOUDFLARE_API_TOKEN=••••••••
   export CLOUDFLARE_ACCOUNT_ID=••••••••   # from the Cloudflare dashboard URL/overview
   ```
3. Create the project and deploy with Wrangler:
   ```bash
   npm run build
   npx wrangler pages project create mascots --production-branch main
   npx wrangler pages deploy dist --project-name mascots
   ```
4. Connect the GitHub repo (Option A, steps 1–4) so future deploys and PR previews are automatic — the
   CLI is only needed for the first push or one-off deploys.

## 4. Rollback

- **GitHub:** revert the offending pull request → CI rebuilds → site updates.
- **Cloudflare:** project → **Deployments →** pick a previous good deployment → **Rollback**. Instant.
