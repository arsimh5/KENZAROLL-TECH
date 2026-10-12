import ContactForm from "../ContactForm";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/kontakt");

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <p className="eyebrow">Kontakt</p>
        <h1>Kontaktoni KENZA ne Drenas.</h1>
        <p>
          Kerkoni matje ne objekt, keshillim teknik dhe oferte per dyer,
          dritare, roleta, xhama palues ose fasada ventiluese. Na telefononi
          ne 044 467 351 ose dergoni kerkesen permes formularit.
        </p>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-frame">
          <iframe
            title="Google Maps - pike orientuese ne Gllogoc"
            src="https://maps.google.com/maps?q=42.628333,20.893889&z=15&output=embed"
            loading="eager"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="contact-section contact-page-section">
        <div className="contact-copy">
          <p className="eyebrow">Na kontaktoni</p>
          <h2>Gati per matje ose oferte?</h2>
          <p>
            Na kontaktoni per dyer, dritare dhe roleta sipas dimensioneve te
            objektit tuaj. Kryejme edhe xhama palues dhe fasada ventiluese ne
            Drenas dhe zonat perreth.
          </p>

          <div className="contact-info">
            <a href="tel:+38344467351">
              <span>Telefon</span>
              044 467 351
            </a>
            <p>
              <span>Adresa</span>
              Drenas
            </p>
            <a href="https://wa.me/38344467351">
              <span>WhatsApp</span>
              Dergo mesazh
            </a>
          </div>
        </div>

        <ContactForm />
      </section>

      <SiteFooter />
    </main>
  );
}
