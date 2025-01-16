# Order of logical direction properties

**Date:** 2024-09-01

**Issue:** [#299](https://github.com/stormwarning/stylelint-config-recess-order/issues/299)

## Context

Logical properties are starting to roll out to browsers and seeing more use.
There is some question about whether logical properties should come *after*
physical properties, allowing the browser to fall back to something if logical
properties are not supported.

## Decision

Logical properties are considered less "specific" and are ordered before
physical properties. This allows physical properties to override the logical
properties if needed.

## Consequences

Modern, evergreen browsers all support logical properties, so the physical
properties aren't needed as a fallback. If support for older browsers is
required when using logical properties, move the logical or physical properties
to a separate stylesheet or selector, or disable this rule for those cases.
