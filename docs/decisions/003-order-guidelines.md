# Title

**Date:** 2025-01-17

**Issue:** [#381](https://github.com/stormwarning/stylelint-config-recess-order/issues/381)

## Context

New CSS properties are arriving thick and fast, and it's getting difficult to 
determine which group a given property should belong in. Some of the existing 
groups like "Typography" and "Interactions" are also getting a bit unwieldy.

This document will describe the ordering strategy to be used.

## Decision

The initial order was based on the Recess setup; new properties should be added
close to any existing properties which are related.

Properties should be grouped by their associated [specification module]. If a
property is part of multiple modules, keep the property in a position that
results in the least amount of “shift” from the previous configuration.

For properties relating to direction or the affected box edge, if there are 
only two possible directions the order should be horizontal then vertical. If 
there are four directions, the order should follow the TRBL pattern from the 
common shorthand order. See [logical direction order] for examples.

The order of longhand properties should match the order of the same values in
the shorthand version according to the spec.

If properties can be ordered “naturally” they should be. For example: 

- `min` → `max`
- `start` → `end`
- `before` → `after`, etc.

Vendor-prefixed properties should not be included. The exception being prefixed
properties which are widely implemented but not part of an official spec. For
example `-webkit-box-orient` (recognised by all browsers; used for multi-line
truncation), or `-moz-osx-font-smoothing`.

## Consequences

While the order of individual properties is (generally) maintained, some groups
have been re-ordered or split up; in particular:

- `text-overflow-*` (now grouped with overflow)
- `text-decoration-*` (now grouped after basic text properties)
- `list-style-*` (now grouped after text properties)
- `outline-*` (now grouped before backgrounds and borders)
- `transition-*` (now grouped after transform)

With the new ordering guidelines in place, this will (hopefully) be the last
breaking change to the ordering for this package (major version updates may
still occur due to version compatibility changes).

[specification module]: https://www.w3.org/Style/CSS/current-work
[logical direction order]: https://github.com/stormwarning/stylelint-config-recess-order/blob/main/docs/decisions/002-logical-direction-order.md
