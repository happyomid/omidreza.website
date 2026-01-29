<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useProjectsStore } from "../../../stores/projects";

// خواندن داده‌ها از Pinia
const projectsStore = useProjectsStore();

// نمایش فقط چند پروژه‌ی اول (مثلاً 5 تا)
const projects = computed(() => projectsStore.getAll.slice(0, 5));
</script>

<template>
  <!-- heading -->
  <div class="flex items-center justify-between mb-10 gap-3 mt-20">
    <h3 class="text-2xl font-bold flex items-center gap-2">
      <span class="text-primary">#</span>
      پروژه‌ها
    </h3>
    <div class="flex-1">
      <hr class="text-primary inline-block w-full" />
    </div>
    <NuxtLink to="/projects" class="hover:text-primary"> دیدن همه ~~> </NuxtLink>
  </div>

  <!-- اسلایدر پروژه‌ها -->
  <ClientOnly>
    <Swiper
      :loop="true"
      :space-between="24"
      :breakpoints="{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      navigation
      pagination
      class="!pb-10"
    >
      <SwiperSlide v-for="project in projects" :key="project.id">
        <!-- ✅ استفاده از کامپوننت کارت پروژه -->
        <ProjectsCard :project="project" />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>
