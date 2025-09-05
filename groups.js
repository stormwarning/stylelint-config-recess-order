/**
 * @typedef {Object} Group
 * @property {Array<string>} properties
 */

/** @type {Group[]} */
const propertyGroups = [
	/**
	 * Compose rules from other selectors in CSS Modules.
	 * @see https://github.com/css-modules/css-modules#composition
	 */
	{
		properties: ['composes'],
	},

	/**
	 * Cascade and inheritance.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade#reference
	 */
	{
		properties: ['all'],
	},

	/**
	 * Positioned layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout#reference
	 */
	{
		properties: [
			'position',
			'inset',
			'inset-block',
			'inset-block-start',
			'inset-block-end',
			'inset-inline',
			'inset-inline-start',
			'inset-inline-end',
			'top',
			'right',
			'bottom',
			'left',
			'z-index',
			'float',
			'clear',
		],
	},

	/**
	 * Display.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display#reference
	 */
	{
		properties: ['box-sizing', 'display', 'visibility'],
	},

	/**
	 * Flexible box layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout#reference
	 */
	{
		properties: [
			'flex',
			'flex-grow',
			'flex-shrink',
			'flex-basis',
			'flex-flow',
			'flex-direction',
			'flex-wrap',
			'-webkit-box-orient',
		],
	},

	/**
	 * Grid layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout#reference
	 */
	{
		properties: [
			'grid',
			'grid-area',
			'grid-template',
			'grid-template-areas',
			'grid-template-rows',
			'grid-template-columns',
			'grid-row',
			'grid-row-start',
			'grid-row-end',
			'grid-column',
			'grid-column-start',
			'grid-column-end',
			'grid-auto-rows',
			'grid-auto-columns',
			'grid-auto-flow',
			'grid-gap',
			'grid-row-gap',
			'grid-column-gap',
		],
	},

	/**
	 * Box alignment.  Relates to both Flexbox and Grid layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment#reference
	 */
	{
		properties: [
			'gap',
			'row-gap',
			'column-gap',
			'place-content',
			'place-items',
			'place-self',
			'align-content',
			'align-items',
			'align-self',
			'justify-content',
			'justify-items',
			'justify-self',
		],
	},

	/**
	 * Order.
	 * Part of Display module, but relates to both Flexbox and Grid layout.
	 */
	{
		properties: ['order'],
	},

	/**
	 * Box sizing.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_sizing#reference
	 */
	{
		properties: [
			'inline-size',
			'min-inline-size',
			'max-inline-size',
			'width',
			'min-width',
			'max-width',
			'block-size',
			'min-block-size',
			'max-block-size',
			'height',
			'min-height',
			'max-height',
			'aspect-ratio',
			'contain-intrinsic-inline-size',
			'contain-intrinsic-block-size',
			'contain-intrinsic-size', // Shorthand for `-width` & `-height`.
			'contain-intrinsic-width',
			'contain-intrinsic-height',
		],
	},

	/**
	 * Box model.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model#reference
	 */
	{
		properties: [
			'padding',
			'padding-block',
			'padding-block-start',
			'padding-block-end',
			'padding-inline',
			'padding-inline-start',
			'padding-inline-end',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'margin',
			'margin-block',
			'margin-block-start',
			'margin-block-end',
			'margin-inline',
			'margin-inline-start',
			'margin-inline-end',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
		],
	},

	/**
	 * Anchor positioning.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning#reference
	 */

	/**
	 * Containment.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment#reference
	 */
	{
		properties: [
			'contain',
			'container',
			'container-name',
			'container-type',
			'content-visibility',
		],
	},

	/**
	 * Overflow.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overflow#reference
	 */
	{
		properties: [
			'overflow',
			'overflow-inline',
			'overflow-block',
			'overflow-x',
			'overflow-y',
			'scrollbar-gutter',
			'-webkit-overflow-scrolling',

			// Should probably just remove these.
			'-ms-overflow-x',
			'-ms-overflow-y',
			'-ms-overflow-style',

			'text-overflow',
			'-webkit-line-clamp',
			'line-clamp',
			'scroll-behaviour',
		],
	},

	/**
	 * Overscroll behavior.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overscroll_behavior#reference
	 */
	{
		properties: [
			'overscroll-behavior',
			'overscroll-behavior-inline',
			'overscroll-behavior-block',
			'overscroll-behavior-x',
			'overscroll-behavior-y',
		],
	},

	/**
	 * Fonts.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts#reference
	 */
	{
		properties: [
			'font',
			'font-family',
			'font-size',
			'font-size-adjust',
			'font-variation-settings',
			'font-style',
			'font-weight',
			'font-optical-sizing',
			'font-stretch',
			'font-feature-settings',
			'font-kerning',
			'font-variant',
			'font-variant-ligatures',
			'font-variant-caps',
			'font-variant-alternates',
			'font-variant-numeric',
			'font-variant-east-asian',
			'font-variant-position',
			'-webkit-font-smoothing',
			'-moz-osx-font-smoothing',
			'font-smooth',
			'font-synthesis',
			'font-synthesis-weight',
			'font-synthesis-style',
			'font-synthesis-small-caps',
		],
	},

	/**
	 * Inline layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_inline_layout#reference
	 */
	{
		properties: [
			'line-height',
			'vertical-align',
			'alignment-baseline',
			'baseline-shift',
			'dominant-baseline',
		],
	},

	/**
	 * Colors.
	 *
	 * Although `opacity` is technically part of this module, it is grouped
	 * with the Compositing and blending module for now.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors#reference
	 */
	{
		properties: [
			'base-palette',
			'override-colors',
			'font-palette',
			'color',
			'-webkit-text-fill-color',
			'-webkit-text-stroke',
			'-webkit-text-stroke-width',
			'-webkit-text-stroke-color',
		],
	},

	/**
	 * Text.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text#reference
	 */
	{
		properties: [
			'text-align',
			'text-align-last',
			'text-justify',
			'text-indent',
			'text-transform',
			'word-spacing',
			'letter-spacing',
			'hyphens',
			'hyphenate-character',
			'line-break',
			'word-break',
			'text-wrap',
			'text-wrap-mode',
			'text-wrap-style',
			'word-wrap', // Legacy name for `overflow-wrap`
			'overflow-wrap',
			'tab-size',
			'white-space',
			'white-space-collapse',
		],
	},

	/**
	 * Text decoration.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text_decoration#reference
	 */
	{
		properties: [
			'text-emphasis',
			'text-emphasis-color',
			'text-emphasis-style',
			'text-emphasis-position',
			'text-decoration',
			'text-decoration-line',
			'text-decoration-thickness',
			'text-decoration-style',
			'text-decoration-color',
			'text-decoration-skip-ink',
			'text-underline-position',
			'text-underline-offset',
			'text-shadow',
		],
	},

	/**
	 * Ruby layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_ruby_layout#reference
	 */
	{
		properties: ['ruby-position', 'ruby-align'],
	},

	/**
	 * Font loading.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_font_loading#reference
	 */
	{
		properties: [
			'src',
			'font-display',
			'unicode-range',
			'size-adjust',
			'ascent-override',
			'descent-override',
			'line-gap-override',
		],
	},

	/**
	 * Basic user interface.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_basic_user_interface#reference
	 */
	{
		properties: [
			'appearance',
			'accent-color',
			'pointer-events',
			'-ms-touch-action',
			'touch-action',
			'cursor',
			'caret-color',
			'zoom', // ?
			'resize',
			'user-select',
			'-webkit-user-select',
			'nav-index',
			'nav-up',
			'nav-right',
			'nav-down',
			'nav-left',
			'outline',
			'outline-width',
			'outline-style',
			'outline-color',
			'outline-offset',
		],
	},

	/**
	 * Color adjustment.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_color_adjustment#reference
	 */
	{
		properties: ['color-scheme', 'forced-color-adjust', 'print-color-adjust'],
	},

	/**
	 * Table.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_table#reference
	 */
	{
		properties: [
			'table-layout',
			'empty-cells',
			'caption-side',
			'border-spacing',
			'border-collapse',
		],
	},

	/**
	 * Generated content.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_generated_content#reference
	 */
	{
		properties: ['content', 'quotes'],
	},

	/**
	 * Lists and counters.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_lists#reference
	 */
	{
		properties: [
			'list-style',
			'list-style-position',
			'list-style-type',
			'list-style-image',
			'counter-reset',
			'counter-set',
			'counter-increment',
		],
	},

	/**
	 * Scroll snap.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap#reference
	 */
	{
		properties: [
			'scroll-snap-type',
			'scroll-snap-align',
			'scroll-snap-stop',
			'scroll-padding',
			'scroll-padding-block',
			'scroll-padding-block-start',
			'scroll-padding-block-end',
			'scroll-padding-inline',
			'scroll-padding-inline-start',
			'scroll-padding-inline-end',
			'scroll-padding-top',
			'scroll-padding-right',
			'scroll-padding-bottom',
			'scroll-padding-left',
			'scroll-margin',
			'scroll-margin-block',
			'scroll-margin-block-start',
			'scroll-margin-block-end',
			'scroll-margin-inline',
			'scroll-margin-inline-start',
			'scroll-margin-inline-end',
			'scroll-margin-top',
			'scroll-margin-right',
			'scroll-margin-bottom',
			'scroll-margin-left',
		],
	},

	/**
	 * Scrollbars styling.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scrollbars_styling#reference
	 */
	{
		properties: ['scrollbar-color', 'scrollbar-width'],
	},

	/**
	 * Images.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images#reference
	 */
	{
		properties: [
			'object-fit',
			'object-position',
			'-ms-interpolation-mode',
			'image-orientation',
			'image-rendering',
			'image-resolution',
		],
	},

	/**
	 * Backgrounds and borders.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders#reference
	 */
	{
		properties: [
			'background',
			'background-color',
			'background-image',
			String.raw`-ms-filter:\'progid:DXImageTransform.Microsoft.gradient`,
			'filter:progid:DXImageTransform.Microsoft.gradient',
			'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader',
			'background-repeat',
			'background-attachment',
			'background-position',
			'background-position-x',
			'background-position-y',
			'background-clip',
			'background-origin',
			'background-size',
			'border',
			'border-color',
			'border-style',
			'border-width',
			'border-block',
			'border-block-start',
			'border-block-start-color',
			'border-block-start-style',
			'border-block-start-width',
			'border-block-end',
			'border-block-end-color',
			'border-block-end-style',
			'border-block-end-width',
			'border-inline',
			'border-inline-start',
			'border-inline-start-color',
			'border-inline-start-style',
			'border-inline-start-width',
			'border-inline-end',
			'border-inline-end-color',
			'border-inline-end-style',
			'border-inline-end-width',
			'border-top',
			'border-top-color',
			'border-top-style',
			'border-top-width',
			'border-right',
			'border-right-color',
			'border-right-style',
			'border-right-width',
			'border-bottom',
			'border-bottom-color',
			'border-bottom-style',
			'border-bottom-width',
			'border-left',
			'border-left-color',
			'border-left-style',
			'border-left-width',
			'border-radius',
			'border-start-start-radius',
			'border-start-end-radius',
			'border-end-start-radius',
			'border-end-end-radius',
			'border-top-left-radius',
			'border-top-right-radius',
			'border-bottom-right-radius',
			'border-bottom-left-radius',
			'border-image',
			'border-image-source',
			'border-image-slice',
			'border-image-width',
			'border-image-outset',
			'border-image-repeat',
			'box-shadow',
		],
	},

	/**
	 * Compositing and blending.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_compositing_and_blending#reference
	 */
	{
		properties: [
			'background-blend-mode',
			'isolation',
			'mix-blend-mode',
			'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
			String.raw`-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha`,
			'opacity',
		],
	},

	/**
	 * Filter effects.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_filter_effects#properties
	 */
	{
		properties: ['filter', 'backdrop-filter'],
	},

	/**
	 * Masking.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_masking#reference
	 */
	{
		properties: [
			'clip',
			'clip-path',
			'clip-rule',
			'mask-border',
			'mask-border-source',
			'mask-border-slice',
			'mask-border-width',
			'mask-border-outset',
			'mask-border-repeat',
			'mask-border-mode',
			'mask',
			'mask-image',
			'mask-mode',
			'mask-repeat',
			'mask-position',
			'mask-clip',
			'mask-origin',
			'mask-size',
			'mask-composite',
			'mask-type',
		],
	},

	/**
	 * Shapes.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shapes#reference
	 */
	{
		properties: ['shape-outside', 'shape-image-threshold', 'shape-margin'],
	},

	/**
	 * Writing modes.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_writing_modes#reference
	 */
	{
		properties: [
			'direction',
			'unicode-bidi',
			'writing-mode',
			'text-orientation',
			'text-combine-upright',
		],
	},

	/**
	 * SVG presentation attributes.
	 *
	 * Some of these may fall under a specific module, but if they only apply
	 * to SVG-specific elements, they will be grouped here.
	 */
	{
		properties: [
			'text-anchor',

			'fill',
			'fill-rule',
			'fill-opacity',
			'stroke',
			'stroke-opacity',
			'stroke-width',
			'stroke-linecap',
			'stroke-linejoin',
			'stroke-miterlimit',
			'stroke-dasharray',
			'stroke-dashoffset',

			'color-interpolation',
			'color-interpolation-filters',
			'flood-color',
			'flood-opacity',
			'lighting-color',

			'marker',
			'marker-start',
			'marker-mid',
			'marker-end',
			'stop-color',
			'stop-opacity',

			'paint-order',
			'shape-rendering',
			'text-rendering',
		],
	},

	/**
	 * Transforms.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms#reference
	 */
	{
		properties: [
			'transform',
			'transform-origin',
			'transform-box',
			'transform-style',
			'rotate',
			'scale',
			'translate',
			'perspective',
			'perspective-origin',
			'backface-visibility',
		],
	},

	/**
	 * Transitions.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions#reference
	 */
	{
		properties: [
			'transition',
			'transition-delay',
			'transition-timing-function',
			'transition-duration',
			'transition-property',
		],
	},

	/**
	 * View transitions.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_view_transitions#reference
	 */
	{
		properties: ['view-transition-name', 'view-transition-class'],
	},

	/**
	 * Animations.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations#reference
	 */
	{
		properties: [
			'animation',
			'animation-name',
			'animation-duration',
			'animation-timing-function',
			'animation-delay',
			'animation-iteration-count',
			'animation-direction',
			'animation-fill-mode',
			'animation-play-state',
			'animation-composition',
		],
	},

	/**
	 * Scroll-driven animations.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations#reference
	 */

	/**
	 * Motion path.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_motion_path#reference
	 */
	{
		properties: [
			'offset',
			'offset-position',
			'offset-path',
			'offset-distance',
			'offset-rotate',
			'offset-anchor',
		],
	},

	/**
	 * Will change.
	 * @see https://drafts.csswg.org/css-will-change/#will-change
	 */
	{
		properties: ['will-change'],
	},

	/**
	 * Fragmentation.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fragmentation#reference
	 */
	{
		properties: [
			'break-before',
			'break-after',
			'break-inside',
			'widows',
			'orphans',
		],
	},

	/**
	 * Multi-column layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout#reference
	 */
]

export default propertyGroups
