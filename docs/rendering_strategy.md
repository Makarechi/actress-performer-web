# rendering_strategy.md

## Цель
Определить стратегию графики и рендеринга для сайта с премиальным визуальным слоем, не превращая сайт в тяжёлую 3D-игру.

## Мнение по умолчанию
Лучший production-подход:

```txt
HTML/CSS content core
+ lightweight motion
+ WebGL/R3F cinematic layer
+ optional WebGPU experimental layer
```

Не строить весь сайт на canvas. Полностью canvas-first сайт может выглядеть эффектно, но часто хуже для SEO, accessibility, скорости редактирования контента и практичного кастинг-сценария.

## Canvas-first vs DOM-first

### DOM-first
Использовать для:

- текстов;
- навигации;
- CV;
- контактов;
- SEO-контента;
- списков credits;
- casting profile.

Плюсы:

- доступность;
- индексация;
- скорость;
- простая поддержка;
- нормальная работа на слабых устройствах.

### Canvas layer
Использовать для:

- hero visual;
- particles;
- shader transitions;
- 3D storytelling;
- audio-reactive visuals;
- experimental identity scenes.

Плюсы:

- премиальный эффект;
- уникальный визуал;
- технологический образ;
- сильная запоминаемость.

## WebGPU
WebGPU — лучший выбор для experimental layer, но не единственная база проекта.

Использовать WebGPU для:

- high-count particles;
- compute shaders;
- GPU simulations;
- advanced post-processing;
- визуального laboratory mode;
- future-proof wow features.

Не использовать WebGPU для:

- критичной навигации;
- контактов;
- CV;
- всего сайта как единственного renderer;
- MVP без fallback.

## WebGL 2 / Three.js / R3F
Это более безопасный production-слой.

Использовать для:

- hero scene;
- particles до разумного количества;
- 3D cards;
- scroll camera;
- shader materials;
- image transitions;
- cinematic gallery.

## Three.js WebGPURenderer
Можно рассмотреть как мост между WebGPU и WebGL 2.

Идея:

```txt
Try WebGPU renderer
fallback to WebGL2 renderer
fallback to static poster
```

## React Three Fiber
Использовать, если frontend React-based.

Плюсы:

- компонентная структура;
- удобно связывать UI state и 3D scene;
- есть экосистема drei/postprocessing;
- легче интегрировать с React routes.

Минусы:

- добавляет React runtime;
- может быть лишним для Astro-first сайта;
- требует аккуратной оптимизации re-render.

## Astro-first вариант
Если сайт на Astro, 3D лучше делать островом:

```txt
src/components/creative/HeroScene.tsx
src/components/creative/VoiceGalaxy.tsx
src/components/creative/AudioVisualizer.tsx
```

Подключение:

```astro
<HeroScene client:visible />
```

или динамический импорт после первого рендера.

## Режимы качества

### Lite
- static image;
- CSS transitions;
- no canvas;
- reduced motion.

### Standard
- small particles;
- low DPR cap;
- no heavy postprocessing;
- 30–60 FPS target.

### Premium
- full WebGL scene;
- post-processing;
- scroll camera;
- mouse interaction.

### Ultra
- WebGPU;
- compute particles;
- advanced shaders;
- desktop-first only.

## DPR policy

```ts
const dpr = Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2);
renderer.setPixelRatio(dpr);
```

Не использовать `devicePixelRatio` напрямую без лимита.

## Render loop policy

- Не держать бесконечный render loop там, где сцена статична.
- Использовать demand-based rendering, если возможно.
- Останавливать loop при `document.hidden`.
- Снижать качество при стабильном FPS ниже 45.

## Scene budgets

### Hero scene MVP
- draw calls: до 80;
- textures: до 8 активных;
- triangles: до 300k;
- particles: до 50k WebGL / до 500k+ WebGPU only;
- initial 3D JS chunk: до 250–350 KB gzip.

### Experimental desktop mode
- draw calls: до 150;
- particles: до 1M при WebGPU;
- texture memory контролировать вручную;
- включать только после idle или explicit interaction.

## Recommended directory

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
    workers/
      particleWorker.ts
      geometryWorker.ts
    wasm/
    utils/
      disposeThreeObject.ts
      fpsMonitor.ts
      reducedMotion.ts
```

## Definition of done
3D/Canvas feature считается готовой, если:

- есть fallback;
- есть reduced-motion mode;
- не блокирует LCP;
- не ломает mobile;
- освобождает GPU resources on unmount;
- не превышает agreed performance budget;
- имеет QA на Chrome, Safari, Firefox и мобильном браузере;
- может быть выключена feature flag-ом.
