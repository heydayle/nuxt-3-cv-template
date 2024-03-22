<script lang="ts" setup>
import Personal from '~/components/curriculumVitae/Personal.vue'
import WorkExperience from '~/components/curriculumVitae/workExperience.vue'
import TechnicalSkills from '~/components/curriculumVitae/technicalSkills.vue'
import Education from '~/components/curriculumVitae/education.vue'
import Projects from '~/components/curriculumVitae/projects.vue'

const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt 3 Awesome Starter' })
</script>

<template>
  <div class="mx-auto w-screen xl:w-auto">
    <Personal />
    <WorkExperience />
    <div
      class="py-4 px-4 2xl:px-0 grid grid-cols-1 xl:grid-cols-2 gap-4 border-b border-b-gray-300"
    >
      <TechnicalSkills />
      <Education />
    </div>
    <Projects />
  </div>
</template>
