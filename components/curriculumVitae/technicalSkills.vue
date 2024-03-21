<script setup lang="ts">
// #region [Data]

const { awesome } = useAppConfig()
const technologies = computed(
  () => awesome?.curriculumVitae?.technologies as string[],
)
// #endregion
const url = useRequestURL()
</script>
<template>
  <div class="h-fit">
    <div v-if="technologies">
      <div class="">
        <h2 class="leading-normal text-[32px] title-blue">
          {{ $t('technicalSkills') }}
        </h2>
      </div>
      <ul class="ml-6">
        <li
          v-for="(item, index) in technologies"
          :key="index"
          class="list-disc"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-else class="font-bold text-red underline">
      Please add technologies in app config
    </div>
  </div>
</template>
