import { instagramPosts } from "./instagram";
import { withBase } from "./paths";

export const locales = ["en", "sk", "pl", "it", "uk", "ru"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  sk: "Slovenčina",
  pl: "Polski",
  it: "Italiano",
  uk: "Українська",
  ru: "Русский"
};

export const defaultLocale: Locale = "en";

export function normalizeLocale(value: string | undefined): Locale {
  const short = value?.toLowerCase().slice(0, 2);
  return locales.includes(short as Locale) ? (short as Locale) : defaultLocale;
}

const sharedInstagramCopy = {
  "theatre-day": {
    title: "International Theatre Day",
    category: "theatre / acting"
  },
  "acting-inner-child": {
    title: "Inner Child Acting Exercise",
    category: "acting training"
  },
  "acting-emotions": {
    title: "Strong Emotions On Stage",
    category: "acting training"
  },
  "vocal-concert": {
    title: "Vocal Performance",
    category: "music / live"
  },
  "little-women-clip": {
    title: "Little Women",
    category: "stage / actor training"
  },
  "little-women-stage": {
    title: "Paprad Acting Studio",
    category: "theatre / mentoring"
  },
  "hosting-st-nicholas": {
    title: "St. Nicholas Event",
    category: "hosting / live event"
  },
  "nemocnica-tvjoj": {
    title: "Nemocnica TV JOJ",
    category: "screen acting"
  },
  "voice-training": {
    title: "Voice Engine",
    category: "voice / public speaking"
  },
  "acting-organic-action": {
    title: "Organic Action",
    category: "acting craft"
  }
} as const;

