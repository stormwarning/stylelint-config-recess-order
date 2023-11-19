---
'stylelint-config-recess-order': minor
---

Add Masking properties

-   [`mask-border`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border) and related longhand properties
-   [`mask`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask) and related longhand properties

`mask` was previously included within some SVG-specific properties — it’s been moved above those and below border & outline properties.

`mask-border` properties are sorted above `mask` to highlight the fact that `mask` will reset `mask-border` to its initial value ([as per W3C spec](https://drafts.fxtf.org/css-masking/#the-mask)). I’m not familiar with this properties; if this order is problematic in practice, please file an issue!
