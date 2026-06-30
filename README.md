# NOVI Creative Studio — Production Static Site

## Production entry
Use `index.html` for the live site.

## Included production files
- `index.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `assets/css/styles.css`
- `assets/js/script.js`
- `assets/images/`
- `assets/icons/`
- `assets/social/`

## Important SEO note
The canonical URL, Open Graph URL, and sitemap currently use:

`https://novicreativestudio.ca/`

Before final launch, replace this with the exact live domain if different.

## SEO / AEO implemented
- Semantic title and meta description
- Canonical URL
- Open Graph metadata
- Twitter Card metadata
- Organization / WebSite / ProfessionalService JSON-LD
- Descriptive image alt text
- Production favicon set
- Web app manifest
- Robots and sitemap
- Branded 404 page

## Visual update
The gold light / leaf motif was sharpened and kept as an overlay layer:
`assets/images/novi-creative-studio-gold-leaf-light-motif.png`

The headline remains live HTML text for SEO.


v20 refinement:
- Kept the sprout silhouette but toned it down to a muted champagne gold more aligned with the NOVI palette.
- Reduced the glare / glitter intensity of the gold motif overlay.
- Lowered the desktop hero height to reduce the navy area.
- Adjusted the gold wave path to create a stronger mountain-like peak under the sprout.


v21 refinement:
- Replaced the light sprout motif with a version matched more closely to the user-approved reference.
- Cropped the desktop hero image itself from the top to shorten the navy area above the woman.
- Thickened the main gold curve and slightly strengthened the dashed gold guide.


v23 hero refinement:
- Based on the v21 build.
- Lowered the gold sprout motif so it sits closer to the crest of the wave.
- Thickened the main gold line and the dashed gold guide.
- Re-shaped the hero wave to have a more pronounced mountain-like crest.


v24 hero motif refinement:
- Lowered the gold sprout motif further so it visually grows from the second gold light line above the green wave.
- Softened the motif glow slightly so it feels more integrated with the hero artwork.
- Kept the v23 thicker gold line and mountain-like wave shape.


v25 final visual refinement:
- Lowered the gold sprout motif substantially so it visually emerges from the upper gold line above the green wave instead of floating above it.
- Softened glow and saturation for a more premium, integrated look.
- Nudged the hero copy upward to keep the overall desktop composition balanced.


v25b tweak:
- Based on v25 exactly, with only one design change: the hero sprout motif is lowered slightly more so it sits closer to the gold line.

v25c typography / services refinement:
- Based on v25b.
- Changed the gold 'purpose.' word from glowing gold to a cleaner matte/satin gold treatment.
- Moved the 'Our Services' intro block upward for better visual balance while keeping cards and waves stable.

v25d refinement:
- Brightened the matte/satin gold treatment for 'purpose.' while keeping the non-blurry look.
- Improved Our Services readability with stronger gold, slightly larger type, and clearer glow.
- Moved the service cards upward to match the raised Our Services text block.

v25e refinement:
- Made the 'purpose.' gold more dimensional and visible with a satin / foil-like gold gradient and crisp shadow.
- Improved top ribbon text contrast while keeping the same size.
- Added subtle left/right sparkle animation to the pink ribbon.
- Moved service cards another 1-2cm upward and adjusted spacing below.

v25f refinement:
- Moved the four service cards approximately 2cm higher.
- Added visible blinking sparkle stars directly to the left and right of the pink ribbon text.
- Disabled the earlier far-left/far-right ribbon sparkle placement because it was too subtle / not visible near the text.

v25g refinement:
- Based on v25f.
- Moved the four service cards approximately 1.2cm higher.
- Added a small amount of bottom breathing room so the section remains balanced.

v25i refinement:
- Corrected service card placement so cards sit just below the Our Services intro instead of overlapping it.
- Made 'purpose.' sharper, brighter, and more dimensional with a crisp foil-like gold treatment and subtle stroke.
- Added visible sparkle stars directly beside the pink ribbon text.

v25j refinement:
- Lowered the four service cards slightly from v25i to reduce crowding and improve breathing room.
- Updated the 'purpose.' word to a more elegant italic serif, foil-like gold treatment closer to the screenshot style.

v26 integrated stable FV:
- Based on v25j.
- Rebuilt the hero behavior as a stable proportional stage using aspect-ratio, so the woman image, headline, sprout, gold line, and wave scale together more like the Safe Garden reference.
- Removed the fixed max-height compression that caused the woman image to drift/crop strangely during browser zoom-out.
- Kept the approved v25j visual direction, service card balance, purpose typography, SEO/AEO files, favicon set, 404, robots, sitemap, and manifest.
- Added the subtle handwritten underline under 'purpose.' without using the unstable v25k crop approach.

