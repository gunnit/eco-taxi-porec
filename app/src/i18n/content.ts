/**
 * Every visitor-facing string on the site, in the four languages a Poreč
 * visitor is most likely to read.
 *
 * The components own structure — order, icons, images, ids — and this module
 * owns text only, so a locale can never drift out of sync with the layout.
 * `SiteContent` is derived from the English entry, so a missing or misspelled
 * key in any translation is a type error rather than a runtime blank.
 *
 * A note on Italian: Poreč is *Parenzo* in Italian, the exonym used by Istria's
 * Italian community and the name Italian visitors actually search for. The
 * business name stays "Rikša Poreč" everywhere; only prose uses Parenzo.
 *
 * Decimal separators follow each locale — the Google rating is "4.7" in English
 * and "4,7" in Croatian, German and Italian.
 */

export const locales = ["en", "hr", "de", "it"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Path each locale is served from. English owns the root. */
export const localePath: Record<Locale, string> = {
  de: "/de",
  en: "/",
  hr: "/hr",
  it: "/it",
};

/** `hreflang` / `<html lang>` value per locale. */
export const localeTag: Record<Locale, string> = {
  de: "de",
  en: "en",
  hr: "hr",
  it: "it",
};

/** Endonym shown in the language switcher. */
export const localeLabel: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  hr: "Hrvatski",
  it: "Italiano",
};

/** Two-letter switcher label, for the narrow mobile nav. */
export const localeShort: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  hr: "HR",
  it: "IT",
};

const en = {
  meta: {
    title: "Eco Taxi Poreč | See the city from the best seat",
    description:
      "Explore Poreč by open-air bicycle taxi. Local rides since 2010. Call +385 95 858 4045 or find Eco Taxi at Zagrebačka ul. 19.",
  },
  brand: {
    sub: "Eko Taxi · Since 2010",
    homeAria: "Eco Taxi Poreč — back to top",
  },
  nav: {
    ride: "The ride",
    why: "Why us",
    moments: "Moments",
    call: "Call now",
    callShort: "Call",
    main: "Main",
    language: "Language",
  },
  hero: {
    scrollCue: "Scroll to ride",
    ringText: "RIDE · EXPLORE · POREČ · RIDE · EXPLORE · POREČ · ",
    callAria: "Call Eco Taxi Poreč on",
  },
  chapters: {
    meet: {
      kicker: "Poreč · Croatia · Since 2010",
      lines: ["Poreč, from", "the best seat."],
      body: "Hop in and let the city come to you — no windows, no traffic, no rush.",
      tags: ["Open air", "Local ride", "4.7 on Google"],
    },
    coast: {
      kicker: "Along the water",
      lines: ["Sea breeze", "included."],
      body: "An open-air ride made for slow views, warm light and very good photographs.",
      tags: ["Waterfront route"],
    },
    oldTown: {
      kicker: "Into the old town",
      lines: ["Every corner", "has a story."],
      body: "We take the limestone lanes cars can’t reach, and never lose the view.",
      tags: ["Poreč old town"],
    },
    arrive: {
      kicker: "Arrive smiling",
      lines: ["Your Poreč story", "starts here."],
      body: "Call Eco Taxi and choose where the ride takes you.",
      tags: ["+385 95 858 4045"],
    },
  },
  ride: {
    kicker: "01 · The ride",
    lines: ["A better way", "to see Poreč."],
    lede: "Slow down and take it in. Our open-air rikša brings the coast, the old town and the corners in between comfortably within reach.",
    link: "Find our starting point",
  },
  facts: {
    since: {
      label: "Established",
      value: "2010",
      note: "Local rides through Poreč for more than a decade.",
    },
    rating: {
      label: "Google",
      value: "4.7",
      note: "A visitor favourite for an easy view of the city.",
    },
    air: {
      label: "Experience",
      value: "Open air",
      note: "Feel the sea breeze, not the traffic.",
    },
  },
  why: {
    kicker: "02 · Why Eco Taxi",
    lines: ["Made for the streets", "cars can’t love."],
    light: {
      title: "Light on the city",
      body: "A human-scale ride for narrow lanes, waterfront paths and slower travel.",
    },
    view: {
      title: "Big on the view",
      body: "No windows, no rush. Stop, look, photograph and enjoy Poreč at street level.",
    },
    easy: {
      title: "Easy by nature",
      body: "Comfortable seating under a light canopy, with a local driver leading the way.",
    },
  },
  moments: {
    kicker: "03 · Poreč moments",
    lines: ["The city,", "unfiltered."],
    lede: "From the blue edge of the Adriatic to warm stone lanes, every turn feels close enough to touch.",
    waterfront: {
      caption: "Waterfront air",
      alt: "Eco Taxi rikša riding along the Poreč waterfront with the old town behind",
    },
    lane: {
      caption: "Old town light",
      alt: "Side view of the white canopy rikša passing a limestone wall in Poreč",
    },
    square: {
      caption: "Golden arrivals",
      alt: "The rikša seen through a stone archway as it enters a Poreč square",
    },
  },
  highlights: {
    aria: "What every ride includes",
    pedal: "Pedal powered",
    canopy: "Shaded canopy",
    eco: "No emissions",
    photo: "Photo stops",
    lanes: "Old town lanes",
    call: "Call to ride",
  },
  booking: {
    kicker: "04 · Your ride",
    lines: ["Ready for", "Poreč?"],
    call: "Call now",
    find: "Find us",
    medallionAlt: "The Eco Taxi rikša arriving in a sunlit Poreč square",
  },
  facebook: "Follow the ride on Facebook",
  footer: {
    tagline: "Open-air bicycle taxi rides through Poreč since 2010.",
  },
};

