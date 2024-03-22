[![Alpine](./public/cover.png)](https://nuxtcvtemplate.vercel.app/)

The Nuxt CV Template is a simple CV designed to help you present essential information including `Personal Information`, `Summary`, `Work Experience`, `Skills`, `Education`, `Projects`, etc. Employers can use this template to evaluate and assess your overall capabilities.

All you need to do is fill in the correct information within the variables configured in the `app.config.ts` file. After that, you simply need to deploy it to your domain to see the results.


- 📖&nbsp; [Demo](https://nnuxtcvtemplate.vercel.app/)

> **NOTES**
>
> - This Project using "pnpm" or "bun" as package manager
> - Support SSR and SEO

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
#### After installing, you should:

>- Update `app.config.ts`
>- The og:title of socials sharing using `Fullname`
>- The og:description of socials sharing using `Summary`
>- Update `thumbnail.png` (overwrite image, don't change name) in folder `./public`
