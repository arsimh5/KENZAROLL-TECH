import "./globals.css";
import { createPageMetadata, siteName, siteUrl } from "./seo";
import { services } from "./siteData";

export const metadata = {
  ...createPageMetadata("/"),
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  applicationName: siteName,
  robots: {
    index: process.env.NODE_ENV === "production",
    follow: true,
    googleBot: {
      index: process.env.NODE_ENV === "production",
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const business = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteName,
  description: "Matje, prodhim dhe montim per dyer, dritare, roleta, xhama palues dhe fasada ventiluese.",
  telephone: "+38344467351",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Drenas",
    addressRegion: "Drenas",
    addressCountry: "XK",
  },
  areaServed: ["Drenas", "Gllogoc"],
  ...(siteUrl ? {
    "@id": `${siteUrl}/#business`,
    url: siteUrl,
    image: new URL("/projects/project-06.jpg", siteUrl).href,
  } : {}),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sherbimet KENZA",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.text,
      },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
