import type { Locale } from "./i18n";
import { withBase } from "./paths";
import { profile } from "./profile";

export const commercialLocales = ["en", "sk"] as const;
export type CommercialLocale = (typeof commercialLocales)[number];

export function getCommercialLocale(locale: Locale): CommercialLocale {
  return locale === "sk" ? "sk" : "en";
}

export function commercialPath(locale: Locale | CommercialLocale, path = "") {
  const targetLocale = locale === "sk" ? "sk" : "en";
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return withBase(`/${targetLocale}/${normalizedPath}`);
}

export function mailtoHref(subject: string, body: string) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

type LocalizedText = Record<CommercialLocale, string>;
type LocalizedList = Record<CommercialLocale, string[]>;

export type ServiceDefinition = {
  slug: string;
  title: LocalizedText;
  shortTitle: LocalizedText;
  intro: LocalizedText;
  audience: LocalizedText;
  promise: LocalizedText;
  format: LocalizedText;
  languages: LocalizedText;
  duration: LocalizedText;
  workOn: LocalizedList;
  outcomes: LocalizedList;
  notFor: LocalizedText;
  ctaLabel: LocalizedText;
  emailSubject: LocalizedText;
  emailBody: LocalizedText;
  proofTitle: LocalizedText;
  proofBody: LocalizedText;
  faq: Record<CommercialLocale, { question: string; answer: string }[]>;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
};

