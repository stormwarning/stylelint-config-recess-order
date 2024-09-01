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
		],
	},

	/**
	 * Display.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display#reference
	 */
	{
		properties: ['box-sizing', 'display'],
	},

	/**
	 * Flexible box layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout#reference
	 */
	{
		properties: [
			'flex',
			'flex-basis',
			'flex-direction',
			'flex-flow',
			'flex-grow',
			'flex-shrink',
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
	 * Gap.
	 * Relates to both Flexbox and Grid layout.
	 */
	{
		properties: ['gap', 'row-gap', 'column-gap'],
	},

	/**
	 * Box alignment.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment#reference
	 */
	{
		properties: [
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
	 */
	{
		properties: ['order'],
	},

	/**
	 * Box model.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model#reference
	 */
	{
		properties: [
			'float', // Part of Positioned layout.
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
			'overflow', // Part of Overflow.
			'overflow-block', // Part of Overflow.
			'overflow-inline', // Part of Overflow.
			'overflow-x', // Part of Overflow.
			'overflow-y', // Part of Overflow.
			'-webkit-overflow-scrolling',
			'-ms-overflow-x', // Part of Overflow?
			'-ms-overflow-y',
			'-ms-overflow-style',
			'overscroll-behavior', // Part of Overscroll behavior.
			'overscroll-behavior-inline', // Part of Overscroll behavior.
			'overscroll-behavior-block', // Part of Overscroll behavior.
			'overscroll-behavior-x', // Part of Overscroll behavior.
			'overscroll-behavior-y', // Part of Overscroll behavior.
			'clip', // Part of Masking.
			'clip-path', // Part of Masking.
			'clear', // Part of Positioned layout.
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

	/**
	 * Overflow.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overflow#reference
	 */

	/**
	 * Overscroll behavior.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overscroll_behavior#reference
	 */

	/**
	 * Fonts.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts#reference
	 */
	{
		properties: [
			'font',
			'font-family',
			'font-size',
			'font-variation-settings',
			'font-style',
			'font-weight',
			'font-feature-settings',
			'font-optical-sizing',
			'font-kerning',
			'font-variant',
			'font-variant-ligatures',
			'font-variant-caps',
			'font-variant-alternates',
			'font-variant-numeric',
			'font-variant-east-asian',
			'font-variant-position',
			'font-size-adjust',
			'font-stretch',
			'font-effect',
			'font-emphasize',
			'font-emphasize-position',
			'font-emphasize-style',
			'-webkit-font-smoothing',
			'-moz-osx-font-smoothing',
			'font-smooth',
			'hyphens', // Part of Text.
			'line-height',
			'color',
			'-webkit-text-fill-color', // Not officially in the spec; should follow `color`.
			'-webkit-text-stroke',
			'-webkit-text-stroke-width',
			'-webkit-text-stroke-color',
			'text-align', // Part of Text.
			'text-align-last', // Part of Text.
			'text-emphasis', // Part of Text decoration.
			'text-emphasis-color',
			'text-emphasis-style',
			'text-emphasis-position',
			'text-decoration',
			'text-decoration-line',
			'text-decoration-thickness',
			'text-decoration-style',
			'text-decoration-color',
			'text-underline-position',
			'text-underline-offset', // Part of Text decoration.
			'text-indent',
			'text-justify',
			'text-outline',
			'text-overflow', // Part of Overflow.
			'text-overflow-ellipsis',
			'text-overflow-mode',
			'-webkit-line-clamp',
			'line-clamp', // Part of Overflow.
			'text-shadow', // Part of Text decoration.
			'text-transform',
			'text-wrap',
			'-webkit-text-size-adjust',
			'-ms-text-size-adjust',
			'letter-spacing',
			'word-break',
			'word-spacing',
			'word-wrap', // Legacy name for `overflow-wrap`
			'overflow-wrap',
			'tab-size',
			'white-space',
			'vertical-align', // Leave at end of Text group for now.

			'list-style', // Part of Lists.
			'list-style-position',
			'list-style-type',
			'list-style-image',

			'src', // Part of Font loading.
			'font-display',
			'unicode-range',
			'size-adjust',
			'ascent-override',
			'descent-override',
			'line-gap-override',
		],
	},

	/**
	 * Text.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text#reference
	 */

	/**
	 * Text decoration.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text_decoration#reference
	 */

	/**
	 * Fragmentation.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fragmentation#reference
	 */

	/**
	 * Ruby layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_ruby_layout#reference
	 */

	/**
	 * Font loading.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_font_loading#reference
	 */

	/**
	 * Basic user interface.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_basic_user_interface#reference
	 */
	{
		properties: [
			'appearance',
			'accent-color',
			'color-scheme', // Part of Color adjustment.
			'pointer-events',
			'-ms-touch-action',
			'touch-action', // Not part of any module; keep with `pointer-events`.
			'cursor',
			'caret-color',
			'visibility', // Part of Display.
			'zoom', // ?

			'table-layout', // Part of Tables.
			'empty-cells',
			'caption-side',
			'border-spacing',
			'border-collapse',

			'content', // Part of Generated content.
			'quotes',
			'counter-reset', // Part of Lists and counters.
			'counter-set',
			'counter-increment',
			'resize', // Part of Basic user interface.

			'scroll-behaviour', // Part of Overflow.
			'scroll-snap-type', // Part of Scroll snap.
			'scroll-snap-align',
			'scroll-snap-stop',
			'scroll-padding',
			'scroll-padding-inline',
			'scroll-padding-inline-start',
			'scroll-padding-inline-end',
			'scroll-padding-block',
			'scroll-padding-block-start',
			'scroll-padding-block-end',
			'scroll-padding-top',
			'scroll-padding-right',
			'scroll-padding-bottom',
			'scroll-padding-left',
			'scroll-margin',
			'scroll-margin-inline',
			'scroll-margin-inline-start',
			'scroll-margin-inline-end',
			'scroll-margin-block',
			'scroll-margin-block-start',
			'scroll-margin-block-end',
			'scroll-margin-top',
			'scroll-margin-right',
			'scroll-margin-bottom',
			'scroll-margin-left',

			'scrollbar-color', // Part of Scrollbars styling.
			'scrollbar-gutter',
			'scrollbar-width',

			'user-select', // Part of Basic user interface.
			'-webkit-user-select',
			'nav-index',
			'nav-up',
			'nav-right',
			'nav-down',
			'nav-left',
		],
	},

	/**
	 * Color adjustment.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_color_adjustment#reference
	 */

	/**
	 * Table.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_table#reference
	 */

	/**
	 * Generated content.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_generated_content#reference
	 */

	/**
	 * Lists and counters.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_lists#reference
	 */

	/**
	 * Scroll snap.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap#reference
	 */

	/**
	 * Scrollbars styling.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scrollbars_styling#reference
	 */

	/**
	 * Images.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images#reference
	 */

	/**
	 * Backgrounds and borders.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders#reference
	 */
	{
		properties: [
			'object-fit', // Part of Images.
			'object-position',
			'-ms-interpolation-mode',
			'image-orientation',
			'image-rendering',
			'image-resolution',

			'background',
			'background-color',
			'background-image',
			"-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
			'filter:progid:DXImageTransform.Microsoft.gradient',
			'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader', // Group with opacity?
			'filter', // Part of Filter effects.
			'background-repeat',
			'background-attachment',
			'background-position',
			'background-position-x',
			'background-position-y',
			'background-clip',
			'background-origin',
			'background-size',
			'background-blend-mode', // Part of Compositing and blending.
			'isolation', // Part of Compositing and blending.
			'backdrop-filter', // Part of Filter effects.
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
			'outline', // Part of Basic user interface.
			'outline-width',
			'outline-style',
			'outline-color',
			'outline-offset',
			'box-shadow', // Part of Backgrounds and borders.
			'mix-blend-mode', // Part of Compositing and blending.
			'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
			"-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
			'opacity', // Move after Compositing and blending.
		],
	},

	/**
	 * Compositing and blending.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_compositing_and_blending#reference
	 */

	/**
	 * Filter effects.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_filter_effects#properties
	 */

	/**
	 * Masking.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_masking#reference
	 */
	{
		properties: [
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
		],
	},

	/**
	 * Shapes.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shapes#reference
	 */

	/**
	 * Writing modes.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_writing_modes#reference
	 */

	/**
	 * SVG presentation attributes.
	 */
	{
		properties: [
			'alignment-baseline',
			'baseline-shift',
			'dominant-baseline',
			'text-anchor',
			'word-spacing', // Duplicate from Text.
			'writing-mode', // Part of Writing modes.

			'fill',
			'fill-opacity',
			'fill-rule',
			'stroke',
			'stroke-dasharray',
			'stroke-dashoffset',
			'stroke-linecap',
			'stroke-linejoin',
			'stroke-miterlimit',
			'stroke-opacity',
			'stroke-width',

			'color-interpolation',
			'color-interpolation-filters',
			'color-profile',
			'color-rendering',
			'flood-color',
			'flood-opacity',
			'lighting-color',
			'marker-start',
			'marker-mid',
			'marker-end',
			'shape-rendering',
			'stop-color',
			'stop-opacity',
		],
	},

	/**
	 * Transforms.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms#reference
	 */
	{
		// Transitions & Animation.
		properties: [
			'transition',
			'transition-delay',
			'transition-timing-function',
			'transition-duration',
			'transition-property',
			'transform', // Part of Transforms.
			'transform-origin',
			'rotate',
			'scale',
			'translate',
			'perspective',
			'perspective-origin',
			'animation', // Part of Animations.
			'animation-name',
			'animation-duration',
			'animation-play-state',
			'animation-timing-function',
			'animation-delay',
			'animation-iteration-count',
			'animation-direction',
			'will-change', // Move after Motion path.
		],
	},

	/**
	 * Transitions.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions#reference
	 */

	/**
	 * View transitions.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_view_transitions#reference
	 */

	/**
	 * Animations.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations#reference
	 */

	/**
	 * Scroll-driven animations.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations#reference
	 */

	/**
	 * Motion path.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_motion_path#reference
	 */

	/**
	 * Paged media
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_paged_media#reference
	 */
	{
		properties: [
			'break-before',
			'break-inside',
			'break-after',
			'orphans',
			'widows',
		],
	},

	/**
	 * Multi-column layout.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout#reference
	 */
]

export default propertyGroups
