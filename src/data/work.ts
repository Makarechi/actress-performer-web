import type { Locale } from "./i18n";

export const workLabels: Record<Locale, string> = {
  en: "Work",
  sk: "Práca",
  pl: "Prace",
  it: "Lavori",
  uk: "Роботи",
  ru: "Работы"
};

export const campaignCopy = {
  en: {
    eyebrow: "Official hub",
    title: "Current campaign: Screen · Voice · Stage · Live Events",
    body:
      "This block works like an artist-site campaign slot: it can promote the newest showreel, voice demo, premiere, event booking push or press kit.",
    primary: "Selected work",
    secondary: "Stage mode",
    tertiary: "Casting mode",
    cards: [
      ["Latest reel", "Place the newest acting, voice or music reel here."],
      ["Booking packet", "A short path to CV, press kit, contact and Instagram."],
      ["Updates", "Future premieres, new scenes, voice demos or event clips."]
    ]
  },
  sk: {
    eyebrow: "Oficiálny hub",
    title: "Aktuálna kampaň: Screen · Voice · Stage · Live Events",
    body:
      "Tento blok funguje ako kampaňový priestor: nový showreel, voice demo, premiéra, event booking alebo press kit.",
    primary: "Vybraná práca",
    secondary: "Stage mode",
    tertiary: "Casting mode",
    cards: [
      ["Najnovší reel", "Sem patrí najnovší herecký, hlasový alebo hudobný reel."],
      ["Booking packet", "Rýchla cesta k CV, press kitu, kontaktu a Instagramu."],
      ["Updates", "Premiéry, nové scény, voice demá alebo event klipy."]
    ]
  },
  pl: {
    eyebrow: "Oficjalny hub",
    title: "Aktualna kampania: Screen · Voice · Stage · Live Events",
    body:
      "Ten blok działa jak kampania artystyczna: nowy showreel, voice demo, premiera, booking eventów albo press kit.",
    primary: "Wybrane prace",
    secondary: "Stage mode",
    tertiary: "Casting mode",
    cards: [
      ["Najnowszy reel", "Tu powinien być najnowszy reel aktorski, głosowy lub muzyczny."],
      ["Booking packet", "Krótka droga do CV, press kitu, kontaktu i Instagramu."],
      ["Updates", "Premiery, nowe sceny, voice demo albo klipy z eventów."]
    ]
  },
  it: {
    eyebrow: "Official hub",
    title: "Campagna attuale: Screen · Voice · Stage · Live Events",
    body:
      "Questo blocco funziona come spazio campagna: nuovo showreel, voice demo, premiere, event booking o press kit.",
    primary: "Lavori selezionati",
    secondary: "Stage mode",
    tertiary: "Casting mode",
    cards: [
      ["Reel più recente", "Qui va il nuovo reel di recitazione, voce o musica."],
      ["Booking packet", "Percorso rapido verso CV, press kit, contatto e Instagram."],
      ["Updates", "Premiere, nuove scene, voice demo o clip da eventi."]
    ]
  },
  uk: {
    eyebrow: "Official hub",
    title: "Актуальна кампанія: Screen · Voice · Stage · Live Events",
    body:
      "Цей блок працює як campaign slot: новий showreel, voice demo, прем'єра, event booking або press kit.",
    primary: "Вибрані роботи",
    secondary: "Stage mode",
    tertiary: "Casting mode",
    cards: [
      ["Найновіший reel", "Тут має бути найновіший акторський, voice або music reel."],
      ["Booking packet", "Короткий шлях до CV, press kit, контакту й Instagram."],
      ["Updates", "Прем'єри, нові сцени, voice demos або event clips."]
    ]
  },
  ru: {
    eyebrow: "Официальный хаб",
    title: "Актуальная кампания: Screen · Voice · Stage · Live Events",
    body:
      "Этот блок работает как сменяемый фокус артистического сайта: новый showreel, voice demo, премьера, event booking или press kit.",
    primary: "Работы",
    secondary: "Stage mode",
    tertiary: "Casting mode",
    cards: [
      ["Новый reel", "Здесь должен быть самый свежий актёрский, голосовой или музыкальный reel."],
      ["Booking packet", "Короткий путь к CV, press kit, контакту и Instagram."],
      ["Updates", "Премьеры, новые сцены, voice demos или event clips."]
    ]
  }
} as const;

