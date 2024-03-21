<script lang="ts" setup>
import Personal from '~/components/curriculumVitae/Personal.vue'
import WorkExperience from '~/components/curriculumVitae/workExperience.vue'
import TechnicalSkills from '~/components/curriculumVitae/technicalSkills.vue'
import Education from '~/components/curriculumVitae/education.vue'
import Projects from "~/components/curriculumVitae/projects.vue";

const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt 3 Awesome Starter' })
</script>

<template>
  <div class="mx-auto">
    <Personal />
    <WorkExperience />
    <div
      class="py-4 grid grid-cols-[600px,1fr] gap-4 border-b border-b-gray-300"
    >
      <TechnicalSkills />
      <Education />
    </div>
    <Projects />
  </div>
</template>
