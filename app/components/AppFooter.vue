<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { t, locale, locales } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const localeItems = computed(() => {
  const localeList = Array.isArray(locales) ? locales : locales.value || [];
  return localeList.map((localeItem: any) => ({
    label: localeItem.name,
    code: localeItem.code,
  }));
});

const currentLocaleLabel = computed(() => {
  const localeList = Array.isArray(locales) ? locales : locales.value || [];
  const current = localeList.find((l: any) => l.code === locale.value);
  return current?.name || locale.value;
});

const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectLocale(localeCode: string) {
  const currentPath =
    route.path.replace(new RegExp(`^/${locale.value}`), "") || "/";
  const newPath = localePath(currentPath, localeCode as "en" | "zh-cn");
  navigateTo(newPath);
  isOpen.value = false;
}
</script>

<template>
  <UFooter>
    <template #left>
      <div>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }} JianyueLab Org. All Rights
          Reserved.
        </p>
        <p class="text-muted text-sm">
          Postal Wiki is registered trademark of Kyotsu Bussan Co., Ltd.
        </p>
      </div>
    </template>

    <template #right>
      <div class="relative">
        <button
          class="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          @click="toggleDropdown"
        >
          <span>{{ currentLocaleLabel }}</span>
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
        <div
          v-if="isOpen"
          class="absolute bottom-full mb-2 right-0 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg overflow-hidden z-50 min-w-[120px]"
        >
          <button
            v-for="localeItem in localeItems"
            :key="localeItem.code"
            class="block w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-sm"
            @click="selectLocale(localeItem.code)"
          >
            {{ localeItem.label }}
          </button>
        </div>
      </div>

      <UButton
        icon="i-simple-icons-discord"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/discord"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
