import { createElement } from "react";

import { RideChapters } from "@/components/ride-chapters";
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";
import { locales, siteContent, type Locale } from "@/i18n/content";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#e85d4a",
  background: "#12304a",
  ink: "#f4f1e8",
  muted: "#d8e2df",
};

function scenesFor(locale: Locale): ScrollScrubScene[] {
  const { chapters } = siteContent[locale];

  return [
    {
      id: "porec-ride",
      label: chapters.meet.kicker,
      kicker: chapters.meet.kicker,
      title: chapters.meet.lines.join(" "),
      body: chapters.meet.body,
      tags: chapters.meet.tags,
      // One continuous take carries four semantic chapters, so the scene's own
      // kicker/title/body/tags above are the no-CSS fallback and the chapter
      // stack below is what the visitor reads. See components/ride-chapters.tsx.
      actions: createElement(RideChapters, { locale }),
      clip: "/assets/world/scene-01.mp4",
      mobileClip: "/assets/world/scene-01-mobile.mp4",
      poster: "/assets/world/scene-01-poster.jpg",
      mobilePoster: "/assets/world/scene-01-mobile-poster.jpg",
      objectPosition: "54% 50%",
      mobileObjectPosition: "54% 50%",
      scroll: 5.4,
      linger: 0.18,
    },
  ];
}

/**
 * One frozen scene array per locale, built once at module scope. The scrub
 * controller rebuilds itself whenever the `scenes` prop changes identity, so
 * these must never be recreated per render.
 */
export const scrollScrubScenes: Record<Locale, ScrollScrubScene[]> = Object.fromEntries(
  locales.map((locale) => [locale, scenesFor(locale)]),
) as Record<Locale, ScrollScrubScene[]>;
