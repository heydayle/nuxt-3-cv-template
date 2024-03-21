<script setup lang="ts">
// #region [Data]
import type { Company } from '~/utils/curriculumVitae'

const { awesome } = useAppConfig()
const works = computed(
  () => awesome?.curriculumVitae?.workExperience as Company[],
)
// #endregion
const url = useRequestURL()
</script>
<template>
  <div class="mx-auto px-4 xl:px-0 h-fit mt-4 border-b border-b-gray-300">
    <div v-if="works">
      <div class="">
        <h2 class="leading-normal text-[32px] title-blue">
          {{ $t('workExperience') }}
        </h2>
      </div>
      <div class="p-4 grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div
          v-for="(item, index) in works"
          :key="index"
          class="max-w-[600px]"
          :class="{
            'border-b border-b-white pb-4 xl:border-b-0':
              index !== works.length - 1,
          }"
        >
          <p class="font-bold text-xl xl:text-2xl">{{ item.position }}</p>
          <p class="mb-2 font-semibold text-gray-400">
            <span>{{ item.companyName }}</span
            >, <span>{{ item.startDate }}</span> -
            <span>{{ item.endDate }}</span>
          </p>
          <div class="font-semibold">{{ $t('description') }}:</div>
          <ul class="pl-4">
            <li
              v-for="(desc, index) in item.description"
              :key="index"
              class="list-disc"
            >
              {{ desc }}
            </li>
          </ul>
          <div>
            <span class="font-semibold">{{ $t('projects') }}: </span>
            <span>{{ item.projects }}</span>
          </div>
          <div>
            <span class="font-semibold">{{ $t('Technologies') }}: </span>
            <span class="whitespace-pre-wrap break-all">{{
              item.technologies
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="font-bold text-red underline">
      Please add work experience in app config
    </div>
  </div>
</template>
