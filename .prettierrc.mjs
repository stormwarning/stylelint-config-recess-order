export default {
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    singleAttributePerLine: true,
    endOfLine: 'auto',
    overrides: [
        {
            files: ['*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
