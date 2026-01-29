<template>
  <section class="py-20">
    <!-- Hero -->
    <div
      class="text-3xl flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <!-- hero content -->
      <div class="max-w-xl">
        <h2 class="text-3xl font-bold leading-snug">
          سلام، <br />
          من <span class="text-primary">امیدرضا</span> هستم
          <br />
          <span class="text-primary">طراح</span> و
          <span class="text-primary">توسعه‌دهنده وب</span>
        </h2>

        <p
          class="text-base my-6 dark:text-gray-300 light:text-gray-600 leading-relaxed"
        >
          من در زمینه طراحی رابط کاربری و توسعه وب با
          <span class="font-semibold">Nuxt 4</span> و
          <span class="font-semibold">NestJS</span> فعالیت می‌کنم. هدفم ساخت
          وبسایت‌های سریع، واکنش‌گرا و جذابه.
        </p>

        <div class="flex gap-4 mt-6">
          <NuxtLink to="/contacts">
            <UButton
              size="xl"
              color="primary"
              class="cursor-pointer rounded-none px-8"
              >استخدام من</UButton
            >
          </NuxtLink>

          <NuxtLink to="/projects">
            <UButton
              size="xl"
              color="primary"
              variant="outline"
              class="cursor-pointer rounded-none px-8"
              >نمونه کارها</UButton
            >
          </NuxtLink>
        </div>
      </div>

      <!-- hero image -->
      <div class="relative">
        <img src="/images/hero.png" alt="تصویر پروفایل" class="w-3xl h-auto" />
        <div
          class="border border-gray-500 flex items-center justify-center gap-3 p-3 shadow-lg bg-background/50 backdrop-blur"
        >
          <span class="w-4 h-4 bg-green-500 animate-pulse"></span>
          <p class="text-sm">
            در جست‌وجوی چالش‌های تازه و پروژه‌های خلاقانه هستم.
          </p>
        </div>
      </div>
    </div>
    <!-- Projects -->
    <home-projects />

    <!-- Skills -->
    <HomeSkills />

    <!-- About me -->
    <HomeAboutMe />

    <!-- Contact -->
    <HomeContact />
  </section>
</template>
