import type { Locale } from "./i18n";

export const localeVisuals: Record<
  Locale,
  {
    theme: "constellation" | "mountains" | "amber" | "opera" | "sunflower" | "velvet";
    eyebrow: string;
    title: string;
    body: string;
    backdrop: string;
    media: readonly string[];
  }
> = {
  en: {
    theme: "constellation",
    eyebrow: "International visual idea",
    title: "Language constellation for international casting.",
    body:
      "The English version should feel like the central international portal: clean, cinematic, easy to send to agents, studios and cross-border productions.",
    backdrop: "A wide cinematic portrait or short slow-motion video with neutral stage light.",
    media: [
      "Hero portrait with clean international casting look.",
      "One English voice sample: commercial or narration.",
      "International showreel cut with subtitles.",
      "Press photo usable for LinkedIn, casting emails and agency decks."
    ]
  },
  sk: {
    theme: "mountains",
    eyebrow: "Slovenský vizuálny smer",
    title: "Bratislavský základ a scénická atmosféra s mierkou hôr.",
    body:
      "Slovenská verzia má pôsobiť lokálne: VŠMU, Bratislava, televízny kontext a stredoeurópska krajina namiesto generickej divadelnej dekorácie.",
    backdrop: "Veľká filmová fotka alebo video pri slovenských horách, hrade, divadle alebo v dramatickej stredoeurópskej krajine.",
    media: [
      "Epická slovenská hero fotka: hory / Bratislava / divadelná architektúra.",
      "Slovenská hlasová ukážka pre herectvo alebo narration.",
      "Krátke slovenské intro video pre casting a agentúry.",
      "Still alebo reel spojený s Nemocnicou / slovenskou obrazovou prácou, ak to práva dovolia."
    ]
  },
  pl: {
    theme: "amber",
    eyebrow: "Polski kierunek wizualny",
    title: "Bursztynowe światło teatru i środkowoeuropejska elegancja.",
    body:
      "Polska wersja może mieć cieplejszy, plakatowy rytm: bursztynowe światło, cień sceny, literacki teatr i most między Polską, Słowacją i Ukrainą.",
    backdrop: "Ciepły bursztynowy portret, korytarz teatralny, stare światło kinowe albo minimalistyczny obraz plakatowy.",
    media: [
      "Polska próbka głosu albo sceny aktorskiej.",
      "Portret w ciepłym bursztynowym / teatralnym świetle.",
      "Krótkie polskie intro dla agencji i klientów eventowych.",
      "Jedno zdjęcie albo reel z klimatem literackim, teatralnym lub spoken-word."
    ]
  },
  it: {
    theme: "opera",
    eyebrow: "Direzione visiva italiana",
    title: "Spot da opera, volto cinematografico e musicalità.",
    body:
      "La versione italiana dovrebbe valorizzare voce, orecchio musicale, gesto e presenza cinematografica. Il linguaggio visivo può essere più scultoreo: spotlight, arco, rosso, nero e oro.",
    backdrop: "Ritratto elegante in spotlight, immagine ispirata al teatro d'opera, still al piano/voce o close-up cinematografico.",
    media: [
      "Sample parlato in italiano: commercial, character o breve monologo.",
      "Canzone italiana o frammento vocale, se disponibile.",
      "Still al pianoforte o vocale con luce elegante.",
      "Close-up cinematografico con styling adatto al mercato italiano."
    ]
  },
  uk: {
    theme: "sunflower",
    eyebrow: "Український візуальний напрям",
    title: "Поезія, театр і синьо-золота сценічна пам'ять.",
    body:
      "Українська версія може бути найемоційнішою: поезія, театр, голос, культурна пам'ять і тепло. Вона має звучати живо, не фольклорно.",
    backdrop: "Синьо-золотий театральний портрет, still з поетичного виступу, sunflower-light образ або момент репетиції.",
    media: [
      "Українська поезія або драматичний монолог.",
      "Український вокальний фрагмент.",
      "Фото з театрального класу, репетиції або вистави.",
      "Портрет із синьо-золотим світлом або деталлю соняшника."
    ]
  },
  ru: {
    theme: "velvet",
    eyebrow: "Русская визуальная идея",
    title: "Голос, дубляж и напряжение красной бархатной сцены.",
    body:
      "Русская версия должна сильнее опираться на голос, дубляж, narration и театральную интенсивность: тёмный бархат, сильное лицо, близкий микрофон, контролируемая драма.",
    backdrop: "Портрет в красном бархате / тёмном театре, крупный план у микрофона, voice booth still или драматичный студийный свет.",
    media: [
      "Русский voice sample: narration, character или dubbing.",
      "Фрагмент драматического монолога.",
      "Фото с микрофоном или атмосферой студии/voice booth.",
      "Тёмно-красный сценический портрет или close-up."
    ]
  }
} as const;