export const workPageCopy = {
  en: {
    title: "Selected Work — Taisija Boyko",
    description: "Selected work index for Taisija Boyko: acting, voice, music, hosting, languages and planned media.",
    eyebrow: "Selected work",
    heading: "A clear work index for casting, voice, music and events.",
    body:
      "Inspired by cinematic portfolio structures: fewer random posts, more curated work categories and direct next actions.",
    contact: "Contact",
    casting: "Casting profile"
  },
  sk: {
    title: "Vybraná Práca — Taisija Boyko",
    description: "Prehľad práce Taisije Boyko: herectvo, hlas, hudba, moderovanie, jazyky a plánované médiá.",
    eyebrow: "Vybraná práca",
    heading: "Čistý prehľad práce pre casting, hlas, hudbu a eventy.",
    body:
      "Inšpirované filmovým portfóliom: menej náhodných postov, viac kurátorovaných kategórií a jasné ďalšie kroky.",
    contact: "Kontakt",
    casting: "Casting profil"
  },
  pl: {
    title: "Wybrane Prace — Taisija Boyko",
    description: "Indeks prac Taisiji Boyko: aktorstwo, głos, muzyka, prowadzenie, języki i planowane media.",
    eyebrow: "Wybrane prace",
    heading: "Czytelny indeks pracy dla castingu, głosu, muzyki i wydarzeń.",
    body:
      "Inspiracja filmowym portfolio: mniej przypadkowych postów, więcej wybranych kategorii i jasne działania.",
    contact: "Kontakt",
    casting: "Profil castingowy"
  },
  it: {
    title: "Lavori Selezionati — Taisija Boyko",
    description: "Indice lavori di Taisija Boyko: recitazione, voce, musica, eventi, lingue e media pianificati.",
    eyebrow: "Lavori selezionati",
    heading: "Un indice chiaro per casting, voce, musica ed eventi.",
    body:
      "Ispirato ai portfolio cinematografici: meno post casuali, più categorie curate e azioni dirette.",
    contact: "Contatto",
    casting: "Profilo casting"
  },
  uk: {
    title: "Вибрані Роботи — Taisija Boyko",
    description: "Індекс робіт Taisija Boyko: акторство, голос, музика, ведення, мови та заплановані media.",
    eyebrow: "Вибрані роботи",
    heading: "Чіткий work index для кастингу, голосу, музики та подій.",
    body:
      "Натхнено кіношними portfolio: менше випадкових постів, більше curated categories і прямі дії.",
    contact: "Контакт",
    casting: "Casting profile"
  },
  ru: {
    title: "Работы — Taisija Boyko",
    description: "Индекс работ Taisija Boyko: актёрство, голос, музыка, ведущая, языки и запланированные материалы.",
    eyebrow: "Работы",
    heading: "Чёткий каталог работ для кастинга, голоса, музыки и мероприятий.",
    body:
      "Идея взята из кинематографичных портфолио: меньше случайной ленты, больше выбранных категорий и быстрых действий.",
    contact: "Контакт",
    casting: "Кастинг-профиль"
  }
} as const;

