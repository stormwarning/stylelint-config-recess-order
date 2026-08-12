module.exports = {
	extends: '@zazen/eslint-config',
	overrides: [
		{
			files: ['tools/**/*.js'],
			rules: {
				'import/no-extraneous-dependencies': [
					'error',
					{ devDependencies: true },
				],
				'no-console': 'off',
			},
		},
	],
}
