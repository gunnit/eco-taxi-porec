/**
 * The whole public site, in one of four languages.
 *
 * Structure — order, icons, imagery, ids — lives here; every string comes from
 * `@/i18n/content`. Each locale gets its own thin route (`/`, `/hr`, `/de`,
 * `/it`) that renders this component, so every language is a real, indexable
 * URL rather than a client-side toggle.
 */
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
import {
  localePath,
  localeShort,
  localeTag,
  locales,
  siteContent,
  type Locale,
} from "@/i18n/content";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const phoneLabel = "+385 95 858 4045";
export const phoneHref = "tel:+385958584045";
export const mapsHref = "https://maps.app.goo.gl/kzrg5z3pLZSdArz79";
export const facebookHref = "https://www.facebook.com/riksa.porec/";
export const addressLabel = "Zagrebačka ul. 19, 52440 Poreč";

/**
 * Document head for one locale.
 *
 * hreflang and canonical hrefs are deliberately root-relative: crawlers resolve
 * them against the document, so they stay correct on the Render URL today and
 * on the client's own domain later, with nothing to reconfigure.
 */
export function localizedHead(locale: Locale) {
  const { meta } = siteContent[locale];

  return {
    // charSet / viewport / favicon / og:image stay in the root head — only the
    // language-specific tags belong here.
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { name: "author", content: "Rikša Poreč - EkoTaxi" },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:locale", content: localeTag[locale] },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: localePath[locale] },
      ...locales.map((alternate) => ({
        rel: "alternate",
        hrefLang: localeTag[alternate],
        href: localePath[alternate],
      })),
      { rel: "alternate", hrefLang: "x-default", href: localePath.en },
    ],
  };
}

const factOrder = [
  { id: "since", star: false },
  { id: "rating", star: true },
  { id: "air", star: false },
] as const;

const benefitOrder = [
  { id: "light", Icon: Bicycle },
  { id: "view", Icon: Camera },
  { id: "easy", Icon: Leaf },
] as const;

const momentOrder = [
  {
    id: "waterfront",
    className: "moment moment-a",
    src: "/assets/eco/waterfront.jpg",
    index: "01",
  },
  { id: "lane", className: "moment moment-b", src: "/assets/eco/moment-lane.jpg", index: "02" },
  { id: "square", className: "moment moment-c", src: "/assets/eco/moment-square.jpg", index: "03" },
] as const;

const highlightOrder = [
  { id: "pedal", Icon: Bicycle },
  { id: "canopy", Icon: UmbrellaSimple },
  { id: "eco", Icon: Leaf },
  { id: "photo", Icon: Camera },
  { id: "lanes", Icon: Path },
  { id: "call", Icon: Phone },
] as const;

function BrandMark({ className, locale }: { className?: string; locale: Locale }) {
  const t = siteContent[locale];

  return (
    <a
      aria-label={t.brand.homeAria}
      className={["brand-mark", className].filter(Boolean).join(" ")}
      href={`${localePath[locale]}#top`}
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
        <small>{t.brand.sub}</small>
      </span>
    </a>
  );
}

