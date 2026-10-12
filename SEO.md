# SEO Configuration

Set `SITE_URL` to the final public origin (including `https://`) in the hosting
environment before running `npm run build`. The local `.env.example` leaves this
empty because the production domain has not been confirmed.

With `SITE_URL` configured, each public page has its own canonical URL and
Open Graph URL. Social previews use the existing project photograph. The
`/sitemap.xml` route includes the five public pages; `/robots.txt` links to it.
Without `SITE_URL`, canonical URLs and public image URLs are omitted and the
sitemap is empty, so a guessed domain or localhost is not advertised.

Development pages are marked `noindex` and development robots.txt disallows
crawling. Production pages are indexable; the contact API is excluded from
crawling and from the sitemap.

Business structured data uses only the existing name, phone number, service
list and locality. The map pin is approximate and is not published as business
coordinates. No reviews, opening hours, prices or availability are invented.

After deployment, verify the public canonical URLs, sitemap and robots.txt,
then submit the sitemap in the verified Google Search Console property.
Validate the structured data using Google's Rich Results Test.

Metadata and content improvements do not automatically register the site with
Google or guarantee rankings.
