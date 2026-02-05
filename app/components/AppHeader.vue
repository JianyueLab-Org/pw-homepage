<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const { locale } = useI18n();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: $t("header.home"),
    to: "/",
    active:
      route.path === `/${locale.value}` || route.path === `/${locale.value}/`,
  },
  {
    label: "JianyueLab Org.",
    to: "https://jianyuelab.org",
    target: "_blank",
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <!--<Logo class="h-6 w-auto" />-->
      <h1 class="h-6">Postal Wiki</h1>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
  </UHeader>
</template>
