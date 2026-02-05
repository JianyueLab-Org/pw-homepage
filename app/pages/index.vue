<script setup lang="ts">
import { ref, computed } from "vue";
const { t } = useI18n();

const wikis = [
  { id: "zh", name: "简体中文", url: "https://zh.postal.wiki", flag: "🇨🇳" },
  {
    id: "en",
    name: "English",
    url: "https://en.postal.wiki",
    flag: "🇬🇧",
  },
];

const searchQuery = ref("");
const selectedWiki = ref("zh");

const searchUrls = computed(() => {
  if (!searchQuery.value.trim()) return [];

  const encodedQuery = encodeURIComponent(searchQuery.value);
  const results = [];

  if (selectedWiki.value === "zh") {
    results.push({
      wiki: wikis[0],
      url: `https://zh.postal.wiki/index.php?search=${encodedQuery}&title=Special:Search&fulltext=1`,
    });
  }

  if (selectedWiki.value === "en") {
    results.push({
      wiki: wikis[1],
      url: `https://en.postal.wiki/index.php?search=${encodedQuery}&title=Special:Search&fulltext=1`,
    });
  }

  return results;
});

const handleSearch = () => {
  if (!searchQuery.value.trim()) return;

  const urls = searchUrls.value;

  if (urls.length === 1 && urls[0]) {
    window.location.href = urls[0].url;
  }
};
</script>

<template>
  <div class="container mx-auto px-4 py-16 md:py-24">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">
          {{ $t("home.title") }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">
          {{ $t("home.subtitle") }}
        </p>
      </div>

      <!-- Wiki Links -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <UButton
          v-for="wiki in wikis"
          :key="wiki.id"
          :to="wiki.url"
          target="_blank"
          variant="soft"
          size="lg"
        >
          <span class="text-xl mr-2">{{ wiki.flag }}</span>
          {{ wiki.name }}
        </UButton>
      </div>

      <!-- Search Box -->
      <UCard>
        <div class="space-y-6">
          <!-- Wiki Selection -->
          <div>
            <p class="text-sm font-medium mb-3">{{ $t("home.selectWiki") }}</p>
            <div class="flex gap-2">
              <UButton
                :variant="selectedWiki === 'zh' ? 'solid' : 'outline'"
                @click="selectedWiki = 'zh'"
              >
                {{ $t("home.zh") }}
              </UButton>
              <UButton
                :variant="selectedWiki === 'en' ? 'solid' : 'outline'"
                @click="selectedWiki = 'en'"
              >
                {{ $t("home.en") }}
              </UButton>
            </div>
          </div>

          <!-- Search Input -->
          <form class="flex gap-2" @submit.prevent="handleSearch">
            <UInput
              v-model="searchQuery"
              size="xl"
              :placeholder="$t('home.placeholder')"
              autofocus
              class="flex-1"
            />
            <UButton
              type="submit"
              icon="i-heroicons-magnifying-glass"
              size="xl"
              :disabled="!searchQuery.trim()"
            />
          </form>
        </div>
      </UCard>
    </div>
  </div>
</template>
