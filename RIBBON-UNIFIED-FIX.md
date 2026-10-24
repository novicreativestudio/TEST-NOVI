# NOVI ribbon unification v8

- All six ribbons now sit at full-width level: direct children of main or corresponding section.
- Removed competing v4-v7 ribbon CSS and implemented one shared ribbon rule.
- One identical SVG shape in all six, with unique gradient IDs per instance.
- Desktop dimensions: height max(120px,11.25vw); mobile: clamp(116px,30vw,148px).
- At desktop zoom-out, height and lettering grow with CSS viewport width rather than hitting a maximum cap.
- Editorial content remains max-width 1260px while ribbon remains full width.
- Actual browser/physical-device appearance still requires verification.
