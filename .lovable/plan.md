# Fix: 404 "This page doesn't exist" on page load / refresh (Vercel deployment)

## What's happening
The screenshot shows Vercel's 404 page (`404 NOT_FOUND`, `lhr1::knljd-...`). The site is a single-page app (React Router), so refreshing or opening a deep link (e.g. `abledigital.site/projects`) makes Vercel look for a physical file at that path — there is none — and it serves the 404 page instead of the app. The app itself is fine; only the deployment's fallback rule is missing.

## The fix (one file)
Add `vercel.json` at the project root with a single SPA rewrite:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Vercel checks real files first (images, JS, screenshots), then rewrites everything else to `index.html`, so React Router serves the correct page on any URL, refresh, or deep link — across all pages and routes.

## Verification
- Run the build and confirm it passes.
- Confirm `vercel.json` ships with the deployment output.
- Re-check the preview locally for regressions (routes still open, images still load).

## Note for going live
The fix takes effect on abledigital.site after the updated code is redeployed to Vercel (push/pull the new version, then redeploy). On Lovable's own hosting this problem doesn't exist — SPA fallback is automatic — so nothing changes there.
