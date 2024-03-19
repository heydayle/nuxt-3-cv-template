import type { RouteLocationRaw } from 'vue-router'
import { NuxtApp } from '#app'
import {
  AwesomeLayoutPageNavbarMenu,
  AwesomeLayoutPageNavbarMenuDropdownItem,
} from './types'

export interface NuxtAwesomeAppConfig {
  /** title name */
  name?: string
  /** description */
  description?: string

  /** project config */
  project?: {
    /** links */
    links?: {
      /** project github link */
      github?: string
    }
  }

  /** layout config */
  layout?: {
    /** page layout */
    page?: {
      /** navbar */
      navbar?: {
        /** menus in navbar */
        menus?: AwesomeLayoutPageNavbarMenu[]
      }
    }
    /** footer */
    footer?: {
      /** footer year */
      year?: number
    }
    /** welcome component page */
    welcome?: {
      title?: string
      disableInfoReplaceIndexInWelcomePage?: boolean
      primaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
      secondaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
    }
  }

  /** author config */
  author?: {
    /** author name */
    name?: string
    /** author links */
    links?: {
      /** author github link */
      github?: string
      /** author medium link */
      medium?: string
      /** author website link */
      website?: string
    }
  }

  /** author config */
  disableInfoReplaceIndexInWelcomePage?: boolean
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    awesome?: NuxtAwesomeAppConfig
  }
}

export default defineAppConfig({
  awesome: {
    name: 'Nuxt 3 CV template',
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
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt 3 CV template',
        disableInfoReplaceIndexInWelcomePage: true,
        primaryActionButton: {
          title: 'Nuxt 3',
          to: 'https://nuxt.com/',
        },
        secondaryActionButton: {
          title: 'Github',
          to: 'https://github.com/heydayle/nuxt-3-cv-template',
        },
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
    disableInfoReplaceIndexInWelcomePage: false,
  } as NuxtAwesomeAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
})
