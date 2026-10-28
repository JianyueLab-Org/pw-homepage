---
version: 1
slug: "src-pages-lang-index-astro"
primary_target: "src/pages/[lang]/index.astro"
related_targets: ["src/layouts/Base.astro"]
---

# Homepage (`src/pages/[lang]/index.astro`)

Mode: Operate. Visitor job: search the locale-matched wiki, or jump to a wiki home or a recommended article.
Scope: whole homepage plus shared chrome (header, footer, locale switcher, theme toggle).
Must stay: plain GET search form, both wiki links, recommended article lists, legal lines, locale switching, theme toggle, logo asset.

## Direction contract

THESIS: The homepage is a stock-book leaf. Search sits on a souvenir sheet; recommended articles are perforated stamps tucked into a glassine strip. It refuses the centered search box over a gradient glow.

OWN-WORLD: Light: pale album leaf, near-white stamp paper, ultramarine souvenir sheet, vermilion for the one filled control, a stamp set in vermilion/ultramarine/green/ochre. Dark: the classic black stock-book leaf; stamps stay paper. Perforated edges, glassine pocket strips, circular date postmarks. Archivo (condensed caps for inscriptions, normal width for UI) with Noto Serif SC for Chinese inscriptions. Tabular catalogue numbers.

STORY: The visitor sees a postal object first and a working search second, within one glance. They type, press the vermilion button, and land on the wiki. Articles read as a stamp set they can collect; ones already opened carry a postmark.

FIRST VIEWPORT: Standard header (logo left, nav, theme toggle). Below, an ultramarine souvenir sheet with the title as its top inscription and the subtitle as its bottom inscription; centered inside, a perforated paper stamp holding the search input and a labelled vermilion submit. The two wiki links sit in the sheet's lower margin as perforated tabs. The stamp strip starts below the sheet.

FORM: Stock book. seed:b93e0600c341225b. Raises: cancellation as state (ticket wallet); focus as a perforated outline (emission rail); fixed stamp furniture of catalogue number, language, title, issuer line (goods catalog); tabular catalogue index (star atlas); perforation pitch as the spacing module (Crouwel).

SIGNATURE: Perforation and cancellation. Every mounted object has a true perforated edge; visited articles show a postmark via `:visited` stroke colour. Motion: stamps tuck into the strip once on load.