v29 desktop zoom stability:
- Based on v26 integrated stable FV.
- Gated all max-width responsive breakpoints with pointer:coarse so desktop browser zoom does not trigger mobile/tablet layout changes.
- Real touch mobile/tablet devices still receive the responsive layout.
- Added fine-pointer desktop rules to preserve the approved FV composition for the woman image, sprout, heading, and menu during Chrome zoom changes.

v30 mobile correction:
- Based on v29.
- Added final iPhone/mobile overrides so the pink ribbon, header, hero text, woman image, sprout, wave, services intro, and service cards have a dedicated vertical mobile layout.
- Desktop zoom-stability rules remain for pointer:fine devices.

v31 mobile redesign:
- Added final hard mobile overrides to fix the iPhone layout.
- The mobile hero is now compact instead of extremely tall.
- Hero headline, woman image, sprout, wave, Our Services, intro, and cards have dedicated mobile coordinates.
- Service cards switch to a compact 2-column mobile poster layout similar to the supplied reference.


v32 mobile hero tuning:
- Reduced the amount of empty navy area at the top of the mobile hero.
- Moved the heading down so it sits closer to the woman's shoulder level.
- Raised the gold sprout motif and the wave line on mobile.

v33 final mobile refinement:
- Made the mobile hero shorter by trimming the upper/lower visual rhythm.
- Enlarged the woman image on mobile using mobile-only crop/scale rules.
- Lowered the headline so it starts around the woman's shoulder/upper-body height.
- Raised the gold sprout motif and wave line.
- Restored full mobile logo lockup: NOVI + CREATIVE STUDIO.


v34 updates:
- Balanced the mobile logo lockup (mark, NOVI, and CREATIVE STUDIO).
- Shortened the mobile hero with stronger top/bottom crop.
- Kept the woman visually larger while trimming hero height.
- Pulled the sprout motif and green/gold wave upward for tighter mobile composition.

v35e notes:
- Mobile logo subtext re-centered under NOVI.
- Mobile hero shortened by trimming lower navy area while keeping the upper crop stable.
- Cache-busting query strings added to CSS, JS, favicon, and hero/image assets.


v35f corrections:
- Shortened the mobile hero again by trimming the lower navy area instead of increasing total FV height.
- Re-centered CREATIVE STUDIO visually under NOVI using a grid-based mobile logo lockup.
- Refreshed cache-busting version strings to v35f1.

v35g final correction:
- CREATIVE STUDIO is visually centered under NOVI with a fixed mobile logo lockup width.
- Upper navy crop is kept stable.
- Lower navy / overall mobile FV height is shortened again.
- Cache-busting strings updated to v35g1.


v35h update:
- Mobile FV hero cropped shorter vertically.
- Woman enlarged by stronger mobile image scale and adjusted object-position.
- Hero heading returned to 2 lines on mobile.
- Cache version updated to v35h1.


CSS cleanup:
- Removed accumulated historical mobile/FV override blocks from v30 through v35h8.
- Kept the stable base CSS, navigation/menu CSS, 404 CSS, desktop stability rules, and the latest v35h9 mobile FV correction.
- Updated cache-busting query strings to clean1.


Favicon update:
- Rebuilt favicon.ico as a multi-size ICO containing 16x16, 32x32, and 48x48.
- Added favicon-48x48.png as a reference/export.
- Kept existing favicon PNG and apple/android icons unchanged.


WebP update:
- Converted FV/hero and gold motif production images to WebP.
- Updated index.html and 404.html to load WebP images directly.
- Removed duplicate PNG versions of the same FV/hero/motif images from the production ZIP.
- Kept logo PNG, favicon PNG/ICO, apple-touch-icon, android icons, and OG image unchanged.
- Cache-busting query strings updated to webp1.

Mobile fix webp2:
- Added final mobile overflow protection to remove right-side blank/horizontal scroll.
- Kept WebP image loading.
- Trimmed mobile FV height and object positioning to cut the lower photo area closer to the gold line.
- Restored service cards to 2 columns on mobile.
- Updated cache-busting query strings to webp2.

Mobile polish webp4:
- Restored smaller gold drop size and kept it visible.
- Restored CREATIVE STUDIO under NOVI on mobile.
- Moved decorative gold sparkles away from the FV text.
- Restored and emphasized the gold wave line.
- Aligned the sprout motif with the crest of the gold wave.
- Adjusted green/pink waves to remain visible as waves.

