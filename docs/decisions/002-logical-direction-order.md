# Order of logical direction properties

**Date:** 2025-01-16

**Issue:** [#384](https://github.com/stormwarning/stylelint-config-recess-order/issues/384)

## Context

Logical properties are not ordered consistently. In some cases `*-block` comes
before `*-inline` while in others it is the opposite. There should be a rubric
to help determine what the order should be when adding new properties.

While it would be easy to just make a blanket call for `*-block` to always
precede `*-inline`, but this doesn't always match the order used when referring
to some pairs of properties.

## Decision

If there are only two possible directions the order should be `*-inline` then
`*-block`.

Examples of two-direction ordered pairs:

- `*-rows` > `*-columns`
- `*-x` > `*-y`

For other properties, the order should be `*-block` then `*-inline`.

## Consequences

This is actually how things are ordered currently. The only changes to the
current properties would be as follows:

```diff
+ overflow-inline
  overflow-block
- overflow-inline
  overflow-x
  overflow-y
```

```diff
+ scroll-padding-block-*
  scroll-padding-inline-*
- scroll-padding-block-*
+ scroll-margin-block-*
  scroll-margin-inline-*
- scroll-margin-block-*
```
