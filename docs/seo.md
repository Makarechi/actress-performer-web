# seo.md

## SEO goal
Главная SEO-задача: когда человек ищет имя артистки, сайт должен выглядеть как официальный центр её профессиональной информации.

Вторая задача: находиться по нишевым запросам, связанным с мультиязычной актрисой, voice actress, dubbing, event host и регионами работы.

## Priority keywords
Заменить `[Name]` и `[City/Country]` на реальные данные.

### Brand queries
- [Name] actress
- [Name] actor
- [Name] performer
- [Name] voice actress
- [Name] showreel
- [Name] CV

### Professional queries
- multilingual actress Europe
- multilingual actress Slovakia
- actress Slovak Polish Italian Ukrainian Russian English
- voice actress Slovakia
- dubbing actress Europe
- event host multilingual
- actress singer pianist

### Local queries
- actress [City]
- actress Slovakia
- event host Slovakia
- voice actress [Country]
- presenter [City]

## Page titles
### Home
`[Name] — Multilingual Actress & Performer`

### Acting
`Acting Showreel & Credits — [Name]`

### Voice
`Voice & Dubbing Samples — [Name]`

### Music
`Vocal & Piano Performance — [Name]`

### Hosting
`Multilingual Event Host & Presenter — [Name]`

### Casting
`Casting Profile — [Name]`

### Contact
`Contact — [Name]`

## Meta descriptions
### Home
`Official website of [Name], a multilingual actress and performer for screen, stage, voice and live events.`

### Voice
`Voice and dubbing samples by [Name], a multilingual actress and performer working across Slovak, Polish, Italian, Ukrainian, Russian and English.`

### Casting
`Casting profile of [Name]: showreel, languages, acting credits, special skills, CV and contact details.`

## Structured data
Use JSON-LD:

- Person;
- WebSite;
- VideoObject for showreel;
- AudioObject for voice samples, if useful;
- BreadcrumbList.

## Open Graph
Every page should have:

- `og:title`;
- `og:description`;
- `og:image`;
- `og:type`;
- `og:url`.

Recommended OG image:

- strong professional portrait;
- 1200x630;
- no tiny text;
- looks good in WhatsApp / Telegram / LinkedIn.

## Sitemap and robots
- Generate `sitemap.xml`.
- Include public pages only.
- Exclude private materials.
- Add `robots.txt`.

Private pages:

```html
<meta name="robots" content="noindex, nofollow" />
```

## Image SEO
Every image needs:

- descriptive filename;
- alt text;
- width/height;
- compressed format;
- lazy loading except hero.

Bad filename:

```txt
IMG_9832.jpg
```

Good filename:

```txt
name-actress-headshot-2026.webp
```

## Internal linking
Home should link to:

- Acting;
- Voice;
- Music;
- Hosting;
- Casting;
- Contact.

Every professional page should have a clear contact CTA.

## External profiles
Link out to relevant official profiles:

- IMDb, if exists;
- Spotlight, if exists;
- casting platforms;
- Vimeo / YouTube;
- Instagram / TikTok if professional;
- LinkedIn if relevant.

## Content freshness
Update at least every 3–6 months:

- CV;
- showreel;
- credits;
- photos;
- samples;
- meta dates if displayed.

## SEO anti-patterns
Do not:

- stuff keywords unnaturally;
- create empty language pages;
- index private casting tapes;
- use huge unoptimized images;
- make all content only inside videos;
- hide name and profession behind animations.

