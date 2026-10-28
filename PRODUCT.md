# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mix, with no dominant group (confirmed):

- People looking up practical facts: China Post rules, services, business offices, mail classes.
- Postal enthusiasts, philatelists and postal-history readers who browse.
- Wiki contributors returning to search and edit.

They arrive in either Chinese or English and want to reach an article quickly.

## Product Purpose

postal.wiki is the bilingual front door to two MediaWiki sites: zh.postal.wiki (简体中文) and en.postal.wiki (English).
The homepage searches the wiki that matches the page locale, links to both wikis, and lists curated recommended articles per locale.
Success: the visitor lands in the right article or search results on the right wiki.

## Positioning

Postal systems worldwide, with the strongest coverage of mainland China, written in both Chinese and English (confirmed: "global, China-led").

## Operating Context

- Routes `/en/` and `/zh-cn/`; `/` redirects by browser language.
- Search is a plain GET form to `{wiki}/index.php?search=…&title=Special:Search&fulltext=1`; it works without JavaScript.
- Wiki and article links open in a new tab.
- Community channels: Discord, GitHub (JianyueLab-org), QQ group 151374817, support email support@staff.postal.wiki.
- Wiki content is licensed CC BY-NC-SA 4.0. Each wiki has About, Disclaimer and Privacy pages.

## Capabilities and Constraints

- Static Astro site with Tailwind CSS v4; deployed as static files.
- Recommended articles, notices and site links live per locale in `src/data.ts`; there is no live data.
- Inferred from the incumbent code, not confirmed: search is the primary action on the page.

## Brand Commitments

- Name: Postal Wiki / 邮政百科.
- Logo: `public/logo.png` (hand-drawn blue envelope with "Postal Wiki" wordmark). It is the only logo asset.
- Legal lines: "Copyright © {year} JianyueLab Org. All Rights Reserved." and "Postal Wiki is a registered trademark of Kyotsu Bussan Co., Ltd."
- The user marked no visual trait as binding: the palette, blue, and the dark-mode toggle are all open.

## Evidence on Hand

- zh: the "为您推荐" table (邮政实体, 邮政单据, 邮政标准) and "本站公告" notices from the zh.postal.wiki main page, plus the earlier homepage picks.
- en: four homepage picks and the editing Guideline linked from the en.postal.wiki main page.
- The zh main page carries dated news (邮政运营动态, 法规标准动态). The homepage links to it instead of copying it, because a static copy goes stale.
- No statistics, testimonials, contributor counts or press. Do not fabricate any.

## Product Principles

- Get the visitor to an article in as few steps as possible.
- Chinese and English are equals; neither locale is a translation afterthought.
- Works without JavaScript; enhancement only.

## Accessibility & Inclusion

- Both locales carry correct `lang` attributes and translated accessible names.
- Motion respects `prefers-reduced-motion`.