export const translations = {
  en: {
    siteTitle: "Taisija Boyko — Multilingual Actress & Performer",
    siteDescription:
      "Official website of Taisija Boyko, a multilingual actress and performer for screen, stage, voice and live events.",
    nav: {
      acting: "Acting",
      voice: "Voice",
      languages: "Languages",
      music: "Music",
      hosting: "Hosting",
      casting: "Casting",
      plan: "Plan",
      contact: "Contact"
    },
    selectLanguage: "Site language",
    hero: {
      eyebrow: "Film and theatre actress · Bratislava / Central Europe",
      headline: "Multilingual actress and performer for screen, stage, voice and live events.",
      subheadline:
        "Film and theatre actress with experience across theatre, film, series, commercials, dubbing, event hosting, voice, music and live performance.",
      showreel: "Watch showreel",
      voice: "Listen to voice",
      casting: "Casting profile",
      cv: "CV brief",
      cardLabel: "Profile from Instagram",
      cardTitle: "Film and theatre actress"
    },
    quick: ["Acting", "Voice", "Music", "Languages", "Hosting", "Dubbing", "Aerial", "Drawing"],
    selected: {
      eyebrow: "Selected materials",
      title: "Real public work references from Instagram.",
      body:
        "These are live profile materials pulled from the current Instagram page and organized into a casting-friendly structure."
    },
    reels: {
      eyebrow: "Reel library",
      title: "Four short reels will sell the profile faster than one long page.",
      body:
        "The site now has clear places for the videos that matter most: acting, voice, music and events.",
      items: [
        ["Acting showreel", "60-90 seconds with screen, stage, series and commercial fragments."],
        ["Voice reel", "Commercial, narration, character and dramatic samples across languages."],
        ["Music reel", "Vocal and piano fragments with clean sound and simple framing."],
        ["Hosting reel", "Event fragments showing speech, audience contact and multilingual delivery."]
      ]
    },
    acting: {
      eyebrow: "Acting",
      title: "Screen, stage, series and commercials.",
      body:
        "A multilingual actress and performer with experience in theatre, film, television series, commercials, dubbing and event hosting. She works across Slovak, Polish, Italian, Ukrainian, Russian and English, combining acting with voice, music, piano, vocal performance and movement skills.",
      placeholder:
        "Expected here: a 60-90 second reel with selected theatre, film, series and advertising fragments. Until it is added, this block marks the exact material needed."
    },
    voice: {
      eyebrow: "Voice & dubbing",
      title: "A multilingual voice performer with acting background.",
      body:
        "Voice work is positioned as a commercial strength: dubbing, advertising, narration, character material and language samples.",
      sampleSet:
        "Expected: the same short text recorded in Slovak, Polish, Italian, Ukrainian, Russian and English."
    },
    languages: {
      eyebrow: "Languages",
      title: "The central professional advantage."
    },
    market: {
      eyebrow: "Local market focus",
      title: "The same performer can be presented differently in each market.",
      cards: [
        ["International casting", "English-first materials should make her easy to send to agencies, producers and casting teams outside one local market."],
        ["Central Europe base", "Bratislava is useful for Slovak, Czech-adjacent, Polish, Ukrainian and international productions."],
        ["Voice and languages", "The language range is especially strong for dubbing, commercial voice work and cross-border events."]
      ]
    },
    canvas: {
      eyebrow: "Language stage",
      title: "One profile, several casting doors.",
      body:
        "This section turns the language range into a visual casting tool: acting, voice, hosting, singing and translation are separated by use case."
    },
    music: {
      eyebrow: "Music",
      title: "Vocal, piano and live performance.",
      body:
        "Music is part of the performer profile: useful for stage, camera work, character performance, live formats and commercial productions.",
      piano: "Expected: 30-90 seconds showing musicality and camera-safe performance."
    },
    hosting: {
      eyebrow: "Hosting & live events",
      title: "Presenter for cultural, corporate and artistic formats.",
      body:
        "Hosting is separated from acting because it speaks to another audience: event agencies, festivals, corporate clients and cultural projects.",
      placeholder:
        "Expected here: selected fragments from events, ideally showing audience contact and multilingual delivery."
    },
    skills: {
      eyebrow: "Skills",
      title: "Structured range, not a random list."
    },
    plan: {
      eyebrow: "Content to add before launch",
      title: "Planned media slots are marked clearly.",
      body:
        "Instagram gives useful proof points, but the finished site needs dedicated casting, voice, music and press materials. Add these assets later and the placeholders can be replaced one by one."
    },
    contact: {
      eyebrow: "Contact",
      title: "For casting, voice work, commercials, events and collaborations.",
      casting: "Open casting profile"
    },
    casting: {
      title: "Casting Profile — Taisija Boyko",
      description:
        "Casting profile of Taisija Boyko: showreel, languages, acting experience, special skills, CV and contact details.",
      eyebrow: "Casting profile",
      intro:
        "Available for film, television, theatre, commercials, voice work and selected live events. Fluent in Slovak, Polish, Italian, Ukrainian, Russian and English.",
      contact: "Contact for casting",
      download: "Download draft CV brief",
      facts: "Facts",
      selected: "Selected public references",
      showreel: "Showreel",
      languages: "Languages",
      voice: "Voice / dubbing",
      skills: "Special skills",
      credits: "Credits to add",
      missing: "Missing casting materials",
      table: ["Year", "Project", "Type", "Role / production"],
      rows: [
        ["TBD", "Theatre credits", "Theatre", "Add exact roles and productions"],
        ["TBD", "Film / series credits", "Screen", "Add project names and role types"],
        ["TBD", "Commercial work", "Advertising", "Add brand/production where public"]
      ]
    },
    languageRows: [
      ["Slovak", "fluent", "acting / hosting / voice"],
      ["Polish", "fluent", "acting / voice"],
      ["Italian", "fluent", "acting / voice / singing"],
      ["Ukrainian", "fluent", "acting / voice"],
      ["Russian", "fluent", "acting / voice / hosting"],
      ["English", "fluent", "acting / voice / international work"],
      ["Hungarian", "basic / conversational", "selected communication"]
    ],
    skillGroups: [
      ["Acting", "Theatre · Film · Series · Commercials"],
      ["Voice", "Dubbing · Commercial · Narration · Character"],
      ["Music", "Vocal · Piano · Street and live performance"],
      ["Live Events", "Presenter · Host · Multilingual events"],
      ["Special Skills", "Drawing · Translation · Aerial gymnastics"]
    ],
    instagramNotes: {
      "theatre-day": "A theatre-led post built around actor craft and Ukrainian stage culture.",
      "acting-inner-child": "Actor training content focused on release, presence and emotional freedom.",
      "acting-emotions": "Short educational acting reel about truthful emotional work.",
      "vocal-concert": "A singing and concert fragment that supports the music side of the profile.",
      "little-women-clip": "Stage material connected with Louisa May Alcott's Little Women.",
      "little-women-stage": "A stage project with students of the Paprad acting studio.",
      "hosting-st-nicholas": "A live-event and presenter-facing fragment with holiday performance material.",
      "nemocnica-tvjoj": "A Slovak screen-acting reference connected with Nemocnica TV JOJ.",
      "voice-training": "Voice technique content about diaphragm support and public speaking.",
      "acting-organic-action": "Actor craft content about belief, circumstances and natural physical response."
    }
  },
  sk: {
    siteTitle: "Taisija Boyko — Viacjazyčná Herečka & Performerka",
    siteDescription:
      "Oficiálna stránka Taisije Boyko, viacjazyčnej herečky a performerky pre film, divadlo, hlas a živé podujatia.",
    nav: {
      acting: "Herectvo",
      voice: "Hlas",
      languages: "Jazyky",
      music: "Hudba",
      hosting: "Moderovanie",
      casting: "Casting",
      plan: "Obsah",
      contact: "Kontakt"
    },
    selectLanguage: "Jazyk stránky",
    hero: {
      eyebrow: "Filmová a divadelná herečka · Bratislava / stredná Európa",
      headline: "Viacjazyčná herečka a performerka pre film, scénu, hlas a živé podujatia.",
      subheadline:
        "Herecká skúsenosť v divadle, filme, seriáloch, reklame, dabingu, moderovaní, hudbe a live performance.",
      showreel: "Showreel",
      voice: "Hlasové ukážky",
      casting: "Casting profil",
      cv: "CV brief",
      cardLabel: "Profil z Instagramu",
      cardTitle: "Filmová a divadelná herečka"
    },
    quick: ["Herectvo", "Hlas", "Hudba", "Jazyky", "Moderovanie", "Dabing", "Aerial", "Kresba"],
    selected: {
      eyebrow: "Vybrané materiály",
      title: "Verejné ukážky práce z Instagramu.",
      body:
        "Materiály z aktuálneho profilu sú usporiadané tak, aby boli čitateľné pre casting, voice a event klientov."
    },
    reels: {
      eyebrow: "Knižnica reelov",
      title: "Štyri krátke reely predajú profil rýchlejšie než dlhý text.",
      body:
        "Stránka má pripravené miesta pre hlavné videá: herectvo, hlas, hudbu a eventy.",
      items: [
        ["Herecký showreel", "60-90 sekúnd z filmu, scény, seriálu a reklamy."],
        ["Voice reel", "Reklama, rozprávanie, charakter a dramatické ukážky vo viacerých jazykoch."],
        ["Hudobný reel", "Vokál a klavír s čistým zvukom a jednoduchým obrazom."],
        ["Moderátorský reel", "Eventové ukážky s rečou, kontaktom s publikom a jazykmi."]
      ]
    },
    acting: {
      eyebrow: "Herectvo",
      title: "Film, scéna, seriály a reklama.",
      body:
        "Viacjazyčná herečka a performerka so skúsenosťou v divadle, filme, seriáloch, reklame, dabingu a moderovaní. Pracuje po slovensky, poľsky, taliansky, ukrajinsky, rusky a anglicky.",
      placeholder:
        "Sem patrí 60-90 sekundový showreel s výberom z divadla, filmu, seriálu a reklamy."
    },
    voice: {
      eyebrow: "Hlas & dabing",
      title: "Viacjazyčný hlas s hereckým základom.",
      body:
        "Hlas je komerčne silný smer: dabing, reklama, narration, charakterové polohy a jazykové ukážky.",
      sampleSet:
        "Sem patrí krátky rovnaký text nahraný v slovenčine, poľštine, taliančine, ukrajinčine, ruštine a angličtine."
    },
    languages: {
      eyebrow: "Jazyky",
      title: "Hlavná profesionálna výhoda."
    },
    market: {
      eyebrow: "Lokálny akcent",
      title: "Pre slovenský trh je dôležitá Bratislava, škola a TV kontext.",
      cards: [
        ["Bratislava", "Základňa v Bratislave zjednodušuje komunikáciu s lokálnym castingom, divadlom a event agentúrami."],
        ["VŠMU", "The Academy of Performing Arts in Bratislava je silný signál profesionálneho hereckého zázemia."],
        ["TV JOJ / Nemocnica", "Slovenský screen reference pomáha rýchlo zaradiť profil pre televíziu a reklamu."]
      ]
    },
    canvas: {
      eyebrow: "Jazyková scéna",
      title: "Jeden profil, viac pracovných dverí.",
      body:
        "Jazyky sú tu rozdelené podľa použitia: herectvo, hlas, moderovanie, spev a preklad."
    },
    music: {
      eyebrow: "Hudba",
      title: "Vokál, klavír a live performance.",
      body:
        "Hudba rozširuje profil pre scénu, kameru, charakterové roly, live formáty a reklamu.",
      piano: "Sem patrí 30-90 sekundová ukážka klavíra s čistým zvukom."
    },
    hosting: {
      eyebrow: "Moderovanie & eventy",
      title: "Moderátorka pre kultúrne, firemné a umelecké formáty.",
      body:
        "Moderovanie je oddelené od herectva, pretože oslovuje event agentúry, festivaly, firmy a kultúrne projekty.",
      placeholder:
        "Sem patria ukážky z eventov s rečou, kontaktom s publikom a viacjazyčným vedením."
    },
    skills: {
      eyebrow: "Skills",
      title: "Štruktúrovaný rozsah, nie náhodný zoznam."
    },
    plan: {
      eyebrow: "Obsah pred spustením",
      title: "Chýbajúce médiá sú označené priamo na stránke.",
      body:
        "Instagram dáva prvé dôkazy, ale finálna verzia potrebuje samostatné castingové, hlasové, hudobné a press materiály."
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Pre casting, dabing, reklamu, eventy a spolupráce.",
      casting: "Otvoriť casting profil"
    },
    casting: {
      title: "Casting Profil — Taisija Boyko",
      description:
        "Casting profil Taisije Boyko: showreel, jazyky, herecké skúsenosti, skills, CV a kontakt.",
      eyebrow: "Casting profil",
      intro:
        "Dostupná pre film, televíziu, divadlo, reklamu, hlasovú prácu a vybrané live eventy. Plynulo pracuje po slovensky, poľsky, taliansky, ukrajinsky, rusky a anglicky.",
      contact: "Kontakt pre casting",
      download: "Stiahnuť CV brief",
      facts: "Fakty",
      selected: "Verejné referencie",
      showreel: "Showreel",
      languages: "Jazyky",
      voice: "Hlas / dabing",
      skills: "Špeciálne skills",
      credits: "Credits na doplnenie",
      missing: "Chýbajúce castingové materiály",
      table: ["Rok", "Projekt", "Typ", "Rola / produkcia"],
      rows: [
        ["TBD", "Divadelné credits", "Divadlo", "Doplniť roly a produkcie"],
        ["TBD", "Film / seriály", "Screen", "Doplniť názvy projektov a typy rolí"],
        ["TBD", "Reklama", "Advertising", "Doplniť značku alebo produkciu, ak je verejná"]
      ]
    },
    languageRows: [
      ["Slovenčina", "plynulo", "herectvo / moderovanie / hlas"],
      ["Poľština", "plynulo", "herectvo / hlas"],
      ["Taliančina", "plynulo", "herectvo / hlas / spev"],
      ["Ukrajinčina", "plynulo", "herectvo / hlas"],
      ["Ruština", "plynulo", "herectvo / hlas / moderovanie"],
      ["Angličtina", "plynulo", "herectvo / hlas / medzinárodná práca"],
      ["Maďarčina", "základ / konverzačne", "vybraná komunikácia"]
    ],
    skillGroups: [
      ["Herectvo", "Divadlo · Film · Seriály · Reklama"],
      ["Hlas", "Dabing · Reklama · Narration · Character"],
      ["Hudba", "Vokál · Klavír · Street a live performance"],
      ["Live eventy", "Moderátorka · Host · Viacjazyčné eventy"],
      ["Špeciálne skills", "Kresba · Preklad · Vzdušná gymnastika"]
    ],
    instagramNotes: {
      "theatre-day": "Divadelný post postavený na hereckom remesle a ukrajinskej javiskovej kultúre.",
      "acting-inner-child": "Herecké cvičenie zamerané na uvoľnenie, prítomnosť a emóciu.",
      "acting-emotions": "Krátky herecký reel o pravdivom hraní silných emócií.",
      "vocal-concert": "Spevácka koncertná ukážka podporujúca hudobnú časť profilu.",
      "little-women-clip": "Javiskový materiál spojený s Little Women.",
      "little-women-stage": "Javiskový projekt so študentkami hereckého štúdia Paprad.",
      "hosting-st-nicholas": "Eventový a moderátorský fragment so sviatočným materiálom.",
      "nemocnica-tvjoj": "Slovenská screen referencia spojená s Nemocnicou TV JOJ.",
      "voice-training": "Obsah o práci s hlasom, dychom a verejným prejavom.",
      "acting-organic-action": "Herecký obsah o okolnostiach, viere a prirodzenej akcii."
    }
  },
  pl: {
    siteTitle: "Taisija Boyko — Wielojęzyczna Aktorka & Performerka",
    siteDescription:
      "Oficjalna strona Taisiji Boyko, wielojęzycznej aktorki i performerki dla filmu, sceny, głosu i wydarzeń live.",
    nav: {
      acting: "Aktorstwo",
      voice: "Głos",
      languages: "Języki",
      music: "Muzyka",
      hosting: "Prowadzenie",
      casting: "Casting",
      plan: "Plan",
      contact: "Kontakt"
    },
    selectLanguage: "Język strony",
    hero: {
      eyebrow: "Aktorka filmowa i teatralna · Bratysława / Europa Środkowa",
      headline: "Wielojęzyczna aktorka i performerka dla ekranu, sceny, głosu i wydarzeń live.",
      subheadline:
        "Doświadczenie w teatrze, filmie, serialach, reklamie, dubbingu, prowadzeniu wydarzeń, muzyce i live performance.",
      showreel: "Showreel",
      voice: "Próbki głosu",
      casting: "Profil castingowy",
      cv: "CV brief",
      cardLabel: "Profil z Instagramu",
      cardTitle: "Aktorka filmowa i teatralna"
    },
    quick: ["Aktorstwo", "Głos", "Muzyka", "Języki", "Prowadzenie", "Dubbing", "Aerial", "Rysunek"],
    selected: {
      eyebrow: "Wybrane materiały",
      title: "Publiczne przykłady pracy z Instagramu.",
      body:
        "Materiały z profilu są ułożone tak, żeby casting, studio głosu lub klient eventowy szybko zrozumiał zakres pracy."
    },
    reels: {
      eyebrow: "Biblioteka reel",
      title: "Cztery krótkie reele sprzedają profil szybciej niż długa biografia.",
      body:
        "Strona ma przygotowane miejsca na najważniejsze wideo: aktorstwo, głos, muzykę i wydarzenia.",
      items: [
        ["Showreel aktorski", "60-90 sekund: ekran, scena, seriale i reklama."],
        ["Voice reel", "Reklama, narracja, postać i dramat w kilku językach."],
        ["Reel muzyczny", "Wokal i fortepian z czystym dźwiękiem."],
        ["Reel prowadzącej", "Fragmenty wydarzeń z mową, kontaktem z publicznością i językami."]
      ]
    },
    acting: {
      eyebrow: "Aktorstwo",
      title: "Ekran, scena, seriale i reklama.",
      body:
        "Wielojęzyczna aktorka i performerka z doświadczeniem w teatrze, filmie, serialach, reklamie, dubbingu i prowadzeniu wydarzeń. Pracuje po słowacku, polsku, włosku, ukraińsku, rosyjsku i angielsku.",
      placeholder:
        "Tu powinien znaleźć się showreel 60-90 sekund z teatru, filmu, serialu i reklamy."
    },
    voice: {
      eyebrow: "Głos & dubbing",
      title: "Wielojęzyczny głos z aktorskim zapleczem.",
      body:
        "Głos jest silnym kierunkiem komercyjnym: dubbing, reklama, narracja, postać i próbki językowe.",
      sampleSet:
        "Tu powinien znaleźć się ten sam krótki tekst nagrany po słowacku, polsku, włosku, ukraińsku, rosyjsku i angielsku."
    },
    languages: {
      eyebrow: "Języki",
      title: "Największa przewaga zawodowa."
    },
    market: {
      eyebrow: "Akcent rynkowy",
      title: "Dla Polski ważny jest most między rynkami Europy Środkowej.",
      cards: [
        ["Polski język", "Płynny polski otwiera drogę do castingów, voice-over i eventów, gdzie potrzebna jest naturalna komunikacja."],
        ["Bliskość regionu", "Baza w Bratysławie pozwala pracować między Słowacją, Polską, Czechami i Ukrainą."],
        ["Reklama i głos", "Polski rynek dobrze łączy aktorstwo, voice i wielojęzyczne kampanie."]
      ]
    },
    canvas: {
      eyebrow: "Scena językowa",
      title: "Jeden profil, kilka drzwi castingowych.",
      body:
        "Zakres językowy jest rozdzielony według zastosowania: aktorstwo, głos, prowadzenie, śpiew i tłumaczenie."
    },
    music: {
      eyebrow: "Muzyka",
      title: "Wokal, fortepian i live performance.",
      body:
        "Muzyka wzmacnia profil dla sceny, kamery, ról charakterystycznych, formatów live i reklamy.",
      piano: "Tu powinno pojawić się 30-90 sekund fortepianu z czystym dźwiękiem."
    },
    hosting: {
      eyebrow: "Prowadzenie & wydarzenia",
      title: "Prowadząca dla formatów kulturalnych, firmowych i artystycznych.",
      body:
        "Prowadzenie jest osobnym kierunkiem, bo trafia do agencji eventowych, festiwali, firm i projektów kulturalnych.",
      placeholder:
        "Tu powinny pojawić się fragmenty wydarzeń z kontaktem z publicznością i prowadzeniem w językach."
    },
    skills: {
      eyebrow: "Umiejętności",
      title: "Zakres uporządkowany, nie przypadkowa lista."
    },
    plan: {
      eyebrow: "Materiały przed publikacją",
      title: "Brakujące media są jasno oznaczone.",
      body:
        "Instagram daje pierwsze dowody, ale finalna strona potrzebuje osobnych materiałów castingowych, głosowych, muzycznych i press kit."
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Casting, dubbing, reklama, wydarzenia i współprace.",
      casting: "Otwórz profil castingowy"
    },
    casting: {
      title: "Profil Castingowy — Taisija Boyko",
      description:
        "Profil castingowy Taisiji Boyko: showreel, języki, doświadczenie aktorskie, umiejętności, CV i kontakt.",
      eyebrow: "Profil castingowy",
      intro:
        "Dostępna do filmu, telewizji, teatru, reklamy, pracy głosem i wybranych wydarzeń live. Płynnie pracuje po słowacku, polsku, włosku, ukraińsku, rosyjsku i angielsku.",
      contact: "Kontakt castingowy",
      download: "Pobierz CV brief",
      facts: "Fakty",
      selected: "Publiczne referencje",
      showreel: "Showreel",
      languages: "Języki",
      voice: "Głos / dubbing",
      skills: "Umiejętności specjalne",
      credits: "Credits do uzupełnienia",
      missing: "Brakujące materiały castingowe",
      table: ["Rok", "Projekt", "Typ", "Rola / produkcja"],
      rows: [
        ["TBD", "Credits teatralne", "Teatr", "Dodać role i produkcje"],
        ["TBD", "Film / seriale", "Ekran", "Dodać tytuły projektów i typy ról"],
        ["TBD", "Reklamy", "Reklama", "Dodać markę lub produkcję, jeśli publiczne"]
      ]
    },
    languageRows: [
      ["Słowacki", "płynnie", "aktorstwo / prowadzenie / głos"],
      ["Polski", "płynnie", "aktorstwo / głos"],
      ["Włoski", "płynnie", "aktorstwo / głos / śpiew"],
      ["Ukraiński", "płynnie", "aktorstwo / głos"],
      ["Rosyjski", "płynnie", "aktorstwo / głos / prowadzenie"],
      ["Angielski", "płynnie", "aktorstwo / głos / praca międzynarodowa"],
      ["Węgierski", "podstawowy / konwersacyjny", "wybrana komunikacja"]
    ],
    skillGroups: [
      ["Aktorstwo", "Teatr · Film · Seriale · Reklama"],
      ["Głos", "Dubbing · Reklama · Narracja · Postać"],
      ["Muzyka", "Wokal · Fortepian · Street i live performance"],
      ["Wydarzenia", "Prowadząca · Host · Eventy wielojęzyczne"],
      ["Specjalne", "Rysunek · Tłumaczenie · Gimnastyka powietrzna"]
    ],
    instagramNotes: {
      "theatre-day": "Post teatralny oparty na warsztacie aktorskim i ukraińskiej kulturze scenicznej.",
      "acting-inner-child": "Ćwiczenie aktorskie skupione na rozluźnieniu, obecności i emocji.",
      "acting-emotions": "Krótki reel o prawdziwym graniu silnych emocji.",
      "vocal-concert": "Fragment wokalny i koncertowy wzmacniający muzyczną część profilu.",
      "little-women-clip": "Materiał sceniczny związany z Little Women.",
      "little-women-stage": "Projekt sceniczny ze studentkami studia aktorskiego Paprad.",
      "hosting-st-nicholas": "Fragment eventowy i prowadzący z materiałem świątecznym.",
      "nemocnica-tvjoj": "Słowacka referencja ekranowa związana z Nemocnica TV JOJ.",
      "voice-training": "Materiał o głosie, oddechu i wystąpieniach publicznych.",
      "acting-organic-action": "Materiał aktorski o okolicznościach, wierze i organicznym działaniu."
    }
  },
  it: {
    siteTitle: "Taisija Boyko — Attrice & Performer Multilingue",
    siteDescription:
      "Sito ufficiale di Taisija Boyko, attrice e performer multilingue per cinema, teatro, voce ed eventi live.",
    nav: {
      acting: "Recitazione",
      voice: "Voce",
      languages: "Lingue",
      music: "Musica",
      hosting: "Eventi",
      casting: "Casting",
      plan: "Materiali",
      contact: "Contatto"
    },
    selectLanguage: "Lingua del sito",
    hero: {
      eyebrow: "Attrice di cinema e teatro · Bratislava / Europa centrale",
      headline: "Attrice e performer multilingue per schermo, scena, voce ed eventi live.",
      subheadline:
        "Esperienza in teatro, cinema, serie, pubblicità, doppiaggio, conduzione eventi, musica e live performance.",
      showreel: "Showreel",
      voice: "Ascolta la voce",
      casting: "Profilo casting",
      cv: "CV brief",
      cardLabel: "Profilo da Instagram",
      cardTitle: "Attrice di cinema e teatro"
    },
    quick: ["Recitazione", "Voce", "Musica", "Lingue", "Eventi", "Doppiaggio", "Aerial", "Disegno"],
    selected: {
      eyebrow: "Materiali selezionati",
      title: "Riferimenti pubblici dal profilo Instagram.",
      body:
        "I materiali del profilo sono ordinati in modo utile per casting, voice studio e clienti di eventi."
    },
    reels: {
      eyebrow: "Reel library",
      title: "Quattro reel brevi comunicano il profilo meglio di una pagina lunga.",
      body:
        "Il sito ha spazi chiari per i video principali: recitazione, voce, musica ed eventi.",
      items: [
        ["Acting showreel", "60-90 secondi da schermo, scena, serie e pubblicità."],
        ["Voice reel", "Commercial, narration, character e dramatic samples in più lingue."],
        ["Music reel", "Voce e pianoforte con audio pulito."],
        ["Hosting reel", "Eventi con parlato, presenza e gestione multilingue."]
      ]
    },
    acting: {
      eyebrow: "Recitazione",
      title: "Schermo, scena, serie e pubblicità.",
      body:
        "Attrice e performer multilingue con esperienza in teatro, cinema, serie, pubblicità, doppiaggio e conduzione eventi. Lavora in slovacco, polacco, italiano, ucraino, russo e inglese.",
      placeholder:
        "Qui serve uno showreel di 60-90 secondi con teatro, cinema, serie e pubblicità."
    },
    voice: {
      eyebrow: "Voce & doppiaggio",
      title: "Voce multilingue con base attoriale.",
      body:
        "La voce è un punto forte commerciale: doppiaggio, pubblicità, narrazione, character e sample linguistici.",
      sampleSet:
        "Qui serve lo stesso breve testo registrato in slovacco, polacco, italiano, ucraino, russo e inglese."
    },
    languages: {
      eyebrow: "Lingue",
      title: "Il vantaggio professionale centrale."
    },
    market: {
      eyebrow: "Focus locale",
      title: "Per l'Italia, lingua, musicalità e voce sono il punto distintivo.",
      cards: [
        ["Italiano fluente", "L'italiano può essere usato per recitazione, voce, canto e campagne internazionali."],
        ["Musicalità", "Vocal e piano rafforzano ruoli con ritmo, presenza e sensibilità sonora."],
        ["Doppiaggio", "La combinazione tra lingue e formazione attoriale è forte per voice-over e character work."]
      ]
    },
    canvas: {
      eyebrow: "Palco delle lingue",
      title: "Un profilo, più porte di casting.",
      body:
        "Le lingue sono separate per uso: recitazione, voce, conduzione, canto e traduzione."
    },
    music: {
      eyebrow: "Musica",
      title: "Voce, pianoforte e live performance.",
      body:
        "La musica amplia il profilo per scena, camera, ruoli di carattere, formati live e pubblicità.",
      piano: "Qui serve un sample di pianoforte di 30-90 secondi con audio pulito."
    },
    hosting: {
      eyebrow: "Eventi & conduzione",
      title: "Presentatrice per formati culturali, corporate e artistici.",
      body:
        "La conduzione è separata dalla recitazione perché parla ad agenzie eventi, festival, aziende e progetti culturali.",
      placeholder:
        "Qui servono frammenti di eventi con parlato, pubblico e gestione multilingue."
    },
    skills: {
      eyebrow: "Skills",
      title: "Un range ordinato, non una lista casuale."
    },
    plan: {
      eyebrow: "Materiali da aggiungere",
      title: "Gli slot mancanti sono segnati chiaramente.",
      body:
        "Instagram dà primi riferimenti, ma la versione finale ha bisogno di materiali casting, voice, music e press dedicati."
    },
    contact: {
      eyebrow: "Contatto",
      title: "Per casting, voce, pubblicità, eventi e collaborazioni.",
      casting: "Apri profilo casting"
    },
    casting: {
      title: "Profilo Casting — Taisija Boyko",
      description:
        "Profilo casting di Taisija Boyko: showreel, lingue, esperienza attoriale, skills, CV e contatti.",
      eyebrow: "Profilo casting",
      intro:
        "Disponibile per film, televisione, teatro, pubblicità, voce ed eventi live selezionati. Lavora fluentemente in slovacco, polacco, italiano, ucraino, russo e inglese.",
      contact: "Contatto casting",
      download: "Scarica CV brief",
      facts: "Dati",
      selected: "Riferimenti pubblici",
      showreel: "Showreel",
      languages: "Lingue",
      voice: "Voce / doppiaggio",
      skills: "Skills speciali",
      credits: "Credits da aggiungere",
      missing: "Materiali casting mancanti",
      table: ["Anno", "Progetto", "Tipo", "Ruolo / produzione"],
      rows: [
        ["TBD", "Credits teatrali", "Teatro", "Aggiungere ruoli e produzioni"],
        ["TBD", "Film / serie", "Schermo", "Aggiungere titoli e tipo di ruolo"],
        ["TBD", "Pubblicità", "Advertising", "Aggiungere brand/produzione se pubblico"]
      ]
    },
    languageRows: [
      ["Slovacco", "fluente", "recitazione / hosting / voce"],
      ["Polacco", "fluente", "recitazione / voce"],
      ["Italiano", "fluente", "recitazione / voce / canto"],
      ["Ucraino", "fluente", "recitazione / voce"],
      ["Russo", "fluente", "recitazione / voce / hosting"],
      ["Inglese", "fluente", "recitazione / voce / lavoro internazionale"],
      ["Ungherese", "base / conversazione", "comunicazione selezionata"]
    ],
    skillGroups: [
      ["Recitazione", "Teatro · Film · Serie · Pubblicità"],
      ["Voce", "Doppiaggio · Commercial · Narration · Character"],
      ["Musica", "Voce · Pianoforte · Street e live performance"],
      ["Eventi live", "Presentatrice · Host · Eventi multilingue"],
      ["Special skills", "Disegno · Traduzione · Ginnastica aerea"]
    ],
    instagramNotes: {
      "theatre-day": "Post teatrale legato al mestiere dell'attore e alla cultura scenica ucraina.",
      "acting-inner-child": "Esercizio attoriale su rilascio, presenza e libertà emotiva.",
      "acting-emotions": "Breve reel su come rendere vere le emozioni forti.",
      "vocal-concert": "Frammento vocale e concertistico per la parte musicale del profilo.",
      "little-women-clip": "Materiale scenico collegato a Little Women.",
      "little-women-stage": "Progetto scenico con lo studio attoriale Paprad.",
      "hosting-st-nicholas": "Frammento evento/presentazione con materiale festivo.",
      "nemocnica-tvjoj": "Riferimento screen slovacco collegato a Nemocnica TV JOJ.",
      "voice-training": "Contenuto su voce, diaframma e public speaking.",
      "acting-organic-action": "Contenuto attoriale su circostanze, fiducia e azione organica."
    }
  },
  uk: {
    siteTitle: "Taisija Boyko — Мультимовна Акторка & Performer",
    siteDescription:
      "Офіційний сайт Taisija Boyko, мультимовної акторки та performer для кіно, сцени, голосу й live-подій.",
    nav: {
      acting: "Акторство",
      voice: "Голос",
      languages: "Мови",
      music: "Музика",
      hosting: "Ведення",
      casting: "Кастинг",
      plan: "План",
      contact: "Контакт"
    },
    selectLanguage: "Мова сайту",
    hero: {
      eyebrow: "Кіно- та театральна акторка · Братислава / Центральна Європа",
      headline: "Мультимовна акторка і performer для кіно, сцени, голосу та live-подій.",
      subheadline:
        "Досвід у театрі, кіно, серіалах, рекламі, дубляжі, веденні подій, музиці та live performance.",
      showreel: "Showreel",
      voice: "Голосові samples",
      casting: "Casting profile",
      cv: "CV brief",
      cardLabel: "Профіль з Instagram",
      cardTitle: "Кіно- та театральна акторка"
    },
    quick: ["Акторство", "Голос", "Музика", "Мови", "Ведення", "Дубляж", "Aerial", "Малюнок"],
    selected: {
      eyebrow: "Вибрані матеріали",
      title: "Публічні приклади роботи з Instagram.",
      body:
        "Матеріали з профілю структуровані так, щоб кастинг, voice studio або event-клієнт швидко зрозумів професійний діапазон."
    },
    reels: {
      eyebrow: "Reel library",
      title: "Чотири короткі reels продають профіль швидше, ніж довга біографія.",
      body:
        "На сайті підготовлені місця для ключових відео: акторство, голос, музика та події.",
      items: [
        ["Акторський showreel", "60-90 секунд: екран, сцена, серіали та реклама."],
        ["Voice reel", "Реклама, narration, character і dramatic samples кількома мовами."],
        ["Music reel", "Вокал і фортепіано з чистим звуком."],
        ["Hosting reel", "Фрагменти подій з мовленням, контактом із публікою та мовами."]
      ]
    },
    acting: {
      eyebrow: "Акторство",
      title: "Екран, сцена, серіали та реклама.",
      body:
        "Мультимовна акторка і performer з досвідом у театрі, кіно, серіалах, рекламі, дубляжі та веденні подій. Працює словацькою, польською, італійською, українською, російською та англійською.",
      placeholder:
        "Тут має бути showreel на 60-90 секунд з театру, кіно, серіалів і реклами."
    },
    voice: {
      eyebrow: "Голос & дубляж",
      title: "Мультимовний голос з акторською основою.",
      body:
        "Голос — сильний комерційний напрям: дубляж, реклама, narration, персонажні samples і мовні записи.",
      sampleSet:
        "Тут потрібен один короткий текст, записаний словацькою, польською, італійською, українською, російською та англійською."
    },
    languages: {
      eyebrow: "Мови",
      title: "Головна професійна перевага."
    },
    market: {
      eyebrow: "Локальний акцент",
      title: "Для українського напрямку сильні голос, поезія, театр і культурна пам'ять.",
      cards: [
        ["Українська мова", "Українська може бути центром для театральних, поетичних, voice і cultural projects."],
        ["Сценічна культура", "Матеріали з українською поезією та театральною педагогікою варто винести окремо."],
        ["Міжнародність", "Українська і центральноєвропейська база створюють сильний міст для міжнародних проєктів."]
      ]
    },
    canvas: {
      eyebrow: "Мовна сцена",
      title: "Один профіль, кілька кастингових входів.",
      body:
        "Мови показані за практичним використанням: акторство, голос, ведення, спів і переклад."
    },
    music: {
      eyebrow: "Музика",
      title: "Вокал, фортепіано та live performance.",
      body:
        "Музика підсилює профіль для сцени, камери, характерних ролей, live-форматів і реклами.",
      piano: "Тут потрібен фрагмент фортепіано на 30-90 секунд з чистим звуком."
    },
    hosting: {
      eyebrow: "Ведення & live events",
      title: "Ведуча для культурних, корпоративних і мистецьких форматів.",
      body:
        "Ведення винесене окремо, бо це інша аудиторія: event-агенції, фестивалі, компанії та культурні проєкти.",
      placeholder:
        "Тут потрібні фрагменти подій з мовленням, контактом з аудиторією та багатомовним веденням."
    },
    skills: {
      eyebrow: "Навички",
      title: "Структурований діапазон, а не випадковий список."
    },
    plan: {
      eyebrow: "Контент перед запуском",
      title: "Заплановані матеріали позначені прямо на сайті.",
      body:
        "Instagram дає перші докази, але фінальна версія потребує окремих casting, voice, music і press materials."
    },
    contact: {
      eyebrow: "Контакт",
      title: "Для кастингу, дубляжу, реклами, подій і співпраці.",
      casting: "Відкрити casting profile"
    },
    casting: {
      title: "Casting Profile — Taisija Boyko",
      description:
        "Casting profile Taisija Boyko: showreel, мови, акторський досвід, special skills, CV і контакти.",
      eyebrow: "Casting profile",
      intro:
        "Доступна для кіно, телебачення, театру, реклами, voice work і вибраних live-подій. Вільно працює словацькою, польською, італійською, українською, російською та англійською.",
      contact: "Контакт для кастингу",
      download: "Завантажити CV brief",
      facts: "Факти",
      selected: "Публічні референси",
      showreel: "Showreel",
      languages: "Мови",
      voice: "Голос / дубляж",
      skills: "Special skills",
      credits: "Credits для додавання",
      missing: "Матеріали, яких бракує",
      table: ["Рік", "Проєкт", "Тип", "Роль / production"],
      rows: [
        ["TBD", "Театральні credits", "Театр", "Додати ролі та production"],
        ["TBD", "Кіно / серіали", "Екран", "Додати назви проєктів і типи ролей"],
        ["TBD", "Реклама", "Advertising", "Додати бренд або production, якщо можна публічно"]
      ]
    },
    languageRows: [
      ["Словацька", "вільно", "акторство / ведення / голос"],
      ["Польська", "вільно", "акторство / голос"],
      ["Італійська", "вільно", "акторство / голос / спів"],
      ["Українська", "вільно", "акторство / голос"],
      ["Російська", "вільно", "акторство / голос / ведення"],
      ["Англійська", "вільно", "акторство / голос / міжнародна робота"],
      ["Угорська", "базово / розмовно", "вибіркова комунікація"]
    ],
    skillGroups: [
      ["Акторство", "Театр · Кіно · Серіали · Реклама"],
      ["Голос", "Дубляж · Реклама · Narration · Character"],
      ["Музика", "Вокал · Фортепіано · Street і live performance"],
      ["Live events", "Ведуча · Host · Багатомовні події"],
      ["Special skills", "Малюнок · Переклад · Повітряна гімнастика"]
    ],
    instagramNotes: {
      "theatre-day": "Театральний пост про акторське ремесло й українську сценічну культуру.",
      "acting-inner-child": "Акторська вправа на розслаблення, присутність і емоційну свободу.",
      "acting-emotions": "Короткий reel про правдиву гру сильних емоцій.",
      "vocal-concert": "Вокальний концертний фрагмент для музичної частини профілю.",
      "little-women-clip": "Сценічний матеріал, пов'язаний з Little Women.",
      "little-women-stage": "Сценічний проєкт зі студентками акторської студії Paprad.",
      "hosting-st-nicholas": "Event/ведучий фрагмент зі святковим матеріалом.",
      "nemocnica-tvjoj": "Словацький screen reference, пов'язаний з Nemocnica TV JOJ.",
      "voice-training": "Матеріал про голос, діафрагму та публічний виступ.",
      "acting-organic-action": "Акторський матеріал про обставини, віру і органічну дію."
    }
  },
  ru: {
    siteTitle: "Taisija Boyko — Мультиязычная Актриса & Performer",
    siteDescription:
      "Официальный сайт Taisija Boyko, мультиязычной актрисы и performer для кино, сцены, голоса и live-мероприятий.",
    nav: {
      acting: "Актёрство",
      voice: "Голос",
      languages: "Языки",
      music: "Музыка",
      hosting: "Ведущая",
      casting: "Кастинг",
      plan: "Контент",
      contact: "Контакт"
    },
    selectLanguage: "Язык сайта",
    hero: {
      eyebrow: "Актриса кино и театра · Братислава / Центральная Европа",
      headline: "Мультиязычная актриса и performer для кино, сцены, голоса и live-мероприятий.",
      subheadline:
        "Опыт в театре, кино, сериалах, рекламе, дубляже, ведении мероприятий, музыке и live performance.",
      showreel: "Showreel",
      voice: "Послушать голос",
      casting: "Casting profile",
      cv: "CV brief",
      cardLabel: "Профиль из Instagram",
      cardTitle: "Актриса кино и театра"
    },
    quick: ["Актёрство", "Голос", "Музыка", "Языки", "Ведущая", "Дубляж", "Aerial", "Рисунок"],
    selected: {
      eyebrow: "Выбранные материалы",
      title: "Публичные примеры работы из Instagram.",
      body:
        "Материалы из профиля собраны в структуру, понятную кастингу, voice-студии и event-клиенту."
    },
    reels: {
      eyebrow: "Reel library",
      title: "Четыре коротких reels продают профиль быстрее, чем длинная биография.",
      body:
        "На сайте есть места под ключевые видео: актёрство, голос, музыку и мероприятия.",
      items: [
        ["Актёрский showreel", "60-90 секунд: экран, сцена, сериалы и реклама."],
        ["Voice reel", "Реклама, narration, character и dramatic samples на разных языках."],
        ["Music reel", "Вокал и фортепиано с чистым звуком."],
        ["Hosting reel", "Фрагменты мероприятий с речью, контактом с публикой и языками."]
      ]
    },
    acting: {
      eyebrow: "Актёрство",
      title: "Экран, сцена, сериалы и реклама.",
      body:
        "Мультиязычная актриса и performer с опытом в театре, кино, сериалах, рекламе, дубляже и ведении мероприятий. Работает на словацком, польском, итальянском, украинском, русском и английском языках.",
      placeholder:
        "Здесь должен быть showreel на 60-90 секунд с театром, кино, сериалами и рекламой."
    },
    voice: {
      eyebrow: "Голос & дубляж",
      title: "Мультиязычный голос с актёрской базой.",
      body:
        "Голос — коммерчески сильное направление: дубляж, реклама, narration, персонажи и языковые samples.",
      sampleSet:
        "Здесь нужен один короткий текст, записанный на словацком, польском, итальянском, украинском, русском и английском."
    },
    languages: {
      eyebrow: "Языки",
      title: "Главное профессиональное преимущество."
    },
    market: {
      eyebrow: "Локальный акцент",
      title: "Для русскоязычного направления важны голос, дубляж и event-коммуникация.",
      cards: [
        ["Русский язык", "Русский можно использовать для voice, дубляжа, мероприятий, рекламы и международных проектов."],
        ["Актёрская база", "Сильная актёрская основа делает голосовые samples живыми, а не просто дикторскими."],
        ["Мультиязычность", "Русский не стоит отдельно: он усиливает общий набор языков для Центральной Европы."]
      ]
    },
    canvas: {
      eyebrow: "Языковая сцена",
      title: "Один профиль, несколько кастинговых входов.",
      body:
        "Языки показаны по практическому применению: актёрство, голос, ведение, пение и перевод."
    },
    music: {
      eyebrow: "Музыка",
      title: "Вокал, фортепиано и live performance.",
      body:
        "Музыка усиливает профиль для сцены, камеры, характерных ролей, live-форматов и рекламы.",
      piano: "Здесь нужен фрагмент фортепиано на 30-90 секунд с чистым звуком."
    },
    hosting: {
      eyebrow: "Ведущая & live events",
      title: "Ведущая для культурных, корпоративных и артистических форматов.",
      body:
        "Ведение вынесено отдельно, потому что это другая аудитория: event-агентства, фестивали, компании и культурные проекты.",
      placeholder:
        "Здесь нужны фрагменты мероприятий с речью, контактом с аудиторией и мультиязычным ведением."
    },
    skills: {
      eyebrow: "Навыки",
      title: "Структурированный диапазон, а не случайный список."
    },
    plan: {
      eyebrow: "Контент перед запуском",
      title: "Запланированные материалы отмечены прямо на сайте.",
      body:
        "Instagram даёт первые доказательства, но финальному сайту нужны отдельные casting, voice, music и press materials."
    },
    contact: {
      eyebrow: "Контакт",
      title: "Для кастинга, дубляжа, рекламы, мероприятий и сотрудничества.",
      casting: "Открыть casting profile"
    },
    casting: {
      title: "Casting Profile — Taisija Boyko",
      description:
        "Casting profile Taisija Boyko: showreel, языки, актёрский опыт, special skills, CV и контакты.",
      eyebrow: "Casting profile",
      intro:
        "Доступна для кино, телевидения, театра, рекламы, voice work и selected live events. Свободно работает на словацком, польском, итальянском, украинском, русском и английском.",
      contact: "Контакт для кастинга",
      download: "Скачать CV brief",
      facts: "Факты",
      selected: "Публичные референсы",
      showreel: "Showreel",
      languages: "Языки",
      voice: "Голос / дубляж",
      skills: "Special skills",
      credits: "Credits для добавления",
      missing: "Недостающие casting materials",
      table: ["Год", "Проект", "Тип", "Роль / production"],
      rows: [
        ["TBD", "Театральные credits", "Театр", "Добавить роли и production"],
        ["TBD", "Кино / сериалы", "Экран", "Добавить названия проектов и типы ролей"],
        ["TBD", "Реклама", "Advertising", "Добавить бренд или production, если можно публично"]
      ]
    },
    languageRows: [
      ["Словацкий", "свободно", "актёрство / ведение / голос"],
      ["Польский", "свободно", "актёрство / голос"],
      ["Итальянский", "свободно", "актёрство / голос / пение"],
      ["Украинский", "свободно", "актёрство / голос"],
      ["Русский", "свободно", "актёрство / голос / ведение"],
      ["Английский", "свободно", "актёрство / голос / международная работа"],
      ["Венгерский", "базово / разговорно", "выборочная коммуникация"]
    ],
    skillGroups: [
      ["Актёрство", "Театр · Кино · Сериалы · Реклама"],
      ["Голос", "Дубляж · Реклама · Narration · Character"],
      ["Музыка", "Вокал · Фортепиано · Street и live performance"],
      ["Live events", "Ведущая · Host · Мультиязычные мероприятия"],
      ["Special skills", "Рисунок · Перевод · Воздушная гимнастика"]
    ],
    instagramNotes: {
      "theatre-day": "Театральный пост про актёрское ремесло и украинскую сценическую культуру.",
      "acting-inner-child": "Актёрское упражнение на расслабление, присутствие и эмоциональную свободу.",
      "acting-emotions": "Короткий reel о правдивой игре сильных эмоций.",
      "vocal-concert": "Вокальный концертный фрагмент для музыкальной части профиля.",
      "little-women-clip": "Сценический материал, связанный с Little Women.",
      "little-women-stage": "Сценический проект со студентками актёрской студии Paprad.",
      "hosting-st-nicholas": "Event/ведущий фрагмент с праздничным материалом.",
      "nemocnica-tvjoj": "Словацкий screen reference, связанный с Nemocnica TV JOJ.",
      "voice-training": "Материал о голосе, диафрагме и публичном выступлении.",
      "acting-organic-action": "Актёрский материал про обстоятельства, веру и органическое действие."
    }
  }
} as const;

export function getLocalizedInstagramPosts(locale: Locale) {
  const t = translations[locale];

  return instagramPosts.map((post) => {
    const shared = sharedInstagramCopy[post.id as keyof typeof sharedInstagramCopy];
    return {
      ...post,
      title: shared?.title ?? post.title,
      category: shared?.category ?? post.category,
      note: t.instagramNotes[post.id as keyof typeof t.instagramNotes] ?? post.note
    };
  });
}

export function localizedPath(locale: Locale, path = "") {
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return withBase(`/${locale}/${normalizedPath}`);
}
