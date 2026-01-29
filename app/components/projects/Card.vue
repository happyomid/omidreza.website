<script setup lang="ts">
defineProps<{
  project: {
    id: number | string
    title: string
    desc: string
    image: string
    stack: string[]
    buttons: { text: string; link: string; type: 'primary' | 'secondary' }[]
  }
}>()
</script>

<template>
  <section>
    <div
      class="overflow-hidden border flex flex-col transition-all duration-300 shadow-md hover:shadow-xl border-gray-500 bg-white dark:bg-[#1e1e1e]"
    >
      <!-- تصویر پروژه -->
      <div class="h-50 w-full overflow-hidden">
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <!-- تکنولوژی‌ها -->
      <div class="px-3 py-2 text-sm border-t border-b border-gray-500 text-gray-600 dark:text-gray-300">
        {{ project.stack.join(" - ") }}
      </div>

      <!-- محتوا -->
      <div class="flex-1 px-4 py-3">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white">
          {{ project.title }}
        </h3>
        <p class="text-sm opacity-80 mt-1 text-gray-700 dark:text-gray-300">
          {{ project.desc }}
        </p>
      </div>

      <!-- دکمه‌ها -->
      <div class="flex gap-2 px-4 pb-4">
        <a
          v-for="(btn, j) in project.buttons"
          :key="j"
          :href="btn.link"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-1.5 text-sm font-semibold transition-colors"
          :class="
            btn.type === 'primary'
              ? 'bg-primary text-white hover:bg-primary/80'
              : 'border border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20'
          "
        >
          {{ btn.text }}
        </a>
      </div>
    </div>
  </section>
</template>
