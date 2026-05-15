# experimental_concepts.md

## Цель
Собрать идеи для wow features, которые подходят именно этому проекту: актриса, языки, голос, музыка, сцена, рисунок, aerial gymnastics.

## Важное ограничение
Не делать все идеи сразу. Выбрать 1–2 сильные для первого production release, остальные оставить в backlog.

## Concept 1 — Stage Light Portrait
### Идея
Главное фото/портрет оживает через сценический свет, лёгкий shader distortion и глубину.

### Почему подходит
Актриса + театр + кино. Эффект сразу в тему.

### Технологии
- WebGL 2 / Three.js.
- GLSL fragment shader.
- Mouse light interaction.
- Static poster fallback.

### Риск
Если переборщить, будет выглядеть как template crypto site.

### Оценка
Лучший первый wow effect.

## Concept 2 — Multilingual Voice Galaxy
### Идея
Языки представлены как орбитальная система. При выборе языка включается короткий voice/language sample, меняется типографика, waveform и subtitle.

### Почему подходит
Языки — один из главных коммерческих козырей.

### Технологии
- R3F / Three.js.
- Audio player.
- Precomputed waveform JSON.
- Optional shader background.

### Риск
Не делать слишком игровым. Нужна очень быстрая доступность списка языков.

### Оценка
Очень сильная feature для отличия от других актрис.

## Concept 3 — Voice Wave Shader
### Идея
Голос рисует живую графику: waveform / spectrum / particles.

### Почему подходит
Voice acting, dubbing, multilingual identity.

### Технологии
- WebAudio after user gesture.
- Canvas/WebGL.
- Precomputed waveform fallback.

### Риск
Autoplay restrictions, performance, privacy of audio context.

### Оценка
Хорошо для Voice page.

## Concept 4 — Aerial Ribbon
### Идея
Лента/траектория движения в 3D символизирует воздушную гимнастику и physical skill.

### Почему подходит
Редкий навык, визуально красивый.

### Технологии
- Three.js curve geometry.
- Shader material.
- ScrollTrigger camera.

### Риск
Может выглядеть абстрактно без фото/видео реального skill.

### Оценка
Добавлять после базового портфолио.

## Concept 5 — Ink to Image Gallery
### Идея
Фотографии раскрываются через эффект чернил/рисунка, отсылая к навыку рисования.

### Почему подходит
Связывает визуальное искусство и актёрское портфолио.

### Технологии
- GLSL transition.
- Image masks.
- Noise textures.

### Риск
Может замедлить gallery на мобильном.

### Оценка
Хорошо для Gallery/Art block.

## Concept 6 — Piano Light Keys
### Идея
В музыкальном блоке клавиши/линии света реагируют на аудио или пользовательское движение.

### Почему подходит
Показывает piano skill без банального списка.

### Технологии
- Canvas 2D или WebGL.
- Precomputed audio energy.
- CSS/JS animation.

### Риск
Не превращать в игрушку.

### Оценка
Лёгкая красивая feature.

## Concept 7 — Casting Quick Mode
### Идея
Кнопка `Casting Mode` выключает весь декоративный слой и показывает практичный профиль.

### Почему подходит
Это уважение к профессиональной аудитории.

### Технологии
- Query param `?mode=casting`.
- Persisted user preference.
- CSS/JS feature flags.

### Риск
Почти нет.

### Оценка
Обязательно.

## Concept 8 — Private Reel Rooms
### Идея
Закрытые страницы под конкретные кастинги: только нужный showreel, voice sample, фото, CV и контакты.

### Почему подходит
Удобно отправлять режиссёрам/агентам материалы точечно.

### Технологии
- Tokenized routes.
- `noindex`.
- Optional password.
- Analytics per room.

### Риск
Приватность и права на материалы.

### Оценка
Очень полезно после MVP.

## Приоритет реализации

### Release 1
1. Stage Light Portrait.
2. Casting Quick Mode.
3. Light motion system.

### Release 2
1. Multilingual Voice Galaxy.
2. Voice Wave Shader.
3. Private Reel Rooms.

### Release 3
1. Aerial Ribbon.
2. Ink Gallery.
3. WebGPU particle portrait.

## Мой выбор
Для первого релиза я бы выбрал:

```txt
Stage Light Portrait + Multilingual Voice Galaxy lite + Casting Quick Mode
```

Это даст вау, но не превратит сайт в тяжелый аттракцион.
