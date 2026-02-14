<script setup lang="ts">
import { ref, computed } from "vue";
const { t, locale } = useI18n();

const wikis = [
  { id: "zh", name: "简体中文", url: "https://zh.postal.wiki", flag: "🇨🇳" },
  {
    id: "en",
    name: "English",
    url: "https://en.postal.wiki",
    flag: "🇬🇧",
  },
];

const recommendedArticles = [
  {
    title: "朝鲜邮政",
    url: "https://zh.postal.wiki/wiki/%E6%9C%9D%E9%B2%9C%E9%82%AE%E6%94%BF",
    lang: "zh-cn",
  },
  {
    title: "中国大陆现行邮政相关规章制度的目录列表",
    url: "https://zh.postal.wiki/wiki/%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E7%8E%B0%E8%A1%8C%E9%82%AE%E6%94%BF%E7%9B%B8%E5%85%B3%E8%A7%84%E7%AB%A0%E5%88%B6%E5%BA%A6%E7%9A%84%E7%9B%AE%E5%BD%95%E5%88%97%E8%A1%A8",
    lang: "zh-cn",
  },
  {
    title: "推荐性标准 (邮政领域)",
    url: "https://zh.postal.wiki/wiki/%E6%8E%A8%E8%8D%90%E6%80%A7%E6%A0%87%E5%87%86_(%E9%82%AE%E6%94%BF%E9%A2%86%E5%9F%9F)",
    lang: "zh-cn",
  },
  {
    title: "假邮局",
    url: "https://zh.postal.wiki/wiki/%E5%81%87%E9%82%AE%E5%B1%80",
    lang: "zh-cn",
  },
  {
    title: "Ordinary Mail",
    url: "https://en.postal.wiki/wiki/Ordinary_Mail",
    lang: "en",
  },
  {
    title:
      "List of Currently Effective Postal-Related Rules and Regulations in P.R.C.",
    url: "https://en.postal.wiki/wiki/List_of_Currently_Effective_Postal-Related_Rules_and_Regulations_in_P.R.C.",
    lang: "en",
  },
  {
    title: "Find information on China Post's business offices",
    url: "https://en.postal.wiki/wiki/Find_information_on_China_Post%27s_business_offices",
    lang: "en",
  },
  {
    title: "Terminology of postal industry",
    url: "https://en.postal.wiki/wiki/Terminology_of_postal_industry",
    lang: "en",
  },
];

const filteredArticles = computed(() =>
  recommendedArticles.filter((article) => article.lang === locale.value)
);

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

      <!-- Recommended Articles -->
      <div class="mt-8">
        <h2 class="text-lg font-semibold mb-4">
          {{ $t("recommended.title") }}
        </h2>
        <div class="space-y-2">
          <UButton
            v-for="article in filteredArticles"
            :key="article.url"
            :to="article.url"
            target="_blank"
            variant="ghost"
            block
            class="justify-start"
          >
            <UIcon name="i-heroicons-document-text" class="mr-2 shrink-0" />
            {{ article.title }}
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
