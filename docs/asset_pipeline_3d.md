# asset_pipeline_3d.md

## Цель
Описать pipeline для 3D-моделей, текстур, видео, изображений и аудио, чтобы creative layer выглядел дорого и не убивал производительность.

## Главный принцип
Ассеты должны быть подготовлены заранее. Нельзя надеяться, что браузер «как-нибудь переварит» сырые 4K текстуры, тяжёлые GLB и нежатые видео.

## 3D format
Рекомендуемый формат:

- glTF / GLB;
- Meshopt compression для geometry;
- Draco можно использовать, но Meshopt часто лучше для runtime decode;
- KTX2 / Basis Universal для textures.

## Texture strategy

### Для 3D
- KTX2/Basis compressed textures.
- Разные resolution tiers.
- Не использовать PNG/JPEG как единственный вариант для complex 3D scenes.
- Проверять texture memory.

### Для UI/photos
- AVIF/WebP.
- JPEG fallback при необходимости.
- Responsive image sizes.
- Blur placeholders.

## Model budget

### MVP 3D objects
- Простая геометрия.
- Минимум материалов.
- Один hero scene asset pack.
- Без тяжёлых skeletal animations на старте.

### Production budget
Ориентиры:

```txt
single GLB scene:         <= 1–3 MB compressed
hero texture set:         <= 2–4 MB total for desktop
mobile texture set:       <= 1 MB target
triangles hero scene:     <= 300k for WebGL path
experimental desktop:     only after profiling
```

## LOD
Использовать уровни качества:

```txt
LOD0: desktop premium
LOD1: desktop/mobile standard
LOD2: mobile lite
poster: static fallback
```

## Audio assets

### Voice samples
- 30–90 секунд.
- MP3/AAC optimized.
- Нормализованная громкость.
- Metadata: language, style, duration.
- Waveform JSON генерировать build-time.

### Music samples
- Не грузить полный трек до клика.
- Для waveform использовать precomputed data.
- Не запускать WebAudio analyzer до user gesture.

## Video assets

### Showreel
- Hosted platform preferred.
- Poster image обязательна.
- Subtitles желательны.
- Не autoplay with sound.

### Short loops
Для silent atmospheric loops:

- muted;
- short;
- optimized;
- no essential information;
- pause outside viewport.

## Asset naming

```txt
/images/headshots/name-main-headshot-2026.avif
/images/acting/film-title-production-still-01.avif
/audio/voice/en-commercial-warm-30s.mp3
/audio/languages/sk-intro-20s.mp3
/3d/hero-stage/hero-stage-lod1.glb
/textures/hero-stage/light-rig-uastc.ktx2
```

## Metadata
Каждый media item должен иметь:

- title;
- type;
- language, если применимо;
- rights/permission status;
- public/private;
- alt/caption;
- duration для audio/video;
- poster для video;
- credit/copyright, если нужно.

## Build pipeline

- Image optimization at build time.
- GLB compression before deploy.
- Texture compression before deploy.
- Waveform JSON generation before deploy.
- Asset manifest generation.

## Asset QA

- [ ] Нет оригинальных RAW/PSD/huge files в public bundle.
- [ ] Нет 4K texture там, где достаточно 1K.
- [ ] Все video имеют poster.
- [ ] Все images имеют alt.
- [ ] Все private assets закрыты.
- [ ] Все third-party rights проверены.
- [ ] Все 3D resources dispose on unmount.
