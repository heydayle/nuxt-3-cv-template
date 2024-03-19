<script lang="ts" setup>
import Personal from "~/components/curriculumVitae/Personal.vue";

const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt 3 Awesome Starter' })
</script>

<template>
  <Personal />
</template>
