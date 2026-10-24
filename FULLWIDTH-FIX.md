# NOVI — Site-wide width consistency

The previous revision fixed only the pink ribbon. This update applies to **all 21 top-level HTML sections**, including every section from `#calm-build` to `#contact`.

- Top-level sections and their background layers take the full available viewport width.
- Editorial content containers stay centered with their own maximum widths (global cap 1260px); section backgrounds do not inherit those limits.
- Direct full-width SVG ribbon children render at section width, without `100vw` offsets inside padded parents.
- Existing layout-specific card widths, artwork and text styling are preserved.
- Responsive 767px-and-below maximum widths are handled separately.

CSS changes are appended to `assets/css/site-system.css` under `NOVI v7 — SITE-WIDE SECTION WIDTH CONTRACT`. The original HTML content and site images remain intact.

Static QA: all top-level sections have the shared `novi-segment` class; local asset references exist; CSS parses without top-level syntax errors. Visual browser verification is **not complete**, because the container browser blocks local file navigation in this environment. Please review the desktop and mobile previews before publishing.
