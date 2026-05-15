# user_flows.md

## Цель
Описать основные сценарии, по которым разные люди будут пользоваться сайтом.

## Flow 1 — Casting Director
### Сценарий
Кастинг-директор получил ссылку в сообщении или нашёл сайт по имени.

### Что ему нужно
- увидеть лицо;
- понять возрастной / визуальный диапазон;
- быстро открыть showreel;
- увидеть языки;
- скачать CV;
- связаться.

### Ideal path
```txt
Open link → Hero → Watch Showreel → Casting Profile → Download CV → Contact
```

### UX requirements
- Showreel должен быть сразу виден.
- Casting profile должен быть без декоративного мусора.
- CV download должен быть очевиден.
- Contact должен быть в header/footer и внутри casting profile.

## Flow 2 — Voice / Dubbing Studio
### Сценарий
Студия ищет актрису для озвучки / дубляжа на нескольких языках.

### Что ей нужно
- услышать голос;
- переключить samples по языку;
- понять жанры голоса;
- увидеть опыт дубляжа;
- быстро связаться.

### Ideal path
```txt
Open link → Voice → Filter by language → Play samples → Contact
```

### UX requirements
- Voice samples должны иметь язык и жанр.
- Нельзя заставлять скачивать аудио перед прослушиванием.
- Audio player должен быть удобным на телефоне.

## Flow 3 — Event Agency
### Сценарий
Агентство ищет ведущую мероприятия на нескольких языках.

### Что ему нужно
- увидеть опыт ведущей;
- понять языки;
- посмотреть видео / фото;
- узнать форматы мероприятий;
- связаться для booking.

### Ideal path
```txt
Open link → Hosting → Languages → Hosting media → Contact for booking
```

### UX requirements
- Hosting не должен теряться внутри Acting.
- CTA должен звучать под booking/events.

## Flow 4 — Advertising Client
### Сценарий
Коммерческий клиент ищет актрису для рекламы.

### Что ему нужно
- камера-ready впечатление;
- рекламные кадры / showreel;
- языки;
- special skills;
- контакт.

### Ideal path
```txt
Open link → Home → Acting / Commercial sample → Skills → Contact
```

## Flow 5 — Press / Collaboration
### Сценарий
Журналист, организатор или партнёр хочет быстро взять информацию.

### Что ему нужно
- bio;
- фото;
- credits;
- official links;
- contact.

### Ideal path
```txt
Open link → Press Kit → Download assets → Contact
```

## Flow 6 — Social Media Visitor
### Сценарий
Человек пришёл из Instagram / TikTok после видео или выступления.

### Что ему нужно
- понять, кто она профессионально;
- посмотреть лучшие материалы;
- подписаться / связаться;
- возможно предложить проект.

### Ideal path
```txt
Open link → Home → Featured media → Social / Contact
```

## Cross-flow rule
На любой странице должен быть следующий возможный шаг:

- Watch Showreel;
- Listen to Voice;
- Download CV;
- Contact.

Если страница заканчивается без действия — это слабый UX.

