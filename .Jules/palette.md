# Palette's Journal - KibaOS

## 2026-04-29 - Standardized Interactive Feedback
**Learning:** Adding tactile feedback (scaling on click) and unified focus indicators significantly improves the perceived "polish" of a static site. However, color choice for focus rings must respect both the existing design system (CSS variables) and WCAG AA contrast requirements (3:1 for UI components). Using a brand-aligned purple (#bd93f9) failed contrast on white backgrounds, whereas the existing `var(--blue)` provides sufficient contrast and maintains design consistency.

**Action:** Always verify contrast ratios for new focus styles. Use `transform: scale(0.97)` for active states on interactive elements to provide tactile feedback. Ensure `<a>` tags in navigation use `display: inline-block` to support these transforms. Use the site's existing transition timing (e.g., 0.15s) to maintain a cohesive feel.
