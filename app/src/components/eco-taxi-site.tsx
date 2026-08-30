/**
 * The public EkoTaxi site in four indexable languages.
 *
 * The attached source photographs never ship. Public vehicle media is a
 * people-free reconstruction, and all logo lettering is deterministic SVG.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Bicycle,
  Camera,
  FacebookLogo,
  Leaf,
  Path,
  Phone,
  UmbrellaSimple,
} from "@phosphor-icons/react";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { StructuredData } from "@/components/StructuredData";
import {
  localePath,
  localeShort,
  localeTag,
  locales,
  siteContent,
  type Locale,
} from "@/i18n/content";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const phoneContacts = [
  {
    id: "igor",
    name: "Igor",
    label: "+385 98 165 2854",
    href: "tel:+385981652854",
  },
  {
    id: "toni",
    name: "Toni",
    label: "+385 95 858 4045",
    href: "tel:+385958584045",
  },
] as const;

export const facebookHref = "https://www.facebook.com/riksa.porec/";

const structuredData: Record<Locale, string> = Object.fromEntries(
  locales.map((locale) => [
    locale,
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "EkoTaxi Poreč",
      description: siteContent[locale].meta.description,
      areaServed: {
        "@type": "City",
        name: locale === "it" ? "Parenzo" : "Poreč",
      },
      contactPoint: phoneContacts.map((contact) => ({
        "@type": "ContactPoint",
        contactType: "ride booking",
        name: contact.name,
        telephone: contact.label,
      })),
      sameAs: [facebookHref],
    }),
  ]),
) as Record<Locale, string>;

/** Document metadata for one locale. */
export function localizedHead(locale: Locale) {
  const { meta } = siteContent[locale];

  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { name: "author", content: "EkoTaxi Poreč" },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:locale", content: localeTag[locale] },
      { property: "og:site_name", content: "EkoTaxi Poreč" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
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

const factOrder = ["since", "contacts", "air"] as const;

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
  {
    id: "lane",
    className: "moment moment-b",
    src: "/assets/eco/moment-lane.jpg",
    index: "02",
  },
  {
    id: "square",
    className: "moment moment-c",
    src: "/assets/eco/moment-square.jpg",
    index: "03",
  },
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
      <img alt="" src="/assets/brand/ekotaxi-logo.svg" />
      <span className="visually-hidden">EkoTaxi Poreč</span>
    </a>
  );
}

function LanguageSwitch({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  return (
    <ul aria-label={t.nav.language} className="lang-switch">
      {locales.map((option) => (
        <li key={option}>
          <a
            aria-current={option === locale ? "page" : undefined}
            href={localePath[option]}
            hrefLang={localeTag[option]}
            lang={localeTag[option]}
          >
            {localeShort[option]}
          </a>
        </li>
      ))}
    </ul>
  );
}

function HeroContacts({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  return (
    <aside aria-label={t.contacts.aria} className="hero-contacts">
      <p>{t.contacts.direct}</p>
      <div>
        {phoneContacts.map((contact) => (
          <a
            aria-label={`${t.contacts.call} ${contact.name}: ${contact.label}`}
            href={contact.href}
            key={contact.id}
          >
            <span>{contact.name}</span>
            <strong>{contact.label}</strong>
            <Phone aria-hidden="true" weight="fill" />
          </a>
        ))}
      </div>
    </aside>
  );
}

export function EcoTaxiSite({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  return (
    <main className="site-shell" id="top">
      <StructuredData json={structuredData[locale]} />

      <header className="site-nav">
        <div className="site-nav__inner">
          <BrandMark locale={locale} />
          <nav aria-label={t.nav.main}>
            <a href="#ride">{t.nav.ride}</a>
            <a href="#vehicle">{t.nav.vehicle}</a>
            <a href="#contact">{t.nav.contact}</a>
            <LanguageSwitch locale={locale} />
            <a aria-label={t.contacts.aria} className="nav-call" href="#contact">
              <Phone aria-hidden="true" weight="bold" />
              <span>{t.nav.call}</span>
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
        <div aria-hidden="true" className="hero-brand-plate">
          <img alt="" src="/assets/brand/ekotaxi-logo.svg" />
        </div>
        <HeroContacts locale={locale} />
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
            <a className="text-link" href="#contact">
              {t.ride.link}
              <ArrowDownRight aria-hidden="true" weight="bold" />
            </a>
          </div>

          <dl className="facts-rail">
            {factOrder.map((id) => (
              <div className="facts-rail__row" key={id}>
                <dt>{t.facts[id].label}</dt>
                <dd className="facts-rail__value">{t.facts[id].value}</dd>
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
              <Icon aria-hidden="true" weight="duotone" />
              <h3>{t.why[id].title}</h3>
              <p>{t.why[id].body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="moments-section section-pad" id="vehicle">
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
              <Icon aria-hidden="true" weight="light" />
              <span>{t.highlights[id]}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="booking-section" id="contact">
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
          <p className="booking-intro">{t.booking.intro}</p>
          <div className="contact-cards">
            {phoneContacts.map((contact, index) => (
              <a className={`contact-card contact-card--${index + 1}`} href={contact.href} key={contact.id}>
                <span>{t.contacts.call} {contact.name}</span>
                <strong>{contact.label}</strong>
                <Phone aria-hidden="true" weight="fill" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <a className="facebook-band" href={facebookHref} rel="noreferrer" target="_blank">
        <span>
          <FacebookLogo aria-hidden="true" weight="fill" />
          {t.facebook}
        </span>
        <ArrowUpRight aria-hidden="true" weight="bold" />
      </a>

      <footer className="site-footer section-pad">
        <div className="footer-brand">
          <BrandMark className="brand-mark--footer" locale={locale} />
          <p>{t.footer.tagline}</p>
        </div>
        <address className="footer-contact">
          {phoneContacts.map((contact) => (
            <a href={contact.href} key={contact.id}>
              <span>{contact.name}</span>
              {contact.label}
            </a>
          ))}
        </address>
        <p className="footer-legal">
          <span>EkoTaxi Poreč</span>
          <span>© {new Date().getFullYear()}</span>
        </p>
      </footer>
    </main>
  );
}
