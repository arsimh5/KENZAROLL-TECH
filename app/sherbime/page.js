import Image from "next/image";
import BrandDivisions from "../BrandDivisions";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { highlights, services } from "../siteData";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/sherbime");

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <p className="eyebrow">Sherbimet</p>
        <h1>Dyer, dritare PVC dhe roleta ne Drenas.</h1>
        <p>
          Nga matja ne objekt deri te prodhimi, montimi dhe mirembajtja, punojme
          sipas dimensioneve dhe kerkesave tuaja ne Komoran, Drenas dhe zonat
          perreth. Ofrojme edhe dritare alumini, xhama palues dhe fasada ventiluese.
        </p>
      </section>

      <section className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">Cfare ofrojme</p>
          <h2>Dyer, dritare, roleta dhe sisteme moderne per objektin tuaj.</h2>
        </div>

        <div className="product-list">
          {services.map((service) => (
            <article className="product-card" key={service.title}>
              <div className="product-media">
                <Image src={service.image} alt={service.title} width={590} height={443} />
              </div>
              <div className="product-content">
                <span>{service.title.split(" ")[0]}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BrandDivisions />

      <section className="process-section">
        <div>
          <p className="eyebrow">Procesi</p>
          <h2>Nga matja deri te montimi.</h2>
          <p>
            Fillojme me matjet ne objekt dhe percaktojme llojin e profilit,
            xhamit, ngjyren dhe menyren e hapjes sipas perdorimit. Oferta
            pergatitet sipas dimensioneve dhe konfigurimit te zgjedhur;
            prodhimi dhe montimi planifikohen gjate kontaktit me ekipin.
          </p>
        </div>

        <div className="steps">
          {highlights.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
