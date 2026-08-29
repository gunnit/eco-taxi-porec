import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bicycle,
  Camera,
  FacebookLogo,
  Leaf,
  MapPin,
  Path,
  Phone,
  Star,
  UmbrellaSimple,
} from "@phosphor-icons/react";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  component: Index,
});

const phoneLabel = "+385 95 858 4045";
const phoneHref = "tel:+385958584045";
const mapsHref = "https://maps.app.goo.gl/kzrg5z3pLZSdArz79";
const facebookHref = "https://www.facebook.com/riksa.porec/";
const addressLabel = "Zagrebačka ul. 19, 52440 Poreč";

const facts = [
  {
    id: "since",
    label: "Established",
    value: "2010",
    note: "Local rides through Poreč for more than a decade.",
  },
  {
    id: "rating",
    label: "Google",
    value: "4.7",
    star: true,
    note: "A visitor favourite for an easy view of the city.",
  },
  {
    id: "air",
    label: "Experience",
    value: "Open air",
    note: "Feel the sea breeze, not the traffic.",
  },
];

const benefits = [
  {
    id: "light",
    Icon: Bicycle,
    title: "Light on the city",
    body: "A human-scale ride for narrow lanes, waterfront paths and slower travel.",
  },
  {
    id: "view",
    Icon: Camera,
    title: "Big on the view",
    body: "No windows, no rush. Stop, look, photograph and enjoy Poreč at street level.",
  },
  {
    id: "easy",
    Icon: Leaf,
    title: "Easy by nature",
    body: "Comfortable seating under a light canopy, with a local driver leading the way.",
  },
];

const moments = [
  {
    id: "waterfront",
    className: "moment moment-a",
    src: "/assets/eco/waterfront.jpg",
    alt: "Eco Taxi rikša riding along the Poreč waterfront with the old town behind",
    caption: "Waterfront air",
    index: "01",
  },
  {
    id: "lane",
    className: "moment moment-b",
    src: "/assets/eco/moment-lane.jpg",
    alt: "Side view of the white canopy rikša passing a limestone wall in Poreč",
    caption: "Old town light",
    index: "02",
  },
  {
    id: "square",
    className: "moment moment-c",
    src: "/assets/eco/moment-square.jpg",
    alt: "The rikša seen through a stone archway as it enters a Poreč square",
    caption: "Golden arrivals",
    index: "03",
  },
];

const highlights = [
  { id: "pedal", Icon: Bicycle, label: "Pedal powered" },
  { id: "canopy", Icon: UmbrellaSimple, label: "Shaded canopy" },
  { id: "eco", Icon: Leaf, label: "No emissions" },
  { id: "photo", Icon: Camera, label: "Photo stops" },
  { id: "lanes", Icon: Path, label: "Old town lanes" },
  { id: "call", Icon: Phone, label: "Call to ride" },
];

function BrandMark({ className }: { className?: string }) {
  return (
    <a
      aria-label="Eco Taxi Poreč — back to top"
      className={["brand-mark", className].filter(Boolean).join(" ")}
      href="#top"
    >
      <span aria-hidden="true" className="brand-wheel">
        <svg fill="none" focusable="false" viewBox="0 0 40 40">
          <circle className="brand-wheel__tyre" cx="20" cy="20" r="15.5" />
          <g className="brand-wheel__spokes">
            <path d="M20 5.5V34.5" />
            <path d="M5.5 20H34.5" />
            <path d="M9.75 9.75L30.25 30.25" />
            <path d="M30.25 9.75L9.75 30.25" />
          </g>
          <circle className="brand-wheel__hub" cx="20" cy="20" r="3.4" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Rikša Poreč</strong>
        <small>Eko Taxi · Since 2010</small>
      </span>
    </a>
  );
}

function FloatingCall() {
  return (
    <a aria-label={`Call Eco Taxi Poreč on ${phoneLabel}`} className="floating-call" href={phoneHref}>
      <svg aria-hidden="true" className="call-ring" focusable="false" viewBox="0 0 120 120">
        <defs>
          <path
            d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0"
            id="call-ring-path"
          />
        </defs>
        <text>
          <textPath href="#call-ring-path" startOffset="0">
            {"RIDE · EXPLORE · POREČ · RIDE · EXPLORE · POREČ · "}
          </textPath>
        </text>
      </svg>
      <span aria-hidden="true" className="call-disc">
        <Phone weight="fill" />
      </span>
    </a>
  );
}

