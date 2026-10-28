import type { Lang } from "./i18n/ui";

export interface Wiki {
  id: "zh" | "en";
  name: string;
  url: string;
  /** BCP-47 tag of the wiki's content language. */
  bcp47: string;
}

export const zhWiki: Wiki = {
  id: "zh",
  name: "简体中文",
  url: "https://zh.postal.wiki",
  bcp47: "zh-CN",
};

export const enWiki: Wiki = {
  id: "en",
  name: "English",
  url: "https://en.postal.wiki",
  bcp47: "en",
};

export const wikis: Wiki[] = [zhWiki, enWiki];

/** The wiki whose content matches the page locale. */
export function wikiForLang(lang: Lang): Wiki {
  return lang === "zh-cn" ? zhWiki : enWiki;
}

/** URL of a page on a wiki, encoded the way MediaWiki writes its own links.
 *  A `#fragment` is kept as the URL fragment. */
export function pageUrl(wiki: Wiki, page: string): string {
  const [title, fragment] = page.split("#");
  const path = encodeURIComponent(title.replaceAll(" ", "_"))
    .replaceAll("%3A", ":")
    .replaceAll("%2F", "/");
  const hash = fragment ? `#${encodeURIComponent(fragment)}` : "";
  return `${wiki.url}/wiki/${path}${hash}`;
}

export interface Article {
  /** Text shown on the homepage. */
  title: string;
  /** Wiki page title, when it differs from `title`. */
  page?: string;
}

export interface ArticleSet {
  name: string;
  articles: Article[];
}

/** Inline-linked text: `before`, then the link, then `after`. */
export interface Notice {
  before: string;
  link: string;
  page: string;
  after: string;
}

export interface SiteLinks {
  about: string;
  disclaimer: string;
  privacy: string;
}

interface LocaleContent {
  sets: ArticleSet[];
  notices: Notice[];
  pages: SiteLinks;
}

// Mirrors the "为您推荐" and "本站公告" blocks of the zh.postal.wiki main page,
// and the editing guideline linked from the en.postal.wiki main page.
const content: Record<Lang, LocaleContent> = {
  "zh-cn": {
    sets: [
      {
        name: "邮政实体",
        articles: [
          { title: "4-72" },
          { title: "朝鲜邮政" },
          { title: "北欧邮政" },
          { title: "丹麦邮政" },
          { title: "假邮局" },
        ],
      },
      {
        name: "邮政单据",
        articles: [{ title: "中国邮政单据列表" }, { title: "万国邮联信函单式列表" }],
      },
      {
        name: "法规标准",
        articles: [
          { title: "万国邮联S10标准" },
          { title: "万国邮联S9标准" },
          { title: "万国邮联S8标准" },
          { title: "中国大陆《邮政业术语》标准", page: "《邮政业术语》标准变迁史" },
          { title: "中国大陆《邮政普遍服务》标准", page: "《邮政普遍服务》标准变迁史" },
          { title: "中国大陆《邮政日戳技术条件》标准", page: "《邮政日戳技术条件》标准变迁史" },
          { title: "推荐性标准 (邮政领域)" },
          { title: "中国大陆现行邮政相关规章制度的目录列表" },
        ],
      },
    ],
    notices: [
      {
        before: "本站正在完善",
        link: "万国邮政联盟标准体系",
        page: "分类:万国邮政联盟标准体系",
        after: "，邀您参与。",
      },
      {
        before: "本站初步形成了",
        link: "中国大陆邮政业标准体系",
        page: "分类:中国大陆邮政业标准体系",
        after: "，邀您共建。",
      },
      {
        before: "邮政运营动态与法规标准动态，请见",
        link: "首页新闻",
        page: "首页#新闻",
        after: "。",
      },
    ],
    pages: {
      about: "Wiki:关于",
      disclaimer: "Wiki:免责声明",
      privacy: "Wiki:隐私政策",
    },
  },
  en: {
    sets: [
      {
        name: "Mail services",
        articles: [
          { title: "Ordinary Mail" },
          { title: "Find information on China Post's business offices" },
        ],
      },
      {
        name: "Rules & standards",
        articles: [
          {
            title: "List of Currently Effective Postal-Related Rules and Regulations in P.R.C.",
          },
          { title: "Terminology of postal industry" },
        ],
      },
    ],
    notices: [
      {
        before: "New to editing? Read the ",
        link: "Guideline",
        page: "Wiki:Guideline",
        after: " before you start.",
      },
    ],
    pages: {
      about: "Wiki:About",
      disclaimer: "Wiki:General disclaimer",
      privacy: "Wiki:Privacy policy",
    },
  },
};

export function contentForLang(lang: Lang): LocaleContent {
  return content[lang];
}

export const supportEmail = "support@staff.postal.wiki";
export const qqGroup = "151374817";
