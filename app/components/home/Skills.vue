<script setup lang="ts">
const skills = [
  {
    category: "زباهای برنامه نویسی",
    items: ["TypeScript", "Lua", "Python", "JavaScript"],
  },
  {
    category: "پایگاه داده",
    items: ["SQLite", "PostgreSQL", "Mongo"],
  },
  {
    category: "ابزار ها",
    items: [
      "VSCode",
      "Neovim",
      "Linux",
      "Figma",
      "XFCE",
      "Arch",
      "Git",
      "Font Awesome",
    ],
  },
  {
    category: "دیگر مهارت ها",
    items: ["HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"],
  },
  {
    category: "فریمورک ها",
    items: [
      "React",
      "Vue",
      "Dsnake",
      "Discord.js",
      "Flask",
      "Express.js",
      "Nodejs",
      "Nestjs",
    ],
  },
];
</script>

<template>
  <section>
    <!-- heding -->
    <div class="flex items-center justify-between mb-10 gap-3 mt-20">
      <h3 class="text-2xl font-bold flex items-center gap-2">
        <span class="text-primary">#</span>
        مهارت ها
      </h3>
      <div class="flex-1">
        <hr class="text-primary inline-block w-full md:w-xl" />
      </div>
    </div>
    <div class="relative flex flex-col md:flex-row gap-10">
      <!-- باکس‌های مهارت -->
      <div class="flex-[2] flex flex-wrap gap-4">
        <div
          v-for="(skill, idx) in skills"
          :key="idx"
          class="border border-gray-500 text-sm w-fit"
        >
          <!-- تیتر -->
          <div class="px-3 py-1 font-semibold border-b border-gray-500">
            {{ skill.category }}
          </div>
          <!-- آیتم‌ها -->
          <ul
            class="px-3 py-2 space-y-1 flex flex-wrap gap-2 dark:text-gray-300 text-gray-600"
          >
            <li v-for="item in skill.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>

      <!-- بخش تزئینی سمت چپ -->
      <ClientOnly>
        <div class="flex-1 relative hidden md:block">
          <!-- نقطه‌چین بالا -->
          <div class="grid grid-cols-4 gap-2 absolute top-0 left-8">
            <span v-for="i in 16" :key="i" class="w-1 h-1 bg-gray-400"></span>
          </div>

          <!-- مربع -->
          <div
            class="w-20 h-20 border-2 border-gray-400 absolute top-20 left-40"
          ></div>

          <!-- نقطه‌چین دیگر -->
          <div class="grid grid-cols-4 gap-2 absolute top-60 left-16">
            <span v-for="i in 16" :key="i" class="w-1 h-1 bg-primary"></span>
          </div>

          <!-- نقطه‌چین دیگر -->
          <div class="grid grid-cols-4 gap-2 absolute top-45 left-80">
            <span v-for="i in 16" :key="i" class="w-1 h-1 bg-gray-400"></span>
          </div>

          <!-- مربع کوچک -->
          <div
            class="w-10 h-10 border-2 border-primary absolute top-10 left-80"
          ></div>
        </div>
      </ClientOnly>
    </div>
  </section>
</template>
