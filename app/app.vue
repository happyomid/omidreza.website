<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- This is the important part -->
    <Analytics />
  </UApp>
</template>
