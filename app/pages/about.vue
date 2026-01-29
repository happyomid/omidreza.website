<template>
  <section class="min-h-screen px-6 py-16 space-y-24">
    <!-- /about-me -->
    <div>
      <div>
        <h2 class="text-3xl font-bold">
          <span class="text-primary">/</span>
          درباره من
        </h2>
        <p class="mt-2">من چه کسی هستم؟</p>
      </div>

      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p class="leading-relaxed mb-4">
            👋 سلام، من <strong>امیدرضا</strong> هستم!
          </p>
          <p class="leading-relaxed mb-4">
            دانشجوی <strong>مهندسی نرم‌افزار</strong> و توسعه‌دهنده‌ی وب.
            وب‌سایت‌های مدرن، سریع و کاربرپسند می‌سازم — از طراحی تا پیاده‌سازی.
          </p>
          <p class="leading-relaxed mb-4">
            تمرکز من بر ترکیب خلاقیت با منطق برنامه‌نویسی است؛ همیشه در حال
            یادگیری تکنولوژی‌های جدید و ساخت تجربه‌های دیجیتال مؤثر هستم.
          </p>
          <p class="leading-relaxed">
            🔭 در حال حاضر با <strong>Nuxt، TypeScript</strong> و
            <strong>NestJS</strong> کار می‌کنم و هم‌زمان
            <strong>Python</strong> و <strong>یادگیری ماشین</strong> را دنبال
            می‌کنم.
          </p>
        </div>

        <div class="flex justify-center">
          <img
            src="/images/about.png"
            alt="OmidReza"
            class="w-72 h-auto opacity-80 hover:opacity-100 transition-all duration-500"
          />
        </div>
      </div>
    </div>

    <!-- #skills -->
    <div>
      <!-- heding -->
      <div class="flex items-center justify-between mb-10 gap-3 mt-20">
        <h3 class="text-2xl font-bold flex items-center gap-2">
          <span class="text-primary">#</span>
          مهارت ها
        </h3>
        <div class="flex-1">
          <hr class="text-primary inline-block w-full md:w-96" />
        </div>
      </div>
      <!-- box -->
      <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
        <div class="border border-gray-700">
          <h3
            class="font-semibold mb-2 py-2 border-b border-gray-700 text-center"
          >
            زبان برنامه نویسی
          </h3>
          <div class="p-3 flex gap-1 flex-wrap">
            <p>TypeScript</p>
            <p>JavaScript</p>
            <p>Python</p>
          </div>
        </div>

        <div class="border border-gray-700">
          <h3
            class="font-semibold mb-2 py-2 border-b border-gray-700 text-center"
          >
            دیگر
          </h3>
          <div class="p-3 flex gap-1 flex-wrap">
            <p>HTML</p>
            <p>CSS</p>
            <p>SCSS</p>
            <p>REST</p>
            <p>Jinja</p>
          </div>
        </div>

        <div class="border border-gray-700">
          <h3
            class="font-semibold mb-2 py-2 border-b border-gray-700 text-center"
          >
            ابزار ها
          </h3>
          <div class="p-3 flex gap-1 flex-wrap">
            <p>VSCode</p>
            <p>Figma</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>Docker</p>
          </div>
        </div>

        <div class="border border-gray-700">
          <h3
            class="font-semibold mb-2 py-2 border-b border-gray-700 text-center"
          >
            پایگاه داده
          </h3>
          <div class="p-3 flex gap-1 flex-wrap">
            <p>SQL</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
          </div>
        </div>

        <div class="border border-gray-700">
          <h3
            class="font-semibold mb-2 py-2 border-b border-gray-700 text-center"
          >
            کتاب خانه ها
          </h3>
          <div class="p-3 flex gap-1 flex-wrap">
            <p>Nuxt</p>
            <p>Vue</p>
            <p>NestJS</p>
            <p>Express.js</p>
          </div>
        </div>
      </div>
    </div>

    <!-- #fun-facts -->
    <div>
      <!-- heding -->
      <div class="flex items-center justify-between mb-10 gap-3 mt-20">
        <h3 class="text-2xl font-bold flex items-center gap-2">
          <span class="text-primary">#</span>
         دانستی ها جالب درباره من
        </h3>
        <div class="flex-1">
          <hr class="text-primary inline-block w-full md:w-20" />
        </div>
      </div>
      <div class="flex flex-wrap gap-3 text-sm">
        <span class="border border-gray-700 px-4 py-2"
          >🥋 اهل جودو هستم و از تمرین منظم لذت می‌برم</span
        >
        <span class="border border-gray-700 px-4 py-2"
          >🎮 بازی‌های استراتژیک و طراحی ابزارهای گیمینگ رو دوست دارم</span
        >
        <span class="border border-gray-700 px-4 py-2"
          >☕ یادگیری با استراحت‌های کوتاه خلاقیتم رو بیشتر می‌کنه</span
        >
        <span class="border border-gray-700 px-4 py-2"
          >🎨 طراحی رابط در Figma یکی از تفریحات جدی منه</span
        >
      </div>
    </div>
  </section>
</template>
