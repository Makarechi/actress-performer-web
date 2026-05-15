# architecture.md

## Цель архитектуры
Сайт должен быть быстрым, мультиязычным, удобным для медиа и простым в поддержке.

Не нужна архитектура ради архитектуры. Нужна система, которая позволяет быстро обновлять портфолио, добавлять языки, материалы и private links.

## Рекомендуемый подход
### Вариант A — Astro-first
Моё предпочтение для этого проекта: Astro.

Почему:

- сайт в основном контентный;
- важна скорость;
- медиа можно лениво загружать;
- удобно делать статические страницы;
- можно подключить MDX;
- можно оставить минимум JavaScript на клиенте;
- подходит для портфолио с мультиязычностью.

### Вариант B — Next.js
Выбирать Next.js, если нужны:

- сложная админка;
- server actions;
- динамические private links;
- полноценный preview mode;
- авторизация;
- сложная логика персонализации.

### Вариант C — Headless CMS + Frontend
Выбирать, если артистка сама будет часто обновлять:

- credits;
- новости;
- фото;
- медиа;
- bio;
- events.

Подходящие CMS-категории:

- Sanity;
- Storyblok;
- Strapi;
- Directus;
- Decap CMS;
- markdown/MDX в Git, если редактирует разработчик.

## Базовая архитектура
```txt
site/
  public/
    images/
    downloads/
    audio/
  src/
    components/
    content/
      en/
      sk/
      ru/
      uk/
      pl/
      it/
    data/
      credits.json
      media.json
      languages.json
      skills.json
    layouts/
    pages/
    styles/
    utils/
  docs/
    *.md
```

## URL structure
Рекомендуемый формат:

```txt
/
/en/
/en/acting/
/en/voice/
/en/music/
/en/hosting/
/en/casting/
/en/contact/
/en/press-kit/

/sk/
/sk/herectvo/ or /sk/acting/
/sk/voice/
...
```

Моё мнение: лучше сохранить английские slug-и даже в локалях, если сайт международный. Например `/sk/acting/`, `/pl/voice/`. Это проще поддерживать и понятнее в переписке.

## Content source
### Минимальный вариант
Контент хранится в JSON / YAML / MDX.

Плюсы:

- быстро;
- просто;
- не нужна CMS;
- идеально для первого запуска.

### Расширенный вариант
Headless CMS.

Плюсы:

- артистка может сама обновлять;
- есть preview;
- проще управлять галереями.

Минусы:

- больше инфраструктуры;
- больше точек отказа;
- дольше запуск.

## Media architecture
### Images
- хранить оригиналы отдельно;
- на сайт загружать оптимизированные версии;
- генерировать WebP / AVIF;
- responsive sizes;
- lazy loading ниже первого экрана;
- hero image preloaded.

### Video
Не хранить тяжёлые видео прямо в репозитории.

Варианты:

- Vimeo;
- YouTube unlisted;
- Cloudflare Stream;
- Bunny Stream;
- Mux.

Для MVP достаточно Vimeo / YouTube unlisted, если права и приватность позволяют.

### Audio
Voice samples можно хранить локально, если они короткие и оптимизированы.

Рекомендации:

- MP3 / AAC;
- 30–90 секунд;
- нормализованный звук;
- понятные названия;
- waveform optional.

## Component architecture
Основные компоненты:

- `Hero`;
- `PrimaryCTA`;
- `MediaCard`;
- `VideoEmbed`;
- `AudioPlayer`;
- `LanguageBadge`;
- `SkillTag`;
- `CreditList`;
- `GalleryGrid`;
- `PressKitDownloads`;
- `ContactBlock`;
- `CastingFactSheet`;
- `SEOHead`;
- `LocaleSwitcher`.

## Data models
Ключевые сущности:

- Person;
- Credit;
- MediaItem;
- LanguageSkill;
- Skill;
- DownloadAsset;
- Testimonial / Quote if available;
- EventExperience.

Подробно см. `content_model.md`.

