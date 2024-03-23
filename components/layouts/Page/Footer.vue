<script lang="ts" setup>
const { awesome } = useAppConfig()
const repo = computed(() => awesome.layout?.footer)
const isActive = ref(false)
onMounted(() => {
  setTimeout(() => {
    isActive.value = repo.value.isActive
  }, 2000)
})
</script>

<template>
  <footer
    :class="{ 'mb-[80px]': isActive }"
    class="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]"
  >
    <div v-if="repo.isDemo">
      <Transition name="try-it">
        <div
          v-if="isActive"
          class="fixed flex px-4 bottom-0 duration-[1000ms] items-center h-20 bg-white/5 transition-all w-full backdrop-filter backdrop-blur-2xl"
        >
          <div class="absolute -top-6 transform -translate-x-1/2 left-1/2">
            <button
              @click="isActive = !isActive"
            >
              <Icon name="mdi:keyboard-arrow-down" class="text-xl" />
            </button>
          </div>
          <div
            class="flex text-sm sm:text-lg justify-center items-center space-x-4 max-w-screen-2xl mx-auto"
          >
            <div class="">{{ $t('doYouWantToUse') }}</div>
            <NuxtLink
              class="block bg-primary px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-lg"
              :to="repo.link"
              target="_blank"
              title="Nuxt 3 CV template repository"
            >
              {{ $t('tryNow') }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
      <Transition name="try-it">
        <div v-if="!isActive" class="fixed bottom-0 w-full items-center">
          <div class="absolute -top-6 transform -translate-x-1/2 left-1/2">
            <button
              @click="isActive = !isActive"
            >
              <Icon name="mdi:keyboard-arrow-up" class="text-xl" />
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <div
      class="flex-1 justify-between max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400"
    >
      <div>
        Copyright ©
        {{ awesome?.layout?.footer?.year || new Date().getFullYear() }}
        {{ awesome?.author?.name || '' }}. All rights reserved.
      </div>
      <div>{{ awesome.name }}</div>
    </div>
  </footer>
</template>
<style lang="scss">
@keyframes slideInBottom {
  from {
    bottom: -200px;
  }
  to {
    bottom: 0;
  }
}
.try-it-enter-active,
.try-it-leave-active {
  bottom: 0;
  transition: all 0.5s ease;
}
.try-it-enter-from,
.try-it-leave-to {
  bottom: -100px;
}
</style>
