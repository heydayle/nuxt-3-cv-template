<script setup lang="ts">
// #region [Data]
import type { Project } from '~/utils/curriculumVitae'

const { awesome } = useAppConfig()
const { locale } = useI18n()
const projects = computed(() => awesome?.curriculumVitae[locale.value]?.projects as Project)
// #endregion
const url = useRequestURL()
</script>
<template>
  <div class="mx-auto px-4 2xl:px-0 h-fit mt-4">
    <div v-if="projects">
      <div class="">
        <h2 class="leading-normal text-[32px] title-blue">
          {{ $t('projects') }}
        </h2>
      </div>
      <div class="p-4 grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div
          v-for="(item, index) in projects"
          :key="index"
          class="max-w-[600px]"
          :class="{
            'border-b border-b-white pb-4 xl:border-b-0':
              index !== projects.length - 1,
          }"
        >
          <p class="font-bold text-xl xl:text-2xl">{{ item.name }}</p>
          <p class="mb-2 font-semibold text-gray-400">
            <span>{{ item.startDate }}</span> -
            <span>{{ item.endDate }}</span>
          </p>
          <div>
            <span class="font-bold">{{ $t('Partner') }}: </span>
            <span>{{ item.partner }}</span>
          </div>
          <div v-if="item.description">
            <div class="font-semibold">{{ $t('description') }}:</div>
            <div class="px-2">
              <li v-for="desc in item.description">{{ desc }}</li>
            </div>
          </div>
          <div v-if="item.teamSize">
            <span class="font-semibold">{{ $t('teamSize') }}:</span>
            <span class="px-2">{{ item.teamSize }}</span>
          </div>
          <div v-if="item.developmentMethodologies">
            <span class="font-semibold"
              >{{ $t('developmentMethodologies') }}:</span
            >
            <span class="px-2">{{ item.developmentMethodologies }}</span>
          </div>
          <div v-if="item.tools">
            <span class="font-semibold">{{ $t('tools') }}:</span>
            <span class="px-2">{{ item.tools }}</span>
          </div>
          <div v-if="item.technologies">
            <span class="font-semibold">{{ $t('technologies') }}:</span>
            <span class="px-2">{{ item.technologies }}</span>
          </div>
          <div v-if="item.achievement">
            <div class="font-semibold">{{ $t('achievement') }}:</div>
            <div class="px-2">
              <li v-for="achiev in item.achievement">{{ achiev }}</li>
            </div>
          </div>
          <div v-if="item.release">
            <span class="font-semibold">{{ $t('release') }}:</span>
            <span class="px-2">{{ item.release }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="font-bold text-red underline">
      Please add projects in app config
    </div>
  </div>
</template>