export type SiteContent = typeof en;

const hr: SiteContent = {
  meta: {
    title: "Eco Taxi Poreč | Grad iz prvog reda",
    description:
      "Razgledajte Poreč rikšom na otvorenom. Lokalne vožnje od 2010. Nazovite +385 95 858 4045 ili nas potražite u Zagrebačkoj ul. 19.",
  },
  brand: {
    sub: "Eko Taxi · Od 2010.",
    homeAria: "Eco Taxi Poreč — natrag na vrh",
  },
  nav: {
    ride: "Vožnja",
    why: "Zašto mi",
    moments: "Trenuci",
    call: "Nazovite",
    callShort: "Zovi",
    main: "Glavna navigacija",
    language: "Jezik",
  },
  hero: {
    scrollCue: "Skrolajte za vožnju",
    ringText: "VOŽNJA · OTKRIJ · POREČ · VOŽNJA · OTKRIJ · POREČ · ",
    callAria: "Nazovite Eco Taxi Poreč na",
  },
  chapters: {
    meet: {
      kicker: "Poreč · Hrvatska · Od 2010.",
      lines: ["Poreč iz", "prvog reda."],
      body: "Uskočite i pustite da vam grad dođe — bez prozora, bez gužve, bez žurbe.",
      tags: ["Na otvorenom", "Lokalna vožnja", "4,7 na Googleu"],
    },
    coast: {
      kicker: "Uz more",
      lines: ["Morski povjetarac", "uključen."],
      body: "Vožnja na otvorenom stvorena za spore poglede, toplo svjetlo i vrlo dobre fotografije.",
      tags: ["Priobalna ruta"],
    },
    oldTown: {
      kicker: "U stari grad",
      lines: ["Svaki ugao", "ima priču."],
      body: "Vozimo kamenim uličicama do kojih auti ne dolaze, a pogled nikad ne gubimo.",
      tags: ["Porečki stari grad"],
    },
    arrive: {
      kicker: "Stignite nasmijani",
      lines: ["Vaša porečka priča", "počinje ovdje."],
      body: "Nazovite Eco Taxi i odaberite kamo vas vožnja vodi.",
      tags: ["+385 95 858 4045"],
    },
  },
  ride: {
    kicker: "01 · Vožnja",
    lines: ["Vidite Poreč", "kako treba."],
    lede: "Usporite i upijte grad. Naša rikša na otvorenom donosi obalu, stari grad i sve između na dohvat ruke.",
    link: "Pronađite našu polaznu točku",
  },
  facts: {
    since: {
      label: "Osnovano",
      value: "2010.",
      note: "Lokalne vožnje Porečom više od desetljeća.",
    },
    rating: {
      label: "Google",
      value: "4,7",
      note: "Omiljen izbor posjetitelja za lagan pogled na grad.",
    },
    air: {
      label: "Doživljaj",
      value: "Na otvorenom",
      note: "Osjetite morski povjetarac, a ne promet.",
    },
  },
  why: {
    kicker: "02 · Zašto Eco Taxi",
    lines: ["Stvoreno za ulice", "koje auti ne vole."],
    light: {
      title: "Lagano za grad",
      body: "Vožnja ljudske mjere za uske uličice, priobalne staze i sporije putovanje.",
    },
    view: {
      title: "Veliko za pogled",
      body: "Bez prozora, bez žurbe. Stanite, pogledajte, fotografirajte i uživajte u Poreču u razini ulice.",
    },
    easy: {
      title: "Jednostavno po prirodi",
      body: "Udobna sjedala pod laganim krovom, uz domaćeg vozača koji vodi put.",
    },
  },
  moments: {
    kicker: "03 · Porečki trenuci",
    lines: ["Grad,", "bez filtera."],
    lede: "Od plavog ruba Jadrana do toplih kamenih uličica, svaki zavoj djeluje nadohvat ruke.",
    waterfront: {
      caption: "Zrak uz more",
      alt: "Rikša Eco Taxija vozi porečkom rivom, u pozadini stari grad",
    },
    lane: {
      caption: "Svjetlo starog grada",
      alt: "Bočni prizor bijele rikše s krovom pokraj kamenog zida u Poreču",
    },
    square: {
      caption: "Zlatni dolasci",
      alt: "Rikša viđena kroz kameni svod dok ulazi na porečki trg",
    },
  },
  highlights: {
    aria: "Što uključuje svaka vožnja",
    pedal: "Na pedale",
    canopy: "Zasjenjeni krov",
    eco: "Bez emisija",
    photo: "Stanke za fotke",
    lanes: "Uličice starog grada",
    call: "Nazovite za vožnju",
  },
  booking: {
    kicker: "04 · Vaša vožnja",
    lines: ["Spremni za", "Poreč?"],
    call: "Nazovite",
    find: "Pronađite nas",
    medallionAlt: "Rikša Eco Taxija stiže na osunčani porečki trg",
  },
  facebook: "Pratite vožnju na Facebooku",
  footer: {
    tagline: "Vožnje rikšom na otvorenom kroz Poreč od 2010.",
  },
};

