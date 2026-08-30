/** Visitor-facing copy for the four indexable locale routes. */

export const locales = ["en", "hr", "de", "it"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localePath: Record<Locale, string> = {
  de: "/de",
  en: "/",
  hr: "/hr",
  it: "/it",
};

export const localeTag: Record<Locale, string> = {
  de: "de",
  en: "en",
  hr: "hr",
  it: "it",
};

export const localeLabel: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  hr: "Hrvatski",
  it: "Italiano",
};

export const localeShort: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  hr: "HR",
  it: "IT",
};

const en = {
  meta: {
    title: "EkoTaxi Poreč | Bicycle sidecar rides",
    description:
      "Discover the open-air EkoTaxi bicycle sidecar in Poreč. Call Igor at +385 98 165 2854 or Toni at +385 95 858 4045.",
  },
  brand: {
    homeAria: "EkoTaxi Poreč, back to top",
  },
  nav: {
    ride: "The ride",
    vehicle: "The vehicle",
    contact: "Contact",
    call: "Call",
    main: "Main navigation",
    language: "Language",
  },
  contacts: {
    aria: "Call EkoTaxi Poreč",
    direct: "Two active numbers. Call us directly.",
    call: "Call",
  },
  chapters: {
    meet: {
      kicker: "Poreč · Croatia",
      lines: ["The EkoTaxi", "ride."],
      body: "A white passenger sidecar, cream canopy and a bicycle made for slow city views.",
      tags: ["Open air", "Bicycle and sidecar"],
    },
    coast: {
      kicker: "Built in the open",
      lines: ["Poreč at", "street level."],
      body: "Feel the coast up close from a shaded cream bench with the city moving gently around you.",
      tags: ["Cream canopy"],
    },
    oldTown: {
      kicker: "A different three-wheeler",
      lines: ["One bicycle.", "One sidecar."],
      body: "The passenger body rides beside the olive-green cycle in the EkoTaxi three-wheel form.",
      tags: ["Three-wheel form"],
    },
    arrive: {
      kicker: "Your seat is ready",
      lines: ["Call Igor", "or Toni."],
      body: "Choose either active number and arrange your Poreč ride directly.",
      tags: ["Igor · +385 98 165 2854", "Toni · +385 95 858 4045"],
    },
  },
  ride: {
    kicker: "01 · The EkoTaxi ride",
    lines: ["Bicycle beside", "the passenger seat."],
    lede:
      "EkoTaxi pairs a bicycle with a passenger sidecar, a cream canopy and an open view of Poreč.",
    link: "Call Igor or Toni",
  },
  facts: {
    since: {
      label: "Vehicle detail",
      value: "2010 decal",
      note: "The year 2010 is visible on the weathered EkoTaxi decal.",
    },
    contacts: {
      label: "Direct contact",
      value: "2 active numbers",
      note: "Igor and Toni are both available by phone.",
    },
    air: {
      label: "Passenger view",
      value: "Open air",
      note: "A shaded bench with no windows between you and Poreč.",
    },
  },
  why: {
    kicker: "02 · Different by design",
    lines: ["Easy to spot.", "Hard to forget."],
    light: {
      title: "Bicycle and sidecar",
      body: "The cycle stays visible beside the passenger cabin. That unusual profile gives EkoTaxi its character.",
    },
    view: {
      title: "Made for the view",
      body: "The open sides keep the waterfront, stone lanes and summer light close throughout the ride.",
    },
    easy: {
      title: "Cream-canopy comfort",
      body: "A padded bench, fabric shade and brown platform create a simple, relaxed passenger space.",
    },
  },
  moments: {
    kicker: "03 · The vehicle",
    lines: ["The details that", "make it EkoTaxi."],
    lede:
      "Every public image is people-free and built from the vehicle’s materials, proportions and olive-green identity.",
    waterfront: {
      caption: "Cream canopy",
      alt: "Close view of the EkoTaxi cream passenger canopy and bench",
    },
    lane: {
      caption: "Passenger sidecar",
      alt: "Detail of the white passenger sidecar and brown EkoTaxi floor platform",
    },
    square: {
      caption: "Olive cycle",
      alt: "Close view of the olive-green bicycle tubing and wheel beside the EkoTaxi cabin",
    },
  },
  highlights: {
    aria: "EkoTaxi ride details",
    pedal: "Bicycle power",
    canopy: "Cream canopy",
    eco: "Open-air ride",
    photo: "Unobstructed view",
    lanes: "Poreč routes",
    call: "Direct phone contact",
  },
  booking: {
    kicker: "04 · Call directly",
    lines: ["Your Poreč ride", "starts with a call."],
    intro: "Both numbers are active. Choose Igor or Toni and call directly.",
    medallionAlt: "People-free close view of the EkoTaxi passenger cabin",
  },
  facebook: "See EkoTaxi Poreč on Facebook",
  footer: {
    tagline: "Open-air bicycle sidecar rides in Poreč.",
  },
};

