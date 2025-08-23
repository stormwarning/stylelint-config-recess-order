const order = [
    [
        'custom-properties',

        /**
         * @property
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@property
         */
        {
            type: 'at-rule',
            name: 'property',
            hasBlock: true,
        },

        /**
         * @function
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@function
         */
        {
            type: 'at-rule',
            name: 'function',
            hasBlock: true,
        },

        /**
         * @layer
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@layer
         */
        {
            type: 'at-rule',
            name: 'layer',
            hasBlock: true,
        },

        /**
         * Tailwind's @apply directive
         * @see https://tailwindcss.com/docs/functions-and-directives#apply-directive
         */
        {
            type: 'at-rule',
            name: 'apply',
            hasBlock: false,
        },

        'declarations',

        /**
         * Tree-structural` :root` pseudo-class
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:root
         */
        {
            type: 'rule',
            selector: '^&:root',
        },

        /**
         * Shadow-structural pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#shadow-structural_pseudo-classes
         */
        {
            type: 'rule',
            selector: '^&:(host|host-context|has-slotted)',
        },

        /**
         * Typographic pseudo-elements
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#typographic_pseudo_elements
         */
        {
            type: 'rule',
            selector: '^&::(first-line|first-letter|cue)',
        },

        /**
         * Highlight pseudo-elements
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#highlight_pseudo_elements
         */
        {
            type: 'rule',
            selector: '^&::(selection|target-text|spelling-error|grammar-error|highlight)',
        },

        /**
         * Tree-abiding pseudo-element '&::before'
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::before
         */
        {
            type: 'rule',
            selector: '^&::before',
        },

        /**
         * Tree-abiding pseudo-element '&::after'
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::after
         */
        {
            type: 'rule',
            selector: '^&::after',
        },

        /**
         * All other tree-abiding pseudo-elements
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#tree-abiding_pseudo-elements
         */
        {
            type: 'rule',
            selector: '^&::(column|marker|backdrop|scroll-button|scroll-marker|scroll-marker-group)',
        },

        /**
         * Element-backed pseudo-elements
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#element-backed_pseudo_elements
         */
        {
            type: 'rule',
            selector: '^&::(details-content|part|slotted)',
        },

        /**
         * Form-related pseudo-elements
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#form-related_pseudo_elements
         */
        {
            type: 'rule',
            selector: '^&::(checkmark|file-selector-button|picker|picker-icon|placeholder)',
        },

        /**
         * View-transition pseudo-elements
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements#view-transition_pseudo_elements
         */
        {
            type: 'rule',
            selector:
                '^&::(view-transition|view-transition-image-pair|view-transition-group|view-transition-new|view-transition-old)',
        },

        /**
         * Universal selectors '*'
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors
         */
        {
            type: 'rule',
            selector: '^\\*',
        },

        /**
         * Child-elements like '.example'
         */
        {
            type: 'rule',
            selector: '^[^&\\+~]*[^:&]$',
        },

        /**
         * Next-sibling combinator like '+ .example'
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Next-sibling_combinator
         */
        {
            type: 'rule',
            selector: '^\\+',
        },

        /**
         * Subsequent-sibling combinator like '~ .example'
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Subsequent-sibling_combinator
         */
        {
            type: 'rule',
            selector: '^~',
        },

        /**
         * Elemental pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#elemental_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(defined|heading)',
        },

        /**
         * Element display state pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(open|popover-open|modal|fullscreen|picture-in-picture)',
        },

        /**
         * Input pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#input_pseudo_classes
         */
        {
            type: 'rule',
            selector:
                '^&:(enabled|disabled|read-only|read-write|placeholder-shown|autofill|default|checked|indeterminate|blank|valid|invalid|in-range|out-of-range|required|optional|user-valid|user-invalid)',
        },

        /**
         * Linguistic pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#linguistic_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(dir|lang)',
        },

        /**
         * Location pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#location_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(any-link|link|visited|local-link|target|target-within|scope)',
        },

        /**
         * Resource state pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#resource_state_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(playing|paused|seeking|buffering|stalled|muted|volume-locked)',
        },

        /**
         * Time-dimensional pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(current|past|future)',
        },

        /**
         * User action pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#user_action_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(hover|active|focus|focus-visible|focus-within|target-current)',
        },

        /**
         * User action pseudo-classes like '@variant hoverfocus', '@variant mouse' and '@variant touch'
         * @see https://github.com/argyleink/open-props/blob/main/src/props.media.css
         * @see https://tailwindcss.com/docs/hover-focus-and-other-states#registering-a-custom-variant
         */
        {
            type: 'at-rule',
            name: 'variant',
            parameter: '(hover|focus|hoverfocus|mouse|touch)',
            hasBlock: true,
        },

        /**
         * Modifiers like '&.example' and tree-structural and functional pseudo-classes
         * Although `:root` is technically part of tree-structural pseudo-classes,
         * it is placed above the shadow-structural pseudo-classes.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo_classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#functional_pseudo_classes
         */
        {
            type: 'rule',
            selector:
                '^&((\\.|\\[)|(.*(empty|nth-child|nth-last-child|first-child|last-child|nth-of-type|nth-last-of-type|first-of-type|last-of-type|only-of-type|is|not|where|has)).*)',
        },

        /**
         * Custom state pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#custom_state_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(state)',
        },

        /**
         * Page pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#page_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(left|right|first|blank)',
        },

        /**
         * View transition pseudo-classes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#view_transition_pseudo_classes
         */
        {
            type: 'rule',
            selector: '^&:(active-view-transition|active-view-transition-type)',
        },

        /**
         * Parent-modifiers like '.example &'
         */
        {
            type: 'rule',
            selector: '&$',
        },

        /**
         * Keyframes
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
         */
        {
            type: 'at-rule',
            name: 'keyframes',
        },

        /**
         * Container queries like '@container scroll-state(stuck: top)'
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries
         */
        {
            type: 'at-rule',
            name: 'container',
            hasBlock: true,
        },

        /**
         * @scope
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@scope
         */
        {
            type: 'at-rule',
            name: 'scope',
            hasBlock: true,
        },

        /**
         * Tailwind media-queries like '@variant xl' and '@variant motionOK'
         * @see https://tailwindcss.com/docs/responsive-design
         * @see https://tailwindcss.com/docs/hover-focus-and-other-states#registering-a-custom-variant
         */
        {
            type: 'at-rule',
            name: 'variant',
            parameter: '(?!hover|focus|hoverfocus|mouse|touch)',
            hasBlock: true,
        },

        /**
         * All other media queries like '@media (width > 1472px)'
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries
         */
        {
            type: 'at-rule',
            name: 'media',
            hasBlock: true,
        },
    ],
    {
        unspecified: 'ignore',
    },
];

export default order;
