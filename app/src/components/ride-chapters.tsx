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
 * `from`/`to` are journey progress: a chapter fades in at `from`, holds, and
 * fades out by `to`. The small gaps between windows are deliberate — a beat
 * of pure film between chapters, and never two headlines on screen at once.
 */
import type { CSSProperties } from "react";

type ChapterStyle = CSSProperties & Record<`--ch-${string}`, number>;

interface Chapter {
  id: string;
  kicker: string;
  /** Display lines — the break is art-directed, not left to wrapping. */
  lines: string[];
  body: string;
  tags: string[];
  from: number;
  to: number;
}

const chapters: Chapter[] = [
  {
    id: "meet",
    kicker: "Poreč · Croatia · Since 2010",
    lines: ["Poreč, from", "the best seat."],
    body: "Hop in and let the city come to you — no windows, no traffic, no rush.",
    tags: ["Open air", "Local ride", "4.7 on Google"],
    from: -0.25,
    to: 0.21,
  },
  {
    id: "coast",
    kicker: "Along the water",
    lines: ["Sea breeze", "included."],
    body: "An open-air ride made for slow views, warm light and very good photographs.",
    tags: ["Waterfront route"],
    from: 0.23,
    to: 0.4,
  },
  {
    id: "old-town",
    kicker: "Into the old town",
    lines: ["Every corner", "has a story."],
    body: "We take the limestone lanes cars can’t reach, and never lose the view.",
    tags: ["Poreč old town"],
    from: 0.42,
    to: 0.6,
  },
  {
    id: "arrive",
    kicker: "Arrive smiling",
    lines: ["Your Poreč story", "starts here."],
    body: "Call Eco Taxi and choose where the ride takes you.",
    tags: ["+385 95 858 4045"],
    from: 0.62,
    to: 0.8,
  },
];

export function RideChapters() {
  return (
    <div className="ride-chapters">
      {chapters.map((chapter, index) => {
        const style: ChapterStyle = { "--ch-a": chapter.from, "--ch-b": chapter.to };
        const Heading = index === 0 ? "h1" : "h2";

        return (
          <article className="ride-chapter" key={chapter.id} style={style}>
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
