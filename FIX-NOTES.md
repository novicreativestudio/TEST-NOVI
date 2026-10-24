# NOVI full-width ribbon fix v5

Issue: the pink ribbon was nested in `.familiar-intro` and `.familiar-inner`, which limited it to the editorial width.

Fix: moved only the pink ribbon to a direct child of `#calm-build`. CSS gives it viewport width while `.familiar-inner` keeps the original constrained, centered text/cards. No imagery was added.

Review in Chrome at 390px and desktop width. Other page components have not been redesigned.
