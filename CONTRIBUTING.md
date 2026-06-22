# Contributing to the Burrow Bunnies site

This guide is for **everyone at the club**, including people who don't write code. You'll be making
changes with the help of Claude Code. The process below keeps the live site safe: nothing reaches the
public site until it has been built, checked, and reviewed.

## The big picture

```
your branch  →  pull request  →  automatic checks + preview link  →  review  →  merge  →  live
```

You never edit the live site directly. You propose a change, it gets a private preview link, a reviewer
looks at it, and only then does it go live.

## One-time setup

1. Install [Node.js](https://nodejs.org) (version 20 or newer) and [Git](https://git-scm.com).
2. Clone the repo:
   ```bash
   git clone https://github.com/South-Sydney-Rabbitohs/mascots.git
   cd mascots
   npm install
   ```
3. Open the folder in Claude Code.

## Making a change

1. **Start a fresh branch** (never work on `main`):
   ```bash
   git checkout main && git pull
   git checkout -b your-name/short-description
   ```
   Example: `git checkout -b sunny/add-oliver-recipe`.

2. **Ask Claude to make the change.** Be specific about what you want. Claude will follow the rules in
   `CLAUDE.md` (brand voice, accessibility, no made-up facts).

3. **Check it locally.** Ask Claude to run `npm run dev` and open the local link to see your change.

4. **Make sure it builds.** Before sharing it, both of these must pass:
   ```bash
   npm run lint
   npm run build
   ```
   If they fail, ask Claude to fix the errors.

5. **Open a pull request (PR).** Commit, push your branch, and open a PR on GitHub:
   ```bash
   git push -u origin your-name/short-description
   ```
   In the PR description, say in plain English what you changed and flag anything you're unsure about.

6. **Use the preview link.** A preview deployment is created automatically and posted on the PR. Click
   it to see exactly how your change will look live. Share it with whoever needs to sign off.

7. **Get it reviewed.** The designated reviewer checks the preview and approves. Once approved and the
   checks are green, the PR is merged and the change goes live automatically.

## If something goes wrong after it's live

Tell the reviewer. A bad change can be undone in seconds — either by reverting the pull request on
GitHub or rolling back in the hosting dashboard. Don't try to hot-fix the live site directly.

## Rules worth repeating

- **No secrets** (passwords, API keys) in the code or repo — ever.
- **No made-up club facts** — players, sponsors, dates, prices, quotes.
- **Australian English** and club brand voice.
- When unsure, leave a `TODO` and ask in the PR rather than guessing.
