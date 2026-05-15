# performance_budget.md

## Цель
Задать performance budget для сайта с тяжёлым creative tech layer.

Вау-эффект допустим только при условии, что сайт остаётся быстрым, отзывчивым и удобным для профессионального клиента.

## Главные KPI

### Core UX
- Главный контент первого экрана виден быстро.
- Showreel/CV/contact доступны без ожидания 3D.
- На мобильном нет ощущения «сайт тяжёлый».
- 3D не блокирует HTML.

### Motion performance
- Target: 60 FPS.
- Ideal desktop: 90–120 FPS, если устройство поддерживает.
- Minimum acceptable during heavy sections: 45 FPS.
- Ниже 45 FPS — снижать quality tier.

## Loading budget

### Initial page
- Critical HTML/CSS: минимально.
- Hero image: оптимизировано и preloaded.
- 3D chunk: не в critical path.
- Video: только poster, не video bytes.
- Audio: не грузить все samples сразу.

### JavaScript
Ориентир:

```txt
core JS initial:       <= 120 KB gzip
creative JS initial:   0 KB in critical path
3D chunk:              <= 250–350 KB gzip for MVP
experimental chunk:    lazy only
```

### Images
- AVIF/WebP для сайта.
- Оригиналы отдельно, не в public bundle.
- Responsive sizes.
- Не грузить desktop hero на mobile.

### Video
- Никаких heavy video в initial load.
- Использовать poster image.
- Play on user intent.
- Для showreel лучше hosted video platform.

### Audio
- Lazy-load по клику или при приближении секции.
- Короткие samples.
- Metadata заранее, bytes позже.

## Runtime budget

### Canvas
- Canvas не должен работать на невидимой вкладке.
- Canvas должен останавливаться вне viewport, если это не hero.
- DPR cap обязателен.
- FPS monitor желателен.

### Particles
Ориентиры:

```txt
mobile lite:       0–5k particles
mobile standard:   5k–15k particles
desktop WebGL:     20k–80k particles
desktop WebGPU:    100k–1M particles only after testing
```

### Memory
- Не держать все textures в памяти одновременно.
- Dispose Three.js resources on route change.
- Не использовать 4K textures без нужды.
- KTX2/Basis for GPU textures when 3D scenes need them.

## Quality tier downgrade
Снижать качество, если:

- FPS < 45 более 2 секунд;
- mobile device detected;
- low memory;
- reduced motion;
- tab becomes hidden;
- battery saver вероятен;
- WebGPU/WebGL context lost.

Пример tier downgrade:

```txt
ultra -> premium -> standard -> lite -> static
```

## Testing devices
Минимальный набор:

- iPhone Safari.
- Android Chrome среднего уровня.
- Desktop Chrome.
- Desktop Safari.
- Desktop Firefox.
- Один слабый ноутбук / integrated GPU.

## Lighthouse / Web Vitals
Ориентиры:

- LCP: хорошо, если <= 2.5s.
- CLS: близко к 0.
- INP: низкий, без блокировок main thread.
- Performance score: не фетиш, но красных зон быть не должно.

## Web Workers
Выносить в worker:

- генерацию geometry;
- particle initialization;
- parsing large JSON;
- expensive audio preprocessing;
- image/mesh preprocessing, если это происходит на клиенте.

Не выносить в worker то, что проще сделать build-time.

## WASM
Использовать WASM только если есть реальная причина:

- physics simulation;
- audio analysis;
- video/image processing;
- heavy math;
- reusable Rust/Go/C++ module.

Не добавлять WASM ради статуса.

## Build-time over runtime
Всё, что можно посчитать заранее, считать заранее:

- thumbnails;
- responsive images;
- compressed textures;
- mesh compression;
- waveform JSON для audio samples;
- dominant colors;
- blur placeholders.

## Performance Definition of Done
Фича готова, если:

- не увеличивает initial critical path без причины;
- проходит mobile check;
- имеет fallback;
- не ломает accessibility;
- не мешает контактам/showreel/CV;
- FPS не падает ниже agreed threshold на target devices;
- есть feature flag для выключения.