export type SiteContent = typeof en;

const hr: SiteContent = {
  meta: {
    title: "EkoTaxi Poreč | Biciklistička rikša s prikolicom",
    description:
      "Otkrijte EkoTaxi bicikl s putničkom prikolicom na otvorenom u Poreču. Nazovite Igora na +385 98 165 2854 ili Tonija na +385 95 858 4045.",
  },
  brand: {
    homeAria: "EkoTaxi Poreč, natrag na vrh",
  },
  nav: {
    ride: "Vožnja",
    vehicle: "Vozilo",
    contact: "Kontakt",
    call: "Nazovi",
    main: "Glavna navigacija",
    language: "Jezik",
  },
  contacts: {
    aria: "Nazovite EkoTaxi Poreč",
    direct: "Dva aktivna broja. Nazovite izravno.",
    call: "Nazovi",
  },
  chapters: {
    meet: {
      kicker: "Poreč · Hrvatska",
      lines: ["EkoTaxi", "vožnja."],
      body: "Bijela putnička prikolica, kremasti krov i bicikl stvoreni za lagani pogled na grad.",
      tags: ["Na otvorenom", "Bicikl i prikolica"],
    },
    coast: {
      kicker: "Stvoreno za otvoreno",
      lines: ["Poreč iz", "razine ulice."],
      body: "Doživite obalu izbliza s kremaste klupe u hladu, dok grad polako prolazi pokraj vas.",
      tags: ["Kremasti krov"],
    },
    oldTown: {
      kicker: "Drugačiji trokolac",
      lines: ["Jedan bicikl.", "Jedna prikolica."],
      body: "Putnička kabina vozi uz maslinasto zeleni bicikl u trokolnom obliku EkoTaxija.",
      tags: ["Tri kotača"],
    },
    arrive: {
      kicker: "Vaše mjesto je spremno",
      lines: ["Nazovite Igora", "ili Tonija."],
      body: "Odaberite bilo koji aktivni broj i izravno dogovorite svoju vožnju Porečom.",
      tags: ["Igor · +385 98 165 2854", "Toni · +385 95 858 4045"],
    },
  },
  ride: {
    kicker: "01 · EkoTaxi vožnja",
    lines: ["Bicikl uz", "putničko mjesto."],
    lede:
      "EkoTaxi spaja bicikl i putničku prikolicu, kremasti krov i otvoren pogled na Poreč.",
    link: "Nazovite Igora ili Tonija",
  },
  facts: {
    since: {
      label: "Detalj vozila",
      value: "Naljepnica: 2010.",
      note: "Godina 2010. vidljiva je na istrošenoj naljepnici EkoTaxi.",
    },
    contacts: {
      label: "Izravni kontakt",
      value: "2 aktivna broja",
      note: "Igor i Toni dostupni su telefonom.",
    },
    air: {
      label: "Pogled putnika",
      value: "Na otvorenom",
      note: "Klupe u hladu, bez prozora između vas i Poreča.",
    },
  },
  why: {
    kicker: "02 · Drugačiji dizajn",
    lines: ["Lako ga uočite.", "Teško ga zaboravite."],
    light: {
      title: "Bicikl i prikolica",
      body: "Bicikl ostaje vidljiv uz putničku kabinu. Taj neobičan profil daje EkoTaxiju prepoznatljiv karakter.",
    },
    view: {
      title: "Stvoreno za pogled",
      body: "Otvorene strane približavaju rivu, kamene uličice i ljetno svjetlo tijekom cijele vožnje.",
    },
    easy: {
      title: "Udobnost pod kremastim krovom",
      body: "Podstavljena klupa, platnena sjena i smeđa platforma stvaraju jednostavan, opušten prostor za putnike.",
    },
  },
  moments: {
    kicker: "03 · Vozilo",
    lines: ["Detalji koji ga", "čine EkoTaxijem."],
    lede:
      "Sve javne slike su bez ljudi i temelje se na materijalima, proporcijama i maslinasto zelenom identitetu vozila.",
    waterfront: {
      caption: "Kremasti krov",
      alt: "Krupni prikaz kremastog putničkog krova i klupe EkoTaxija",
    },
    lane: {
      caption: "Putnička prikolica",
      alt: "Detalj bijele putničke prikolice i smeđe podne platforme EkoTaxija",
    },
    square: {
      caption: "Maslinasti bicikl",
      alt: "Krupni prikaz maslinasto zelenog okvira i kotača uz kabinu EkoTaxija",
    },
  },
  highlights: {
    aria: "Detalji vožnje EkoTaxi",
    pedal: "Pogon biciklom",
    canopy: "Kremasti krov",
    eco: "Vožnja na otvorenom",
    photo: "Otvoren pogled",
    lanes: "Porečke rute",
    call: "Izravan telefonski kontakt",
  },
  booking: {
    kicker: "04 · Nazovite izravno",
    lines: ["Vaša vožnja Porečom", "počinje pozivom."],
    intro: "Oba broja su aktivna. Odaberite Igora ili Tonija i nazovite izravno.",
    medallionAlt: "Krupni prikaz putničke kabine EkoTaxija bez ljudi",
  },
  facebook: "Pogledajte EkoTaxi Poreč na Facebooku",
  footer: {
    tagline: "Vožnja biciklom s putničkom prikolicom na otvorenom u Poreču.",
  },
};

