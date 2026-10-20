# Add Website Portfolio to the Work page (lean build)

Goal: add your 15 real websites as a new portfolio grid, kept small to fit roughly 5 credits. Nothing else on the site changes.

## What gets built
- New section at the top of the existing Work page (`/projects`): "Website Portfolio", above the current projects and case studies (which stay as they are).
- Category filter chips: All Projects, plus only the categories that exist (Solar, Plumbing & Heating, HVAC, Remodeling, Construction, Real Estate, Events, Other).
- Each card, in this order: homepage screenshot (clickable, opens site in new tab), title, short description (10-20 words), "View Website" link + URL at the bottom. A small status tag ("Needs Verification" by default).
- 3 columns desktop, 2 tablet, 1 mobile. Same black/gold look.

## Screenshots
- Captured once from the real live websites (no generated or stock images), saved as optimised images.
- Your 6 uploaded photos and the two saved pages are used only as reference if a site fails to load.
- Any site that cannot be captured gets a clearly labelled "Screenshot coming soon" placeholder, and I will list which ones.

## Descriptions and status
- Uses your supplied descriptions as-is (no deep per-site research, to stay within budget). No claims about results or who built what.
- All projects marked "Needs Verification" until you confirm which are completed client work, so you can change labels later in one data file.

## Out of scope (to save credits)
- No per-site content checking, no new page, no menu changes, no homepage edits.

## Technical details
- New `src/data/portfolio.ts` (title, url, category, description, status, image) and `src/components/sections/WebsitePortfolio.tsx`, inserted into `src/pages/Projects.tsx`.
- One Playwright script captures 1280x800 homepage shots, converted to compressed JPG and uploaded as asset pointers; lazy-loaded with alt text.
