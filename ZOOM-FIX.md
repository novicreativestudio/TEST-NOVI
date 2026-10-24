# NOVI Ribbon Zoom Correction

At 100% the full-width SVG ribbons displayed correctly. At 25% the 180px height
and 28px typography caps compressed them to ~45 and ~7 device-screen pixels.

The new breakpoint at 2200 CSS px expands ribbon height and heading/stars
proportionally to the CSS viewport width, preserving their proportions during
heavy Chrome zoom-out. Standard desktop and mobile rules are unchanged.

Test at 100%, 67%, 50%, 33%, 25%, and on a phone. This adjustment is not a
substitute for actual Chrome visual QA.