export const services: ServiceDefinition[] = [
  {
    slug: "individual-coaching",
    title: {
      en: "Individual Acting & Presence Coaching",
      sk: "Individuálne herectvo a javisková prítomnosť"
    },
    shortTitle: { en: "Individual coaching", sk: "Individuálny coaching" },
    intro: {
      en: "One-to-one acting-based work for a concrete goal: audition, speech, camera, voice, monologue or live performance.",
      sk: "Individuálna práca s hereckými nástrojmi pre konkrétny cieľ: casting, prejav, kamera, hlas, monológ alebo live performance."
    },
    audience: {
      en: "Actors, singers, speakers, creators and people preparing for a visible moment.",
      sk: "Pre hercov, spevákov, speakerov, tvorcov a ľudí, ktorí sa pripravujú na viditeľný výstup."
    },
    promise: {
      en: "Turn a vague performance problem into a practical rehearsal plan.",
      sk: "Premeniť nejasný problém vo výstupe na konkrétny plán skúšania."
    },
    format: {
      en: "Online or Bratislava, adapted to one goal and one working text, scene, song or presentation.",
      sk: "Online alebo Bratislava, podľa jedného cieľa a jedného textu, scény, piesne alebo prezentácie."
    },
    languages: {
      en: "English, Slovak, Ukrainian, Russian, Polish or Italian by agreement.",
      sk: "Angličtina, slovenčina, ukrajinčina, ruština, poľština alebo taliančina podľa dohody."
    },
    duration: { en: "60 or 90 minutes", sk: "60 alebo 90 minút" },
    workOn: {
      en: [
        "goal and material diagnosis",
        "voice, body and attention",
        "truthful action",
        "rehearsal structure",
        "next practice steps"
      ],
      sk: [
        "diagnostika cieľa a materiálu",
        "hlas, telo a pozornosť",
        "pravdivá akcia",
        "štruktúra skúšky",
        "ďalšie kroky na tréning"
      ]
    },
    outcomes: {
      en: ["clearer performance choices", "a repeatable warm-up", "one practical homework task"],
      sk: ["jasnejšie voľby vo výstupe", "opakovateľná rozcvička", "jedna praktická domáca úloha"]
    },
    notFor: {
      en: "Not for people looking for a guaranteed role, competition result or instant stage confidence.",
      sk: "Nie je to prísľub role, výsledku súťaže ani okamžitého sebavedomia."
    },
    ctaLabel: { en: "Book individual session", sk: "Rezervovať individuálnu hodinu" },
    emailSubject: { en: "Individual coaching request", sk: "Individuálny coaching" },
    emailBody: {
      en: "Hello Taisija,\n\nI would like to book an individual coaching session.\n\nMy goal:\nMaterial / situation:\nPreferred language:\nOnline or Bratislava:\nPreferred dates:\n",
      sk: "Dobrý deň Taisija,\n\nmám záujem o individuálnu hodinu.\n\nMôj cieľ:\nMateriál / situácia:\nPreferovaný jazyk:\nOnline alebo Bratislava:\nPreferované termíny:\n"
    },
    proofTitle: { en: "Teaching demo in preparation", sk: "Teaching demo v príprave" },
    proofBody: {
      en: "Expected here: a short practical exercise showing voice, body, attention or camera work.",
      sk: "Sem patrí krátke praktické cvičenie s hlasom, telom, pozornosťou alebo kamerou."
    },
    faq: {
      en: [
        {
          question: "Do I need acting experience?",
          answer: "No. The session starts from your real goal and current level."
        },
        { question: "Can it be online?", answer: "Yes, if the goal works on camera, voice, speech or text." },
        { question: "Can we work in another language?", answer: "Yes, the working language is agreed before booking." }
      ],
      sk: [
        { question: "Potrebujem hereckú skúsenosť?", answer: "Nie. Hodina vychádza z vášho cieľa a aktuálnej úrovne." },
        { question: "Dá sa pracovať online?", answer: "Áno, najmä pri kamere, hlase, reči alebo texte." },
        { question: "Môžeme pracovať v inom jazyku?", answer: "Áno, jazyk sa dohodne pred rezerváciou." }
      ]
    },
    seoTitle: {
      en: "Individual Acting & Presence Coaching — Taisija Boyko",
      sk: "Individuálny herecký coaching — Taisija Boyko"
    },
    seoDescription: {
      en: "One-to-one acting, voice, camera and stage presence coaching with Taisija Boyko in Bratislava or online.",
      sk: "Individuálny herecký, hlasový, kamerový a prezentačný coaching s Taisijou Boyko v Bratislave alebo online."
    }
  },
  {
    slug: "public-speaking",
    title: { en: "Public Speaking with Actor Tools", sk: "Verejný prejav s hereckými nástrojmi" },
    shortTitle: { en: "Public speaking", sk: "Verejný prejav" },
    intro: {
      en: "Practical work on voice, body, attention and presence for people who need to speak in front of others.",
      sk: "Praktická práca s hlasom, telom, pozornosťou a prítomnosťou pre ľudí, ktorí hovoria pred publikom."
    },
    audience: {
      en: "Speakers, founders, students, managers, teachers and event hosts.",
      sk: "Pre speakerov, founderov, študentov, manažérov, učiteľov a moderátorov."
    },
    promise: {
      en: "Actor tools for clear speech, presence and audience attention.",
      sk: "Herecké nástroje pre jasnú reč, prítomnosť a pozornosť publika."
    },
    format: {
      en: "Individual 90-minute session, small group format or corporate workshop.",
      sk: "Individuálna 90-minútová hodina, malá skupina alebo firemný workshop."
    },
    languages: {
      en: "English, Slovak, Ukrainian or Russian first; other languages by agreement.",
      sk: "Najmä angličtina, slovenčina, ukrajinčina alebo ruština; ďalšie jazyky podľa dohody."
    },
    duration: { en: "90 minutes individual / 2-4 hours group", sk: "90 minút individuálne / 2-4 hodiny skupina" },
    workOn: {
      en: [
        "breath and voice",
        "articulation",
        "tempo and pause",
        "audience contact",
        "structure of a short speech",
        "rehearsal under pressure"
      ],
      sk: [
        "dych a hlas",
        "artikulácia",
        "tempo a pauza",
        "kontakt s publikom",
        "štruktúra krátkeho prejavu",
        "skúška pod tlakom"
      ]
    },
    outcomes: {
      en: ["a clearer speech structure", "voice warm-up", "one rehearsed segment", "specific next corrections"],
      sk: ["jasnejšia štruktúra prejavu", "hlasová rozcvička", "jeden odskúšaný úsek", "konkrétne ďalšie opravy"]
    },
    notFor: {
      en: "Not for memorized corporate polish without personal presence.",
      sk: "Nie je to mechanické firemné leštenie prejavu bez osobnej prítomnosti."
    },
    ctaLabel: { en: "Request public speaking coaching", sk: "Požiadať o coaching prejavu" },
    emailSubject: { en: "Public speaking coaching request", sk: "Coaching verejného prejavu" },
    emailBody: {
      en: "Hello Taisija,\n\nI would like public speaking coaching.\n\nSpeech / situation:\nAudience:\nPreferred language:\nOnline, Bratislava or team workshop:\nPreferred dates:\n",
      sk: "Dobrý deň Taisija,\n\nmám záujem o coaching verejného prejavu.\n\nPrejav / situácia:\nPublikum:\nPreferovaný jazyk:\nOnline, Bratislava alebo tímový workshop:\nPreferované termíny:\n"
    },
    proofTitle: { en: "1-minute voice warm-up planned", sk: "1-minútová hlasová rozcvička v pláne" },
    proofBody: {
      en: "Expected here: a short exercise that shows how voice, breath and attention are trained.",
      sk: "Sem patrí krátke cvičenie, ktoré ukáže prácu s hlasom, dychom a pozornosťou."
    },
    faq: {
      en: [
        {
          question: "Can I bring a real speech?",
          answer: "Yes. A real speech, pitch or presentation is the best material."
        },
        { question: "Is this for teams?", answer: "Yes. The format can be adapted into a corporate workshop." },
        { question: "Is it only in English?", answer: "No. The working language is chosen before the session." }
      ],
      sk: [
        {
          question: "Môžem priniesť vlastný prejav?",
          answer: "Áno. Reálny prejav, pitch alebo prezentácia sú najlepší materiál."
        },
        { question: "Je to vhodné pre tímy?", answer: "Áno. Formát sa dá prispôsobiť pre firemný workshop." },
        { question: "Je to len po anglicky?", answer: "Nie. Jazyk práce sa dohodne vopred." }
      ]
    },
    seoTitle: {
      en: "Public Speaking with Actor Tools — Taisija Boyko",
      sk: "Verejný prejav s hereckými nástrojmi — Taisija Boyko"
    },
    seoDescription: {
      en: "Actor-based public speaking coaching for voice, presence and audience attention in Bratislava or online.",
      sk: "Coaching verejného prejavu s hereckými nástrojmi pre hlas, prítomnosť a pozornosť publika."
    }
  },
  {
    slug: "camera-confidence",
    title: { en: "Camera Confidence Session", sk: "Camera Confidence Session" },
    shortTitle: { en: "Camera confidence", sk: "Istota pred kamerou" },
    intro: {
      en: "A practical one-to-one session for people who want to feel more natural, focused and alive on camera.",
      sk: "Praktická individuálna hodina pre ľudí, ktorí chcú pôsobiť pred kamerou prirodzenejšie, sústredenejšie a živšie."
    },
    audience: {
      en: "Actors, speakers, creators, teachers, founders and anyone recording video.",
      sk: "Pre hercov, speakerov, tvorcov, učiteľov, founderov a každého, kto nahráva video."
    },
    promise: {
      en: "Feel natural, alive and clear on camera without pretending to be someone else.",
      sk: "Pôsobiť pred kamerou prirodzene, živo a jasne bez hrania niekoho iného."
    },
    format: {
      en: "One concrete scenario: intro video, audition, self-tape, reel, interview or presentation.",
      sk: "Jeden konkrétny scenár: intro video, casting, self-tape, reel, rozhovor alebo prezentácia."
    },
    languages: {
      en: "English, Slovak, Ukrainian, Russian, Polish or Italian by agreement.",
      sk: "Angličtina, slovenčina, ukrajinčina, ruština, poľština alebo taliančina podľa dohody."
    },
    duration: { en: "60 or 90 minutes", sk: "60 alebo 90 minút" },
    workOn: {
      en: [
        "body and breath before recording",
        "where to look",
        "natural speech",
        "pauses",
        "emotional presence",
        "simple framing",
        "one short recorded take"
      ],
      sk: [
        "telo a dych pred nahrávaním",
        "kam sa pozerať",
        "prirodzená reč",
        "pauzy",
        "emočná prítomnosť",
        "jednoduchý frame",
        "jeden krátky nahraný pokus"
      ]
    },
    outcomes: {
      en: ["less camera freeze", "clearer eye focus", "a repeatable pre-recording routine"],
      sk: ["menej zamrznutia pred kamerou", "jasnejší očný focus", "opakovateľná rutina pred nahrávaním"]
    },
    notFor: {
      en: "Not for creating a fake online persona or over-polished influencer style.",
      sk: "Nie je to tvorba falošnej online persony ani preleštený influencer štýl."
    },
    ctaLabel: { en: "Book camera session", sk: "Rezervovať kamerovú hodinu" },
    emailSubject: { en: "Camera confidence session request", sk: "Camera confidence session" },
    emailBody: {
      en: "Hello Taisija,\n\nI would like to book a camera confidence session.\n\nMy goal:\nPreferred language:\nOnline or Bratislava:\nPreferred dates:\nA short note about my current difficulty:\n",
      sk: "Dobrý deň Taisija,\n\nmám záujem o Camera Confidence Session.\n\nMôj cieľ:\nPreferovaný jazyk:\nOnline alebo Bratislava:\nPreferované termíny:\nKrátko, čo mi pred kamerou robí problém:\n"
    },
    proofTitle: { en: "Camera exercise video in preparation", sk: "Kamerové cvičenie v príprave" },
    proofBody: {
      en: "Expected here: a 30-45 second demo showing how Taisija works with camera freeze and attention.",
      sk: "Sem patrí 30-45 sekundové demo práce s kamerovým stresom a pozornosťou."
    },
    faq: {
      en: [
        { question: "Do I need acting experience?", answer: "No. The session is useful for non-actors too." },
        { question: "Can it be online?", answer: "Yes. Online work is especially practical for camera training." },
        { question: "Will we record?", answer: "Usually yes, one short take is used for feedback." }
      ],
      sk: [
        { question: "Potrebujem hereckú skúsenosť?", answer: "Nie. Hodina je užitočná aj pre nehercov." },
        { question: "Dá sa to online?", answer: "Áno. Online je pri kamerovej práci veľmi praktické." },
        { question: "Budeme nahrávať?", answer: "Väčšinou áno, krátky záznam slúži na spätnú väzbu." }
      ]
    },
    seoTitle: { en: "Camera Confidence Session — Taisija Boyko", sk: "Camera Confidence Session — Taisija Boyko" },
    seoDescription: {
      en: "One-to-one camera confidence session for self-tapes, interviews, reels and presentations with Taisija Boyko.",
      sk: "Individuálna hodina istoty pred kamerou pre self-tape, rozhovor, reel alebo prezentáciu s Taisijou Boyko."
    }
  },
  {
    slug: "voice-and-diction",
    title: { en: "Voice & Diction Intensive", sk: "Voice & Diction Intensive" },
    shortTitle: { en: "Voice & diction", sk: "Hlas a dikcia" },
    intro: {
      en: "A focused session for clearer, stronger and more expressive speech.",
      sk: "Sústredená hodina pre jasnejšiu, silnejšiu a výraznejšiu reč."
    },
    audience: {
      en: "People with a quiet voice, teachers, hosts, actors, speakers and multilingual professionals.",
      sk: "Pre ľudí s tichým hlasom, učiteľov, moderátorov, hercov, speakerov a viacjazyčných profesionálov."
    },
    promise: {
      en: "Stronger voice, clearer articulation and more expressive speech.",
      sk: "Silnejší hlas, čistejšia artikulácia a výraznejšia reč."
    },
    format: {
      en: "Diagnostics, practical exercises and text reading; recording before/after only with consent.",
      sk: "Diagnostika, praktické cvičenia a práca s textom; pred/po nahrávka iba so súhlasom."
    },
    languages: {
      en: "English, Slovak, Ukrainian, Russian, Polish or Italian by agreement.",
      sk: "Angličtina, slovenčina, ukrajinčina, ruština, poľština alebo taliančina podľa dohody."
    },
    duration: {
      en: "60-minute diagnostics / 90-minute intensive",
      sk: "60-minútová diagnostika / 90-minútový intensive"
    },
    workOn: {
      en: [
        "breathing support",
        "diaphragm awareness",
        "articulation",
        "resonance",
        "pace",
        "pauses",
        "language-specific expression"
      ],
      sk: [
        "dychová opora",
        "vedomie bránice",
        "artikulácia",
        "rezonancia",
        "tempo",
        "pauzy",
        "jazykovo špecifický výraz"
      ]
    },
    outcomes: {
      en: ["a voice warm-up", "clearer speech habits", "a practice plan for one text or language"],
      sk: ["hlasová rozcvička", "jasnejšie rečové návyky", "tréningový plán pre jeden text alebo jazyk"]
    },
    notFor: {
      en: "Not a medical voice therapy session.",
      sk: "Nie je to zdravotná hlasová terapia."
    },
    ctaLabel: { en: "Book voice intensive", sk: "Rezervovať voice intensive" },
    emailSubject: { en: "Voice and diction intensive request", sk: "Voice and diction intensive" },
    emailBody: {
      en: "Hello Taisija,\n\nI would like to book a Voice & Diction Intensive.\n\nMy goal:\nPreferred language:\nOnline or Bratislava:\nPreferred dates:\nWhere I use my voice:\n",
      sk: "Dobrý deň Taisija,\n\nmám záujem o Voice & Diction Intensive.\n\nMôj cieľ:\nPreferovaný jazyk:\nOnline alebo Bratislava:\nPreferované termíny:\nKde používam hlas:\n"
    },
    proofTitle: { en: "Voice samples in preparation", sk: "Hlasové ukážky v príprave" },
    proofBody: {
      en: "Expected here: neutral, warm and dramatic voice demos plus language samples.",
      sk: "Sem patria neutrálne, teplé a dramatické hlasové demá a jazykové ukážky."
    },
    faq: {
      en: [
        { question: "Can I bring my own text?", answer: "Yes. A real text makes the work more concrete." },
        {
          question: "Is this for public speaking?",
          answer: "Yes, especially if voice, pace or articulation are the issue."
        },
        { question: "Can we compare recordings?", answer: "Only if you agree to record and keep the material private." }
      ],
      sk: [
        { question: "Môžem priniesť vlastný text?", answer: "Áno. Reálny text robí prácu konkrétnejšou." },
        { question: "Je to vhodné pre verejný prejav?", answer: "Áno, najmä pri hlase, tempe alebo artikulácii." },
        { question: "Môžeme porovnať nahrávky?", answer: "Iba ak s nahrávaním súhlasíte a materiál zostane súkromný." }
      ]
    },
    seoTitle: { en: "Voice & Diction Intensive — Taisija Boyko", sk: "Voice & Diction Intensive — Taisija Boyko" },
    seoDescription: {
      en: "Voice and diction session for stronger voice, clearer articulation and expressive speech with Taisija Boyko.",
      sk: "Hlasová a dikčná hodina pre silnejší hlas, čistejšiu artikuláciu a výraznejšiu reč s Taisijou Boyko."
    }
  },
  {
    slug: "group-masterclasses",
    title: { en: "Group Masterclasses", sk: "Skupinové masterclassy" },
    shortTitle: { en: "Group masterclasses", sk: "Skupinové masterclassy" },
    intro: {
      en: "Small-group acting and voice exercises for confidence, creativity and presence.",
      sk: "Malé skupiny s hereckými a hlasovými cvičeniami pre istotu, kreativitu a prítomnosť."
    },
    audience: {
      en: "People who want practical actor tools in a shared, energetic format.",
      sk: "Pre ľudí, ktorí chcú praktické herecké nástroje v spoločnom, živom formáte."
    },
    promise: {
      en: "Actor tools for voice, body, emotion and confidence.",
      sk: "Herecké nástroje pre hlas, telo, emóciu a istotu."
    },
    format: {
      en: "6-12 people, Bratislava or online by demand, group forming.",
      sk: "6-12 ľudí, Bratislava alebo online podľa záujmu, skupina sa tvorí."
    },
    languages: {
      en: "English, Slovak, Ukrainian or Russian by group demand.",
      sk: "Angličtina, slovenčina, ukrajinčina alebo ruština podľa skupiny."
    },
    duration: { en: "2-3 hours", sk: "2-3 hodiny" },
    workOn: {
      en: ["voice warm-up", "body release", "partner attention", "simple improvisation", "short performance exercise"],
      sk: [
        "hlasová rozcvička",
        "uvoľnenie tela",
        "partnerská pozornosť",
        "jednoduchá improvizácia",
        "krátke performatívne cvičenie"
      ]
    },
    outcomes: {
      en: ["practical exercises", "shared feedback", "clearer confidence tools"],
      sk: ["praktické cvičenia", "spoločná spätná väzba", "jasnejšie nástroje istoty"]
    },
    notFor: {
      en: "Not for people who need private audition preparation.",
      sk: "Nie je to formát pre súkromnú prípravu castingu."
    },
    ctaLabel: { en: "Join the group", sk: "Pridať sa do skupiny" },
    emailSubject: { en: "Group masterclass registration", sk: "Skupinový masterclass" },
    emailBody: {
      en: "Hello Taisija,\n\nI would like to join a group masterclass.\n\nPreferred language:\nOnline or Bratislava:\nMy experience level:\nPreferred days / times:\n",
      sk: "Dobrý deň Taisija,\n\nmám záujem o skupinový masterclass.\n\nPreferovaný jazyk:\nOnline alebo Bratislava:\nMoja úroveň:\nPreferované dni / časy:\n"
    },
    proofTitle: { en: "Group forming", sk: "Skupina sa tvorí" },
    proofBody: {
      en: "Expected here: the first announced date, place, language and participant limit.",
      sk: "Sem patrí prvý oznámený termín, miesto, jazyk a limit účastníkov."
    },
    faq: {
      en: [
        {
          question: "Is there a date?",
          answer: "The group is forming; date options are sent to interested participants."
        },
        { question: "How many people?", answer: "The planned size is small, usually 6-12 people." },
        { question: "Can beginners join?", answer: "Yes, unless a specific event says otherwise." }
      ],
      sk: [
        { question: "Je už termín?", answer: "Skupina sa tvorí; možnosti termínu sa posielajú záujemcom." },
        { question: "Koľko ľudí bude v skupine?", answer: "Plán je malá skupina, zvyčajne 6-12 ľudí." },
        { question: "Môžu prísť začiatočníci?", answer: "Áno, ak konkrétny event neuvádza inak." }
      ]
    },
    seoTitle: { en: "Group Masterclasses — Taisija Boyko", sk: "Skupinové masterclassy — Taisija Boyko" },
    seoDescription: {
      en: "Small-group acting, voice and confidence masterclasses with Taisija Boyko in Bratislava or online.",
      sk: "Malé skupinové masterclassy pre herectvo, hlas a istotu s Taisijou Boyko v Bratislave alebo online."
    }
  },
  {
    slug: "corporate-workshops",
    title: { en: "Corporate Workshops", sk: "Firemné workshopy" },
    shortTitle: { en: "Corporate workshops", sk: "Firemné workshopy" },
    intro: {
      en: "Voice, presence and improvisation workshops for teams, speakers and creative organizations.",
      sk: "Workshopy hlasu, prítomnosti a improvizácie pre tímy, speakerov a kreatívne organizácie."
    },
    audience: {
      en: "Companies, schools, language centers, cultural organizations and event teams.",
      sk: "Pre firmy, školy, jazykové centrá, kultúrne organizácie a eventové tímy."
    },
    promise: {
      en: "Practical actor tools for clearer communication and more present teams.",
      sk: "Praktické herecké nástroje pre jasnejšiu komunikáciu a prítomnejšie tímy."
    },
    format: {
      en: "Workshop proposal adapted to team size, goal, language and location.",
      sk: "Návrh workshopu podľa veľkosti tímu, cieľa, jazyka a miesta."
    },
    languages: {
      en: "English, Slovak, Ukrainian or Russian first; multilingual format by agreement.",
      sk: "Najmä angličtina, slovenčina, ukrajinčina alebo ruština; viacjazyčný formát podľa dohody."
    },
    duration: { en: "90 minutes / half-day / full-day", sk: "90 minút / pol dňa / celý deň" },
    workOn: {
      en: [
        "voice and presence",
        "public speaking",
        "camera confidence",
        "improvisation for communication",
        "creative body awareness"
      ],
      sk: [
        "hlas a prítomnosť",
        "verejný prejav",
        "istota pred kamerou",
        "improvizácia pre komunikáciu",
        "kreatívne vnímanie tela"
      ]
    },
    outcomes: {
      en: ["workshop proposal", "practical exercises", "team-specific focus", "follow-up recommendations"],
      sk: ["návrh workshopu", "praktické cvičenia", "focus podľa tímu", "odporúčania po workshope"]
    },
    notFor: {
      en: "Not for one-size-fits-all training with no clear team goal.",
      sk: "Nie je to univerzálne školenie bez jasného tímového cieľa."
    },
    ctaLabel: { en: "Request workshop proposal", sk: "Vyžiadať návrh workshopu" },
    emailSubject: { en: "Corporate workshop proposal request", sk: "Návrh firemného workshopu" },
    emailBody: {
      en: "Hello Taisija,\n\nI would like to request a workshop proposal.\n\nCompany / organization:\nNumber of people:\nPreferred language:\nGoal:\nPreferred date:\nLocation or online:\n",
      sk: "Dobrý deň Taisija,\n\nmám záujem o návrh firemného workshopu.\n\nFirma / organizácia:\nPočet ľudí:\nPreferovaný jazyk:\nCieľ:\nPreferovaný termín:\nMiesto alebo online:\n"
    },
    proofTitle: { en: "B2B one-pager planned", sk: "B2B one-pager v pláne" },
    proofBody: {
      en: "Expected here: a downloadable one-page workshop proposal for teams and organizations.",
      sk: "Sem patrí jednostranový PDF návrh workshopu pre tímy a organizácie."
    },
    faq: {
      en: [
        { question: "Can this be adapted for a company?", answer: "Yes. The proposal is shaped around the team goal." },
        { question: "How long is a workshop?", answer: "Common formats are 90 minutes, half-day and full-day." },
        { question: "Can it be multilingual?", answer: "Yes, depending on the group and goal." }
      ],
      sk: [
        { question: "Dá sa to prispôsobiť firme?", answer: "Áno. Návrh vzniká podľa cieľa tímu." },
        { question: "Ako dlho trvá workshop?", answer: "Bežné formáty sú 90 minút, pol dňa a celý deň." },
        { question: "Dá sa robiť viacjazyčne?", answer: "Áno, podľa skupiny a cieľa." }
      ]
    },
    seoTitle: { en: "Corporate Workshops — Taisija Boyko", sk: "Firemné workshopy — Taisija Boyko" },
    seoDescription: {
      en: "Actor-based corporate workshops for voice, presence, public speaking, camera confidence and communication.",
      sk: "Firemné workshopy s hereckými nástrojmi pre hlas, prítomnosť, verejný prejav, kameru a komunikáciu."
    }
  }
];

