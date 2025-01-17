---
'stylelint-config-recess-order': patch
---

Sort out-of-order logical properties (Fixes #384)

`overflow-inline` now comes before `overflow-block`.
Scroll padding & margin block properties now come before the inline properties.
