import { heroBackdrops } from "@data/heroBackdrops";
import {
  getLocalizedInstagramPosts,
  localeNames,
  locales,
  localizedPath,
  translations,
  type Locale
} from "@data/i18n";
import { localeVisuals } from "@data/localeVisuals";
import { withBase } from "@data/paths";
import { contentPlan, profile } from "@data/profile";
import { aerialGymnasticsMedia } from "@data/specialMedia";
import { stageCopy, stageLabels } from "@data/stage";
import { testimonialFeatures } from "@data/testimonials";
import { campaignCopy, workCategories, workLabels, workPageCopy } from "@data/work";

export type AppPage = "gate" | "home" | "casting" | "stage" | "work";

type HeaderSection = "" | "casting" | "stage" | "work";

const briefLabels: Record<Locale, { visual: string; content: string; loop: string }> = {
  en: { visual: "Visual direction", content: "Hero content to shoot", loop: "Cinematic language loop" },
  sk: { visual: "Vizuálny smer", content: "Hero obsah na natočenie", loop: "Slovenský filmový loop" },
  pl: { visual: "Kierunek wizualny", content: "Hero materiały do nagrania", loop: "Polski filmowy loop" },
  it: { visual: "Direzione visiva", content: "Contenuti hero da girare", loop: "Loop cinematografico italiano" },
  uk: { visual: "Візуальний напрям", content: "Hero-контент для зйомки", loop: "Український film loop" },
  ru: { visual: "Визуальное направление", content: "Hero-контент для съёмки", loop: "Русский cinematic loop" }
};

const aerialCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    body: string;
    meta: string;
    full: string;
  }
> = {
  en: {
    eyebrow: "Special skill",
    title: "Aerial gymnastics as camera-ready movement.",
    body:
      "A dedicated aerial silks clip now supports casting for physical theatre, commercials, fantasy, music videos and roles that need disciplined body control.",
    meta: "42-second highlight from the original training video.",
    full: "Open full 4-minute version"
  },
  sk: {
    eyebrow: "Špeciálna schopnosť",
    title: "Vzdušná gymnastika ako pohyb pripravený pre kameru.",
    body:
      "Ukážka na šáloch dopĺňa casting pre fyzické divadlo, reklamu, klipy, fantasy projekty a roly, kde je dôležitá kontrola tela.",
    meta: "42-sekundový highlight z pôvodného tréningového videa.",
    full: "Otvoriť plnú 4-minútovú verziu"
  },
  pl: {
    eyebrow: "Umiejętność specjalna",
    title: "Gimnastyka powietrzna jako ruch gotowy do kamery.",
    body:
      "Krótki materiał na szarfach wzmacnia casting do teatru fizycznego, reklamy, klipów muzycznych, fantasy i ról wymagających kontroli ciała.",
    meta: "42-sekundowy highlight z oryginalnego nagrania treningowego.",
    full: "Otwórz pełną 4-minutową wersję"
  },
  it: {
    eyebrow: "Skill speciale",
    title: "Danza aerea come movimento pronto per la camera.",
    body:
      "La clip sui tessuti aerei supporta casting per teatro fisico, pubblicità, videoclip, fantasy e ruoli che richiedono controllo corporeo.",
    meta: "Highlight di 42 secondi dal video originale di training.",
    full: "Apri la versione completa di 4 minuti"
  },
  uk: {
    eyebrow: "Спеціальна навичка",
    title: "Повітряна гімнастика як рух, готовий для камери.",
    body:
      "Короткий фрагмент на полотнах підсилює casting для physical theatre, реклами, кліпів, fantasy-проєктів і ролей, де важливий контроль тіла.",
    meta: "42-секундний highlight з оригінального тренувального відео.",
    full: "Відкрити повну 4-хвилинну версію"
  },
  ru: {
    eyebrow: "Специальный навык",
    title: "Воздушная гимнастика как движение, готовое для камеры.",
    body:
      "Короткий фрагмент на полотнах усиливает кастинг для physical theatre, рекламы, клипов, fantasy-проектов и ролей, где важны линия, контроль тела и пластика.",
    meta: "42-секундный highlight из оригинального тренировочного видео.",
    full: "Открыть полную 4-минутную версию"
  }
};

