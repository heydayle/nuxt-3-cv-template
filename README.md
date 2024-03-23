[![Alpine](./public/cover.png)](https://nuxtcvtemplate.vercel.app/)

The Nuxt CV Template is a simple CV designed to help you present essential information including `Personal Information`, `Summary`, `Work Experience`, `Skills`, `Education`, `Projects`, etc. Employers can use this template to evaluate and assess your overall capabilities.

All you need to do is fill in the correct information within the variables configured in the `app.config.ts` file. After that, you simply need to deploy it to your domain to see the results.


- 📖&nbsp; [Demo](https://nuxtcvtemplate.vercel.app/)

#### Using with Direct Clone

You can direct to clone this repository.

- clone this repository
  ```bash
  git clone https://github.com/heydayle/nuxt-3-cv-template
  ```
- install dependencies
  ```bash
  pnpm install
  ```
- run development server
  ```bash
  pnpm dev
  ```
### After installing, you should:

>- Update property `curriculumVitae` in `app.config.ts` (Full language)
>- Update `thumbnail.png` (overwrite image, don't change name) in folder `./public`

> **NOTES**
>
> - This project using "pnpm" or "bun" as package manager
> - Support locales (default: en, vi; You can add new language in `nuxt.config.ts` with [i18n](https://i18n.nuxtjs.org/docs/))
> - Support SSR and SEO
> - The og:title of socials sharing using `Fullname`
> - The og:description of socials sharing using `Summary`
> - You can change these others info in `app.config.ts`
