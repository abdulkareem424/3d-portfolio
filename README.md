# Abdulkareem Alhallak · 3D Portfolio

An independent Arabic / English portfolio for a full stack developer. Dark graphite surfaces, warm gold accents, selected project work, and an interactive metal sculpture.

## Ready-to-publish website

The delivery archive includes a `website/` folder with the complete static export. Upload its contents to the root of your HTTPS domain or subdomain. Keep the `assets/` and `projects/` folders alongside `index.html`.

For a local preview of the exported folder:

```bash
cd website
python3 -m http.server 8080
```

Then open `http://localhost:8080`. Use an HTTP server for the JavaScript modules.

## Source development

Requires Node.js 22.13+ and npm. The provided build wrapper uses Bash and GNU timeout; on other systems invoke `npx vinext build` directly.

```bash
npm ci
npm run dev
```

Production export:

```bash
npm run build
```

Static output is written to `dist/client/`. Cloudflare Workers code in the starter is not required to serve this static export.

Application type check:

```bash
npx tsc --project tsconfig.app.json
```

## Edit the content

- `app/content.ts`: both languages, project descriptions, status, technology lists, and contact links.
- `app/portfolio.tsx`: the page sections, navigation, language selection, and project detail panels.
- `app/globals.css`: theme, typography, mobile layouts, and RTL styles.
- `app/scene.tsx`: progressive loading and 3D controls.
- `app/scene-renderer.ts`: the Three.js sculpture and its rendering lifecycle.
- `public/abdulkareem-alhallak-cv.pdf`: the existing résumé.
- `public/projects/`: existing project logos.

## Loading and accessibility

The page is pre-rendered so the content arrives in the HTML. The Three.js renderer is loaded through a dynamic import after the scene approaches the viewport and the browser has idle time. Project images use native lazy loading and fixed dimensions. The scene has an interactive SVG fallback when WebGL is unavailable, a static loading fallback, a load deadline, keyboard rotation, and a pause control. The SVG renderer is imported only when needed and uses lower geometry detail and a lower frame rate.

Rendering pauses outside the viewport and in hidden tabs. Animation respects reduced-motion preferences; devices reporting data-saving mode or a 2G connection receive an explicit 3D activation button. Rendering resolution and frame rate are capped on smaller screens. GPU resources and listeners are released when the component unmounts.

Arabic content, navigation, and detail panels use RTL. Language selection is saved as a device preference when browser storage is available. Modal panels support keyboard focus and Escape. Contact links open email or the selected service; no message is sent by the website itself.

## Project evidence

Project descriptions follow the corrected portfolio audit dated 2026-09-06 in `abdulkareem424/portfolio` PR #3 (revision `2898c028870195217f8a75770c2e48a30a508ecd`).

Tabeley and ALC are described as MVPs. The clinic is described as a prototype, with persistence and production deployment identified as later stages. Private source repositories are labeled as private. Public source links are included for Alhallak Prices and WISC; the additional university link points to its published front end. The ALC registration application is not linked to the unrelated institute homepage.

## Verification

- Production static export completed successfully.
- Application TypeScript check completed without errors.
- Exported HTML contains the main content and resolves its local scripts, styles, images, favicon, and résumé.
- Internal anchor destinations were checked for existence and uniqueness.
- All project images have lazy loading and stable dimensions.
- The 3D renderer is a separate deferred bundle and is absent from initial module preload links.

Visual and interaction QA was completed on 2026-09-08 at viewport widths of 320, 390, 768, and 1280 pixels in both languages. Text resizing to 200% was checked at 320 pixels. See `VISUAL-QA.md` for the results, fixes, and test limits. The test browser disables WebGL, so the interactive software renderer was exercised; the native GPU rendering path still needs a hardware-enabled browser check. External project URLs come from the existing source audit and were not revalidated during this layout review.