function LanguageSwitch({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  return (
    <ul aria-label={t.nav.language} className="lang-switch">
      {locales.map((option) => (
        <li key={option}>
          {/* A full document load, not a client transition: it gives the new
           * language a correct <html lang>, its own head, and a clean scrub. */}
          <a
            aria-current={option === locale ? "true" : undefined}
            hrefLang={localeTag[option]}
            href={localePath[option]}
            lang={localeTag[option]}
          >
            {localeShort[option]}
          </a>
        </li>
      ))}
    </ul>
  );
}

function FloatingCall({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  return (
    <a
      aria-label={`${t.hero.callAria} ${phoneLabel}`}
      className="floating-call"
      href={phoneHref}
    >
      <svg aria-hidden="true" className="call-ring" focusable="false" viewBox="0 0 120 120">
        <defs>
          <path
            d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0"
            id="call-ring-path"
          />
        </defs>
        <text>
          <textPath href="#call-ring-path" startOffset="0">
            {t.hero.ringText}
          </textPath>
        </text>
      </svg>
      <span aria-hidden="true" className="call-disc">
        <Phone weight="fill" />
      </span>
    </a>
  );
}

export function EcoTaxiSite({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  return (
    <main className="site-shell" id="top">
      <header className="site-nav">
        <div className="site-nav__inner">
          <BrandMark locale={locale} />
          <nav aria-label={t.nav.main}>
            <a href="#ride">{t.nav.ride}</a>
            <a href="#why">{t.nav.why}</a>
            <a href="#moments">{t.nav.moments}</a>
            <LanguageSwitch locale={locale} />
            {/* aria-label carries the full wording, so the visible label can
             * shorten on narrow screens without costing the accessible name. */}
            <a aria-label={t.nav.call} className="nav-call" href={phoneHref}>
              <Phone weight="bold" />
              <span className="nav-call__full">{t.nav.call}</span>
              <span className="nav-call__short">{t.nav.callShort}</span>
            </a>
          </nav>
        </div>
      </header>

      <div className="hero-wrap">
        <ScrollScrub
          className="hero-scrub"
          scenes={scrollScrubScenes[locale]}
          theme={scrollScrubTheme}
        />
        <div aria-hidden="true" className="scroll-cue">
          <span className="scroll-cue__label">{t.hero.scrollCue}</span>
          <span className="scroll-cue__rail" />
        </div>
        <FloatingCall locale={locale} />
      </div>

      <section className="facts-section section-pad" id="ride">
        <div className="facts-grid">
          <div className="facts-copy">
            <p className="section-kicker">{t.ride.kicker}</p>
            <h2>
              {t.ride.lines[0]}
              <br />
              {t.ride.lines[1]}
            </h2>
            <p className="section-lede">{t.ride.lede}</p>
            <a className="text-link" href={mapsHref} rel="noreferrer" target="_blank">
              {t.ride.link}
              <ArrowUpRight weight="bold" />
            </a>
          </div>

          <dl className="facts-rail">
            {factOrder.map(({ id, star }) => (
              <div className="facts-rail__row" key={id}>
                <dt>{t.facts[id].label}</dt>
                <dd className="facts-rail__value">
                  {t.facts[id].value}
                  {star ? <Star aria-hidden="true" weight="fill" /> : null}
                </dd>
                <dd className="facts-rail__note">{t.facts[id].note}</dd>
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
          <p className="section-kicker">{t.why.kicker}</p>
          <h2>
            {t.why.lines[0]}
            <br />
            {t.why.lines[1]}
          </h2>
        </div>
        <div className="benefit-grid">
          {benefitOrder.map(({ id, Icon }) => (
            <article key={id}>
              <Icon weight="duotone" />
              <h3>{t.why[id].title}</h3>
              <p>{t.why[id].body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="moments-section section-pad" id="moments">
        <div className="moments-head">
          <div>
            <p className="section-kicker">{t.moments.kicker}</p>
            <h2>
              {t.moments.lines[0]}
              <br />
              {t.moments.lines[1]}
            </h2>
          </div>
          <p className="section-lede">{t.moments.lede}</p>
        </div>
        <div className="moment-strip">
          {momentOrder.map((moment) => (
            <figure className={moment.className} key={moment.id}>
              <img alt={t.moments[moment.id].alt} loading="lazy" src={moment.src} />
              <figcaption>
                {t.moments[moment.id].caption}
                <span>{moment.index}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-label={t.highlights.aria} className="highlight-band">
        <ul>
          {highlightOrder.map(({ id, Icon }) => (
            <li key={id}>
              <Icon weight="light" />
              <span>{t.highlights[id]}</span>
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
          alt={t.booking.medallionAlt}
          className="booking-medallion"
          loading="lazy"
          src="/assets/eco/old-town.jpg"
        />
        <div className="booking-copy">
          <p className="section-kicker">{t.booking.kicker}</p>
          <h2>
            {t.booking.lines[0]}
            <br />
            {t.booking.lines[1]}
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
              {t.booking.call}
              <ArrowUpRight weight="bold" />
            </a>
            <a className="secondary-cta" href={mapsHref} rel="noreferrer" target="_blank">
              {t.booking.find}
              <MapPin weight="bold" />
            </a>
          </div>
        </div>
      </section>

      <a className="facebook-band" href={facebookHref} rel="noreferrer" target="_blank">
        <span>
          <FacebookLogo weight="fill" />
          {t.facebook}
        </span>
        <ArrowUpRight weight="bold" />
      </a>

      <footer className="site-footer section-pad">
        <div className="footer-brand">
          <BrandMark className="brand-mark--footer" locale={locale} />
          <p>{t.footer.tagline}</p>
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