export const siteCopy = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      casting: "Casting",
      voice: "Voice",
      events: "Events",
      stage: "Stage",
      contact: "Contact"
    },
    localeLabel: "Site language",
    hero: {
      eyebrow: "Bratislava / Central Europe",
      headline: "Multilingual actress, voice performer and stage presence coach.",
      body: "For screen, stage, voice, live events and practical acting-based coaching.",
      hire: "Hire Taisija",
      learn: "Book a masterclass",
      casting: "Open casting profile",
      voice: "Listen to voice",
      cv: "Download CV",
      contact: "Contact",
      proof: "Screen · Stage · Voice · Music · Hosting · Acting coaching"
    },
    quickProof: ["Screen", "Stage", "Voice", "Music", "Hosting", "Languages", "Aerial", "Coaching"],
    hire: {
      eyebrow: "Hire Taisija",
      title: "One artist profile for casting, voice, events and live performance.",
      body: "For casting, voice work, commercials, cultural and corporate events, music-based performance and multilingual live formats.",
      cards: [
        [
          "Acting",
          "Film, theatre, series and commercial acting with multilingual range and stage training.",
          "Open casting profile",
          "/casting/"
        ],
        [
          "Voice & dubbing",
          "Commercial, narration, character and dramatic voice samples across several languages.",
          "Request voice sample",
          "/voice/"
        ],
        [
          "Event hosting",
          "Presenter for cultural, artistic, community and corporate formats with multilingual delivery.",
          "Request event hosting",
          "/events-hosting/"
        ],
        [
          "Music / live performance",
          "Vocal, piano and live performance experience for artistic, cultural and event formats.",
          "Discuss performance",
          "/contact/"
        ],
        [
          "Special skills for camera",
          "Drawing, translation, aerial gymnastics and movement skills for stage, camera and creative productions.",
          "Open casting profile",
          "/casting/"
        ]
      ]
    },
    learn: {
      eyebrow: "Learn with Taisija",
      title: "Practical actor tools for camera, voice, speech and stage presence.",
      body: "Individual sessions, small groups and workshops for concrete goals, not abstract acting theory.",
      cta: "View all services"
    },
    showreel: {
      eyebrow: "Media slots",
      title: "Planned proof is named clearly until final reels are ready.",
      body: "The site now has professional slots for acting, voice, teaching, music, hosting and movement materials.",
      items: [
        [
          "Acting showreel — coming soon",
          "Expected: a 60-90 second reel with selected theatre, screen, series and commercial fragments."
        ],
        [
          "Voice samples — in preparation",
          "Expected: commercial, narration, character and dramatic samples in Slovak, Polish, Italian, Ukrainian, Russian and English."
        ],
        [
          "Teaching demo — in preparation",
          "Expected: a short practical exercise showing voice, body, attention or camera confidence."
        ],
        [
          "Hosting reel — in preparation",
          "Expected: selected event fragments showing speech, audience contact and multilingual delivery."
        ]
      ]
    },
    voiceBlock: {
      eyebrow: "Voice & languages",
      title: "A multilingual voice performer with acting background.",
      body: "Voice work is separated as a commercial line: advertising, narration, character material, dubbing-related recording and language-specific samples.",
      cta: "Request voice quote"
    },
    references: {
      eyebrow: "Selected public references",
      title: "Public material is used as proof, not as a social feed.",
      body: "Public references are listed where available; private or unpublished work can be shared on request."
    },
    contact: {
      eyebrow: "Contact",
      title: "Start with the type of request.",
      body: "For casting and voice work, include project type, language, location, dates and deadline. For coaching, include your goal, level, preferred language and online/offline format.",
      direct: "Direct email",
      topics: [
        [
          "Casting",
          "Casting request for Taisija Boyko",
          "Project type:\nRole / usage:\nLanguage:\nLocation:\nDates:\nDeadline:\nNotes:"
        ],
        [
          "Voice / dubbing",
          "Voice or dubbing request for Taisija Boyko",
          "Project type:\nLanguage:\nUsage:\nDeadline:\nReference style:\nNotes:"
        ],
        [
          "Event hosting",
          "Event hosting request for Taisija Boyko",
          "Event type:\nDate:\nLocation:\nLanguages:\nAudience size:\nNotes:"
        ],
        [
          "Individual coaching",
          "Individual coaching request",
          "Goal:\nLevel:\nPreferred language:\nOnline or Bratislava:\nPreferred dates:"
        ],
        [
          "Group masterclass",
          "Group masterclass request",
          "Preferred language:\nOnline or Bratislava:\nNumber of people:\nPreferred dates:"
        ],
        [
          "Corporate workshop",
          "Corporate workshop proposal request",
          "Company:\nNumber of people:\nLanguage:\nGoal:\nPreferred date:\nLocation / online:"
        ],
        ["Other", "Website enquiry for Taisija Boyko", "Request type:\nTimeline:\nNotes:"]
      ]
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Acting-based coaching, masterclasses and workshops.",
      body: "The first paid formats focus on concrete results: camera confidence, public speaking, voice, diction, individual preparation and team workshops."
    },
    voicePage: {
      eyebrow: "Voice",
      title: "Multilingual voice performer for studios, producers and brands.",
      body: "Commercial, narration, character, dramatic and language-specific recordings in Slovak, Polish, Italian, Ukrainian, Russian and English.",
      cta: "Request voice quote"
    },
    eventsPage: {
      eyebrow: "Events & hosting",
      title: "Multilingual event host and performer for cultural and corporate formats.",
      body: "Available for event hosting, stage announcements, audience interaction and optional vocal, piano or poetry performance depending on the format.",
      cta: "Request event hosting"
    },
    pressKitPage: {
      eyebrow: "Press kit",
      title: "Booking packet for agents, producers and event clients.",
      body: "This page organizes the materials that should become the official press and booking packet.",
      items: [
        "Updated CV PDF",
        "Approved portraits",
        "Showreel links",
        "Voice and music samples",
        "Short and medium bio",
        "Contact details"
      ]
    },
    footer: {
      summary: "Multilingual actress and performer based in Bratislava / Central Europe.",
      privacy: "Public references are listed where available; private materials can be shared on request."
    }
  },
  sk: {
    nav: {
      home: "Domov",
      services: "Služby",
      casting: "Casting",
      voice: "Hlas",
      events: "Eventy",
      stage: "Stage",
      contact: "Kontakt"
    },
    localeLabel: "Jazyk stránky",
    hero: {
      eyebrow: "Bratislava / stredná Európa",
      headline: "Viacjazyčná herečka, voice performerka a coach javiskovej prítomnosti.",
      body: "Pre film, scénu, hlas, live eventy a praktický coaching založený na hereckých nástrojoch.",
      hire: "Najať Taisiju",
      learn: "Rezervovať masterclass",
      casting: "Otvoriť casting profil",
      voice: "Hlasové ukážky",
      cv: "Stiahnuť CV",
      contact: "Kontakt",
      proof: "Film · Scéna · Hlas · Hudba · Moderovanie · Herecký coaching"
    },
    quickProof: ["Film", "Scéna", "Hlas", "Hudba", "Moderovanie", "Jazyky", "Aerial", "Coaching"],
    hire: {
      eyebrow: "Hire Taisija",
      title: "Jeden profesionálny profil pre casting, hlas, eventy a live performance.",
      body: "Pre casting, voice work, reklamu, kultúrne a firemné eventy, hudobný performance a viacjazyčné live formáty.",
      cards: [
        [
          "Herectvo",
          "Film, divadlo, seriály a reklama s viacjazyčným rozsahom a scénickou prípravou.",
          "Otvoriť casting profil",
          "/casting/"
        ],
        [
          "Hlas & dabing",
          "Reklamné, naratívne, charakterové a dramatické hlasové ukážky vo viacerých jazykoch.",
          "Vyžiadať hlasovú ukážku",
          "/voice/"
        ],
        [
          "Moderovanie eventov",
          "Moderátorka pre kultúrne, umelecké, komunitné a firemné formáty.",
          "Vyžiadať event hosting",
          "/events-hosting/"
        ],
        [
          "Hudba / live performance",
          "Vokál, klavír a live performance pre umelecké, kultúrne a eventové formáty.",
          "Prediskutovať performance",
          "/contact/"
        ],
        [
          "Special skills pre kameru",
          "Kresba, preklad, vzdušná gymnastika a pohybové skills pre scénu a kameru.",
          "Otvoriť casting profil",
          "/casting/"
        ]
      ]
    },
    learn: {
      eyebrow: "Learn with Taisija",
      title: "Praktické herecké nástroje pre kameru, hlas, reč a javiskovú prítomnosť.",
      body: "Individuálne hodiny, malé skupiny a workshopy pre konkrétne ciele, nie abstraktnú teóriu.",
      cta: "Zobraziť služby"
    },
    showreel: {
      eyebrow: "Media sloty",
      title: "Chýbajúce proof materiály sú pomenované profesionálne.",
      body: "Stránka má pripravené miesta pre herecké, hlasové, teaching, hudobné, eventové a pohybové materiály.",
      items: [
        ["Herecký showreel — pripravuje sa", "Sem patrí 60-90 sekundový reel s divadlom, filmom, seriálmi a reklamou."],
        [
          "Hlasové ukážky — v príprave",
          "Sem patria krátke commercial, narration, character a dramatic ukážky vo viacerých jazykoch."
        ],
        [
          "Teaching demo — v príprave",
          "Sem patrí krátke praktické cvičenie s hlasom, telom, pozornosťou alebo kamerou."
        ],
        [
          "Hosting reel — v príprave",
          "Sem patria eventové fragmenty s rečou, kontaktom s publikom a viacjazyčným vedením."
        ]
      ]
    },
    voiceBlock: {
      eyebrow: "Hlas & jazyky",
      title: "Viacjazyčný hlas s hereckým základom.",
      body: "Hlas je oddelený ako komerčná línia: reklama, narration, character, dabingové nahrávky a jazykové samples.",
      cta: "Vyžiadať voice quote"
    },
    references: {
      eyebrow: "Verejné referencie",
      title: "Verejný materiál slúži ako proof, nie ako sociálna sieť.",
      body: "Verejné referencie sú uvedené tam, kde sú dostupné; súkromné alebo nepublikované materiály možno zdieľať na vyžiadanie."
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Začnite typom požiadavky.",
      body: "Pri castingu a hlase uveďte typ projektu, jazyk, lokalitu, termíny a deadline. Pri coachingu uveďte cieľ, úroveň, jazyk a online/offline formát.",
      direct: "Priamy email",
      topics: [
        [
          "Casting",
          "Casting request for Taisija Boyko",
          "Typ projektu:\nRola / použitie:\nJazyk:\nLokalita:\nTermíny:\nDeadline:\nPoznámky:"
        ],
        [
          "Voice / dubbing",
          "Voice or dubbing request for Taisija Boyko",
          "Typ projektu:\nJazyk:\nPoužitie:\nDeadline:\nReferenčný štýl:\nPoznámky:"
        ],
        [
          "Event hosting",
          "Event hosting request for Taisija Boyko",
          "Typ eventu:\nDátum:\nMiesto:\nJazyky:\nVeľkosť publika:\nPoznámky:"
        ],
        [
          "Individuálny coaching",
          "Individual coaching request",
          "Cieľ:\nÚroveň:\nPreferovaný jazyk:\nOnline alebo Bratislava:\nPreferované termíny:"
        ],
        [
          "Skupinový masterclass",
          "Group masterclass request",
          "Preferovaný jazyk:\nOnline alebo Bratislava:\nPočet ľudí:\nPreferované termíny:"
        ],
        [
          "Firemný workshop",
          "Corporate workshop proposal request",
          "Firma:\nPočet ľudí:\nJazyk:\nCieľ:\nPreferovaný termín:\nMiesto / online:"
        ],
        ["Iné", "Website enquiry for Taisija Boyko", "Typ požiadavky:\nTermín:\nPoznámky:"]
      ]
    },
    servicesPage: {
      eyebrow: "Služby",
      title: "Herecký coaching, masterclassy a workshopy.",
      body: "Prvé platené formáty sú postavené na konkrétnych výsledkoch: kamera, verejný prejav, hlas, dikcia, individuálna príprava a tímové workshopy."
    },
    voicePage: {
      eyebrow: "Hlas",
      title: "Viacjazyčná voice performerka pre štúdiá, producentov a značky.",
      body: "Commercial, narration, character, dramatic a jazykové nahrávky v slovenčine, poľštine, taliančine, ukrajinčine, ruštine a angličtine.",
      cta: "Vyžiadať voice quote"
    },
    eventsPage: {
      eyebrow: "Eventy & moderovanie",
      title: "Viacjazyčná moderátorka a performerka pre kultúrne a firemné formáty.",
      body: "Dostupná pre moderovanie eventov, stage announcements, kontakt s publikom a voliteľný vokál, klavír alebo poéziu podľa formátu.",
      cta: "Vyžiadať event hosting"
    },
    pressKitPage: {
      eyebrow: "Press kit",
      title: "Booking packet pre agentov, producentov a event klientov.",
      body: "Táto stránka organizuje materiály, ktoré majú tvoriť oficiálny press a booking packet.",
      items: [
        "Aktuálny CV PDF",
        "Schválené portréty",
        "Showreel linky",
        "Hlasové a hudobné ukážky",
        "Krátke a stredné bio",
        "Kontaktné údaje"
      ]
    },
    footer: {
      summary: "Viacjazyčná herečka a performerka so základňou v Bratislave / strednej Európe.",
      privacy: "Verejné referencie sú uvedené tam, kde sú dostupné; súkromné materiály možno zdieľať na vyžiadanie."
    }
  }
} as const;

export function getService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}
