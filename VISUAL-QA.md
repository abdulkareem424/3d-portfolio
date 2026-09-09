# Visual and interaction QA — 2026-09-08

The portfolio was reviewed in a live browser using its supervised development preview. Screenshots and DOM layout measurements were inspected for the hero, project cards, project detail sheet, navigation, about, expertise, and contact areas.

## Responsive checks

| Frame width | Document width after scrollbar | Arabic overflow | English overflow |
| ----------- | ------------------------------ | --------------- | ---------------- |
| 320 px      | 305 px                         | None            | None             |
| 390 px      | 375 px                         | None            | None             |
| 768 px      | 753 px                         | None            | None             |
| 1280 px     | 1265 px                        | None            | None             |

At 320 px, 200% root text resizing (32 px root font) also produced no horizontal page overflow in either language. These checks use browser iframe viewports, not physical mobile devices or browser UI zoom. A full desktop viewport was also visually reviewed.

## Fixes made

- Removed the conflicting direction override on Arabic project taglines.
- Replaced absolute positioning inside project visuals with a content-aware grid. Cards now grow with enlarged status and tagline text.
- Preserved the complete ALC logo with a small corner radius instead of a circular mask.
- Kept the decorative Alhallak mark within its card at enlarged text sizes.
- Allowed long headings to wrap and contact columns to shrink at narrow widths.
- Corrected the Arabic hero's logical margin direction, eliminating tablet horizontal overflow.
- Added a dynamically imported SVG renderer for the same 3D sculpture when WebGL is unavailable. The fallback has lower geometry detail, a lower frame rate, and transparent background blending.
- Increased the pause button to 44 × 44 px and added a visible keyboard focus outline to the new scene container.
- Added a copy fallback for local HTTP previews and corrected manual-copy feedback text in both languages.
- Made the mobile navigation panel vertically scrollable when text is enlarged.

## Interaction results

- Language switching and stored preference restoration worked.
- The mobile navigation opened, reached the Work section, and closed.
- The project sheet fit the 320 px viewport, scrolled vertically, and closed with Escape. Focus returned to its trigger during the review.
- All three project images loaded when their sections were approached. Their native lazy-loading attributes and fixed intrinsic dimensions remain in place.
- The software 3D renderer displayed the sculpture and responded to pointer dragging and arrow keys. Pausing held the rendered geometry stable.
- Copy email reported success after the local HTTP fallback was added.
- No application errors appeared in the collected console samples. Browser extension metadata errors were separate from the application.

## Build checks

The application TypeScript check and production static export passed. Local exported assets, internal anchors, image dimensions, and deferred 3D module loading were checked. The temporary QA page is excluded from the production export.

## Limits

The test browser disables WebGL. Native GPU reflections, device GPU performance, Safari/Firefox rendering, and physical touch behavior were not exercised. Reduced-motion and data-saving paths remain implemented but browser emulation of those preferences was not part of this visual pass. External project destinations and the existing CV content were not re-audited.

For repeating the viewport checks during development, temporarily copy `tests/viewport-harness.html` to `public/__qa.html`, open it through the development preview, and remove that copy before producing a release.
