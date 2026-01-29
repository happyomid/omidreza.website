<script setup lang="ts">
import { useProjectsStore } from '../../stores/projects'

const projectsStore = useProjectsStore()
const projects = computed(() => projectsStore.getAll)
const miniProjects = computed(() => projectsStore.getMini)
</script>

<template>
  <section class="min-h-screen px-6 py-16 space-y-24">
    <div>
      <h2 class="text-3xl font-bold">
        <span class="text-primary">/</span>
        پروژه‌ها
      </h2>
      <p class="mt-2">لیست پروژه‌های من</p>
    </div>

    <!-- پروژه‌های اصلی -->
    <h3 class="text-2xl font-bold ">
      <span class="text-primary">#</span>
      پروژه‌های تکمیل‌شده
    </h3>
    <div class="-mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ProjectsCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>

    <!-- پروژه‌های کوچک -->
    <h3 class="text-2xl font-bold ">
      <span class="text-primary">#</span>
      پروژه‌های کوچک
    </h3>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 -mt-16">
      <ProjectsSmallCard
        v-for="project in miniProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
