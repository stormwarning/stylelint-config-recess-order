# Change Log

[![Keep a Changelog](https://img.shields.io/badge/keep%20a-changelog-ef5e39.svg?style=flat-square)](https://keepachangelog.com)
[![Semantic Versioning](https://img.shields.io/badge/semantic-versioning-333333.svg?style=flat-square)](https://semver.org)

All notable changes to this project will be documented in this file.

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
