// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  typescript: {
		typeCheck: true
	},
	css: [
    '@/assets/style/main.css',
    '@/assets/style/animation.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/assets/style/variables.scss';\n`
        }
      }
    }
  },
  app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
			]
		}
	},
	googleFonts: {
    families: {
			Roboto: true,
			Staatliches: true,
		}
	},
  modules: ['@nuxtjs/i18n', '@nuxt/icon', '@nuxtjs/google-fonts', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt']
})