import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
  awesome: {
    name: 'Nuxt 3 CV Template',
    description: 'A CV template using app config',
    project: {
      links: {
        github: 'https://github.com/heydayle/nuxt-3-cv-template',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Blank', to: { name: 'blank' } },
            { type: 'link', title: 'Post', to: { name: 'post' } },
            { type: 'link', title: 'Test', to: { name: 'test' } },
            {
              type: 'dropdown',
              title: 'Documentations',
              children: [
                {
                  type: 'link',
                  title: 'Components',
                  to: { name: 'docs-components' },
                },
              ],
            },
            { type: 'button', title: 'Setting', to: { name: 'setting' } },
            // dynamic title
            // {
            //   type: 'button',
            //   title: (nuxt) =>
            //     (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            //   to: (nuxt) => (nuxt._appConfig as AppConfigInput)?.awesome?.name || '',
            // },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt&nbsp;3 CV Template',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'heyday',
      links: {
        github: 'https://github.com/heydayle',
        medium: 'https://viandwi24.medium.com',
        website: 'https://thinh.io.vn',
      },
    },
  },
})
