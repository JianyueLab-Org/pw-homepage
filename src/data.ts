import type { Lang } from "./i18n/ui";

export interface Wiki {
  id: "zh" | "en";
  name: string;
  url: string;
  flag: string;
}

export interface RecommendedArticle {
  title: string;
  url: string;
  lang: Lang;
}

export const zhWiki: Wiki = {
  id: "zh",
  name: "简体中文",
  url: "https://zh.postal.wiki",
  flag: "🇨🇳",
};

export const enWiki: Wiki = {
  id: "en",
  name: "English",
  url: "https://en.postal.wiki",
  flag: "🇬🇧",
};

export const wikis: Wiki[] = [zhWiki, enWiki];

/** Builds a MediaWiki full-text search URL for the given wiki and query. */
export function buildSearchUrl(wiki: Wiki, query: string): string {
  const encodedQuery = encodeURIComponent(query);
  return `${wiki.url}/index.php?search=${encodedQuery}&title=Special:Search&fulltext=1`;
}

export const recommendedArticles: RecommendedArticle[] = [
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

/** Returns the articles that match the active locale (zh-cn vs en). */
export function articlesForLang(lang: Lang): RecommendedArticle[] {
  const normalized = lang.toLowerCase();
  return recommendedArticles.filter((article) =>
    article.lang === "zh-cn"
      ? normalized.startsWith("zh")
      : normalized.startsWith("en"),
  );
}
