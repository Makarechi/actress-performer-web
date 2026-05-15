# technical_decisions.md

## ADR-001: Core site remains DOM-first
### Decision
Сайт остаётся DOM-first. Canvas/WebGL/WebGPU — дополнительный слой.

### Reason
SEO, accessibility, contact flow, CV, credits и casting profile должны работать всегда.

### Consequence
Creative tech не может быть единственным способом навигации.

## ADR-002: WebGL/R3F is production layer, WebGPU is experimental layer
### Decision
WebGL 2 / Three.js / R3F используется для production cinematic features. WebGPU используется как optional experimental/ultra tier.

### Reason
WebGPU мощный, но production-риск выше из-за hardware/browser differences, debugging и shader complexity.

### Consequence
Любой WebGPU feature должен иметь WebGL/static fallback.

## ADR-003: No 3D in critical path
### Decision
3D chunks не входят в initial critical path.

### Reason
Первое впечатление должно быть быстрым даже на мобильном интернете.

### Consequence
Hero сначала показывает HTML + image/poster, затем lazy-mount creative layer.

## ADR-004: Casting profile is performance-safe
### Decision
`/casting` и private casting pages не используют тяжёлый creative tech по умолчанию.

### Reason
Кастинг-директору нужна скорость, ясность и скачивание материалов.

### Consequence
На casting pages допускаются только лёгкие UI transitions.

## ADR-005: Reduced motion is respected
### Decision
Если `prefers-reduced-motion: reduce`, сложные scroll/canvas анимации отключаются.

### Reason
Accessibility and comfort.

### Consequence
Каждая animation feature должна иметь reduced-motion behavior.

## ADR-006: Build-time asset optimization
### Decision
Изображения, waveform, thumbnails, 3D compression и texture compression делаются build-time.

### Reason
Не нагружать runtime пользователя.

### Consequence
Нужны scripts/pipeline для asset preparation.

## ADR-007: Feature flags for creative layer
### Decision
Creative features управляются feature flags.

### Reason
Можно отключать проблемный эффект без передеплоя всей архитектуры.

### Example

```ts
export const creativeFlags = {
  heroStageScene: true,
  voiceGalaxy: false,
  webgpuParticles: false,
  castingMode: true,
};
```