const de: SiteContent = {
  meta: {
    title: "Eco Taxi Poreč | Die Stadt vom besten Platz aus",
    description:
      "Poreč mit der offenen Fahrradrikscha entdecken. Lokale Fahrten seit 2010. Rufen Sie +385 95 858 4045 an oder besuchen Sie uns in der Zagrebačka ul. 19.",
  },
  brand: {
    sub: "Eko Taxi · Seit 2010",
    homeAria: "Eco Taxi Poreč — zurück nach oben",
  },
  nav: {
    ride: "Die Fahrt",
    why: "Warum wir",
    moments: "Momente",
    call: "Jetzt anrufen",
    callShort: "Anrufen",
    main: "Hauptnavigation",
    language: "Sprache",
  },
  hero: {
    scrollCue: "Scrollen und losfahren",
    ringText: "FAHREN · SEHEN · POREČ · FAHREN · SEHEN · POREČ · ",
    callAria: "Eco Taxi Poreč anrufen unter",
  },
  chapters: {
    meet: {
      kicker: "Poreč · Kroatien · Seit 2010",
      lines: ["Poreč vom", "besten Platz aus."],
      body: "Steigen Sie ein und lassen Sie die Stadt zu Ihnen kommen — keine Scheiben, kein Verkehr, keine Eile.",
      tags: ["Unter freiem Himmel", "Lokale Fahrt", "4,7 bei Google"],
    },
    coast: {
      kicker: "Am Wasser entlang",
      lines: ["Meeresbrise", "inklusive."],
      body: "Eine Fahrt unter freiem Himmel, gemacht für langsame Ausblicke, warmes Licht und sehr gute Fotos.",
      tags: ["Route am Wasser"],
    },
    oldTown: {
      kicker: "In die Altstadt",
      lines: ["Jede Ecke", "erzählt etwas."],
      body: "Wir nehmen die Kalksteingassen, in die kein Auto kommt — und verlieren die Aussicht nie.",
      tags: ["Altstadt von Poreč"],
    },
    arrive: {
      kicker: "Lächelnd ankommen",
      lines: ["Ihre Poreč-Geschichte", "beginnt hier."],
      body: "Rufen Sie Eco Taxi an und entscheiden Sie, wohin die Fahrt geht.",
      tags: ["+385 95 858 4045"],
    },
  },
  ride: {
    kicker: "01 · Die Fahrt",
    lines: ["Poreč sehen,", "nur besser."],
    lede: "Langsamer werden und schauen. Unsere offene Rikscha bringt die Küste, die Altstadt und alles dazwischen bequem in Reichweite.",
    link: "Unseren Startpunkt finden",
  },
  facts: {
    since: {
      label: "Gegründet",
      value: "2010",
      note: "Lokale Fahrten durch Poreč seit über einem Jahrzehnt.",
    },
    rating: {
      label: "Google",
      value: "4,7",
      note: "Ein Favorit der Gäste für einen entspannten Blick auf die Stadt.",
    },
    air: {
      label: "Erlebnis",
      value: "Offene Fahrt",
      note: "Meeresbrise statt Verkehr.",
    },
  },
  why: {
    kicker: "02 · Warum Eco Taxi",
    lines: ["Gemacht für Straßen,", "die Autos nicht mögen."],
    light: {
      title: "Schonend für die Stadt",
      body: "Eine Fahrt im menschlichen Maßstab für enge Gassen, Uferwege und langsameres Reisen.",
    },
    view: {
      title: "Groß für die Aussicht",
      body: "Keine Scheiben, keine Eile. Halten, schauen, fotografieren und Poreč auf Straßenhöhe genießen.",
    },
    easy: {
      title: "Einfach von Natur aus",
      body: "Bequeme Sitze unter einem leichten Verdeck, mit einem einheimischen Fahrer, der den Weg kennt.",
    },
  },
  moments: {
    kicker: "03 · Poreč-Momente",
    lines: ["Die Stadt,", "ungefiltert."],
    lede: "Vom blauen Rand der Adria bis zu warmen Steingassen — jede Kurve fühlt sich zum Greifen nah an.",
    waterfront: {
      caption: "Luft am Wasser",
      alt: "Eco-Taxi-Rikscha auf der Uferpromenade von Poreč, dahinter die Altstadt",
    },
    lane: {
      caption: "Licht der Altstadt",
      alt: "Seitenansicht der weißen Rikscha mit Verdeck an einer Kalksteinmauer in Poreč",
    },
    square: {
      caption: "Goldene Ankunft",
      alt: "Die Rikscha durch einen Steinbogen gesehen, während sie auf einen Platz in Poreč fährt",
    },
  },
  highlights: {
    aria: "Was jede Fahrt beinhaltet",
    pedal: "Mit Muskelkraft",
    canopy: "Schattiges Verdeck",
    eco: "Ohne Emissionen",
    photo: "Fotostopps",
    lanes: "Gassen der Altstadt",
    call: "Anrufen und losfahren",
  },
  booking: {
    kicker: "04 · Ihre Fahrt",
    lines: ["Bereit für", "Poreč?"],
    call: "Jetzt anrufen",
    find: "Uns finden",
    medallionAlt: "Die Eco-Taxi-Rikscha kommt auf einem sonnigen Platz in Poreč an",
  },
  facebook: "Folgen Sie der Fahrt auf Facebook",
  footer: {
    tagline: "Offene Fahrradrikscha-Fahrten durch Poreč seit 2010.",
  },
};

