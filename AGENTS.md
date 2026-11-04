# Project Notes

## Architecture
- Scroll management is centralized in `src/components/ScrollManager.tsx`, mounted inside `<BrowserRouter>` in `src/App.tsx`. It scrolls new page navigations (PUSH/REPLACE) to the top, scrolls hash URLs (`/#section-id`) to the target section respecting `scroll-margin-top: 88px` (index.css, below the fixed navbar), and leaves Back/Forward (POP) to the browser's own scroll restoration. Do not add per-button scroll handlers or a competing ScrollToTop effect.
- Portfolio website screenshots are bundled image imports in `src/assets/portfolio/` (not `/__l5e` CDN URLs) so they load on any deployment, including self-hosted builds like abledigital.site.