export const workCategories = [
  {
    id: "acting",
    postIds: ["nemocnica-tvjoj", "theatre-day", "acting-emotions", "little-women-stage"],
    title: {
      en: "Acting",
      sk: "Herectvo",
      pl: "Aktorstwo",
      it: "Recitazione",
      uk: "Акторство",
      ru: "Актёрство"
    },
    summary: {
      en: "Screen, theatre, series and commercial material.",
      sk: "Film, divadlo, seriály a reklama.",
      pl: "Ekran, teatr, seriale i reklama.",
      it: "Schermo, teatro, serie e pubblicità.",
      uk: "Екран, театр, серіали та реклама.",
      ru: "Экран, театр, сериалы и реклама."
    },
    needed: {
      en: "Add a 60-90 second acting showreel, exact credits, role names and public production stills.",
      sk: "Doplniť 60-90 sekundový herecký showreel, presné credits, názvy rolí a verejné production stills.",
      pl: "Dodać 60-90 sekundowy showreel aktorski, dokładne credits, role i publiczne fotosy.",
      it: "Aggiungere showreel attoriale di 60-90 secondi, credits precisi, ruoli e production stills pubblici.",
      uk: "Додати акторський showreel 60-90 секунд, точні credits, ролі та публічні production stills.",
      ru: "Добавить актёрский showreel на 60-90 секунд, точные credits, роли и публичные production stills."
    }
  },
  {
    id: "voice",
    postIds: ["voice-training"],
    title: {
      en: "Voice & dubbing",
      sk: "Hlas & dabing",
      pl: "Głos & dubbing",
      it: "Voce & doppiaggio",
      uk: "Голос & дубляж",
      ru: "Голос & дубляж"
    },
    summary: {
      en: "Commercial, narration, character, dramatic and language samples.",
      sk: "Reklama, narration, charakter, dramatické a jazykové ukážky.",
      pl: "Reklama, narracja, postać, dramat i próbki językowe.",
      it: "Commercial, narration, character, dramatic e sample linguistici.",
      uk: "Реклама, narration, character, dramatic і мовні samples.",
      ru: "Реклама, narration, character, dramatic и языковые samples."
    },
    needed: {
      en: "Add short audio samples for commercial, narration, character, dramatic and each main language.",
      sk: "Doplniť krátke audio ukážky: commercial, narration, character, dramatic a hlavné jazyky.",
      pl: "Dodać krótkie próbki audio: commercial, narration, character, dramatic i każdy główny język.",
      it: "Aggiungere sample audio brevi: commercial, narration, character, dramatic e lingue principali.",
      uk: "Додати короткі audio samples: commercial, narration, character, dramatic і кожну основну мову.",
      ru: "Добавить короткие аудиосэмплы: commercial, narration, character, dramatic и каждый основной язык."
    }
  },
  {
    id: "music",
    postIds: ["vocal-concert"],
    title: {
      en: "Music",
      sk: "Hudba",
      pl: "Muzyka",
      it: "Musica",
      uk: "Музика",
      ru: "Музыка"
    },
    summary: {
      en: "Vocal, piano and live performance.",
      sk: "Vokál, klavír a live performance.",
      pl: "Wokal, fortepian i live performance.",
      it: "Voce, pianoforte e live performance.",
      uk: "Вокал, фортепіано та live performance.",
      ru: "Вокал, фортепиано и live performance."
    },
    needed: {
      en: "Add one clean vocal sample and one clean piano sample, 30-90 seconds each.",
      sk: "Doplniť jednu čistú vokálnu ukážku a jednu klavírnu ukážku, každú 30-90 sekúnd.",
      pl: "Dodać jedną czystą próbkę wokalu i jedną próbkę fortepianu, po 30-90 sekund.",
      it: "Aggiungere un sample vocale pulito e un sample di pianoforte, 30-90 secondi ciascuno.",
      uk: "Додати чистий vocal sample і piano sample, кожен на 30-90 секунд.",
      ru: "Добавить чистый вокальный сэмпл и сэмпл фортепиано, каждый по 30-90 секунд."
    }
  },
  {
    id: "hosting",
    postIds: ["hosting-st-nicholas"],
    title: {
      en: "Hosting",
      sk: "Moderovanie",
      pl: "Prowadzenie",
      it: "Eventi",
      uk: "Ведення",
      ru: "Ведущая"
    },
    summary: {
      en: "Cultural, corporate, artistic and multilingual events.",
      sk: "Kultúrne, firemné, umelecké a viacjazyčné eventy.",
      pl: "Wydarzenia kulturalne, firmowe, artystyczne i wielojęzyczne.",
      it: "Eventi culturali, corporate, artistici e multilingue.",
      uk: "Культурні, корпоративні, мистецькі та мультимовні події.",
      ru: "Культурные, корпоративные, артистические и мультиязычные мероприятия."
    },
    needed: {
      en: "Add a hosting reel with audience contact, speech, energy and language switching.",
      sk: "Doplniť moderátorský reel s kontaktom s publikom, rečou, energiou a prepínaním jazykov.",
      pl: "Dodać hosting reel z kontaktem z publicznością, mową, energią i przełączaniem języków.",
      it: "Aggiungere hosting reel con contatto col pubblico, parlato, energia e cambio lingua.",
      uk: "Додати hosting reel з контактом з аудиторією, мовленням, енергією та перемиканням мов.",
      ru: "Добавить hosting reel с контактом с аудиторией, речью, энергией и переключением языков."
    }
  }
] as const;
