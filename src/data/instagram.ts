import { withBase } from "./paths";

export const instagramPosts = [
  {
    id: "theatre-day",
    title: "International Theatre Day",
    category: "theatre / acting",
    image: withBase("/images/instagram/theatre-day.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/reel/DWYkf2VDPBf/",
    alt: "Instagram reel cover for International Theatre Day by Taisija Boyko.",
    note: "A theatre-led post built around actor craft and Ukrainian stage culture."
  },
  {
    id: "acting-inner-child",
    title: "Inner Child Acting Exercise",
    category: "acting training",
    image: withBase("/images/instagram/acting-inner-child.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/reel/DVrVCmzDNxs/",
    alt: "Instagram reel cover for an acting exercise about the inner child.",
    note: "Actor training content focused on release, presence and emotional freedom."
  },
  {
    id: "acting-emotions",
    title: "Strong Emotions On Stage",
    category: "acting training",
    image: withBase("/images/instagram/acting-emotions.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/reel/DVV-MpZjMhO/",
    alt: "Instagram reel cover about playing strong emotions truthfully.",
    note: "Short educational acting reel about truthful emotional work."
  },
  {
    id: "vocal-concert",
    title: "Vocal Performance",
    category: "music / live",
    image: withBase("/images/instagram/vocal-concert.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/reel/DVEnJIlDI6Z/",
    alt: "Instagram reel cover for a Ukrainian song concert fragment.",
    note: "A singing and concert fragment that supports the music side of the profile."
  },
  {
    id: "little-women-clip",
    title: "Little Women",
    category: "stage / actor training",
    image: withBase("/images/instagram/little-women-clip.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/reel/DTiP_FPDEAE/",
    alt: "Instagram reel cover for Little Women stage work.",
    note: "Stage material connected with Louisa May Alcott's Little Women."
  },
  {
    id: "little-women-stage",
    title: "Paprad Acting Studio",
    category: "theatre / mentoring",
    image: withBase("/images/instagram/little-women-stage.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/p/DTiMylgDI8V/",
    alt: "Instagram carousel cover for Little Women by the Paprad acting studio.",
    note: "A stage project with students of the Paprad acting studio."
  },
  {
    id: "hosting-st-nicholas",
    title: "St. Nicholas Event",
    category: "hosting / live event",
    image: withBase("/images/instagram/hosting-st-nicholas.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/reel/DSBF32KDMVp/",
    alt: "Instagram reel cover for a St. Nicholas event and Ukrainian poetry.",
    note: "A live-event and presenter-facing fragment with holiday performance material."
  },
  {
    id: "nemocnica-tvjoj",
    title: "Nemocnica TV JOJ",
    category: "screen acting",
    image: withBase("/images/instagram/nemocnica-tvjoj.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/reel/DQygfdEjLTn/",
    alt: "Instagram reel cover connected with Nemocnica TV JOJ.",
    note: "A Slovak screen-acting reference connected with Nemocnica TV JOJ."
  },
  {
    id: "voice-training",
    title: "Voice Engine",
    category: "voice / public speaking",
    image: withBase("/images/instagram/voice-training.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/reel/DPwlABlDCrX/",
    alt: "Instagram reel cover for a voice and diaphragm training video.",
    note: "Voice technique content about diaphragm support and public speaking."
  },
  {
    id: "acting-organic-action",
    title: "Organic Action",
    category: "acting craft",
    image: withBase("/images/instagram/acting-organic-action.jpg"),
    href: "https://www.instagram.com/taisija.boyko_actress/reel/DPuCk_kDHhV/",
    alt: "Instagram reel cover for acting craft content about organic action.",
    note: "Actor craft content about belief, circumstances and natural physical response."
  }
] as const;