const de: SiteContent = {
  meta: {
    title: "EkoTaxi Poreč | Fahrradrikscha mit Beiwagen",
    description:
      "Entdecken Sie die offene EkoTaxi-Fahrradrikscha mit Beiwagen in Poreč. Igor: +385 98 165 2854. Toni: +385 95 858 4045.",
  },
  brand: {
    homeAria: "EkoTaxi Poreč, zurück nach oben",
  },
  nav: {
    ride: "Die Fahrt",
    vehicle: "Das Fahrzeug",
    contact: "Kontakt",
    call: "Anrufen",
    main: "Hauptnavigation",
    language: "Sprache",
  },
  contacts: {
    aria: "EkoTaxi Poreč anrufen",
    direct: "Zwei aktive Nummern. Rufen Sie direkt an.",
    call: "Anrufen",
  },
  chapters: {
    meet: {
      kicker: "Poreč · Kroatien",
      lines: ["Die Fahrt", "mit EkoTaxi."],
      body: "Ein weißer Beiwagen, ein cremefarbenes Verdeck und ein Fahrrad für ruhige Stadtblicke.",
      tags: ["Unter freiem Himmel", "Fahrrad und Beiwagen"],
    },
    coast: {
      kicker: "Für das Freie gebaut",
      lines: ["Poreč auf", "Straßenhöhe."],
      body: "Erleben Sie die Küste aus nächster Nähe, von einer schattigen cremefarbenen Sitzbank aus.",
      tags: ["Cremefarbenes Verdeck"],
    },
    oldTown: {
      kicker: "Ein anderes Dreirad",
      lines: ["Ein Fahrrad.", "Ein Beiwagen."],
      body: "Die Fahrgastkabine fährt neben dem olivgrünen Fahrrad in der dreirädrigen EkoTaxi-Form.",
      tags: ["Drei Räder"],
    },
    arrive: {
      kicker: "Ihr Platz ist bereit",
      lines: ["Igor oder Toni", "direkt anrufen."],
      body: "Wählen Sie eine der beiden aktiven Nummern und vereinbaren Sie Ihre Fahrt durch Poreč.",
      tags: ["Igor · +385 98 165 2854", "Toni · +385 95 858 4045"],
    },
  },
  ride: {
    kicker: "01 · Die EkoTaxi-Fahrt",
    lines: ["Fahrrad neben", "dem Fahrgastsitz."],
    lede:
      "EkoTaxi verbindet ein Fahrrad mit einem Fahrgastbeiwagen, einem cremefarbenen Verdeck und freiem Blick auf Poreč.",
    link: "Igor oder Toni anrufen",
  },
  facts: {
    since: {
      label: "Fahrzeugdetail",
      value: "Aufkleber: 2010",
      note: "Die Jahreszahl 2010 ist auf dem verwitterten EkoTaxi-Aufkleber sichtbar.",
    },
    contacts: {
      label: "Direkter Kontakt",
      value: "2 aktive Nummern",
      note: "Igor und Toni sind beide telefonisch erreichbar.",
    },
    air: {
      label: "Fahrgastblick",
      value: "Unter freiem Himmel",
      note: "Eine schattige Bank ohne Fenster zwischen Ihnen und Poreč.",
    },
  },
  why: {
    kicker: "02 · Anders gebaut",
    lines: ["Leicht zu erkennen.", "Schwer zu vergessen."],
    light: {
      title: "Fahrrad und Beiwagen",
      body: "Das Fahrrad bleibt neben der Fahrgastkabine sichtbar. Dieses ungewöhnliche Profil prägt EkoTaxi.",
    },
    view: {
      title: "Für die Aussicht gemacht",
      body: "Offene Seiten bringen Uferpromenade, Steingassen und Sommerlicht während der ganzen Fahrt näher.",
    },
    easy: {
      title: "Komfort unter Creme",
      body: "Gepolsterte Bank, Stoffschatten und braune Plattform bilden einen einfachen, entspannten Fahrgastraum.",
    },
  },
  moments: {
    kicker: "03 · Das Fahrzeug",
    lines: ["Die Details, die", "EkoTaxi ausmachen."],
    lede:
      "Alle öffentlichen Bilder sind menschenfrei und folgen Materialien, Proportionen und olivgrüner Identität des Fahrzeugs.",
    waterfront: {
      caption: "Cremefarbenes Verdeck",
      alt: "Nahansicht des cremefarbenen EkoTaxi-Verdecks und der Sitzbank",
    },
    lane: {
      caption: "Fahrgastbeiwagen",
      alt: "Detail des weißen Fahrgastbeiwagens und der braunen EkoTaxi-Bodenplattform",
    },
    square: {
      caption: "Olivgrünes Fahrrad",
      alt: "Nahansicht des olivgrünen Fahrradrahmens und Rads neben der EkoTaxi-Kabine",
    },
  },
  highlights: {
    aria: "Details der EkoTaxi-Fahrt",
    pedal: "Fahrradantrieb",
    canopy: "Cremefarbenes Verdeck",
    eco: "Offene Fahrt",
    photo: "Freier Blick",
    lanes: "Routen in Poreč",
    call: "Direkter Telefonkontakt",
  },
  booking: {
    kicker: "04 · Direkt anrufen",
    lines: ["Ihre Fahrt durch Poreč", "beginnt mit einem Anruf."],
    intro: "Beide Nummern sind aktiv. Wählen Sie Igor oder Toni und rufen Sie direkt an.",
    medallionAlt: "Menschenfreie Nahansicht der EkoTaxi-Fahrgastkabine",
  },
  facebook: "EkoTaxi Poreč auf Facebook ansehen",
  footer: {
    tagline: "Offene Fahrradrikscha mit Fahrgastbeiwagen in Poreč.",
  },
};

