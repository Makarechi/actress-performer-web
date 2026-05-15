# shader_guidelines.md

## Цель
Описать подход к кастомным шейдерам GLSL/WGSL для уникального визуала сайта.

## Почему шейдеры уместны здесь
Шейдеры могут создать ощущение:

- света сцены;
- кинематографического зерна;
- стекла и преломления;
- дыма / воздуха / движения;
- аудио-волн;
- живого портрета;
- перехода между ролями и языками.

Но шейдеры должны усиливать бренд артистки, а не превращать сайт в техно-выставку.

## Визуальные направления

### Stage Light Shader
Тёплый/холодный сценический свет, мягкий volumetric feel, light falloff.

Применение:

- hero;
- acting section;
- theatre references.

### Liquid Glass Shader
Аккуратное преломление, не кислотный эффект.

Применение:

- cards;
- hero overlay;
- transition between disciplines.

### Voice Wave Shader
Визуализация голоса через waveform/spectrum.

Применение:

- voice samples;
- multilingual audio;
- dubbing block.

### Particle Portrait Shader
Портрет или силуэт, собранный из точек/частиц.

Применение:

- homepage hero;
- special intro;
- experimental mode.

### Ink / Drawing Shader
Поскольку артистка прекрасно рисует, можно использовать эффект чернил, угля, кисти.

Применение:

- gallery transitions;
- drawing skill block;
- signature mark.

## GLSL vs WGSL

### GLSL
Использовать для WebGL/Three.js production layer.

Плюсы:

- больше примеров;
- стабильный WebGL path;
- проще найти разработчиков;
- хорошо интегрируется с ShaderMaterial.

### WGSL
Использовать для WebGPU experimental layer.

Плюсы:

- современный путь;
- compute shaders;
- better GPU-driven workloads;
- перспективно для сложных particles.

## Правила разработки

- Каждый shader должен иметь low-quality variant.
- Все uniforms должны быть типизированы.
- Не хранить магические числа без комментариев.
- Иметь debug mode для uniforms.
- Не завязывать смысл страницы только на shader output.
- Не запускать WebAudio analysis без действия пользователя.
- Не использовать агрессивное мерцание.

## Файловая структура

```txt
src/creative/shaders/
  glsl/
    stageLight.vert
    stageLight.frag
    liquidGlass.frag
    voiceWave.frag
    particlePortrait.vert
    particlePortrait.frag
  wgsl/
    particleCompute.wgsl
    renderParticles.wgsl
  shared/
    noise.glsl
    color.glsl
    easing.glsl
```

## Shader coding standards

- Использовать `highp` там, где нужно, но не везде бездумно.
- Минимизировать branching в fragment shaders.
- Тестировать на integrated GPUs.
- Не использовать слишком дорогой noise full-screen на mobile.
- Fullscreen post-processing только после оценки FPS.
- Для больших particles использовать instancing / GPU buffers.

## Shader review checklist

- [ ] Есть смысловая связь с артисткой.
- [ ] Есть fallback.
- [ ] Есть mobile limit.
- [ ] Нет сильного мерцания.
- [ ] Проверено при разных DPR.
- [ ] Проверено на тёмном/светлом фоне.
- [ ] Освобождаются textures/buffers/materials.
- [ ] Нет зависимости от autoplay audio.

## Хорошая идея
Лучший первый shader для проекта — не миллион частиц, а **stage light + subtle portrait distortion**.

Он сразу выглядит кинематографично, но не создаёт ощущение технодемки.
