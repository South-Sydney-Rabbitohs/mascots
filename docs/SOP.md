# How to make a change to the Burrow Bunnies website

**A standard operating procedure for everyone — no coding required.**

You make changes by *describing what you want to Claude Code*. Claude does the technical work; your
job is to explain the change clearly, check the result, and follow the approval steps below. Nothing
you do can break the live website — every change is checked and reviewed before it goes public.

---

## The big picture

```
1. Describe your change to Claude
        ↓
2. Claude makes it · you preview it
        ↓
3. Claude opens a "pull request" (a proposal)
        ↓
4. Automatic checks run · a private preview link appears
        ↓
5. A reviewer looks at the preview and approves
        ↓
6. It goes LIVE automatically
```

A **pull request** (or "PR") is just a proposal: *"here's a change I'd like to make."* It is **not**
live. It only goes live after step 5.

---

## Before you start (first time only)

1. Make sure **Claude Code** is installed and you can open the project folder (`mascots`) in it. If you
   don't have the project on your computer, ask Claude Code: *"Clone the Rabbitohs mascots repo and
   open it."* (Someone will need to give you access to the GitHub repo first.)
2. You do **not** need to install or understand anything else. Claude handles it.

---

## Step 1 — Describe your change

Open the project in Claude Code and say what you want in plain English. Be specific. Examples:

> *"Update Reggie's bio on his character page to mention he loves the Sea Eagles rivalry."*

> *"Add a new healthy recipe page for Banana Oat Pancakes, matching the style of the other recipes."*

> *"Change the hero heading on the homepage to 'Meet the Burrow Bunnies!'"*

**Then say:** *"Start this on a new branch."* (A "branch" is just a private workspace for your change —
Claude will create it.)

Claude already knows the club's rules (brand voice, colours, accessibility, and **never to invent facts
about players, sponsors, prices or dates**). If it's unsure about real information, it will ask you or
leave a note rather than guess. If you spot it inventing something, tell it to stop and correct it.

---

## Step 2 — Preview your change

Ask Claude:

> *"Show me a preview of the site so I can see the change."*

Claude will start a local preview and give you a link to open in your browser. Look at your change on a
computer **and** on a phone-sized view. If it's not right, just tell Claude what to fix and preview
again. Repeat until you're happy.

When it looks good, ask:

> *"Make sure it builds and lints with no errors."*

If there are errors, say *"please fix them."* This must pass before the next step.

---

## Step 3 — Open the proposal (pull request)

Ask Claude:

> *"Commit this and open a pull request. In the description, explain in plain English what I changed
> and flag anything you weren't sure about."*

Claude will push your work and create the PR on GitHub, and give you a link to it.

---

## Step 4 — Wait for the automatic checks and preview

On the pull request page, two things happen on their own within a minute or two:

- **Build & lint** — confirms the change doesn't break the site. ✅ green means it's safe.
- **Cloudflare Pages** — builds a **private preview** of the whole site *with your change*, and posts a
  link (it looks like `https://something.mascots.pages.dev`).

If a check shows ❌ red, tell Claude: *"the checks failed on the PR, please fix them"* — then it will
sort it out and the checks re-run automatically.

---

## Step 5 — Get it reviewed and approved

This is the safety step. **You cannot publish your own change alone.**

1. Copy the **preview link** and share it with the **designated reviewer** (see "Who's who" below),
   along with anyone whose sign-off the content needs (e.g. marketing or the brand team).
2. The reviewer opens the preview, checks the change looks right and is on-brand, and clicks
   **Approve** on the pull request.
3. If they ask for changes, go back to Step 1 (tell Claude what to adjust), and the preview updates
   automatically.

---

## Step 6 — Go live

Once the PR is **approved** and the checks are **green**, click the **"Merge pull request"** button (or
ask the reviewer to). The change deploys to the live website **automatically** within a minute or two.

That's it — you're live. 🎉

---

## If something looks wrong after it's live

Don't panic and don't try to fix the live site directly. Tell the reviewer. Any change can be undone in
seconds — either by reverting the pull request on GitHub or rolling back in the hosting dashboard. The
previous version comes straight back.

---

## Who's who

| Role | Who | What they do |
|---|---|---|
| **Contributor** | Any staff member | Describes changes to Claude, previews them, opens the PR. |
| **Reviewer** | Sunny Brar (sbrar@rabbitohs.com.au) | Checks every preview and approves before it goes live. |
| **Owner / admin** | Ben Clink (bclink@rabbitohs.com.au) | Manages access and the hosting account; handles rollbacks. |

---

## The rules (worth repeating)

✅ **Do**
- Describe changes clearly and check the preview before sharing it.
- Wait for a reviewer's approval before merging.
- Ask Claude if you're unsure — it's there to help.

🚫 **Don't**
- Don't put passwords, keys, or private information into the project.
- Don't publish made-up club facts (players, sponsors, dates, prices, quotes).
- Don't push changes straight to the live site (the system won't let you anyway — that's by design).
- Don't merge your own change without a review.

---

## Handy phrases for Claude Code

| You want to… | Say this |
|---|---|
| Start a change | *"Start a new branch for this change."* |
| See it | *"Show me a preview I can open in my browser."* |
| Check it's safe | *"Run the build and lint and fix any errors."* |
| Propose it | *"Commit this and open a pull request explaining what I changed."* |
| Fix failing checks | *"The checks on the PR are failing — please fix them."* |
| Undo something live | *"Revert pull request #X to roll back that change."* |
