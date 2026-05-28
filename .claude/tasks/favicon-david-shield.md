# Task: Favicon — David Shield

## Problem
The project has no branded favicon. Browsers, OS docks, and PWA installers all need properly sized icon assets. Without them, the tab shows a generic browser icon and the project feels unfinished.

## Goal
Produce a complete, cross-platform favicon set using a Star of David (Magen David / Shield of David) symbol and wire it into the Next.js app so every platform gets the right asset.

## Requirements
- Star of David (hexagram) as the primary symbol — clean, geometric, centred
- Sizes to cover: 16×16, 32×32, 48×48 (ICO bundle), 180×180 (Apple Touch Icon), 192×192 and 512×512 (PWA / Android), 180×180 or SVG (Safari pinned tab)
- SVG source for the symbol — scalable and editable
- ICO file that bundles 16, 32, 48 px sizes for legacy browsers
- PNG exports at required sizes
- `<link>` and `<meta>` tags wired into the Next.js root layout
- Web App Manifest (`manifest.json` or `manifest.webmanifest`) with icons array for PWA support
- Accessible: `title` in SVG, meaningful `alt`/`aria-label` where applicable

## Constraints
- Next.js project — assets go in `/public`, metadata in `src/app/layout.tsx`
- No external icon libraries or paid services — generate assets programmatically or via SVG/Canvas
- Must match the project's visual identity: developer-focused, clean, modern (see landing-page task for colour palette reference)
- CSS Modules for any component-level styling; no Tailwind

## Out of scope
- Animated or interactive favicon
- Dark/light mode adaptive favicon (single variant is fine)
- Full PWA offline support (manifest only, no service worker)
