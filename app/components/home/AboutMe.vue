<template>
  <section class="py-20">
    <!-- heding -->
    <div class="flex items-center justify-between mb-10 gap-3 mt-20">
      <h3 class="text-2xl font-bold flex items-center gap-2">
        <span class="text-primary">#</span>
        درباره من
      </h3>
      <div class="flex-1">
        <hr class="text-primary inline-block w-full md:w-80" />
      </div>
    </div>

    <div>
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- بخش متن -->
        <div>
          <p class="mb-4 leading-relaxed">
            سلام! من <strong>امیدرضا</strong> هستم 👋
          </p>

          <p class="mb-4 leading-relaxed">
            یک توسعه‌دهنده‌ی <strong>فرانت‌اند</strong> هستم که بیشتر با
            <strong>Nuxt 4</strong>، <strong>TailwindCSS</strong> و
            <strong>Nuxt UI</strong>
            کار می‌کنم و روی ساخت وبسایت‌های مدرن و ریسپانسیو تمرکز دارم.
          </p>

          <p class="mb-4 leading-relaxed">
            در بخش <strong>بک‌اند</strong> تجربه‌ی کار با
            <strong>Node.js</strong> و <strong>Express.js</strong> دارم و
            توانسته‌ام APIهای مقیاس‌پذیر طراحی کنم. برای پایگاه داده با
            <strong>MongoDB</strong>، <strong>PostgreSQL</strong> و
            <strong>SQLite</strong>
            کار کرده‌ام و معماری پروژه‌ها را طوری می‌چینم که توسعه و نگه‌داری
            ساده باشد.
          </p>

          <p class="mb-4 leading-relaxed">
            همچنین به <strong>هوش مصنوعی</strong>،
            <strong>یادگیری ماشین</strong> و
            <strong>E-Learning</strong> علاقه‌مندم و همواره در حال یادگیری
            تکنولوژی‌های جدید برای رشد مهارت‌هایم هستم.
          </p>

          <UButton to="about" color="primary" class="mt-4 px-8 py-2 text-sm rounded-none font-semibold transition-colors">
            بیشتر بخوانید
          </UButton>
        </div>

        <!-- بخش تصویر + تزئینات -->
        <div class="flex flex-col items-center gap-6">
          <img
            src="/images/about.png"
            alt="About Me"
            class="rounded-md w-full max-h-80 object-cover object-top "
          />
        </div>
      </div>
    </div>
  </section>
</template>
