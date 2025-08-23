export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 150],
        'body-case': [0, 'always', 'lower-case'],
        'body-max-line-length': [2, 'always', Infinity],
    },
};
