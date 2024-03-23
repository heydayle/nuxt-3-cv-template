<script lang="ts" setup>
import Personal from '~/components/curriculumVitae/Personal.vue'
import WorkExperience from '~/components/curriculumVitae/workExperience.vue'
import TechnicalSkills from '~/components/curriculumVitae/technicalSkills.vue'
import Education from '~/components/curriculumVitae/education.vue'
import Projects from '~/components/curriculumVitae/projects.vue'

const { awesome } = useAppConfig()
const { locale } = useI18n()
definePageMeta({ layout: 'page' })
const html = {
  lang: locale.value,
}
const linkData = [
  {
    rel: 'canonical',
    href: `https://nuxtcvtemplate.vercel.app/`,
  },
  {
    rel: 'icon',
    type: 'image/ico',
    href: '/favicon.ico',
  },
  {
    rel: 'image_src',
    href: '/thumbnail.png',
  },
]
useHead({
  title: awesome?.name || 'Nuxt 3 Awesome Starter',
  htmlAttrs: html,
  link: linkData,
})
</script>

<template>
  <div class="mx-auto w-screen xl:w-auto">
    <DelayHydration>
      <Personal />
      <WorkExperience />
      <div
        class="py-4 px-4 2xl:px-0 grid grid-cols-1 xl:grid-cols-2 gap-4 border-b border-b-gray-300"
      >
        <TechnicalSkills />
        <Education />
      </div>
      <Projects />
    </DelayHydration>
  </div>
</template>