const castingFactRows: Record<Locale, readonly (readonly [string, string])[]> = {
  en: [
    ["Profession", "Film and theatre actress / performer"],
    ["Base", "Bratislava / Central Europe"],
    ["Training", profile.education],
    ["Work formats", "Film, theatre, series, advertising, dubbing, events"],
    ["Contact", profile.email]
  ],
  sk: [
    ["Profesia", "Filmová a divadelná herečka / performerka"],
    ["Základňa", "Bratislava / stredná Európa"],
    ["Vzdelanie", profile.education],
    ["Formáty práce", "Film, divadlo, seriály, reklama, dabing, eventy"],
    ["Kontakt", profile.email]
  ],
  pl: [
    ["Zawód", "Aktorka filmowa i teatralna / performerka"],
    ["Baza", "Bratysława / Europa Środkowa"],
    ["Edukacja", profile.education],
    ["Formaty pracy", "Film, teatr, seriale, reklama, dubbing, wydarzenia"],
    ["Kontakt", profile.email]
  ],
  it: [
    ["Professione", "Attrice di cinema e teatro / performer"],
    ["Base", "Bratislava / Europa centrale"],
    ["Formazione", profile.education],
    ["Formati", "Film, teatro, serie, pubblicità, doppiaggio, eventi"],
    ["Contatto", profile.email]
  ],
  uk: [
    ["Професія", "Кіно- та театральна акторка / performer"],
    ["База", "Братислава / Центральна Європа"],
    ["Освіта", profile.education],
    ["Формати роботи", "Кіно, театр, серіали, реклама, дубляж, події"],
    ["Контакт", profile.email]
  ],
  ru: [
    ["Профессия", "Актриса кино и театра / performer"],
    ["База", "Братислава / Центральная Европа"],
    ["Образование", profile.education],
    ["Форматы работы", "Кино, театр, сериалы, реклама, дубляж, мероприятия"],
    ["Контакт", profile.email]
  ]
};

const mediaToAdd: Record<Locale, string> = {
  en: "media to add",
  sk: "materiály na doplnenie",
  pl: "media do dodania",
  it: "media da aggiungere",
  uk: "матеріали для додавання",
  ru: "материалы для добавления"
};

const plannedAssetLabel: Record<Locale, string> = {
  en: "planned work asset",
  sk: "plánovaný materiál",
  pl: "planowany materiał",
  it: "materiale pianificato",
  uk: "запланований матеріал",
  ru: "запланированный материал"
};

const packetCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    body: string;
    items: string[];
  }
> = {
  en: {
    eyebrow: "Press / booking packet",
    title: "A practical package for agents, producers and event clients.",
    body:
      "This area is planned for the downloadable materials that make the site work like an official artist hub.",
    items: ["Updated CV PDF", "Press kit with approved photos", "Showreel links", "Voice and music samples"]
  },
  sk: {
    eyebrow: "Press / booking packet",
    title: "Praktický balík pre agentúry, producentov a event klientov.",
    body:
      "Tento priestor je pripravený pre materiály, aby stránka fungovala ako oficiálny artist hub.",
    items: ["Aktuálne CV PDF", "Press kit so schválenými fotkami", "Showreel linky", "Hlasové a hudobné ukážky"]
  },
  pl: {
    eyebrow: "Press / booking packet",
    title: "Praktyczny pakiet dla agentów, producentów i klientów eventowych.",
    body:
      "To miejsce jest zaplanowane na materiały, które zamienią stronę w oficjalny hub artystki.",
    items: ["Aktualne CV PDF", "Press kit ze zdjęciami", "Linki do showreel", "Próbki głosu i muzyki"]
  },
  it: {
    eyebrow: "Press / booking packet",
    title: "Un pacchetto pratico per agenti, produzioni e clienti eventi.",
    body:
      "Questo spazio è pensato per i materiali scaricabili che fanno funzionare il sito come official artist hub.",
    items: ["CV PDF aggiornato", "Press kit con foto approvate", "Link showreel", "Sample voce e musica"]
  },
  uk: {
    eyebrow: "Press / booking packet",
    title: "Практичний пакет для агентів, продюсерів і event-клієнтів.",
    body:
      "Цей блок запланований для матеріалів, які перетворюють сайт на офіційний artist hub.",
    items: ["Оновлений CV PDF", "Press kit з approved photos", "Showreel links", "Voice and music samples"]
  },
  ru: {
    eyebrow: "Press / booking packet",
    title: "Практический пакет для агентов, продюсеров и event-клиентов.",
    body:
      "Этот блок запланирован под материалы, которые превращают сайт в официальный артистический хаб.",
    items: ["Актуальный CV PDF", "Press kit с утверждёнными фото", "Ссылки на showreel", "Voice и music samples"]
  }
};

const signatureLabels: Record<Locale, { backdrop: string; content: string }> = {
  en: { backdrop: "Hero backdrop", content: "Content to prepare" },
  sk: { backdrop: "Hero pozadie", content: "Obsah na prípravu" },
  pl: { backdrop: "Tło hero", content: "Materiały do przygotowania" },
  it: { backdrop: "Sfondo hero", content: "Contenuti da preparare" },
  uk: { backdrop: "Hero backdrop", content: "Матеріали для підготовки" },
  ru: { backdrop: "Фон первого экрана", content: "Контент для подготовки" }
};

