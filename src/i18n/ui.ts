export const defaultLang = "en" as const;

export type Lang = "en" | "zh-cn";

export interface LocaleMeta {
  code: Lang;
  name: string;
}

/** Available locales, in display order. Mirrors the old @nuxtjs/i18n config. */
export const locales: LocaleMeta[] = [
  { code: "en", name: "English" },
  { code: "zh-cn", name: "简体中文" },
];

/** UI strings, keyed by locale then dotted key. Ported from i18n/locales/*.json. */
export const ui = {
  en: {
    "header.home": "Home",
    "home.title": "Postal Wiki Search",
    "home.subtitle": "Search across Chinese and English postal wikis",
    "home.placeholder": "Search anything you want to know about postal...",
    "recommended.title": "Recommended Articles",
  },
  "zh-cn": {
    "header.home": "首页",
    "home.title": "邮政百科搜索",
    "home.subtitle": "搜索中文和英文邮政百科",
    "home.placeholder": "搜索一切与邮政有关的内容...",
    "recommended.title": "推荐条目",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

/** Returns a `t(key)` translator for the given locale, falling back to English. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Extracts the active locale from a URL pathname (e.g. `/zh-cn/...`). */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  if (segment === "zh-cn") return "zh-cn";
  return defaultLang;
}