## Private links
Нужны для случаев, когда не все материалы должны быть публичными.

Варианты:

1. Простые unlisted URLs.
2. Скрытые страницы с `noindex`.
3. Token-based links.
4. Password-protected pages.

Для MVP достаточно скрытых `noindex` страниц, но для sensitive casting videos лучше token/password.

## SEO architecture
- canonical URLs;
- hreflang;
- sitemap.xml;
- robots.txt;
- Open Graph;
- JSON-LD Person;
- structured breadcrumbs;
- image alt texts.

## Analytics architecture
События:

- showreel play;
- voice sample play;
- CV download;
- contact click;
- press kit download;
- language switch;
- external social click;
- private link open.

## Performance budget
Цель:

- first load JS минимальный;
- LCP image optimized;
- не грузить все видео сразу;
- не грузить все аудио сразу;
- mobile-first layout;
- CLS около нуля.

Простой performance budget:

- initial JS: как можно меньше;
- hero image: optimized, preload;
- video: iframe lazy load;
- fonts: self-host or system fallback;
- gallery: lazy loading.

## Accessibility
- кнопки должны быть кнопками;
- ссылки должны быть ссылками;
- аудио/видео с controls;
- alt-тексты для изображений;
- хороший contrast;
- keyboard navigation;
- focus states;
- не полагаться только на цвет.

## Security
- не хранить секреты в frontend;
- contact form через serverless / form provider с spam protection;
- private pages закрывать от индексации;
- downloadable files проверять;
- не выкладывать raw master media.

## Build vs buy
Не надо строить CMS, если контент будет обновляться раз в месяц. Лучше простой content pipeline.

Не надо строить свой video hosting. Лучше использовать специализированную платформу.

Не надо строить analytics dashboard. Лучше подключить готовую аналитику.

## Моё архитектурное решение по умолчанию
Для первой версии я бы выбрал:

- Astro;
- TypeScript;
- MDX / JSON content;
- Tailwind or CSS Modules;
- Vimeo / YouTube for video;
- local optimized audio;
- static deploy on Cloudflare Pages / Vercel / Netlify;
- Plausible / Umami analytics;
- Google Search Console;
- no CMS at MVP stage.

## Creative Tech architecture
Сайт может иметь дополнительный технический слой для вау-эффекта.

Рекомендуемая архитектура:

```txt
DOM-first content core
+ progressive enhancement
+ creative canvas islands
+ optional WebGPU ultra mode
```

### Creative directories
```txt
src/
  creative/
    capabilities/
      detectGpu.ts
      qualityTier.ts
    scenes/
      HeroStageScene/
      VoiceLanguageGalaxy/
      MusicWaveform/
      AerialRibbon/
    shaders/
      glsl/
      wgsl/
      shared/
    workers/
      particleWorker.ts
      geometryWorker.ts
    utils/
      fpsMonitor.ts
      disposeThreeObject.ts
      reducedMotion.ts
```

### Rendering strategy
- DOM для контента, SEO, контактов, CV, credits.
- WebGL 2 / Three.js / R3F для production 3D.
- WebGPU для optional experimental / ultra tier.
- Static poster fallback для каждой canvas scene.

### Feature tiers
```txt
static    -> no JS, no canvas
lite      -> UI motion only
standard  -> light canvas / simple particles
premium   -> WebGL/R3F cinematic scene
ultra     -> WebGPU / compute / advanced particles
```

### Loading strategy
- Не грузить 3D в critical path.
- Dynamic import для creative modules.
- `client:visible` / lazy hydration для Astro.
- Pause render loop when tab hidden.
- Dispose GPU resources on unmount.
- Снижать quality tier при плохом FPS.

Подробно см.:

- `creative_technology.md`
- `rendering_strategy.md`
- `animation_motion.md`
- `shader_guidelines.md`
- `performance_budget.md`
- `asset_pipeline_3d.md`
- `experimental_concepts.md`
- `technical_decisions.md`
