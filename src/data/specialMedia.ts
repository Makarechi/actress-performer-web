import { withBase } from "./paths";

export const aerialGymnasticsMedia = {
  highlight: withBase("/video/special-skills/taisija-aerial-gymnastics-highlight.mp4"),
  full: withBase("/video/special-skills/taisija-aerial-gymnastics-full.mp4"),
  poster: withBase("/images/special-skills/taisija-aerial-gymnastics-poster.jpg")
} as const;

export const ukrainianVocalPerformanceMedia = {
  src: withBase("/video/music/taisija-vyshyvana-divchyna-vocal-performance.mp4"),
  poster: withBase("/images/music/taisija-vyshyvana-divchyna-vocal-performance.jpg")
} as const;
