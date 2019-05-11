module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/vue'
	],
	plugins: ['prettier', '@typescript-eslint'],
	// add your custom rules here
	rules: {
		"no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
		'prettier/prettier': [
			'error',
			{
				useTabs: true
			}
		]
	}
}
