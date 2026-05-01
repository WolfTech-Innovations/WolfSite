## 2025-03-08 - [Improving Color Contrast and Keyboard Accessibility]
**Learning:** Many static sites use default grey tones like #888 or #aaa which fail WCAG AA contrast standards for small text on light backgrounds. Swapping these to #666 significantly improves readability without compromising the "muted" design aesthetic.
**Action:** Always check contrast ratios for secondary text and provide a modern CSS-only skip link implementation for better keyboard navigation.

## 2025-03-08 - [Sticky Headers and Tactile Feedback]
**Learning:** Sticky headers often obscure anchor link destinations. Using `scroll-padding-top` on the `html` element elegantly solves this without brittle margin hacks. Additionally, adding a subtle `scale(0.97)` on `:active` states provides essential tactile feedback for non-button link elements (like nav links).
**Action:** Implement `scroll-padding-top` whenever using sticky navigation and ensure all interactive links have an active-state transform for better responsiveness.

## 2026-05-01 - [Surgical Accessibility and Security in Legacy/Duplicated Files]
**Learning:** Repositories with significant technical debt (like 800+ lines of duplicated code in a single file) require surgical updates rather than mass refactoring to stay within PR line limits. Adding `aria-label` to iconic buttons and `rel="noopener"` to external links are high-impact, low-risk improvements that can be safely applied across such segments.
**Action:** Prioritize surgical `aria-label` and `target="_blank"` updates in complex legacy files. Ensure links are `display: inline-block` or similar before applying `transform` animations.