function Index() {
  return (
    <main className="site-shell" id="top">
      <header className="site-nav">
        <div className="site-nav__inner">
          <BrandMark />
          <nav aria-label="Main">
            <a href="#ride">The ride</a>
            <a href="#why">Why us</a>
            <a href="#moments">Moments</a>
            <a className="nav-call" href={phoneHref}>
              <Phone weight="bold" />
              <span>Call now</span>
            </a>
          </nav>
        </div>
      </header>

      <div className="hero-wrap">
        <ScrollScrub className="hero-scrub" scenes={scrollScrubScenes} theme={scrollScrubTheme} />
        <div aria-hidden="true" className="scroll-cue">
          <span className="scroll-cue__label">Scroll to ride</span>
          <span className="scroll-cue__rail" />
        </div>
        <FloatingCall />
      </div>

      <section className="facts-section section-pad" id="ride">
        <div className="facts-grid">
          <div className="facts-copy">
            <p className="section-kicker">01 · The ride</p>
            <h2>
              A better way
              <br />
              to see Poreč.
            </h2>
            <p className="section-lede">
              Slow down and take it in. Our open-air rikša brings the coast, the old town and
              the corners in between comfortably within reach.
            </p>
            <a className="text-link" href={mapsHref} rel="noreferrer" target="_blank">
              Find our starting point
              <ArrowUpRight weight="bold" />
            </a>
          </div>

          <dl className="facts-rail">
            {facts.map((fact) => (
              <div className="facts-rail__row" key={fact.id}>
                <dt>{fact.label}</dt>
                <dd className="facts-rail__value">
                  {fact.value}
                  {fact.star ? <Star aria-hidden="true" weight="fill" /> : null}
                </dd>
                <dd className="facts-rail__note">{fact.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="benefit-section section-pad" id="why">
        <span aria-hidden="true" className="route-orbit">
          <span />
          <span />
          <span />
        </span>
        <div className="benefit-head">
          <p className="section-kicker">02 · Why Eco Taxi</p>
          <h2>
            Made for the streets
            <br />
            cars can’t love.
          </h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ Icon, ...benefit }) => (
            <article key={benefit.id}>
              <Icon weight="duotone" />
              <h3>{benefit.title}</h3>
              <p>{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="moments-section section-pad" id="moments">
        <div className="moments-head">
          <div>
            <p className="section-kicker">03 · Poreč moments</p>
            <h2>
              The city,
              <br />
              unfiltered.
            </h2>
          </div>
          <p className="section-lede">
            From the blue edge of the Adriatic to warm stone lanes, every turn feels close
            enough to touch.
          </p>
        </div>
        <div className="moment-strip">
          {moments.map((moment) => (
            <figure className={moment.className} key={moment.id}>
              <img alt={moment.alt} loading="lazy" src={moment.src} />
              <figcaption>
                {moment.caption}
                <span>{moment.index}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-label="What every ride includes" className="highlight-band">
        <ul>
          {highlights.map(({ Icon, ...highlight }) => (
            <li key={highlight.id}>
              <Icon weight="light" />
              <span>{highlight.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="booking-section" id="book">
        <span aria-hidden="true" className="booking-orbit">
          <span className="orbit-dot dot-one" />
          <span className="orbit-dot dot-two" />
          <span className="orbit-dot dot-three" />
        </span>
        <img
          alt="The Eco Taxi rikša arriving in a sunlit Poreč square"
          className="booking-medallion"
          loading="lazy"
          src="/assets/eco/old-town.jpg"
        />
        <div className="booking-copy">
          <p className="section-kicker">04 · Your ride</p>
          <h2>
            Ready for
            <br />
            Poreč?
          </h2>
          <div className="contact-lines">
            <a href={phoneHref}>
              <Phone weight="fill" />
              {phoneLabel}
            </a>
            <a href={mapsHref} rel="noreferrer" target="_blank">
              <MapPin weight="fill" />
              {addressLabel}
            </a>
          </div>
          <div className="booking-actions">
            <a className="primary-cta" href={phoneHref}>
              Call now
              <ArrowUpRight weight="bold" />
            </a>
            <a className="secondary-cta" href={mapsHref} rel="noreferrer" target="_blank">
              Find us
              <MapPin weight="bold" />
            </a>
          </div>
        </div>
      </section>

      <a className="facebook-band" href={facebookHref} rel="noreferrer" target="_blank">
        <span>
          <FacebookLogo weight="fill" />
          Follow the ride on Facebook
        </span>
        <ArrowUpRight weight="bold" />
      </a>

      <footer className="site-footer section-pad">
        <div className="footer-brand">
          <BrandMark className="brand-mark--footer" />
          <p>Open-air bicycle taxi rides through Poreč since 2010.</p>
        </div>
        <address className="footer-contact">
          <a href={phoneHref}>{phoneLabel}</a>
          <a href="mailto:labo.taxi@gmail.com">labo.taxi@gmail.com</a>
          <a href={mapsHref} rel="noreferrer" target="_blank">
            {addressLabel}
          </a>
        </address>
        <p className="footer-legal">
          <span>Rikša Poreč — EkoTaxi</span>
          <span>© {new Date().getFullYear()}</span>
        </p>
      </footer>
    </main>
  );
}
