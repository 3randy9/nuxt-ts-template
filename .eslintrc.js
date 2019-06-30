module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'prettier',
		'prettier/vue',
		'prettier/@typescript-eslint'
	],
	plugins: ['prettier', '@typescript-eslint'],
	// add your custom rules here
	rules: {
		"no-unused-vars": "off",
		"no-console": "off",
    "@typescript-eslint/no-unused-vars": "error",
		'prettier/prettier': [
			'error',
			{
				useTabs: true
			}
		]
	}
}
