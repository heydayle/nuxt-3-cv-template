import type { RouteLocationRaw } from 'vue-router'
import type { NuxtApp } from '#app'
import type { AwesomeLayoutPageNavbarMenu } from '~/utils/types'
import type {
  Personal,
  Summary,
  Education,
  Project,
  Company,
} from '~/utils/curriculumVitae'

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

  curriculumVitae?: {
    information: Personal
    summary?: Summary
    workExperience: Company[] | null
    technologies: string[] | string
    education?: Education
    projects: Project[] | null
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
    name: 'Thinh Le',
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
        title: 'Thinh Le',
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
    curriculumVitae: {
      information: {
        fullName: 'Le Duong Hung Thinh',
        position: 'Front-End Developer',
        dateOfBirth: '01/01/1999',
        email: 'hungthinh.ckc@gmail.com',
        phoneNumber: '00000000000',
      },
      summary: {
        about: 'string',
        summary: [
          'Over 4 years of experience in technology, proficient in Vue JS and React JS frameworks.',
          'Over 2 years of experience in technology, proficient in Nuxt frameworks.',
          'Knowledge of server-side rendering and SEO optimization.',
          'Demonstrated proficiency in developing user-centric web applications and content management systems.',
          'Expertise in integrating and leveraging analytics tools for enhanced data insights and marketing strategies.',
          'Specialized in optimizing web performance, particularly for mobile platforms, to enhance user experience.',
        ],
        // if using string, separated by semicolons(;)
      },
      workExperience: [
        {
          companyName: 'Ycomm',
          startDate: 'March 11, 2024',
          endDate: 'Current',
          position: 'Front-End Developer',
          description: '',
          projects: 'Auto translate',
          technologies: 'Nuxt 3, Vue 3',
        },
      ],
      technologies: 'Nuxt 3, Vue 3',
      education: {
        title: 'Software Engeneer',
        school: 'Cao Thang Technical College',
        scholastic: '2017 - 2020',
      },
      projects: [
        {
          name: 'Auto Translate',
          partner: 'Product',
          position: 'Front-End Developer',
          description: 'Lorem isum...',
          startDate: 'March 11, 2024',
          endDate: 'Current',
          teamSize: 14,
          developmentMethodologies: '',
          tools: 'Webstorm',
          technologies: 'Nuxt 3, Vue 3',
          achievement: ['Your Result'],
          release: 'Web production',
        },
      ],
    },
  } as NuxtAwesomeAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
})