const stageStaticLabels: Record<Locale, { heroBackdrop: string; creativePlan: string; sceneChapters: string; voiceMusic: string }> = {
  en: {
    heroBackdrop: "Hero backdrop",
    creativePlan: "Creative tech plan",
    sceneChapters: "Scene chapters for future media.",
    voiceMusic: "Voice & music experience"
  },
  sk: {
    heroBackdrop: "Hero pozadie",
    creativePlan: "Creative tech plan",
    sceneChapters: "Scénické kapitoly pre budúce médiá.",
    voiceMusic: "Hlas & hudobný zážitok"
  },
  pl: {
    heroBackdrop: "Tło hero",
    creativePlan: "Creative tech plan",
    sceneChapters: "Rozdziały sceniczne dla przyszłych materiałów.",
    voiceMusic: "Głos & muzyczne doświadczenie"
  },
  it: {
    heroBackdrop: "Sfondo hero",
    creativePlan: "Creative tech plan",
    sceneChapters: "Capitoli scenici per media futuri.",
    voiceMusic: "Voce & esperienza musicale"
  },
  uk: {
    heroBackdrop: "Hero backdrop",
    creativePlan: "Creative tech plan",
    sceneChapters: "Сценічні розділи для майбутніх media.",
    voiceMusic: "Voice & music experience"
  },
  ru: {
    heroBackdrop: "Фон первого экрана",
    creativePlan: "Creative tech plan",
    sceneChapters: "Сценические главы для будущих материалов.",
    voiceMusic: "Voice & music experience"
  }
};

const postIds = {
  featured: ["nemocnica-tvjoj", "theatre-day", "vocal-concert", "hosting-st-nicholas", "voice-training", "little-women-stage"],
  acting: ["nemocnica-tvjoj", "theatre-day", "acting-emotions", "little-women-stage"],
  music: ["vocal-concert"],
  hosting: ["hosting-st-nicholas"],
  voice: ["voice-training"],
  stage: ["nemocnica-tvjoj", "vocal-concert", "voice-training", "hosting-st-nicholas"]
} as const;

export function createAppPayload(locale: Locale, page: AppPage, section: HeaderSection = "") {
  const t = translations[locale];
  const currentSuffix = section ? `${section}/` : "";
  const localizedPosts = getLocalizedInstagramPosts(locale);
  const byId = (ids: readonly string[]) => localizedPosts.filter((post) => ids.includes(post.id));
  const testimonial = testimonialFeatures[locale] ?? null;

  const navItems = [
    [t.nav.acting, `${localizedPath(locale)}#acting`],
    [t.nav.voice, `${localizedPath(locale)}#voice`],
    [t.nav.languages, `${localizedPath(locale)}#languages`],
    [t.nav.music, `${localizedPath(locale)}#music`],
    [t.nav.hosting, `${localizedPath(locale)}#hosting`],
    ...(testimonial ? [[testimonial.navLabel, `${localizedPath(locale)}#testimonials`] as [string, string]] : []),
    [workLabels[locale], localizedPath(locale, "work/")],
    [stageLabels[locale], localizedPath(locale, "stage/")],
    [t.nav.casting, localizedPath(locale, "casting/")],
    [t.nav.plan, `${localizedPath(locale)}#content-plan`],
    [t.nav.contact, `${localizedPath(locale)}#contact`]
  ].map(([label, href]) => ({ label, href }));

  return {
    page,
    locale,
    base: import.meta.env.BASE_URL ?? "/",
    locales,
    localeOptions: locales.map((code) => ({
      code,
      name: localeNames[code],
      href: localizedPath(code, currentSuffix),
      selected: code === locale
    })),
    gateOptions: locales.map((code) => ({
      code,
      name: localeNames[code],
      href: withBase(`/${code}/`)
    })),
    paths: {
      home: localizedPath(locale),
      casting: localizedPath(locale, "casting/"),
      stage: localizedPath(locale, "stage/"),
      work: localizedPath(locale, "work/"),
      cv: withBase("/downloads/taisija-boyko-cv-draft.txt")
    },
    navItems,
    profile,
    t,
    visual: localeVisuals[locale],
    heroBackdrop: heroBackdrops[locale],
    campaign: campaignCopy[locale],
    stage: stageCopy[locale],
    work: workPageCopy[locale],
    workSections: workCategories.map((category) => ({
      id: category.id,
      title: category.title[locale],
      summary: category.summary[locale],
      needed: category.needed[locale],
      posts: byId(category.postIds)
    })),
    posts: {
      featured: byId(postIds.featured),
      acting: byId(postIds.acting),
      music: byId(postIds.music),
      hosting: byId(postIds.hosting),
      voice: byId(postIds.voice),
      stage: byId(postIds.stage),
      casting: byId(postIds.featured)
    },
    labels: {
      brief: briefLabels[locale],
      mediaToAdd: mediaToAdd[locale],
      plannedAsset: plannedAssetLabel[locale],
      packet: packetCopy[locale],
      signature: signatureLabels[locale],
      stageStatic: stageStaticLabels[locale]
    },
    testimonial,
    aerial: {
      copy: aerialCopy[locale],
      media: aerialGymnasticsMedia
    },
    casting: {
      factRows: castingFactRows[locale],
      contentPlan: contentPlan.slice(0, 7)
    },
    contentPlan
  };
}
