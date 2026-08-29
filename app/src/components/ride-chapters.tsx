/**
 * Chapter copy for the scroll-scrub journey.
 *
 * The site ships ONE continuous 12s ride (waterfront → promenade → old-town
 * lane → square), so the scrub engine pins a single copy block for the whole
 * journey. The four semantic chapters of that ride live inside that block and
 * cross-fade off `--ss-progress` — the 0→1 journey value the engine already
 * publishes on its root element — so there is no second scroll listener, no
 * per-frame React state, and nothing extra attached to the video elements.
 *
 * `from`/`to` are journey progress and are timed to what is actually on screen,
 * so they are the same in every language; only the words change. The small gaps
 * between windows are deliberate — a beat of pure film between chapters, and
 * never two headlines on screen at once.
 */
import type { CSSProperties } from "react";

import { siteContent, type Locale, type SiteContent } from "@/i18n/content";

type ChapterStyle = CSSProperties & Record<`--ch-${string}`, number>;

type ChapterKey = keyof SiteContent["chapters"];

const windows: Array<{ key: ChapterKey; from: number; to: number }> = [
  { key: "meet", from: -0.25, to: 0.21 },
  { key: "coast", from: 0.23, to: 0.4 },
  { key: "oldTown", from: 0.42, to: 0.6 },
  { key: "arrive", from: 0.62, to: 0.8 },
];

export function RideChapters({ locale }: { locale: Locale }) {
  const chapters = siteContent[locale].chapters;

  return (
    <div className="ride-chapters">
      {windows.map(({ key, from, to }, index) => {
        const chapter = chapters[key];
        const style: ChapterStyle = { "--ch-a": from, "--ch-b": to };
        const Heading = index === 0 ? "h1" : "h2";

        return (
          <article className="ride-chapter" key={key} style={style}>
            <p className="ride-chapter__kicker">{chapter.kicker}</p>
            <Heading className="ride-chapter__title">
              {chapter.lines.map((line, lineIndex) => (
                <span key={line}>
                  {lineIndex > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </Heading>
            <p className="ride-chapter__body">{chapter.body}</p>
            <ul className="ride-chapter__tags">
              {chapter.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
