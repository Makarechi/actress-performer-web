# content_model.md

## Цель
Описать данные, которые нужны сайту, чтобы контент был структурным, фильтруемым и легко обновляемым.

## Person
```ts
type PersonProfile = {
  name: string;
  stageName?: string;
  baseLocation: string;
  workRegions: string[];
  headline: Record<Locale, string>;
  shortBio: Record<Locale, string>;
  mediumBio: Record<Locale, string>;
  email: string;
  phone?: string;
  whatsapp?: string;
  socialLinks: SocialLink[];
  representation?: Representation;
  headshot: ImageAsset;
  cvDownloads: DownloadAsset[];
};
```

## Locale
```ts
type Locale = 'en' | 'sk' | 'pl' | 'it' | 'uk' | 'ru';
```

Венгерский можно добавить позже как `hu`, если появится достаточно контента.

## SocialLink
```ts
type SocialLink = {
  platform: 'instagram' | 'tiktok' | 'youtube' | 'vimeo' | 'imdb' | 'spotlight' | 'facebook' | 'linkedin' | 'other';
  label: string;
  url: string;
  priority: number;
};
```

## Credit
```ts
type Credit = {
  id: string;
  title: string;
  category: 'film' | 'series' | 'theatre' | 'commercial' | 'voice' | 'hosting' | 'music' | 'other';
  role?: string;
  director?: string;
  production?: string;
  year?: number;
  country?: string;
  language?: string[];
  description?: Record<Locale, string>;
  mediaIds?: string[];
  priority: number;
  visibility: 'public' | 'private' | 'hidden';
};
```

## MediaItem
```ts
type MediaItem = {
  id: string;
  title: Record<Locale, string>;
  type: 'image' | 'video' | 'audio' | 'pdf';
  category: 'acting' | 'voice' | 'music' | 'hosting' | 'gallery' | 'press' | 'language' | 'skill';
  url: string;
  thumbnail?: ImageAsset;
  durationSeconds?: number;
  language?: string;
  year?: number;
  creditId?: string;
  alt?: Record<Locale, string>;
  caption?: Record<Locale, string>;
  priority: number;
  visibility: 'public' | 'private' | 'hidden';
  tags: string[];
};
```

## LanguageSkill
```ts
type LanguageSkill = {
  code: 'sk' | 'pl' | 'it' | 'uk' | 'ru' | 'en' | 'hu';
  name: Record<Locale, string>;
  level: 'native' | 'fluent' | 'professional' | 'conversational' | 'basic';
  useCases: Array<'acting' | 'voice' | 'hosting' | 'translation' | 'singing'>;
  sampleMediaIds?: string[];
  note?: Record<Locale, string>;
  priority: number;
};
```

## Skill
```ts
type Skill = {
  id: string;
  name: Record<Locale, string>;
  category: 'performance' | 'music' | 'movement' | 'language' | 'creative' | 'professional';
  level?: 'professional' | 'advanced' | 'intermediate' | 'basic';
  description?: Record<Locale, string>;
  mediaIds?: string[];
  priority: number;
};
```

## DownloadAsset
```ts
type DownloadAsset = {
  id: string;
  title: Record<Locale, string>;
  type: 'cv' | 'press-kit' | 'headshot' | 'bio' | 'voice-reel' | 'other';
  url: string;
  fileSize?: string;
  language?: Locale;
  visibility: 'public' | 'private';
};
```

## PageContent
```ts
type PageContent = {
  slug: string;
  locale: Locale;
  title: string;
  metaDescription: string;
  ogImage?: string;
  blocks: ContentBlock[];
};
```

## Priority system
Использовать `priority` для сортировки:

- `1` — самое важное;
- `2` — важное;
- `3` — обычное;
- `9` — архив / показывать ниже.

## Visibility system
- `public` — видно всем и индексируется.
- `private` — доступно по ссылке, noindex.
- `hidden` — не показывается, но может храниться в данных.

## Минимальный seed data
Для запуска нужно заполнить:

- PersonProfile;
- 5–10 Credits;
- 6–12 MediaItems;
- 6–7 LanguageSkills;
- 8–15 Skills;
- 2–5 DownloadAssets.

