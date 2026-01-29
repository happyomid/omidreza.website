<template>
  <section class="px-6 py-16 space-y-24">
    <div>
      <h2 class="text-3xl font-bold">
        <span class="text-primary">/</span>
        ارتباط بامن
      </h2>
      <p class="mt-2">بامن تماس بگیر</p>
    </div>

    <!-- متن دعوت به ارتباط -->
    <div class="md:flex items-start justify-between gap-10">
      <p class="text-base leading-relaxed max-w-2xl mb-10 md:mb-0">
        من به فرصت‌های همکاری فریلنسری علاقه‌مندم. با این حال، اگر درخواست یا
        پرسشی دارید، بدون تردید می‌توانید با من در تماس باشید
      </p>

      <!-- جعبه‌ها -->
      <div class="flex flex-col sm:flex-row gap-4">
        <div
          class="border border-gray-700 p-4 hover:border-primary transition-colors"
        >
          <h4 class="font-bold mb-6 text-xl">در تماس باشید</h4>
          <div class="flex flex-col gap-4">
           <a href="maleto:" class="flex items-center gap-2 text-sm">
              <Icon name="i-simple-icons-discord" class="text-primary text-2xl" />
              itzOmidReza#1375
            </a>
            <a
              href="mailto:info@omidreza.website"
              class="flex items-center gap-2 text-sm"
            >
              <Icon name="i-simple-icons-gmail" class="text-primary text-2xl" />
              info@omidreza.website
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- بخش شبکه‌های اجتماعی -->
    <div>
      <h3 class="text-2xl font-bold text-primary mb-6">
        <span class="text-default">#</span>
        رسانه های من
      </h3>
      <div class="flex gap-6 text-xl">
        <a
          href="https://github.com/itzOmidReza"
          target="_blank"
          class="hover:text-primary transition-colors"
        >
          <Icon name="mdi:github" class="text-2xl"/>
        </a>
        <a
          href="https://linkedin.com/in/itzomidreza"
          target="_blank"
          class="hover:text-primary transition-colors"
        >
          <Icon name="mdi:linkedin" class="text-2xl"/>
        </a>
        <a
          href="https://t.me/itzOmidReza"
          target="_blank"
          class="hover:text-primary transition-colors"
        >
          <Icon name="mdi:telegram" class="text-2xl"/>
        </a>
      </div>
    </div>
  </section>
</template>