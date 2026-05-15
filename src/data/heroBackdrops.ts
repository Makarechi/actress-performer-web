import type { Locale } from "./i18n";
import { withBase } from "./paths";

export const heroBackdrops: Record<
  Locale,
  {
    src: string;
    label: string;
  }
> = {
  en: {
    src: withBase("/video/backdrops/english.mp4"),
    label: "international studio backdrop"
  },
  sk: {
    src: withBase("/video/backdrops/slovak.mp4"),
    label: "Slovak cinematic backdrop"
  },
  pl: {
    src: withBase("/video/backdrops/polish.mp4"),
    label: "Polish theatre backdrop"
  },
  it: {
    src: withBase("/video/backdrops/italian.mp4"),
    label: "Italian opera backdrop"
  },
  uk: {
    src: withBase("/video/backdrops/ukranian.mp4"),
    label: "Ukrainian blue and gold backdrop"
  },
  ru: {
    src: withBase("/video/backdrops/russian.mp4"),
    label: "Russian voice and theatre backdrop"
  }
};
