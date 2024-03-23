<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})
const currentStyle = toRef(props, 'type')
const { locale } = useI18n()
const availableLanguage = [
  {
    name: 'English',
    code: 'en',
    icon: 'flagpack:gb-ukm',
  },
  {
    name: 'Việt Nam',
    code: 'vi',
    icon: 'twemoji:flag-vietnam',
  },
]
</script>

<template>
  <div class="flex items-center">
    <HeadlessListbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="locale"
      as="div"
      class="relative flex items-center"
    >
      <HeadlessListboxLabel class="sr-only">Languages</HeadlessListboxLabel>
      <HeadlessListboxButton type="template">
        <AwesomeLink class="dark:text-gray-400 text-gray-600">
          <Icon name="uil:language" />
        </AwesomeLink>
      </HeadlessListboxButton>
      <HeadlessListboxOptions
        class="p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
      >
        <HeadlessListboxOption
          v-for="lang in availableLanguage"
          :key="lang.code"
          :value="lang.code"
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
              locale === lang.code,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30': locale !== lang.code,
          }"
        >
          <span class="text-sm mr-2 mt-.5 flex items-center">
            <Icon :name="lang.icon" />
          </span>
          {{ lang.name }}
        </HeadlessListboxOption>
      </HeadlessListboxOptions>
    </HeadlessListbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="locale"
      class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <option
        v-for="theme in availableLanguage"
        :key="theme.code"
        :value="theme.code"
      >
        {{ theme.name }}
      </option>
    </select>
  </div>
</template>
