export const defaultLang = "en" as const;

export type Lang = "en" | "zh-cn";

export interface LocaleMeta {
  code: Lang;
  /** BCP-47 tag for `lang` / `hreflang` attributes. */
  bcp47: string;
  name: string;
}

/** Available locales, in display order. Mirrors the old @nuxtjs/i18n config. */
export const locales: LocaleMeta[] = [
  { code: "en", bcp47: "en", name: "English" },
  { code: "zh-cn", bcp47: "zh-CN", name: "简体中文" },
];

/** UI strings, keyed by locale then dotted key. Ported from i18n/locales/*.json. */
export const ui = {
  en: {
    "header.home": "Home",
    "home.title": "Postal Wiki Search",
    "home.subtitle": "Search across Chinese and English postal wikis",
    "home.placeholder": "Search anything you want to know about postal…",
    "recommended.title": "Recommended Articles",
    "search.submit": "Search",
    "search.label": "Search the wiki",
    "search.target": "Searching",
    "wikis.label": "Open a wiki",
    "notices.title": "Notices",
    "set.count": "Set of {n}",
    "footer.nav": "About this site",
    "footer.support": "Support",
    "footer.qq": "QQ group",
    "footer.about": "About Postal Wiki",
    "footer.disclaimer": "Disclaimers",
    "footer.privacy": "Privacy policy",
    "footer.license": "Wiki content is available under {license}.",
    "theme.toggle": "Toggle color theme",
    "menu.toggle": "Toggle navigation menu",
  },
  "zh-cn": {
    "header.home": "首页",
    "home.title": "邮政百科搜索",
    "home.subtitle": "搜索中文和英文邮政百科",
    "home.placeholder": "搜索一切与邮政有关的内容……",
    "recommended.title": "推荐条目",
    "search.submit": "搜索",
    "search.label": "搜索百科",
    "search.target": "检索",
    "wikis.label": "前往百科",
    "notices.title": "本站公告",
    "set.count": "全套{n}枚",
    "footer.nav": "站点信息",
    "footer.support": "咨询反馈",
    "footer.qq": "QQ群",
    "footer.about": "关于Postal Wiki",
    "footer.disclaimer": "免责声明",
    "footer.privacy": "隐私政策",
    "footer.license": "百科内容采用{license}授权。",
    "theme.toggle": "切换配色主题",
    "menu.toggle": "切换导航菜单",
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
