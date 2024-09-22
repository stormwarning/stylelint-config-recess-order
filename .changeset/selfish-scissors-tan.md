---
'stylelint-config-recess-order': patch
---

Fix order of `flex-*` properties
The `flex` shorthand is followed by `-grow`, `-shrink`, and `-basis`, following the order of the shorthand property. The `flex-flow` shorthand now correctly preceeds the `-direction` and `-wrap` properties.
