# Farhaan Solanki — Portfolio

A single-page developer portfolio. No build step required — it's plain HTML, CSS, and JS.

## Files

- `index.html` — page content and structure
- `styles.css` — all styling (dark, dashboard-inspired theme)
- `script.js` — mobile nav toggle + scroll-spy for the sidebar

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/FarhaanSolanki24/portfolio.git
git push -u origin main
```

## Host it (pick one — no build step needed for any of these)

**GitHub Pages** (free, easiest since it's already on GitHub)
1. Repo → Settings → Pages
2. Source: `Deploy from a branch` → Branch: `main` → `/ (root)`
3. Save. Your site goes live at `https://farhaansolanki24.github.io/<repo-name>/`

**Vercel**
1. [vercel.com](https://vercel.com) → New Project → import the GitHub repo
2. Framework preset: "Other" (no build command needed) → Deploy

**Netlify**
1. [netlify.com](https://netlify.com) → Add new site → Import from GitHub
2. Build command: leave blank · Publish directory: `/` → Deploy

## Updating content later

Everything is in `index.html` — experience bullets, project cards, skills, and contact links are plain text/markup, no data files or build tooling to touch. Edit, commit, push — Vercel/Netlify auto-redeploy on push; GitHub Pages updates within a minute or two.

## Swapping the custom domain (optional)

If you later point `farhaansolanki.dev` at this instead of your current portfolio, update it in whichever host's dashboard (Vercel/Netlify have a "Domains" tab; GitHub Pages uses a `CNAME` file in the repo root).
