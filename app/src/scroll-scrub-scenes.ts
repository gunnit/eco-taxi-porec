import { createElement } from "react";

import { RideChapters } from "@/components/ride-chapters";
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#e85d4a",
  background: "#12304a",
  ink: "#f4f1e8",
  muted: "#d8e2df",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "porec-ride",
    label: "Poreč ride",
    kicker: "Poreč · Croatia · Since 2010",
    title: "Poreč, from the best seat.",
    body: "Hop in and let the city come to you — no windows, no traffic, no rush.",
    tags: ["Open air", "Local ride", "4.7 on Google"],
    // One continuous take carries four semantic chapters, so the scene's own
    // kicker/title/body/tags above are the no-CSS fallback and the chapter
    // stack below is what the visitor reads. See components/ride-chapters.tsx.
    actions: createElement(RideChapters),
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
