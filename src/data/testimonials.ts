import type { Locale } from "./i18n";
import { withBase } from "./paths";

type TestimonialFeature = {
  navLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  video?: {
    src: string;
    poster: string;
    label: string;
    caption: string;
  };
  person: string;
  role: string;
  sourceLabel: string;
  sourceHref: string;
  sourceNote: string;
  quoteLabel: string;
  quote: string;
};

export const testimonialFeatures: Partial<Record<Locale, TestimonialFeature>> = {
  uk: {
    navLabel: "Відгуки",
    eyebrow: "Відгуки про мене",
    title: "Голос, який тримає зал поруч із бандурою.",
    intro:
      "Починаємо блок відгуків із живої сценічної історії: не абстрактна похвала, а досвід людини, яка була поруч на концертах і бачила вокал, ведення та контакт із публікою наживо.",
    image: withBase("/images/testimonials/taisija-olha-smorkis-karlova-ves.jpg"),
    imageAlt: "Таїсія Бойко співає на сцені поруч із українською бандуристкою Ольгою Сморкіс.",
    video: {
      src: withBase("/video/testimonials/taisija-olha-smorkis-live-moment.mp4"),
      poster: withBase("/images/testimonials/taisija-olha-smorkis-live-moment-poster.jpg"),
      label: "Живий фрагмент з концерту",
      caption: "29 секунд спільного live-виступу Таїсії Бойко та Ольги Сморкіс українською."
    },
    person: "Ольга Сморкіс",
    role: "українська бандуристка, виконавиця й педагогиня у Словаччині",
    sourceLabel: "Про Ольгу Сморкіс",
    sourceHref: "https://novyny.sme.sk/culture-tourism/c/bandurystka-z-ukrainy-pidkoriuie-slovatsku-stsenu",
    sourceNote:
      "За матеріалом «Новин зі Словаччини», Ольга Сморкіс народилася на Волині, з дитинства пов'язана з музикою, грає на бандурі, виступає й організовує концерти у Братиславі та популяризує українську культуру в Словаччині.",
    quoteLabel: "Чернетка відгуку для погодження",
    quote:
      "Таїсія має голос, який не потрібно пояснювати: він одразу збирає зал і тримає увагу до останньої ноти. У наших спільних концертах вона була не лише сильною вокалісткою, а й дуже уважною ведучою: відчувала артистів, публіку, темп вечора і створювала теплу, гідну атмосферу. Для мене це рідкісне поєднання сценічної культури, щирості й професійної відповідальності."
  }
};
