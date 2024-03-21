<script setup lang="ts">
// #region [Data]

import type { Education } from "~/utils/curriculumVitae";

const { awesome } = useAppConfig()
const education = computed(
  () => awesome?.curriculumVitae?.education as Education,
)
// #endregion
const url = useRequestURL()
</script>
<template>
  <div class="h-fit">
    <div v-if="education">
      <div class="">
        <h2 class="leading-normal text-[32px] title-blue">
          {{ $t('education') }}
        </h2>
      </div>
      <div>
        <div class="font-bold text-2xl">{{ education.title }}</div>
        <div class="font-semibold text-gray-400">
          <span>{{ education.school }}</span>,
          <span>{{ education.scholastic }}</span>
        </div>
      </div>
    </div>
    <div v-else class="font-bold text-red underline">
      Please add education in app config
    </div>
  </div>
</template>
