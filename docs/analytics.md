# analytics.md

## Goal
Понять, какие материалы реально помогают: showreel, voice samples, CV, contact, languages, hosting или music.

## Recommended tools
- Plausible;
- Umami;
- Google Analytics;
- Google Search Console.

Для privacy-friendly подхода я бы предпочёл Plausible или Umami.

## Core events
### Contact
- `contact_email_click`
- `contact_phone_click`
- `contact_whatsapp_click`
- `contact_form_submit`

### Media
- `showreel_play`
- `showreel_complete_50`
- `voice_sample_play`
- `music_sample_play`
- `hosting_video_play`

### Downloads
- `cv_download`
- `press_kit_download`
- `headshot_download`

### Navigation
- `language_switch`
- `casting_profile_open`
- `external_profile_click`

### Private pages
- `private_link_open`
- `private_media_play`

## Event properties
For media events:

```json
{
  "media_id": "voice_commercial_en_2026",
  "category": "voice",
  "language": "en",
  "duration": 34
}
```

For downloads:

```json
{
  "asset_type": "cv",
  "language": "en"
}
```

## Key metrics
- Contact clicks per 100 visits.
- CV downloads.
- Showreel plays.
- Voice sample plays by language.
- Traffic source quality.
- Most visited language version.
- Casting page conversion.

## Monthly review questions
1. Какие страницы смотрят чаще всего?
2. Смотрят ли showreel?
3. Слушают ли voice samples?
4. Какие языки вызывают интерес?
5. Жмут ли Contact?
6. Откуда приходят люди?
7. Какие страницы никто не открывает?

## Privacy note
Не нужно собирать лишние персональные данные. Цель аналитики — понять поведение, а не следить за людьми.

