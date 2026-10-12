export const siteName = "KENZA Roll & KENZA Tech";

const configuredUrl = process.env.SITE_URL?.trim();

function getSiteUrl() {
  if (!configuredUrl) return null;

  const url = new URL(configuredUrl);
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("SITE_URL must be a public HTTP(S) website address.");
  }

  return url.origin;
}

export const siteUrl = getSiteUrl();

export const seoPages = {
  "/": {
    title: "Dyer e dritare ne Drenas | KENZA Roll & Tech",
    description:
      "Dyer, dritare PVC e alumini, roleta, xhama palues dhe fasada ventiluese ne Drenas. KENZA ofron matje, prodhim sipas porosise dhe montim.",
  },
  "/sherbime": {
    title: "Dritare PVC, roleta e montim ne Drenas | KENZA",
    description:
      "Shikoni dyer te jashtme, dritare PVC e alumini, roleta elektrike, xhama palues dhe fasada ventiluese. Matje dhe montim ne Drenas e perreth.",
  },
  "/markat": {
    title: "Profile PVC VEKA, Salamander dhe Baufens | KENZA",
    description:
      "Krahasoni sistemet PVC VEKA, Salamander dhe Baufens per dritare e dyer: profile, xham dhe izolim. Matje dhe montim nga KENZA ne Drenas.",
  },
  "/markat/veka": {
    title: "Katalogu VEKA: dritare dhe dyer PVC | KENZA",
    description:
      "Sistemet VEKA per dritare, dyer hyrjeje, rreshqitese dhe roleta. Fotografi dhe specifika teknike, me matje e montim nga KENZA ne Drenas.",
  },
  "/markat/salamander": {
    title: "Katalogu Salamander: profile PVC | KENZA",
    description:
      "Dritare, dyer dhe sisteme rreshqitese Salamander. Shikoni profilet, izolimin dhe te dhenat teknike. KENZA ne Drenas.",
  },
  "/markat/baufens": {
    title: "Katalogu Baufens: profile dhe panele PVC | KENZA",
    description:
      "Profile uPVC, panele, pragje dhe roleta Baufens. Shfletoni fotografite dhe specifikat teknike me KENZA ne Drenas.",
  },
  "/projekte": {
    title: "Projekte me roleta e xhama palues | KENZA Roll & Tech",
    description:
      "Shikoni punimet KENZA me roleta alumini, mbyllje ballkonesh me xhama palues dhe sisteme per banesa e biznese. Matje dhe montim nga ekipi ne Drenas.",
  },
  "/kontakt": {
    title: "Kontakt ne Drenas | KENZA Roll & Tech",
    description:
      "Kontaktoni KENZA ne Drenas: 044 467 351. Kerkoni matje dhe oferte per dyer, dritare PVC, roleta, xhama palues dhe fasada ventiluese.",
  },
};

export function createPageMetadata(path) {
  const { title, description } = seoPages[path];
  const url = siteUrl ? new URL(path, siteUrl).href : undefined;
  const images = siteUrl
    ? [{
        url: new URL("/projects/project-06.jpg", siteUrl).href,
        width: 960,
        height: 536,
        alt: "Punim i realizuar nga KENZA Roll & KENZA Tech",
      }]
    : undefined;

  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: { title, description, siteName, locale: "sq_AL", type: "website", url, images },
    twitter: { card: images ? "summary_large_image" : "summary", title, description, images },
  };
}
