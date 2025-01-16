# Change Log

## 5.1.1

### Patch Changes

- Fix order of `flex-*` properties ([#386](https://github.com/stormwarning/stylelint-config-recess-order/pull/386))
  The `flex` shorthand is followed by `-grow`, `-shrink`, and `-basis`, following the order of the shorthand property. The `flex-flow` shorthand now correctly preceeds the `-direction` and `-wrap` properties.

## 5.1.0

### Minor Changes

- Add properties related to multi-line truncation ([#373](https://github.com/stormwarning/stylelint-config-recess-order/pull/373))  
  Thanks [@toFrankie](https://github.com/toFrankie)!

  - [`-webkit-box-orient`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-orient)
  - [`-webkit-line-clamp`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)
  - `line-clamp`

- Add paged media properties ([#378](https://github.com/stormwarning/stylelint-config-recess-order/pull/378))

  - [`break-before`](https://developer.mozilla.org/en-US/docs/Web/CSS/break-before)
  - [`break-inside`](https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside)
  - [`break-after`](https://developer.mozilla.org/en-US/docs/Web/CSS/break-after)
  - [`orphans`](https://developer.mozilla.org/en-US/docs/Web/CSS/orphans)
  - [`widows`](https://developer.mozilla.org/en-US/docs/Web/CSS/widows)

- Add `-webkit-text-fill-` and `-stroke-*` properties ([#373](https://github.com/stormwarning/stylelint-config-recess-order/pull/373))  
  Thanks [@toFrankie](https://github.com/toFrankie)!

  - [`-webkit-text-fill-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color)
  - [`-webkit-text-stroke-*`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke)

- Add `scroll-*` and `scrollbar-*` properties ([#376](https://github.com/stormwarning/stylelint-config-recess-order/pull/376))

  - [`scroll-behavior`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
  - [`scroll-snap-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
  - [`scroll-snap-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)
  - [`scroll-snap-stop`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop)
  - [`scroll-padding-*`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding)
  - [`scroll-margin-*`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin)
  - [`scrollbar-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color)
  - [`scrollbar-gutter`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter)
  - [`scrollbar-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)

- Remove legacy `-ms-text-overflow` property ([#373](https://github.com/stormwarning/stylelint-config-recess-order/pull/373))  
  Thanks [@toFrankie](https://github.com/toFrankie)!

  This was useful for IE8; can be autoprefixed if required.

## 5.0.1

### Patch Changes

- Add `groups` to package.json exports ([#369](https://github.com/stormwarning/stylelint-config-recess-order/pull/369))  
  Thanks [@inulty-dfe](https://github.com/inulty-dfe)!

## 5.0.0

### Major Changes

- Upgrade to [Stylelint 16](https://stylelint.io/migration-guide/to-16/#removed-support-for-nodejs-less-than-18120) and migrate to ECMAScript modules (ESM). The minimum required Node.js version is 18.12.0. ([#352](https://github.com/stormwarning/stylelint-config-recess-order/pull/352))

## 4.6.0

### Minor Changes

- Add `perspective-*` properties ([#356](https://github.com/stormwarning/stylelint-config-recess-order/pull/356))

  - [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
  - [`perspective-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)

- Add `object-*` and `image-*` properties ([#357](https://github.com/stormwarning/stylelint-config-recess-order/pull/357))

  - [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
  - [`object-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)
  - [`image-orientation`](https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation)
  - [`image-rendering`](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering)
  - [`image-resolution`](https://developer.mozilla.org/en-US/docs/Web/CSS/image-resolution)

## 4.5.0

### Minor Changes

- Add `will-change` property to the Transitions & Animation group ([#353](https://github.com/stormwarning/stylelint-config-recess-order/pull/353))  
  Thanks [@connor-baer](https://github.com/connor-baer)!

## 4.4.0 — 2023-11-19

### Minor Changes

- Add Masking properties [#349](https://github.com/stormwarning/stylelint-config-recess-order/pull/349)

  - [`mask-border`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border) and related longhand properties
  - [`mask`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask) and related longhand properties

  `mask` was previously included within some SVG-specific properties — it’s been moved above those and below border & outline properties.

  `mask-border` properties are sorted above `mask` to highlight the fact that `mask` will reset `mask-border` to its initial value ([as per W3C spec](https://drafts.fxtf.org/css-masking/#the-mask)). I’m not familiar with these properties; if this order is problematic in practice, please file an issue!

### Patch Changes

- Fix `block-size` property support [#346](https://github.com/stormwarning/stylelint-config-recess-order/pull/346)  
  Thanks [@azat-io](https://github.com/azat-io)!

## 4.3.0 — 2023-07-10

### Minor Changes

- Add `backdrop-filter` to Background group [#345](https://github.com/stormwarning/stylelint-config-recess-order/pull/345)
- Add missing logical properties [#343](https://github.com/stormwarning/stylelint-config-recess-order/pull/343)

  - Specific `-start` and `-end` for block and inline `inset` properties
  - `inline-size` and `block-size`, as well as `min-` and `max-` for both
  - Block and inline forms of `overflow`

## 4.2.0 — 2023-06-06

### Minor Changes

- Add Basic User Interface properties [#341](https://github.com/stormwarning/stylelint-config-recess-order/pull/341)

  - [`appearance`](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
  - [`accent-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color)
  - [`caret-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color)

  Also adds new/missing properties [`color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) and [`counter-set`](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-set).

## 4.1.0 — 2023-06-05

### Minor Changes

- Add independent transform properties [#339](https://github.com/stormwarning/stylelint-config-recess-order/pull/339)  
  Thanks [@taichi221228](https://github.com/taichi221228)!

  - [`translate`](https://developer.mozilla.org/en-US/docs/Web/CSS/translate)
  - [`scale`](https://developer.mozilla.org/en-US/docs/Web/CSS/scale)
  - [`rotate`](https://developer.mozilla.org/en-US/docs/Web/CSS/rotate)

  Note: unlike the transform function versions, the order of these properties does not affect the result.

## 4.0.0 — 2023-02-14

### Major Changes

- Upgrade `stylelint-order` to v6 [`c734150`](https://github.com/stormwarning/stylelint-config-recess-order/commit/c734150496f7bd6f40a59d2a90cb4e882c37ceb2)

  [`stylelint-order`](https://github.com/hudochenkov/stylelint-order/blob/master/CHANGELOG.md#600) dropped support for Node v12 and v14. A peerDependency of Stylelint at v15 has also been updated to match.

## 3.1.0 — 2022-12-20

### Minor Changes

- Add `composes` property from CSS Modules [#325](https://github.com/stormwarning/stylelint-config-recess-order/pull/325)
- Add separate propertyGroups export [#323](https://github.com/stormwarning/stylelint-config-recess-order/pull/323)

  Should help make customising the rule config a little easier.

## 3.0.0 — 2021-11-11

#### 💣 Breaking

- Upgrade `stylelint-order` to v5 [#272](https://github.com/stormwarning/stylelint-config-recess-order/pull/272)
  [`stylelint-order`](https://github.com/hudochenkov/stylelint-order/blob/master/CHANGELOG.md#500)'s minimum supported version of Stylelint is now >=14; the
  peerDependencies of this config have been updated to match.

## 2.6.0 — 2021-11-09

#### 🎁 Added

- Add `@font-face`–specific properties [#271](https://github.com/stormwarning/stylelint-config-recess-order/pull/271)
  `src` and [other properties](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
  pertaining to display and metrics added to the typography group
  following the list properties.
  Also adds the `font-variation-settings` and `font-optical-sizing`
  OpenType properties.
- Add `aspect-ratio` and logical properties [#257](https://github.com/stormwarning/stylelint-config-recess-order/pull/257)
  [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) control layout based on the writing mode.
  Thanks [@4dr1en](https://github.com/4dr1en)!

## 2.5.0 — 2021-08-15

#### 🎁 Added

- Add `inset-*` properties [#242](https://github.com/stormwarning/stylelint-config-recess-order/pull/242)  
  Thanks [@xeho91](https://github.com/xeho91)!
- Add `place-content` and `place-self` properties [#249](https://github.com/stormwarning/stylelint-config-recess-order/pull/249)  
  Thanks [@chalkygames123](https://github.com/chalkygames123), [@ModyQyW](https://github.com/ModyQyW)!

## 2.4.0 — 2021-04-19

#### 🎁 Added

- Add `text-decoration-*` and `text-underline-*` properties [#224](https://github.com/stormwarning/stylelint-config-recess-order/pull/224)
  Order based on the [Text Decoration shorthand spec](https://drafts.csswg.org/css-text-decor-4/#text-decoration-property)  
  Thanks [@cammarin](https://github.com/cammarin)!
- Add `overscroll-behavior` properties [#229](https://github.com/stormwarning/stylelint-config-recess-order/pull/229)
- Add `font-variant-*` and related properties [#228](https://github.com/stormwarning/stylelint-config-recess-order/pull/228)
  Order based on [`font-variant` shorthand spec](https://www.w3.org/TR/css-fonts-3/#propdef-font-variant) order.

<a name="2.3.0"></a>

## [2.3.0](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.2.0...v2.3.0) — 2020-10-24

#### 🎁 Added

- Add `clip-path` property [#195](https://github.com/stormwarning/stylelint-config-recess-order/issues/195)

<a name="2.2.0"></a>

## [2.2.0](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.1.0...v2.2.0) — 2020-10-17

#### 🎁 Added

- Add `place-items` property [#193](https://github.com/stormwarning/stylelint-config-recess-order/issues/193)
  Thanks [@sergiofontes](https://github.com/sergiofontes)!

  Shorthand for the `align-items` and `justify-items` properties.

<a name="2.1.0"></a>

## [2.1.0](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.4...v2.1.0) — 2020-07-31

#### 🎁 Added

- Add unprefixed `gap` properties [#166](https://github.com/stormwarning/stylelint-config-recess-order/issues/166)
  These are added outside of the other `grid` properties, since it is
  now used in `flex` contexts as well, but directly after `grid-gap`
  for better backwards-compatibility.

  See [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
  for reference.

#### ♻️ Changed

- Upgrade dependencies [#165](https://github.com/stormwarning/stylelint-config-recess-order/issues/165)

<a name="2.0.4"></a>

### [2.0.4](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.3...v2.0.4) — 2020-03-16

#### ♻️ Changed

- Upgrade semantic-release config [`6d3a4cd`](https://github.com/stormwarning/stylelint-config-recess-order/commit/6d3a4cd)
- Upgrade dependencies [#101](https://github.com/stormwarning/stylelint-config-recess-order/issues/101)
  `stylelint-order` bumped to v4. Other internal dependencies upgraded to their latest.
- Update CI node versions [`8ad3f0d`](https://github.com/stormwarning/stylelint-config-recess-order/commit/8ad3f0d)
  `esm` package required for AVA to run in Node 10+.

<a name="2.0.3"></a>

### [2.0.3](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.2...v2.0.3) — 2019-07-13

#### ♻️ Changed

- Upgrade dependencies [#70](https://github.com/stormwarning/stylelint-config-recess-order/issues/70)
  Bump `stylelint-order` from 2.0.0 to 3.0.1

<a name="2.0.2"></a>

### [2.0.2](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.1...v2.0.2) — 2019-04-16

#### ♻️ Changed

- Update Stylelint to 10.0.0 [#35](https://github.com/stormwarning/stylelint-config-recess-order/issues/35)
  Also updates `peerDependency` version range.

<a name="2.0.1"></a>

### [2.0.1](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.0...v2.0.1) — 2018-12-16

#### ♻️ Changed

- Upgrade dependency versions [#30](https://github.com/stormwarning/stylelint-config-recess-order/issues/30)
  - `stylelint-order` now at `2.x.x`
  - Dev dependencies updated
  - Fixed sub-dependency vulnerabilities fixed per `npm audit`
- Add tests [#29](https://github.com/stormwarning/stylelint-config-recess-order/issues/29)
  - Includes AVA test runner
  - Adds stylelint as a dev/peer dependency
  - Adds example code fixtures & basic tests

## 2.0.0 — 2018-03-22

#### 🗑️ Removed

- Outdated & deprecated vendor-prefixed properties

#### ♻️ Changed

- Updated CSS Grid layout properties to better follow the pattern of having shorthand properties first

### 1.2.4 — 2018-03-13

#### 🗑️ Removed

- Individual eslint dependencies  
  Using [@zazen/eslint-config](https://github.com/stormwarning/zazen-eslint-config) now.

#### ♻️ Changed

- Upgraded stylelint-order dependency  
  Thanks [@ai](https://github.com/ai)!

### 1.2.3 — 2017-11-14

#### ♻️ Changed

- Upgraded [stylelint-order](https://github.com/hudochenkov/stylelint-order) version
- Updated codestyle & formatting rules

### 1.2.2 — 2017-07-27

#### 🎁 Added

- Vendor-specific `font-smoothing` properties  
  Thanks [@yakhinvadim](https://github.com/yakhinvadim)!

### 1.2.1 — 2017-06-29

#### ♻️ Changed

- [stylelint-order](https://github.com/hudochenkov/stylelint-order) version bumped to latest  
  Thanks [@yakhinvadim](https://github.com/yakhinvadim)!

## 1.2.0 — 2017-05-19

#### ♻️ Changed

- `order/declaration-block-properties-specified-order` was removed in [stylelint-order](https://github.com/hudochenkov/stylelint-order) v0.4; replaced with `order/properties-order`

## 1.1.0 - 2017-04-16

#### 🎁 Added

- SVG presentation properties

#### ♻️ Changed

- Upgraded [stylelint-order](https://github.com/hudochenkov/stylelint-order) version

## 1.0.0 - 2017-02-11

#### 🗑️ Removed

- `declaration-block-properties-order` Stylelint rule

#### 🎁 Added

- [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin

## 0.3.0 - 2017-02-03

#### 🎁 Added

- Compositing properties (_i.e._, `background-blend-mode`, `isolation`, & `mix-blend-mode`)

## 0.2.0 - 2017-01-28

#### 🗑️ Removed

- Deprecated flexbox properties
- `extends` property

#### 🎁 Added

- Properties for CSS Grid layout
- Missing flexbox properties (_e.g._, `align-content`, `order`, etc.)

#### 🐛 Fixed

- **JSON object/array structure**

## 0.1.0 - 2017-01-27

#### 🎉 Initial release
