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
    name: 'CV Template',
    description:
      'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
    project: {
      links: {
        github: 'https://github.com/heydayle',
        linkedin: 'https://www.linkedin.com/in/thinhle99',
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
        website: 'https://thinh.io.vn',
        linkedin: 'https://www.linkedin.com/in/thinhle99',
      },
    },
    disableInfoReplaceIndexInWelcomePage: false,
    curriculumVitae: {
      information: {
        fullName: 'Nuxt 3 CV Template',
        position: 'by Heyday Lê',
        dateOfBirth: '10/03/2024',
        email: 'tatheyday@gmail.com',
        phoneNumber: '(+84) 6969696969',
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
          companyName: 'Heyday Technologies',
          startDate: 'Jan 2022',
          endDate: 'Feb 2024',
          position: 'Front-End Developer',
          description: [
            'Main development in Nuxt 3 CV Template projects.',
            'Mentor and main development in Nuxt 3 CV Template project.',
          ],
          projects: 'Nuxt 3 CV Template',
          technologies:
            'Vue 3, Nuxt 3, HTML, SCSS, Tailwind CSS, Vuetify, Element UI, Tailwind CSS, and RESTful API.',
        },
        {
          companyName: 'Heyday Technologies',
          startDate: 'Jan 2022',
          endDate: 'Feb 2024',
          position: 'Front-End Developer',
          description: [
            'Main development in Nuxt 3 CV Template projects.',
            'Mentor and main development in Nuxt 3 CV Template project.',
          ],
          projects: 'Nuxt 3 CV Template',
          technologies:
            'Vue 3, Nuxt 3, HTML, SCSS, Tailwind CSS, Vuetify, Element UI, Tailwind CSS, and RESTful API.',
        },
        {
          companyName: 'Heyday Technologies',
          startDate: 'Jan 2022',
          endDate: 'Feb 2024',
          position: 'Front-End Developer',
          description: [
            'Main development in Nuxt 3 CV Template projects.',
            'Mentor and main development in Nuxt 3 CV Template project.',
          ],
          projects: 'Nuxt 3 CV Template',
          technologies:
            'Vue 3, Nuxt 3, HTML, SCSS, Tailwind CSS, Vuetify, Element UI, Tailwind CSS, and RESTful API.',
        },
      ],
      technologies: [
        'Programming languages: Javascript, Typescript, HTML, CSS, SASS',
        'Frameworks/ Platforms: Vue JS, Vuetify, Element UI, Tailwind, Bootstrap, NUXT, React JS, Redux, React Native',
        'Database: MongoDB, Azure SQL, My SQL',
        'Version Control: Git (Gitlab & Github & Azure Devops)',
        'Others: Firebase',
      ],
      education: {
        title: 'Bachelor of Information Technology',
        school: 'School Technical College',
        scholastic: '2017 - 2020',
      },
      projects: [
        {
          name: 'Nuxt 3 CV Template',
          partner: 'Product',
          position: 'Front-End Developer',
          description: [
            'The Nuxt CV Template is a simple CV designed to help you present essential information including Personal Information, Summary, Work Experience, Skills, Education, Projects, etc. Employers can use this template to evaluate and assess your overall capabilities.',
          ],
          startDate: 'March 10, 2024',
          endDate: 'Current',
          teamSize: 1,
          developmentMethodologies: '',
          tools: 'Webstorm',
          technologies: 'Vue 3, Nuxt 3, HTML, SCSS, Tailwind CSS',
          achievement: ['Nuxt 3 CV Template'],
          release: 'Nuxt 3 CV Template production',
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
