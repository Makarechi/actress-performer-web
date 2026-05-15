# Video Backdrop Shortlist

Временные фоновые видео без Таисии и без людей в кадре. Их задача — быстро усилить языковые версии сайта до отдельной съёмки с героиней.

## License Notes
- Pexels: free to use, attribution is not required, editing is allowed. Source: https://www.pexels.com/license/
- Pixabay: free to use under Pixabay Content License; attribution is not required, but source links should be kept for records. Source: https://pixabay.com/service/faq/
- Videezy: free downloads can have license/attribution requirements per asset; check the asset license modal before publishing.
- Rawpixel: check the asset's personal/business license before publishing; some strong options are AI-generated.
- Перед финальным релизом нужно скачать выбранные файлы, сохранить рядом license/source URL и проверить видео глазами: иногда search/tags не гарантируют, что в кадре нет людей.

## English / International

Primary:
- Empty Photography Studio with Lighting Equipment
- Source: https://www.pexels.com/video/empty-photography-studio-with-lighting-equipment-35055560/
- Why: international casting / studio / clean professional space.
- Direction: cool neutral grade, slight teal tint, slow crop around studio lights.
- Site use: `/en/` hero video.
- File name: `public/video/backdrops/en-international-studio.mp4`

Backup:
- Empty Stage With Spotlight search
- Source: https://www.pexels.com/search/videos/empty%20stage%20with%20spotlight/

## Slovak

Primary:
- Majestic Winter Mountains in Slovakia
- Source: https://www.pexels.com/video/majestic-winter-mountains-in-slovakia-31437260/
- Why: direct Slovakia signal, mountains, scale, Central European landscape.
- Direction: reduce saturation, keep cold air, add slight warm stage overlay so text stays readable.
- Site use: `/sk/` hero video.
- File name: `public/video/backdrops/sk-slovak-mountains.mp4`

Backup:
- Stunning Aerial View of Bratislava Castle
- Source: https://www.pexels.com/video/stunning-aerial-view-of-bratislava-castle-33398533/

## Polish

Primary:
- Stage, theatre, entertainment
- Source: https://pixabay.com/videos/stage-theatre-entertainment-concert-329299/
- Why: full 16:9 hero format, 1920x1080, theatre/stage light background, no visible performer needed, strong enough for amber Polish visual direction.
- Direction: grade warm amber/gold, slow crop, add soft theatrical vignette; keep it more literary/elegant than concert-like.
- Site use: `/pl/` hero video.
- File name: `public/video/backdrops/pl-amber-theatre-stage.mp4`

Backup:
- Old Town, Buildings, Road
- Source: https://pixabay.com/videos/old-town-buildings-road-snow-65602/
- Note: literal Poland signal: Warsaw / Old Town / winter / drone, 1920x1080. Use if you want national place identity stronger than theatre mood.

Stronger Polish-art direction candidates:
- Juliusz Słowacki Theatre in Krakow
- Source: https://www.pexels.com/video/juliusz-slowacki-theatre-in-krakow-30309382/
- Why: the best Poland-specific art/culture candidate found so far: real Polish theatre, Krakow, ornate facade, cultural heritage. Use this if the Polish page should feel connected to Polish theatre rather than generic stage light.
- Caveat: Pexels search exposes it as free to use, but the exact downloaded aspect ratio must be checked after download. If it is horizontal, it becomes the best `/pl/` candidate.
- Planned file name: `public/video/backdrops/pl-krakow-slowacki-theatre.mp4`

- Empty Theater Stage HD Stock Footage
- Source: https://www.videezy.com/backgrounds/2352-empty-theater-stage-hd-stock-footage
- Why: pure theatre hero: empty wooden stage, dark auditorium, 1920x1080, 30 fps. Better theatrical composition than the current Pixabay stage clip.
- Caveat: not Polish-specific; use it with amber/white-red Polish styling, Polish copy, and a Krakow/Warsaw poster image if the license checks out.
- Planned file name: `public/video/backdrops/pl-empty-theatre-stage.mp4`

