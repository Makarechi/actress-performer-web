# deployment.md

## Deployment goal
Сайт должен быть надёжным, быстрым и простым в обновлении.

## Recommended hosting
Подходящие варианты:

- Cloudflare Pages;
- Vercel;
- Netlify;
- static hosting behind CDN.

Моё предпочтение: Cloudflare Pages или Vercel, в зависимости от выбранного стека и привычек разработчика.

## Environments
```txt
local       — development
staging     — preview for review
production  — public website
```

## Domain
Идеальный домен:

```txt
firstname-lastname.com
```

Альтернативы:

```txt
firstname-lastname.art
firstname-lastname.actor
firstname-lastname.eu
```

Я бы выбирал `.com`, если свободен. Он выглядит универсальнее.

## Email
Создать профессиональный email:

```txt
contact@domain.com
booking@domain.com
```

Не использовать личный email как основной публичный контакт, если планируется профессиональная коммуникация.

## Build pipeline
Минимальный pipeline:

1. push to main;
2. build;
3. typecheck;
4. lint;
5. deploy preview;
6. production deploy after approval.

## Environment variables
Не хранить в репозитории:

- analytics keys;
- form provider keys;
- CMS tokens;
- private video tokens;
- email service credentials.

## Backups
Хранить отдельно:

- оригинальные фото;
- оригинальные видео;
- исходники CV;
- тексты bio;
- exports сайта;
- CMS backups, если есть CMS.

## Monitoring
Минимум:

- uptime monitoring;
- analytics;
- Search Console;
- broken links check вручную раз в месяц.

## Launch steps
- [ ] Production domain connected.
- [ ] HTTPS enabled.
- [ ] Redirects configured.
- [ ] www/non-www chosen.
- [ ] sitemap.xml available.
- [ ] robots.txt correct.
- [ ] private pages noindex.
- [ ] analytics connected.
- [ ] Search Console verified.
- [ ] Open Graph tested in messengers.
- [ ] CV downloads checked.
- [ ] contact email checked.

## Post-launch
Через 1–2 недели после запуска:

- проверить Search Console;
- проверить, какие страницы индексируются;
- проверить аналитику;
- исправить слабые места;
- обновить тексты по реальной реакции людей.

