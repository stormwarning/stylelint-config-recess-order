# Change Log

[![Keep a Changelog](https://img.shields.io/badge/keep%20a-changelog-ef5e39.svg?style=flat-square)](https://keepachangelog.com)
[![Semantic Versioning](https://img.shields.io/badge/semantic-versioning-333333.svg?style=flat-square)](https://semver.org)

All notable changes to this project will be documented in this file.

<a name="2.3.0"></a>

## [2.3.0](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.2.0...v2.3.0) — 2020-10-24

#### Added

- 🎁 Add `clip-path` property ([#195](https://github.com/stormwarning/stylelint-config-recess-order/issues/195)) [[`08c1eca`](https://github.com/stormwarning/stylelint-config-recess-order/commit/08c1eca)]

<a name="2.2.0"></a>

## [2.2.0](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.1.0...v2.2.0) — 2020-10-17

#### Added

- 🎁 Add `place-items` property ([#193](https://github.com/stormwarning/stylelint-config-recess-order/issues/193)) [[`7d77abc`](https://github.com/stormwarning/stylelint-config-recess-order/commit/7d77abc)] \
  Shorthand for the `align-items` and `justify-items` properties.

<a name="2.1.0"></a>

## [2.1.0](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.4...v2.1.0) — 2020-07-31

#### Added

- 🎁 Add unprefixed `gap` properties ([#166](https://github.com/stormwarning/stylelint-config-recess-order/issues/166)) [[`78c544f`](https://github.com/stormwarning/stylelint-config-recess-order/commit/78c544f)], closes [#140](https://github.com/stormwarning/stylelint-config-recess-order/issues/140) \
  These are added outside of the other `grid` properties, since it is
  now used in `flex` contexts as well, but directly after `grid-gap`
  for better backwards-compatibility.
  
  See [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
  for reference.

#### Changed

- 📦 Upgrade dependencies ([#165](https://github.com/stormwarning/stylelint-config-recess-order/issues/165)) [[`905c955`](https://github.com/stormwarning/stylelint-config-recess-order/commit/905c955)], closes [#159](https://github.com/stormwarning/stylelint-config-recess-order/issues/159) [#164](https://github.com/stormwarning/stylelint-config-recess-order/issues/164)

<a name="2.0.4"></a>

### [2.0.4](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.3...v2.0.4) — 2020-03-16

#### Changed

- 📦 Upgrade semantic-release config [[`6d3a4cd`](https://github.com/stormwarning/stylelint-config-recess-order/commit/6d3a4cd)]
- 📦 Upgrade dependencies ([#101](https://github.com/stormwarning/stylelint-config-recess-order/issues/101)) [[`b1a8f58`](https://github.com/stormwarning/stylelint-config-recess-order/commit/b1a8f58)] \
  `stylelint-order` bumped to v4. Other internal dependencies upgraded to their latest.

#### Other updates

- 💚 Update CI node versions [[`8ad3f0d`](https://github.com/stormwarning/stylelint-config-recess-order/commit/8ad3f0d)] \
  `esm` package required for AVA to run in Node 10+.

<a name="2.0.3"></a>

## [2.0.3](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.2...v2.0.3) — 2019-07-13

### Changed

- 📦 Upgrade dependencies ([#70](https://github.com/stormwarning/stylelint-config-recess-order/issues/70)) ([cad86cd](https://github.com/stormwarning/stylelint-config-recess-order/commit/cad86cd))
  - Bump `stylelint-order` from 2.0.0 to 3.0.1
  - Bump `@zazen/eslint-config` from 0.3.0 to 1.0.0 ([#39](https://github.com/stormwarning/stylelint-config-recess-order/issues/39))
  - Bump `stylelint` from 10.0.0 to 10.1.0 ([#57](https://github.com/stormwarning/stylelint-config-recess-order/issues/57))
  - Bump `ava` from 1.0.1 to 2.2.0
  - Bump `semantic-release` from 15.13.0 to 15.13.18 ([#64](https://github.com/stormwarning/stylelint-config-recess-order/issues/64))
  - Bump `husky` from 1.2.1 to 3.0.0 ([#68](https://github.com/stormwarning/stylelint-config-recess-order/issues/68))
  - Bump `lint-staged` from 8.1.0 to 9.2.0

  Includes some security fixes to sub-dependencies

  - 🔒 Bump `lodash` from 4.17.11 to 4.17.14 ([#75](https://github.com/stormwarning/stylelint-config-recess-order/issues/75))
  - 🔒 Bump `lodash.template` from 4.4.0 to 4.5.0 ([#74](https://github.com/stormwarning/stylelint-config-recess-order/issues/74))
  - 🔒 Bump `lodash.merge` from 4.6.1 to 4.6.2 ([#73](https://github.com/stormwarning/stylelint-config-recess-order/issues/73))

<a name="2.0.2"></a>

## [2.0.2](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.1...v2.0.2) — 2019-04-16

### Changed

- 📦 Update Stylelint to 10.0.0 ([#35](https://github.com/stormwarning/stylelint-config-recess-order/issues/35)) ([3e4d05b](https://github.com/stormwarning/stylelint-config-recess-order/commit/3e4d05b)) \
  Also updates `peerDependency` version range.

### Other updates

- 📚 Fix up changelog formatting ([d1d4b89](https://github.com/stormwarning/stylelint-config-recess-order/commit/d1d4b89))

<a name="2.0.1"></a>

### [2.0.1](https://github.com/stormwarning/stylelint-config-recess-order/compare/v2.0.0...v2.0.1) — 2018-12-16

#### Changed

- 📦 Upgrade dependency versions ([#30](https://github.com/stormwarning/stylelint-config-recess-order/issues/30)) [[`2448510`](https://github.com/stormwarning/stylelint-config-recess-order/commit/2448510)]  
  - `stylelint-order` now at `2.x.x`
  - Dev dependencies updated
  - Fixed sub-dependency vulnerabilities fixed per `npm audit`
- ✅ Add tests ([#29](https://github.com/stormwarning/stylelint-config-recess-order/issues/29)) [[`7197234`](https://github.com/stormwarning/stylelint-config-recess-order/commit/7197234)]  
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
  Thanks for the nudge, [@ai](https://github.com/ai)

### 1.2.3 — 2017-11-14

#### Changed

- Upgraded [stylelint-order](https://github.com/hudochenkov/stylelint-order) version

#### Other updates

- Updated codestyle & formatting rules

### 1.2.2 — 2017-07-27

#### Added

- Vendor-specific `font-smoothing` properties  
  Thanks, [@yakhinvadim](https://github.com/yakhinvadim).

#### Other updates

- Enabled [Greenkeeper](https://greenkeeper.io/) integration

### 1.2.1 — 2017-06-29

#### Changed

- [stylelint-order](https://github.com/hudochenkov/stylelint-order) version bumped to latest  
  Thanks, [@yakhinvadim](https://github.com/yakhinvadim).

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

- Compositing properties (*i.e.*, `background-blend-mode`, `isolation`, & `mix-blend-mode`)

## 0.2.0 - 2017-01-28

#### Removed

- Deprecated flexbox properties
- `extends` property 

#### Added

- Properties for CSS Grid layout
- Missing flexbox properties (*e.g.*, `align-content`, `order`, etc.)

#### Fixed

- **JSON object/array structure**

#### Other updates

- Updated various `package.json` settings

## 0.1.0 - 2017-01-27

#### 🎉 Project created