const it: SiteContent = {
  meta: {
    title: "Eco Taxi Parenzo | La città dal posto migliore",
    description:
      "Scoprite Parenzo in risciò all’aperto. Giri locali dal 2010. Chiamate +385 95 858 4045 o trovateci in Zagrebačka ul. 19.",
  },
  brand: {
    sub: "Eko Taxi · Dal 2010",
    homeAria: "Eco Taxi Parenzo — torna su",
  },
  nav: {
    ride: "Il giro",
    why: "Perché noi",
    moments: "Momenti",
    call: "Chiama ora",
    callShort: "Chiama",
    main: "Navigazione principale",
    language: "Lingua",
  },
  hero: {
    scrollCue: "Scorri per partire",
    ringText: "GIRA · SCOPRI · PARENZO · GIRA · SCOPRI · PARENZO · ",
    callAria: "Chiama Eco Taxi Parenzo al",
  },
  chapters: {
    meet: {
      kicker: "Parenzo · Croazia · Dal 2010",
      lines: ["Parenzo, dal", "posto migliore."],
      body: "Salite e lasciate che sia la città a venire da voi — niente vetri, niente traffico, niente fretta.",
      tags: ["All’aperto", "Giro locale", "4,7 su Google"],
    },
    coast: {
      kicker: "Lungo il mare",
      lines: ["Brezza marina", "inclusa."],
      body: "Un giro all’aperto fatto per sguardi lenti, luce calda e ottime fotografie.",
      tags: ["Percorso sul lungomare"],
    },
    oldTown: {
      kicker: "Nel centro storico",
      lines: ["Ogni angolo", "ha una storia."],
      body: "Prendiamo le viuzze di pietra dove le auto non arrivano, senza mai perdere la vista.",
      tags: ["Centro storico di Parenzo"],
    },
    arrive: {
      kicker: "Arrivare sorridendo",
      lines: ["La vostra Parenzo", "inizia qui."],
      body: "Chiamate Eco Taxi e scegliete dove portarvi.",
      tags: ["+385 95 858 4045"],
    },
  },
  ride: {
    kicker: "01 · Il giro",
    lines: ["Vedere Parenzo", "come merita."],
    lede: "Rallentate e godetevi tutto. Il nostro risciò all’aperto porta la costa, il centro storico e ogni angolo comodamente a portata di mano.",
    link: "Trova il nostro punto di partenza",
  },
  facts: {
    since: {
      label: "Fondato",
      value: "2010",
      note: "Giri locali per Parenzo da più di dieci anni.",
    },
    rating: {
      label: "Google",
      value: "4,7",
      note: "Il preferito dei visitatori per vedere la città con comodità.",
    },
    air: {
      label: "Esperienza",
      value: "All’aperto",
      note: "Sentite la brezza, non il traffico.",
    },
  },
  why: {
    kicker: "02 · Perché Eco Taxi",
    lines: ["Fatto per le strade", "che le auto non amano."],
    light: {
      title: "Leggero per la città",
      body: "Un mezzo a misura d’uomo per viuzze strette, percorsi sul mare e viaggi più lenti.",
    },
    view: {
      title: "Grande per la vista",
      body: "Niente vetri, niente fretta. Fermatevi, guardate, fotografate e godetevi Parenzo dal livello della strada.",
    },
    easy: {
      title: "Semplice per natura",
      body: "Sedili comodi sotto una capote leggera, con un autista del posto a fare da guida.",
    },
  },
  moments: {
    kicker: "03 · Momenti a Parenzo",
    lines: ["La città,", "senza filtri."],
    lede: "Dal bordo azzurro dell’Adriatico alle calde vie di pietra, ogni curva sembra a portata di mano.",
    waterfront: {
      caption: "Aria di mare",
      alt: "Il risciò Eco Taxi lungo il lungomare di Parenzo, con il centro storico alle spalle",
    },
    lane: {
      caption: "Luce del centro storico",
      alt: "Veduta laterale del risciò bianco con capote accanto a un muro di pietra a Parenzo",
    },
    square: {
      caption: "Arrivi dorati",
      alt: "Il risciò visto attraverso un arco di pietra mentre entra in una piazza di Parenzo",
    },
  },
  highlights: {
    aria: "Cosa include ogni giro",
    pedal: "A pedali",
    canopy: "Capote ombreggiante",
    eco: "Zero emissioni",
    photo: "Soste per foto",
    lanes: "Vie del centro storico",
    call: "Chiama e parti",
  },
  booking: {
    kicker: "04 · Il vostro giro",
    lines: ["Pronti per", "Parenzo?"],
    call: "Chiama ora",
    find: "Trovaci",
    medallionAlt: "Il risciò Eco Taxi arriva in una piazza soleggiata di Parenzo",
  },
  facebook: "Segui il giro su Facebook",
  footer: {
    tagline: "Giri in risciò all’aperto per Parenzo dal 2010.",
  },
};

export const siteContent: Record<Locale, SiteContent> = { de, en, hr, it };

/** Narrow an unknown path segment to a Locale. */
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
