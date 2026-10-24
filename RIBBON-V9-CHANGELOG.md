# NOVI v9 Ribbon full-width fix

All six SVG ribbons have the same geometry and viewport-based width (`100vw`) instead of their parent section width (`100%`). Their horizontal center aligns with the viewport using `left:50%` and `translateX(-50%)`, so different section padding will not result in different ribbon widths.

Text remains real selectable HTML text, not SVG path text or an image. Removed the earlier `pointer-events:none` from the label and enabled `user-select:text`.

This does not change the typography/content width rules for section body text or cards.

Browser live rendering tests could not be completed because local browser navigation is blocked in this environment.
