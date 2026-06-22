import { instagramPosts } from "./instagram";

type InstagramPostId = (typeof instagramPosts)[number]["id"];

const instagramPostById = new Map(instagramPosts.map((post) => [post.id, post]));

function publicReference(id: InstagramPostId) {
  return instagramPostById.get(id)?.href ?? "https://www.instagram.com/taisija.boyko_actress/";
}

export const castingCredits = [
  {
    title: "Nemocnica TV JOJ",
    type: "Screen acting",
    focus: "Slovak television screen reference",
    href: publicReference("nemocnica-tvjoj")
  },
  {
    title: "Little Women / Paprad Acting Studio",
    type: "Theatre / mentoring",
    focus: "Stage project and actor training material",
    href: publicReference("little-women-stage")
  },
  {
    title: "International Theatre Day",
    type: "Theatre / acting",
    focus: "Actor craft and Ukrainian stage culture",
    href: publicReference("theatre-day")
  },
  {
    title: "St. Nicholas Event",
    type: "Hosting / live event",
    focus: "Presenter-facing event and poetry material",
    href: publicReference("hosting-st-nicholas")
  },
  {
    title: "Voice Engine",
    type: "Voice / public speaking",
    focus: "Voice technique and diaphragm support",
    href: publicReference("voice-training")
  },
  {
    title: "Vocal Performance",
    type: "Music / live",
    focus: "Concert fragment supporting music and live performance",
    href: publicReference("vocal-concert")
  }
] as const;
