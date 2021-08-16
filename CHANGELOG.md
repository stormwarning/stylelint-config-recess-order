# Change Log

## 2.5.0 — 2021-08-15

#### Added

- 🎁 Add `inset-*` properties [#242](https://github.com/stormwarning/stylelint-config-recess-order/pull/242)  
  Thanks [@xeho91](https://github.com/xeho91)!
- 🎁 Add `place-content` and `place-self` properties [#249](https://github.com/stormwarning/stylelint-config-recess-order/pull/249)  
  Thanks [@chalkygames123](https://github.com/chalkygames123), [@ModyQyW](https://github.com/ModyQyW)!

## 2.4.0 — 2021-04-19

#### Added

- 🎁 Add `text-decoration-*` and `text-underline-*` properties [#224](https://github.com/stormwarning/stylelint-config-recess-order/pull/224)  
  Order based on the [Text Decoration shorthand spec](https://drafts.csswg.org/css-text-decor-4/#text-decoration-property)  
  Thanks [@cammarin](https://github.com/cammarin)!
- 🎁 Add `overscroll-behavior` properties [#229](https://github.com/stormwarning/stylelint-config-recess-order/pull/229)
- 🎁 Add `font-variant-*` and related properties [#228](https://github.com/stormwarning/stylelint-config-recess-order/pull/228)  
  Order based on [`font-variant` shorthand spec](https://www.w3.org/TR/css-fonts-3/#propdef-font-variant) order.

<a name="2.3.0"></a>

## [2.3.0](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.2.0...v2.3.0) — 2020-10-24

#### Added

- 🎁 Add `clip-path` property [#195](https://github.com/stormwarning/stylelint-config-recess-order/issues/195)

<a name="2.2.0"></a>

## [2.2.0](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.1.0...v2.2.0) — 2020-10-17

#### Added

- 🎁 Add `place-items` property [#193](https://github.com/stormwarning/stylelint-config-recess-order/issues/193)  
  Shorthand for the `align-items` and `justify-items` properties.  
  Thanks [@sergiofontes](https://github.com/sergiofontes)!

<a name="2.1.0"></a>

## [2.1.0](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.4...v2.1.0) — 2020-07-31

#### Added

- 🎁 Add unprefixed `gap` properties [#166](https://github.com/stormwarning/stylelint-config-recess-order/issues/166)  
  These are added outside of the other `grid` properties, since it is
  now used in `flex` contexts as well, but directly after `grid-gap`
  for better backwards-compatibility.

  See [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
  for reference.

#### Changed

- 📦 Upgrade dependencies [#165](https://github.com/stormwarning/stylelint-config-recess-order/issues/165)

<a name="2.0.4"></a>

### [2.0.4](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.3...v2.0.4) — 2020-03-16

#### Changed

- 📦 Upgrade semantic-release config [`6d3a4cd`](https://github.com/stormwarning/stylelint-config-recess-order/commit/6d3a4cd)
- 📦 Upgrade dependencies [#101](https://github.com/stormwarning/stylelint-config-recess-order/issues/101)  
  `stylelint-order` bumped to v4. Other internal dependencies upgraded to their latest.

#### Other updates

- 💚 Update CI node versions [`8ad3f0d`](https://github.com/stormwarning/stylelint-config-recess-order/commit/8ad3f0d)  
  `esm` package required for AVA to run in Node 10+.

<a name="2.0.3"></a>

### [2.0.3](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.2...v2.0.3) — 2019-07-13

#### Changed

- 📦 Upgrade dependencies [#70](https://github.com/stormwarning/stylelint-config-recess-order/issues/70)  
  Bump `stylelint-order` from 2.0.0 to 3.0.1

<a name="2.0.2"></a>

### [2.0.2](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.1...v2.0.2) — 2019-04-16

#### Changed

- 📦 Update Stylelint to 10.0.0 [#35](https://github.com/stormwarning/stylelint-config-recess-order/issues/35)  
  Also updates `peerDependency` version range.

<a name="2.0.1"></a>

### [2.0.1](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.0...v2.0.1) — 2018-12-16

#### Changed

- 📦 Upgrade dependency versions [#30](https://github.com/stormwarning/stylelint-config-recess-order/issues/30)
  - `stylelint-order` now at `2.x.x`
  - Dev dependencies updated
  - Fixed sub-dependency vulnerabilities fixed per `npm audit`
- ✅ Add tests [#29](https://github.com/stormwarning/stylelint-config-recess-order/issues/29)
  - Includes AVA test runner
  - Adds stylelint as a dev/peer dependency
  - Adds example code fixtures & basic tests

## 2.0.0 — 2018-03-22

#### Removed

- Outdated & deprecated vendor-prefixed properties

#### Changed

- Updated CSS Grid layout properties to better follow the pattern of having shorthand properties first

### 1.2.4 — 2018-03-13

#### Removed

- Individual eslint dependencies  
  Using [@zazen/eslint-config](https://github.com/stormwarning/zazen-eslint-config) now.

#### Changed

- Upgraded stylelint-order dependency  
  Thanks [@ai](https://github.com/ai)!

### 1.2.3 — 2017-11-14

#### Changed

- Upgraded [stylelint-order](https://github.com/hudochenkov/stylelint-order) version

#### Other updates

- Updated codestyle & formatting rules

### 1.2.2 — 2017-07-27

#### Added

- Vendor-specific `font-smoothing` properties  
  Thanks [@yakhinvadim](https://github.com/yakhinvadim)!

#### Other updates

- Enabled [Greenkeeper](https://greenkeeper.io/) integration

### 1.2.1 — 2017-06-29

#### Changed

- [stylelint-order](https://github.com/hudochenkov/stylelint-order) version bumped to latest  
  Thanks [@yakhinvadim](https://github.com/yakhinvadim)!

## 1.2.0 — 2017-05-19

#### Changed

- `order/declaration-block-properties-specified-order` was removed in [stylelint-order](https://github.com/hudochenkov/stylelint-order) v0.4; replaced with `order/properties-order`

## 1.1.0 - 2017-04-16

#### Added

- SVG presentation properties

#### Changed

- Upgraded [stylelint-order](https://github.com/hudochenkov/stylelint-order) version

## 1.0.0 - 2017-02-11

#### Removed

- `declaration-block-properties-order` Stylelint rule

#### Added

- [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin

## 0.3.0 - 2017-02-03

#### Added

- Compositing properties (_i.e._, `background-blend-mode`, `isolation`, & `mix-blend-mode`)

## 0.2.0 - 2017-01-28

#### Removed

- Deprecated flexbox properties
- `extends` property

#### Added

- Properties for CSS Grid layout
- Missing flexbox properties (_e.g._, `align-content`, `order`, etc.)

#### Fixed

- **JSON object/array structure**

#### Other updates

- Updated various `package.json` settings

## 0.1.0 - 2017-01-27

#### 🎉 Initial release
