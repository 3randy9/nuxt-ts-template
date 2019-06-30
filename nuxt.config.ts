// import NuxtConfiguration from '@nuxt/config'
import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
	srcDir: 'src/',
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'nuxt-ts-template',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'description' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },

	/*
	 ** Global CSS
	 */
	css: [],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/eslint-module'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		postcss: {
			plugins: {
				'postcss-preset-env': {
					autoprefixer: { grid: true }
				}
			}
		},
		extend(config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				if (!config.module) return
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}

export default config
