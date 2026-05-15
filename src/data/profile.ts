import { withBase } from "./paths";

export const profile = {
  name: "Taisija Boyko",
  handle: "@taisija.boyko_actress",
  email: "taisija.boyko@gmail.com",
  baseLocation: "Bratislava / Central Europe",
  instagram: "https://www.instagram.com/taisija.boyko_actress/",
  headshot: withBase("/images/taisija-boyko-profile.jpg"),
  headline:
    "Multilingual actress and performer for screen, stage, voice and live events.",
  subheadline:
    "Film and theatre actress with experience across theatre, film, series, commercials, dubbing, event hosting, voice, music and live performance.",
  education: "The Academy of Performing Arts in Bratislava",
  shortBio:
    "A multilingual actress and performer with experience in theatre, film, television series, commercials, dubbing and event hosting. She works across Slovak, Polish, Italian, Ukrainian, Russian and English, combining acting with voice, music, piano, vocal performance and movement skills.",
  languages: [
    {
      name: "Slovak",
      level: "fluent",
      uses: "acting / hosting / voice"
    },
    {
      name: "Polish",
      level: "fluent",
      uses: "acting / voice"
    },
    {
      name: "Italian",
      level: "fluent",
      uses: "acting / voice / singing"
    },
    {
      name: "Ukrainian",
      level: "fluent",
      uses: "acting / voice"
    },
    {
      name: "Russian",
      level: "fluent",
      uses: "acting / voice / hosting"
    },
    {
      name: "English",
      level: "fluent",
      uses: "acting / voice / international work"
    },
    {
      name: "Hungarian",
      level: "basic / conversational",
      uses: "selected communication"
    }
  ],
  skillGroups: [
    {
      title: "Acting",
      items: ["Theatre", "Film", "Series", "Commercials"]
    },
    {
      title: "Voice",
      items: ["Dubbing", "Commercial", "Narration", "Character"]
    },
    {
      title: "Music",
      items: ["Vocal", "Piano", "Street and live performance"]
    },
    {
      title: "Live Events",
      items: ["Presenter", "Host", "Multilingual events"]
    },
    {
      title: "Special Skills",
      items: ["Drawing", "Translation", "Aerial gymnastics"]
    }
  ],
  mediaNeeds: [
    {
      title: "Acting showreel",
      category: "screen / stage",
      note: "Expected: 60-90 seconds with theatre, film, series and commercial fragments."
    },
    {
      title: "Voice and dubbing reel",
      category: "voice",
      note: "Expected: 3-6 short samples: commercial, narration, character, dramatic, plus language samples."
    },
    {
      title: "Vocal performance",
      category: "music",
      note: "Expected: 30-90 seconds, ideally one clean live or studio recording."
    },
    {
      title: "Piano sample",
      category: "music",
      note: "Expected: 30-90 seconds showing musicality and camera-safe performance."
    },
    {
      title: "Hosting reel",
      category: "events",
      note: "Expected: event fragment showing speech, confidence, audience contact and languages."
    },
    {
      title: "Aerial gymnastics",
      category: "movement",
      note: "Expected: short video or still for movement, physical theatre, commercial and fantasy/historical casting."
    }
  ],
  links: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/taisija.boyko_actress/"
    },
    {
      label: "Email",
      href: "mailto:taisija.boyko@gmail.com"
    }
  ]
} as const;

export const contentPlan = [
  {
    title: "Hero portrait set",
    where: "Hero, casting profile, press materials",
    needed:
      "1 strong cinematic portrait, 1 neutral headshot, 1 waist-up portrait and 1 full-body photo.",
    suggestedFiles:
      "public/images/portraits/taisija-hero.webp, taisija-headshot.webp, taisija-full-body.webp"
  },
  {
    title: "Acting showreel",
    where: "Home acting block and casting profile",
    needed:
      "60-90 seconds with strongest screen/stage moments, close-ups, dialogue, theatre, film/series and commercial fragments.",
    suggestedFiles:
      "Use a Vimeo/YouTube link or add public/video/taisija-showreel-2026.mp4"
  },
  {
    title: "Voice samples",
    where: "Voice and dubbing block",
    needed:
      "Commercial, narration, character, dramatic and language samples in Slovak, Polish, Italian, Ukrainian, Russian and English.",
    suggestedFiles:
      "public/audio/taisija-voice-commercial-en.mp3, taisija-voice-character-it.mp3"
  },
  {
    title: "Music samples",
    where: "Music block",
    needed:
      "One vocal fragment and one piano fragment, 30-90 seconds each, with clean sound.",
    suggestedFiles:
      "public/audio/taisija-vocal-live.mp3, public/video/taisija-piano-2026.mp4"
  },
  {
    title: "Hosting reel",
    where: "Hosting / live events block",
    needed:
      "Fragments from events showing speech, audience contact, confidence and multilingual delivery.",
    suggestedFiles:
      "public/video/taisija-hosting-reel-2026.mp4"
  },
  {
    title: "Aerial gymnastics material",
    where: "Special skills and casting profile",
    needed:
      "Short video or 2-3 stills showing movement quality, line, control and camera-safe physical skill.",
    suggestedFiles:
      "public/images/special-skills/taisija-aerial-01.webp"
  },
  {
    title: "Official CV and credits",
    where: "Casting profile and download buttons",
    needed:
      "Exact theatre, film, series, commercial and dubbing credits with years, roles and productions.",
    suggestedFiles:
      "public/downloads/taisija-boyko-cv-en-2026.pdf"
  },
  {
    title: "Press kit",
    where: "Future press / booking block",
    needed:
      "Short bio, medium bio, 2-3 approved photos, CV and official contact details.",
    suggestedFiles:
      "public/downloads/taisija-boyko-press-kit-2026.zip"
  }
] as const;

export const castingFacts = [
  ["Profession", "Film and theatre actress / performer"],
  ["Base", "Bratislava / Central Europe"],
  ["Training", "The Academy of Performing Arts in Bratislava"],
  ["Work formats", "Film, theatre, series, advertising, dubbing, events"],
  ["Contact", profile.email]
] as const;