Mobile polish webp5:
- Removed obsolete stacked mobile override blocks from v35h9/webp2/webp3/webp4.
- Added one clean final mobile polish block.
- Reduced gold drop size while keeping it visible.
- Restored CREATIVE STUDIO under NOVI on mobile.
- Enlarged FV copy and kept it two lines.
- Moved sparkle flakes away from the text; right sparkle beside purpose.
- Raised gold motif/wave, green wave, and pink wave together.
- Positioned sprout on the crest of the gold wave while hiding the extra stem.
- Raised Our Services section balance.
- Cache-busting query strings updated to webp5.

webp7 layer fix:
- Removed old webp5/webp6 override blocks and replaced them with one clean final block.
- Fixed FV layering: hero decoration now sits above the Services green/pink layers.
- Updated the hero green/gold wave SVG path so the green wave hides the extra gold stem and the sprout sits on the crest.
- Lifted Our Services and all four service cards together.
- Updated cache-busting query strings to webp7.


webp24 previous desktop design + light images:
- Base restored to the previous design that matched the user's reference.
- Layout/CSS was not redesigned.
- Large visual image assets were recompressed/converted to lighter WebP versions.
- Cache-busting query strings updated to webp24.

Image optimization summary:
- novi-creative-studio-logo-mark.png: 672,037 -> 672,037 bytes (kept)
- novi-creative-studio-hero-desktop.webp: 50,222 -> 45,806 bytes (recompressed webp)
- novi-creative-studio-hero-mobile-optimized.webp: 29,640 -> 27,392 bytes (recompressed webp)
- novi-creative-studio-gold-leaf-light-motif.webp: 56,770 -> 55,334 bytes (recompressed webp)

webp25 mobile fix:
- Base remains webp24.
- Fixed mobile menu dropdown by using width-based CSS rules, not pointer/coarse only.
- Menu now opens directly under the header instead of floating over the Services copy.
- Moved the gold sprout motif further left on mobile.
- Lowered mobile service cards so they do not cover the intro text.
- Cache-busting query strings updated to webp25.

webp26 mobile balance:
- Base remains webp24/previous design with webp25 menu fix.
- Replaced the webp25 final override with a cleaner webp26 block.
- Kept mobile menu fixed.
- Moved the gold sprout motif lower and further left on mobile.
- Raised mobile service cards so the gap below the intro is smaller.
- Desktop visual design is intentionally preserved.
- Cache-busting query strings updated to webp26.

webp28 mobile refinement:
- Base remains previous design.
- Kept mobile menu fix.
- Made gold sprout motif visible by bringing it above the green/gold boundary layer.
- Moved sprout motif left and slightly down as a bridge toward Our Services.
- Raised mobile service cards moderately.
- Desktop visual design is intentionally preserved.
- Cache-busting query strings updated to webp28.

webp31 mobile card-gap fix:
- Based on webp30.
- Kept: mobile no-sprout design, pink Our Services label, sparkle treatment, menu fix, desktop layout.
- Adjusted only mobile vertical spacing: raised service cards from the too-low webp30 position while preserving space below the intro.
- Cache-busting updated to webp31.

webp32 production clean:
- Cleaned and integrated mobile CSS instead of stacking webp7-webp31 override blocks.
- Removed historical mobile/sprout/card override blocks from styles.css.
- Removed unused mobile spark-four / spark-five HTML spans.
- Kept approved desktop design.
- Kept mobile menu fix.
- Final mobile: no separate sprout motif, pink Our Services label, top/bottom gold line + sparkle sets, approved card spacing.
- Cache-busting updated to webp32.

webp33 production clean line fix:
- Based on webp32 production clean.
- Fixed the top Our Services gold line set: removed the thick rectangular background blocks and replaced them with thin pseudo-element lines around the central sparkle.
- No layout, menu, card, or desktop changes.
- Cache-busting updated to webp33.

webp35 production clean integrated drop:
- Based on webp33 production clean.
- Gold drop fix is integrated into the existing ribbon/header/drop CSS rules.
- No extra final webp34 override block.
- No changes to hero, Our Services, cards, menu, or desktop layout.
- Cache-busting updated to webp35.


## v82 mobile performance pass
- Replaced visible 657KB logo PNG usage with lightweight WebP logo.
- Rebuilt the image logo PNG as a small fallback/source for schema and 404 usage.
- Added responsive Hero image preload hints and explicit eager/high-priority Hero image attributes.
- Removed unused large PNG source exports from the deployment folder.
- Added a mobile-only performance guard that keeps the design direction but reduces expensive filters/shadows on small screens.
- Updated cache-busting query strings from webp81 to webp82.
