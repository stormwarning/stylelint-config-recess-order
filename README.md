# Recess\* Property Order [<svg xmlns="http://www.w3.org/2000/svg" style="box-sizing:content-box;float:right;padding-left:20px;background-color:var(--color-canvas-default)" width="90" height="90" viewBox="0 0 512 512"><style>.fill {fill:#000}@media (prefers-color-scheme:dark) {.fill {fill:#fff}}</style><path class="fill" d="M258.805 461.054c45.057-161.12 43.75-161.848 76.32-276.73l7.832 4.523c4.255 2.458 7.738.448 7.738-4.455v-54.786c8.643-30.27 15.416-53.66 17.4-60.693h35.286L462 123.217l-38.498 33.27 29.11 31.473-191.86 273.094c-.938 1.542-2.244 1.19-1.947 0z"/><g class="fill"><path d="M279.766 113.776c1.732 0 3.147.958 3.147 2.147V144c0 1.186-1.415 2.15-3.147 2.15H232.37c-1.742 0-3.153-.96-3.153-2.15v-28.077c0-1.185 1.41-2.147 3.153-2.147h47.396M338.265 82.688l-52.14 30.1c.605.92.973 1.98.973 3.136v28.078c0 1.457-.564 2.77-1.496 3.83l52.663 30.402c3.59 2.073 6.535.377 6.535-3.764V86.456c0-4.145-2.944-5.836-6.535-3.768zM225.03 144v-28.077c0-1.15.368-2.21.966-3.13l-52.14-30.105c-3.588-2.068-6.53-.376-6.53 3.768v88.013c0 4.14 2.938 5.84 6.53 3.763l52.66-30.405c-.926-1.06-1.487-2.37-1.487-3.827z"/></g><path class="fill" d="M251.248 461.054h1.947c-45.05-161.12-43.753-161.848-76.32-276.73l-7.833 4.523c-4.253 2.458-7.737.448-7.737-4.455v-54.786c-8.646-30.27-15.416-53.66-17.405-60.693h-35.283L50 123.217l38.494 33.27-29.11 31.473 191.864 273.094z"/><circle class="fill" cx="254.572" cy="190.538" r="14.231"/><circle class="fill" cx="254.572" cy="275.156" r="14.231"/><circle class="fill" cx="254.572" cy="359.785" r="14.23"/></svg>][stylelint]

[![npm version][npm-img]][npm-url]
[![npm downloads][npm-dls]][npm-url]
[![github issues][issues-img]][issues-url]

A [Stylelint][] config that sorts CSS properties the way [Recess][] did and
Bootstrap [did][]/[does][].

\*With some modifications & additions for modern properties.

## Usage

1.  Add [stylelint][] and this package to your project:
    ```sh
    npm install --save-dev stylelint stylelint-config-recess-order
    ```
2.  Configure your stylelint configuration file to extend this package:
    ```js
    module.exports = {
        extends: ['stylelint-config-recess-order'],
        rules: {
            // Add overrides and additional rules here
        },
    }
    ```

## References

[@mdo on CSS Property Order][mdo-order]

[npm-url]: https://www.npmjs.com/package/stylelint-config-recess-order
[npm-img]: https://img.shields.io/npm/v/stylelint-config-recess-order.svg?style=flat-square
[npm-dls]: https://img.shields.io/npm/dt/stylelint-config-recess-order.svg?style=flat-square
[issues-url]: https://github.com/stormwarning/stylelint-config-recess-order/issues
[issues-img]: https://img.shields.io/github/issues/stormwarning/stylelint-config-recess-order.svg?style=flat-square
[stylelint]: https://github.com/stylelint/stylelint
[recess]: https://github.com/twitter/recess/blob/29bccc870b7b4ccaa0a138e504caf608a6606b59/lib/lint/strict-property-order.js
[did]: https://github.com/twbs/bootstrap/blob/f58997a0dae54dc98d11892afef9acb85bdc6a1e/.scss-lint.yml#L136
[does]: https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/ad67be6e4ceb48809fa1dce13b7892f9d2018995/css/index.js#L38
[mdo-order]: http://markdotto.com/2011/11/29/css-property-order/
