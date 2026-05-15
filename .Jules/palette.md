## 2025-03-08 - [Improving Color Contrast and Keyboard Accessibility]
**Learning:** Many static sites use default grey tones like #888 or #aaa which fail WCAG AA contrast standards for small text on light backgrounds. Swapping these to #666 significantly improves readability without compromising the "muted" design aesthetic.
**Action:** Always check contrast ratios for secondary text and provide a modern CSS-only skip link implementation for better keyboard navigation.

## 2025-03-08 - [Sticky Headers and Tactile Feedback]
**Learning:** Sticky headers often obscure anchor link destinations. Using `scroll-padding-top` on the `html` element elegantly solves this without brittle margin hacks. Additionally, adding a subtle `scale(0.97)` on `:active` states provides essential tactile feedback for non-button link elements (like nav links).
**Action:** Implement `scroll-padding-top` whenever using sticky navigation and ensure all interactive links have an active-state transform for better responsiveness.

## 2026-05-01 - [Surgical Accessibility and Security in Legacy/Duplicated Files]
**Learning:** Repositories with significant technical debt (like 800+ lines of duplicated code in a single file) require surgical updates rather than mass refactoring to stay within PR line limits. Adding `aria-label` to iconic buttons and `rel="noopener"` to external links are high-impact, low-risk improvements that can be safely applied across such segments.
**Action:** Prioritize surgical `aria-label` and `target="_blank"` updates in complex legacy files. Ensure links are `display: inline-block` or similar before applying `transform` animations.

## 2026-05-02 - [Accessible Branding for Skip Links]
**Learning:** Skip links are critical for keyboard navigation but are often styled as afterthoughts. Using a brand accent color (like Dracula Purple #bd93f9) with bold, high-contrast text (#111) makes the link feel like an intentional part of the UI rather than a "hidden" utility. A prominent internal focus outline (`outline-offset: -3px`) ensures visibility even on complex headers.
**Action:** Always theme skip links with high-contrast brand colors and use inset outlines to ensure visibility against varied header backgrounds.

## 2026-05-15 - [Interactive Color Swatches and Visual Feedback]
**Learning:** Turning static design tokens (like theme swatches) into interactive copy-to-clipboard buttons provides immediate utility for developers and enthusiasts. Using a CSS pseudo-element (`::after`) with a transition for the "Copied!" feedback avoids layout shifts and provides a smooth, tactile experience.
**Action:** Implement interactive color swatches with CSS-only feedback overlays for brand/theme-heavy sites to increase engagement.
