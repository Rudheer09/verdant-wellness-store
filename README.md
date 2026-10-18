# Verdant — Wellness & Skincare Storefront

A responsive React + Vite storefront concept for the ShadowFox UI/UX Intermediate task. This project includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages.

## Deploy directly with GitHub Actions

1. Create a GitHub repository named **`verdant-wellness-store`**.
2. Upload the **contents of this folder** to the repository root (so `package.json`, `index.html`, `vite.config.js`, `src/`, and `.github/` are at the root).
3. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Ensure the default branch is named **`main`**. The workflow runs automatically on each push to `main`; you can also start it from **Actions → Deploy Verdant to GitHub Pages → Run workflow**.
5. When the workflow succeeds, open **Settings → Pages** to find your published site.

The expected URL is `https://YOUR-GITHUB-USERNAME.github.io/verdant-wellness-store/`.

**Important:** The Vite base path in `vite.config.js` is set to `/verdant-wellness-store/`. If you name your repository something else, change the `base` value to `'/YOUR-REPOSITORY-NAME/'` before deploying. If your repository uses a branch other than `main`, update `.github/workflows/deploy.yml` accordingly.

## Run locally

Requires Node.js 22 or a compatible current LTS release.

```bash
npm install
npm run dev
```

To test a production build locally:

```bash
npm run build
npm run preview
```

## Included

- Responsive homepage and brand story
- Product listing with category filters, search, and price sorting
- Product detail views
- Shopping cart drawer with quantity controls and subtotal
- Demo checkout flow and newsletter UI
- GitHub Actions workflow for GitHub Pages deployment

This is a front-end concept: checkout is a demo and does not process payments. Product content and imagery are illustrative; images are loaded from remote Unsplash URLs.
