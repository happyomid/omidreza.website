<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "ارتباط بامن",
    to: "/contacts",
    icon: "i-lucide-mail",
    active: route.path.startsWith("/contacts"),
  },
  {
    label: "درباره من",
    to: "/about",
    icon: "i-lucide-user-round",
    active: route.path.startsWith("/about"),
  },
  {
    label: "پروژه‌ها",
    to: "/projects",
    icon: "i-lucide-folder-kanban",
    active: route.path.startsWith("/projects"),
  },
  {
    label: "خانه",
    to: "/",
    icon: "i-lucide-home",
    active: route.path === "/",
  },
]);

const itemsMobile = computed<NavigationMenuItem[]>(() => [
  {
    label: "خانه",
    to: "/",
    icon: "i-lucide-home",
    active: route.path === "/",
  },
  {
    label: "پروژه‌ها",
    to: "/projects",
    icon: "i-lucide-folder-kanban",
    active: route.path.startsWith("/projects"),
  },
  {
    label: "درباره من",
    to: "/about",
    icon: "i-lucide-user-round",
    active: route.path.startsWith("/about"),
  },
  {
    label: "ارتباط بامن",
    to: "/contacts",
    icon: "i-lucide-mail",
    active: route.path.startsWith("/contacts"),
  },
]);
</script>

<template>
  <UHeader class="flex-row-reverse">
    <!-- لوگو در سمت راست -->
    <template #title>
      <SharedLogo class="h-6 w-auto" />
    </template>

    <!-- منوی دسکتاپ (چینش راست‌به‌چپ) -->
    <UNavigationMenu
      :items="items"
      variant="link"
      class="flex-row-reverse gap-6"
    />

    <!-- دکمه‌های سمت چپ -->
    <template #right>
      <div class="flex items-center gap-2">
        <UColorModeButton />
        <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
          <UButton
            color="neutral"
            variant="ghost"
            to="https://github.com/itzOmidReza"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
        </UTooltip>
      </div>
    </template>

    <template #body>
      <div class="flex flex-col-reverse -mx-2.5">
        <UNavigationMenu :items="itemsMobile" orientation="vertical" />
      </div>
    </template>
  </UHeader>
</template>
