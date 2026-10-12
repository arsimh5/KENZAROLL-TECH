import { seoPages, siteUrl } from "./seo";

export default function sitemap() {
  if (!siteUrl) return [];

  return Object.keys(seoPages).map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
