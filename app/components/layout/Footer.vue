<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'OmidReza',
    to: 'https://omidreza.website',
    target: '_blank'
  },
]
</script>

<template>
  <UFooter class="mt-20 border-t border-gray-400 dark:border-gray-600">
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        icon="i-simple-icons-telegram"
        color="neutral"
        variant="ghost"
        to="https://t.me/itzOmidReza"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
        to="https://linkedin.com/in/itzOmidReza/"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/itzOmidReza"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
