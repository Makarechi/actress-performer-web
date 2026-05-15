# creative_technology.md

## Роль документа
Этот документ описывает технический «вау-слой» сайта: WebGPU/WebGL, 3D, шейдеры, scroll-driven storytelling, физику, Web Workers, WASM и тяжёлую оптимизацию ассетов.

Главная идея: сайт может выглядеть как премиальный digital performance, но кастинг-функциональность должна оставаться быстрой, понятной и доступной даже без 3D.

## Принцип
Вау-эффект не должен быть главным продуктом. Главный продукт — артистка.

Creative Tech Layer должен:

- усиливать образ актрисы, performer, voice artist и musician;
- создавать запоминающийся первый контакт;
- показывать технологическую дороговизну без ощущения «демо для разработчика»;
- не мешать showreel, voice samples, CV и контактам;
- иметь graceful fallback для слабых устройств и браузеров;
- уважать `prefers-reduced-motion`;
- не ломать SEO и доступность.

## Слои опыта

### Layer 0 — Essential HTML
Работает всегда.

- имя;
- фото;
- позиционирование;
- showreel;
- voice samples;
- languages;
- CV;
- contacts.

Этот слой должен быть полностью пригоден для кастинг-директора без JavaScript, 3D и WebGPU.

### Layer 1 — Premium UI motion
Работает на большинстве устройств.

- плавные переходы;
- micro-interactions;
- мягкое появление секций;
- animated typography;
- hover states;
- scroll reveal;
- Framer Motion / Motion One / GSAP.

### Layer 2 — Cinematic canvas
Включается на нормальных устройствах.

- WebGL 2 / Three.js / React Three Fiber;
- canvas background;
- particles;
- shader-based distortion;
- interactive light / glass / smoke;
- scroll-driven 3D camera movement.

### Layer 3 — Experimental WebGPU
Включается только при feature detection и хорошей производительности.

- WebGPU renderer;
- WGSL shaders;
- compute shaders;
- high-count particles;
- GPU-driven simulations;
- experimental interactive scenes.

Этот слой не должен быть обязательным для навигации.

## Рекомендуемая продуктовая формула

**Core site + cinematic layer + experimental lab.**

- Core site продаёт артистку.
- Cinematic layer создаёт премиальное впечатление.
- Experimental lab показывает technological edge, но не мешает главному пути.

## Где использовать вау-эффект

### Home hero
Лучшее место для сильного визуала.

Идеи:

- динамический портрет из частиц;
- свет как театральный прожектор;
- «жидкое стекло» поверх фото;
- мягкий 3D parallax;
- интерактивное движение света от курсора;
- переключение состояний: screen / stage / voice / music / live.

### Languages / Voice
Идеальное место для интерактива.

Идеи:

- языки как орбитальная система;
- при выборе языка меняется аудио, субтитр и визуальная волна;
- voice samples сопровождаются shader waveform;
- multilingual identity map.

### Music
Идеи:

- аудио-реактивные линии;
- piano waveform;
- visualizer на основе частот;
- клавиши как навигация между samples.

### Aerial / Physical skills
Идеи:

- ленточная 3D-траектория движения;
- particles following a silk ribbon;
- scroll-driven rotation вокруг силуэта;
- slow-motion kinetic stage.

### Gallery
Идеи:

- cinematic grid;
- плавное раскрытие production stills;
- shader transition между театром, кино, рекламой.

## Где НЕ использовать тяжёлый вау-эффект

- Contact.
- Casting Profile.
- CV download.
- Private casting links.
- Legal/privacy.
- Страницы, которые должны открываться быстро по ссылке из переписки.

Casting Profile должен быть почти сухим, быстрым и практичным.

## Технический стек для Creative Tech Layer

### Базовый стек
- TypeScript.
- Astro или Next.js.
- React для интерактивных островов.
- Three.js / React Three Fiber для 3D.
- GSAP + ScrollTrigger для cinematic scroll.
- Framer Motion / Motion One для UI transitions.

### Экспериментальный стек
- WebGPU via Three.js WebGPURenderer или отдельные WebGPU modules.
- WGSL shaders.
- Web Workers для подготовки геометрии / данных.
- WASM для физики, audio analysis или тяжёлой математики.
- Rapier для физики, если нужна реальная симуляция.

## Feature detection
Никогда не считать, что у пользователя есть мощное устройство.

Псевдологика:

```ts
const capabilities = {
  webgpu: 'gpu' in navigator,
  webgl2: !!document.createElement('canvas').getContext('webgl2'),
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  lowMemory: 'deviceMemory' in navigator && navigator.deviceMemory <= 4,
  lowCpu: 'hardwareConcurrency' in navigator && navigator.hardwareConcurrency <= 4,
};
```

Режимы:

```txt
no-js      -> static content
lite       -> CSS/HTML only, no canvas
standard   -> UI animation + light canvas
premium    -> WebGL/R3F scene
ultra      -> WebGPU/compute/advanced shaders
```

## Производительная философия

- Не грузить 3D до того, как пользователь увидит базовый hero.
- Использовать dynamic import для 3D.
- Canvas монтировать только на нужных страницах.
- Ставить паузу, когда вкладка неактивна.
- Снижать качество при падении FPS.
- Ограничивать DPR: не рендерить всё в `devicePixelRatio = 3` на мобильном.
- Не запускать тяжёлую физику на мобильном без необходимости.
- Уважать battery saver.

## Fallback content
Каждая 3D/Canvas-секция должна иметь статичную альтернативу:

- hero image вместо shader portrait;
- static poster вместо 3D scene;
- audio controls вместо custom visualizer;
- обычный список языков вместо orbital language scene;
- статичная галерея вместо cinematic gallery.

## Правило принятия решений
Добавлять creative tech только если оно проходит 3 вопроса:

1. Это усиливает артистку?
2. Это не мешает кастингу и контактам?
3. Это можно выключить без потери смысла?

Если хотя бы один ответ «нет» — эффект не нужен.