const it: SiteContent = {
  meta: {
    title: "EkoTaxi Parenzo | Risciò a pedali con sidecar",
    description:
      "Scoprite EkoTaxi, il risciò a pedali con sidecar all’aperto a Parenzo. Igor: +385 98 165 2854. Toni: +385 95 858 4045.",
  },
  brand: {
    homeAria: "EkoTaxi Parenzo, torna all’inizio",
  },
  nav: {
    ride: "Il giro",
    vehicle: "Il veicolo",
    contact: "Contatti",
    call: "Chiama",
    main: "Navigazione principale",
    language: "Lingua",
  },
  contacts: {
    aria: "Chiama EkoTaxi Parenzo",
    direct: "Due numeri attivi. Chiamateci direttamente.",
    call: "Chiama",
  },
  chapters: {
    meet: {
      kicker: "Parenzo · Croazia",
      lines: ["Il giro", "EkoTaxi."],
      body: "Un sidecar passeggeri bianco, capote color crema e bicicletta per guardare la città con calma.",
      tags: ["All’aperto", "Bicicletta e sidecar"],
    },
    coast: {
      kicker: "Creato per l’aria aperta",
      lines: ["Parenzo al", "livello della strada."],
      body: "Vivete la costa da vicino, su una panca color crema all’ombra mentre la città scorre dolcemente.",
      tags: ["Capote color crema"],
    },
    oldTown: {
      kicker: "Un triciclo diverso",
      lines: ["Una bicicletta.", "Un sidecar."],
      body: "La cabina passeggeri viaggia accanto alla bicicletta verde oliva nella forma a tre ruote EkoTaxi.",
      tags: ["Tre ruote"],
    },
    arrive: {
      kicker: "Il vostro posto è pronto",
      lines: ["Chiamate Igor", "o Toni."],
      body: "Scegliete uno dei due numeri attivi e organizzate direttamente il vostro giro a Parenzo.",
      tags: ["Igor · +385 98 165 2854", "Toni · +385 95 858 4045"],
    },
  },
  ride: {
    kicker: "01 · Il giro EkoTaxi",
    lines: ["Bicicletta accanto", "al posto passeggero."],
    lede:
      "EkoTaxi unisce bicicletta, sidecar passeggeri, capote color crema e vista aperta su Parenzo.",
    link: "Chiama Igor o Toni",
  },
  facts: {
    since: {
      label: "Dettaglio del veicolo",
      value: "Decalcomania: 2010",
      note: "L’anno 2010 è visibile sulla decalcomania EkoTaxi usurata.",
    },
    contacts: {
      label: "Contatto diretto",
      value: "2 numeri attivi",
      note: "Igor e Toni sono entrambi raggiungibili al telefono.",
    },
    air: {
      label: "Vista passeggeri",
      value: "All’aperto",
      note: "Una panca all’ombra, senza vetri tra voi e Parenzo.",
    },
  },
  why: {
    kicker: "02 · Diverso per design",
    lines: ["Facile da notare.", "Difficile da dimenticare."],
    light: {
      title: "Bicicletta e sidecar",
      body: "La bicicletta resta visibile accanto alla cabina. Quel profilo insolito dà carattere a EkoTaxi.",
    },
    view: {
      title: "Fatto per la vista",
      body: "I lati aperti tengono vicini il lungomare, le vie di pietra e la luce estiva per tutto il giro.",
    },
    easy: {
      title: "Comfort color crema",
      body: "Panca imbottita, ombra in tessuto e piattaforma marrone creano uno spazio passeggeri semplice e rilassato.",
    },
  },
  moments: {
    kicker: "03 · Il veicolo",
    lines: ["I dettagli che", "lo rendono EkoTaxi."],
    lede:
      "Ogni immagine pubblica è senza persone e segue materiali, proporzioni e identità verde oliva del veicolo.",
    waterfront: {
      caption: "Capote color crema",
      alt: "Primo piano della capote e della panca color crema in stile EkoTaxi",
    },
    lane: {
      caption: "Sidecar passeggeri",
      alt: "Dettaglio del sidecar bianco e della piattaforma marrone EkoTaxi",
    },
    square: {
      caption: "Bicicletta verde oliva",
      alt: "Primo piano del telaio e della ruota verde oliva accanto alla cabina EkoTaxi",
    },
  },
  highlights: {
    aria: "Dettagli del giro EkoTaxi",
    pedal: "Trazione a pedali",
    canopy: "Capote color crema",
    eco: "Giro all’aperto",
    photo: "Vista libera",
    lanes: "Percorsi a Parenzo",
    call: "Contatto telefonico diretto",
  },
  booking: {
    kicker: "04 · Chiamata diretta",
    lines: ["Il vostro giro a Parenzo", "inizia con una chiamata."],
    intro: "Entrambi i numeri sono attivi. Scegliete Igor o Toni e chiamate direttamente.",
    medallionAlt: "Primo piano senza persone della cabina passeggeri EkoTaxi",
  },
  facebook: "EkoTaxi Parenzo su Facebook",
  footer: {
    tagline: "Giri all’aperto in bicicletta con sidecar a Parenzo.",
  },
};

export const siteContent: Record<Locale, SiteContent> = { de, en, hr, it };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