- Wide-angle empty theater stage with red curtains and smoke
- Source: https://www.rawpixel.com/video/17132622/video-space-wooden-smoke
- Why: strong cinematic stage mood, 4K 3840x2160, 16:9, no people. Good for a more dramatic "Polish theatre curtain" direction.
- Caveat: AI-generated and not Poland-specific; use only if the artificial look still feels premium after visual review.
- Planned file name: `public/video/backdrops/pl-red-curtain-stage.mp4`

- Tower, Clock, City / Warsaw
- Source: https://pixabay.com/videos/tower-clock-city-poland-travel-224696/
- Why: clear Warsaw/Poland signal, 4K 3840x2160. This is more national/city identity than theatre, so it is a secondary fallback.
- Planned file name: `public/video/backdrops/pl-warsaw-cultural-landmark.mp4`

Rejected for 16:9 hero:
- Grand Theatre Warsaw frontage on Pexels: highly relevant subject, but search metadata marks it as vertical video, so it is not a good desktop hero unless used as a mobile-only crop.

## Italian

Primary:
- Elegant Empty Concert Hall Interior View
- Source: https://www.pexels.com/video/elegant-empty-concert-hall-interior-view-35122004/
- Why: empty hall, no people, classical performance architecture; close to opera/concert mood.
- Direction: red-black-gold grade, slow spotlight mask, subtle piano/voice feeling.
- Site use: `/it/` hero video.
- File name: `public/video/backdrops/it-opera-concert-hall.mp4`

Backup:
- Iconic Teatro alla Scala in Milan, Italy
- Source: https://www.pexels.com/video/iconic-teatro-alla-scala-in-milan-italy-32697839/
- Note: use only if visual review confirms there are no clear people in the shot.

## Ukrainian

Primary:
- Drone Footage of Sunflower Field Under Blue Sky
- Source: https://www.pexels.com/video/drone-footage-of-sunflower-field-under-blue-sky-5280134/
- Why: blue sky + yellow sunflower field reads immediately as Ukrainian visual memory, without using flags.
- Direction: blue-gold grade, add theatre-light vignette so it does not become a tourist/nature page.
- Site use: `/uk/` hero video.
- File name: `public/video/backdrops/uk-blue-gold-sunflower-field.mp4`

Backup:
- A field of sunflowers with blue sky in the background
- Source: https://www.pexels.com/video/a-field-of-sunflowers-with-blue-sky-in-the-background-18389182/

## Russian

Primary:
- An Empty Recording Studio
- Source: https://www.pexels.com/video/an-empty-recording-studio-7586169/
- Why: voice, dubbing, microphone, studio, no person required.
- Direction: dark red / black / warm gold grade, microphone or console should sit behind text but not distract.
- Site use: `/ru/` hero video.
- File name: `public/video/backdrops/ru-voice-recording-studio.mp4`

Backup:
- Moving Red Curtain
- Source: https://www.pexels.com/video/moving-red-curtain-4863244/
- Note: use as a stronger velvet theatrical fallback if the recording-studio shot feels too technical.

## Implementation Notes

- Current local implementation uses the downloaded files as:
  - `public/video/backdrops/english.mp4`
  - `public/video/backdrops/slovak.mp4`
  - `public/video/backdrops/polish.mp4`
  - `public/video/backdrops/italian.mp4`
  - `public/video/backdrops/ukranian.mp4`
  - `public/video/backdrops/russian.mp4`
- Download 1080p first, not 4K, to keep the website fast.
- Trim every video to 8-12 seconds.
- Export muted MP4 and WebM if possible.
- Use `autoplay muted loop playsinline`.
- Add a dark/readability overlay per locale.
- Keep one still poster frame per locale for mobile slow connections:
  - `public/images/backdrops/en-poster.webp`
  - `public/images/backdrops/sk-poster.webp`
  - `public/images/backdrops/pl-poster.webp`
  - `public/images/backdrops/it-poster.webp`
  - `public/images/backdrops/uk-poster.webp`
  - `public/images/backdrops/ru-poster.webp`
