import { siteUrl } from "./seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      ...(process.env.NODE_ENV === "production"
        ? { allow: "/", disallow: "/api/" }
        : { disallow: "/" }),
    },
    ...(siteUrl ? { sitemap: new URL("/sitemap.xml", siteUrl).href } : {}),
  };
}
