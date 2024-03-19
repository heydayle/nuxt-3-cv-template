import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'Nuxt 3 CV Template',
      description:
        'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
      project: {
        links: {
          github: 'https://thinh.io.vn',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [],
          },
        },
        footer: {
          year: 2023,
        },
        welcome: {
          title: 'CV Template',
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: 'heyday',
        links: {
          github: 'https://github.com/heydayle',
          medium: '#',
          website: 'https://thinh.io.vn',
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})
