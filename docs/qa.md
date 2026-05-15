# qa.md

## Pre-launch QA checklist

## Content
- [ ] Имя написано одинаково на всех страницах.
- [ ] Позиционирование утверждено.
- [ ] Bio вычитана.
- [ ] Credits проверены.
- [ ] Languages не завышены.
- [ ] Skills структурированы.
- [ ] CV актуальное.
- [ ] Press kit не содержит лишнего.

## Media
- [ ] Hero image оптимизировано.
- [ ] Все изображения имеют alt.
- [ ] Видео открываются.
- [ ] Видео не автозапускаются со звуком.
- [ ] Voice samples работают.
- [ ] Audio громкость нормальная.
- [ ] Downloads открываются.
- [ ] Private materials не индексируются.

## UX
- [ ] Contact доступен с любой страницы.
- [ ] Showreel доступен за 1 клик.
- [ ] CV доступно за 1 клик.
- [ ] Casting profile практичный.
- [ ] Mobile navigation удобная.
- [ ] Нет лишних анимаций.
- [ ] Нет пустых секций.

## i18n
- [ ] Переключатель языков работает.
- [ ] Нет случайного смешения языков.
- [ ] Meta title переведены.
- [ ] Meta descriptions переведены.
- [ ] CTA переведены.
- [ ] PDF CV соответствует выбранному языку.
- [ ] hreflang работает.

## SEO
- [ ] Title на каждой странице.
- [ ] Meta description на каждой странице.
- [ ] Canonical URL.
- [ ] Open Graph image.
- [ ] sitemap.xml.
- [ ] robots.txt.
- [ ] JSON-LD Person.
- [ ] Google Search Console подключена.

## Performance
- [ ] Главная быстро открывается на мобильном.
- [ ] Нет тяжёлых видео в initial load.
- [ ] Lazy loading для галерей.
- [ ] Fonts не блокируют рендер.
- [ ] Layout не прыгает.
- [ ] Lighthouse проверен хотя бы вручную.

## Accessibility
- [ ] Контраст текста нормальный.
- [ ] Keyboard navigation работает.
- [ ] Focus states видны.
- [ ] Buttons/links семантически корректны.
- [ ] Audio/video имеют controls.
- [ ] Нет текста только в картинках.

## Contact
- [ ] Email работает.
- [ ] Form submit работает, если есть форма.
- [ ] Spam protection работает, если есть форма.
- [ ] WhatsApp / phone ссылки проверены.
- [ ] Social links проверены.

## Browser/device checks
- [ ] iPhone Safari.
- [ ] Android Chrome.
- [ ] Desktop Chrome.
- [ ] Desktop Safari, если доступен.
- [ ] Desktop Firefox.

## Final decision
Запускать только если:

- главная выглядит профессионально;
- showreel и voice работают;
- контакт не спрятан;
- мобильная версия не хуже десктопной;
- нет ощущения «сырого портфолио».

## Creative Tech QA
- [ ] Сайт работает без JavaScript на базовом уровне.
- [ ] Сайт работает без WebGL/WebGPU.
- [ ] Есть fallback poster для каждой canvas scene.
- [ ] `prefers-reduced-motion` отключает тяжёлые анимации.
- [ ] 3D не грузится в critical path.
- [ ] Render loop останавливается при hidden tab.
- [ ] GPU resources освобождаются при переходе со страницы.
- [ ] DPR ограничен на mobile.
- [ ] FPS не падает ниже agreed threshold на target devices.
- [ ] При низкой производительности quality tier снижается.
- [ ] WebGPU feature не ломает WebGL/static fallback.
- [ ] GSAP ScrollTrigger не ломает обычный скролл.
- [ ] Нет autoplay audio.
- [ ] No motion sickness на длинных scroll-секциях.
- [ ] `/casting` работает быстро и без тяжёлого canvas.

## 3D / Asset QA
- [ ] GLB compressed, если используются 3D assets.
- [ ] Textures compressed / resized.
- [ ] Нет лишних 4K textures.
- [ ] Video не попадает в initial load.
- [ ] Audio samples lazy-load.
- [ ] Waveform data precomputed.
- [ ] Проверен context loss сценарий.
