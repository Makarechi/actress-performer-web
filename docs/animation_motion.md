# animation_motion.md

## Цель
Описать motion system: переходы, scroll-driven storytelling, cinematic timelines, микроанимации и физическое поведение интерфейса.

## Главный принцип
Анимация должна создавать ощущение сцены, камеры, дыхания и темпа. Не просто «движение ради движения».

## Motion personality
Сайт должен двигаться как:

- театральный свет;
- камера в slow dolly shot;
- мягкий сценический переход;
- дыхание живого performance;
- дорогой editorial film site.

Избегать:

- резких “startup SaaS” анимаций;
- bounce без причины;
- чрезмерного parallax;
- бесконечных декоративных движений;
- motion, который мешает читать.

## Инструменты

### GSAP + ScrollTrigger
Использовать для:

- scroll storytelling;
- pinned sections;
- camera movement;
- synced 3D + DOM timelines;
- choreography of hero scene;
- complex reveal sequences.

### Framer Motion / Motion One
Использовать для:

- page transitions;
- modal transitions;
- buttons;
- cards;
- mobile nav;
- small interactive states.

### CSS transitions
Использовать для:

- hover/focus;
- color transitions;
- opacity;
- simple transforms.

## Scroll-driven storytelling
Сценарий главной страницы может быть построен как мини-трейлер:

```txt
1. Hero: лицо + имя + свет сцены.
2. Scroll: камера раскрывает направления — screen / stage / voice / music.
3. Languages: голос и языки собираются в систему.
4. Acting: showreel становится главным доказательством.
5. Voice: аудио и waveform.
6. Music: вокал/фортепиано.
7. Casting: быстрый practical CTA.
```

Но пользователь всегда должен иметь возможность быстро перейти по меню, не проходя весь спектакль.

## Timeline rules

- Все сложные анимации описывать как named timelines.
- Не смешивать много независимых scroll triggers для одного элемента.
- Не анимировать layout-свойства (`top`, `left`, `width`) без необходимости.
- Предпочитать `transform` и `opacity`.
- Для pinned sections заранее резервировать высоту, чтобы не было layout jumps.

## Reduced motion
Если пользователь включил reduced motion:

- отключить scroll-scrub сцены;
- убрать camera fly-through;
- заменить parallax на fade/none;
- отключить particles или сделать static poster;
- оставить только мгновенные/короткие transitions.

## Mobile motion
На мобильном:

- меньше pinned-секций;
- меньше canvas;
- меньше scroll hijacking;
- никакого обязательного горизонтального скролла;
- CTA всегда видны;
- motion shorter and lighter.

## Interaction ideas

### Hero light
Курсор/палец слегка меняет направление света. На mobile — gyroscope optional, но выключен по умолчанию.

### Language orbit
При выборе языка orbit успокаивается, выбранный язык становится центром, включается audio sample.

### Voice waveform
Waveform реагирует на sample, но не требует WebAudio до явного play.

### Theatre curtain
Переход между секциями как движение света или занавеса, а не literal curtain animation.

### Floating skills
Skills могут слегка реагировать на физику, но не должны мешать кликать.

## Motion tokens

```txt
motion.fast    = 120–180ms
motion.normal  = 240–360ms
motion.slow    = 600–900ms
motion.cinema  = 1200–2000ms
```

Easing:

```txt
ease.out       -> UI reveal
ease.inOut     -> page transition
ease.cinematic -> long camera moves
spring.soft    -> cards/buttons
```

## Definition of done
Motion готов, если:

- не раздражает после 5 просмотров;
- не мешает быстро найти showreel/CV/contact;
- не создаёт motion sickness;
- отключается через reduced motion;
- работает на mobile без лагов;
- имеет одинаковый rhythm across pages.
