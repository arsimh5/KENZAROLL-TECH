import Image from "next/image";
import Link from "next/link";
import BrandDivisions from "./BrandDivisions";
import ProjectGallery from "./ProjectGallery";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { brandProducts } from "./productData";
import { highlights, projects, services } from "./siteData";
import { createPageMetadata } from "./seo";

export const metadata = createPageMetadata("/");

const featuredServices = [services[1], services[3], services[5], services[6]];
const featuredProjects = projects.slice(0, 3);

function getBrandHref(brand) {
  const slug = brand.slug ?? brand.brand.toLowerCase();
  return `/markat/${slug}`;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="top-projects-hero">
        <ProjectGallery projects={projects} variant="hero" />
      </section>

      <BrandDivisions />

      <section className="section home-services">
        <p className="eyebrow">Zgjidhje per objektin</p>
        <div className="home-section-head">
          <div>
            <h2>Dyer, dritare PVC dhe roleta ne Komoran, Drenas.</h2>
          </div>
          <div className="home-section-side">
            <p>
              KENZA Roll dhe KENZA Tech realizojne dyer te jashtme, dritare PVC
              e alumini, roleta, xhama palues dhe fasada ventiluese per shtepi,
              lokale dhe objekte biznesi ne Drenas dhe zonat perreth.
            </p>
            <Link className="text-link" href="/sherbime">
              Shiko te gjitha sherbimet <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="home-service-grid">
          {featuredServices.map((service) => (
            <Link className="home-service-card" href="/sherbime" key={service.title}>
              <div className="home-service-media">
                <Image src={service.image} alt={service.title} width={590} height={443} />
              </div>
              <div>
                <span>{service.title.split(" ")[0]}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-brands">
        <div className="home-brands-copy">
          <p className="eyebrow">Marka te zgjedhura</p>
          <h2>Profile PVC VEKA, Salamander dhe Baufens.</h2>
          <p>
            Krahasoni thellesine e profileve, llojin e xhamit dhe izolimin e
            sistemeve per dritare e dyer PVC. Zgjedhja pershtatet me objektin,
            dimensionet dhe kerkesat tuaja.
          </p>
          <Link className="btn primary" href="/markat">
            Hap katalogun e produkteve
          </Link>
        </div>

        <div className="home-brand-grid">
          {brandProducts.map((brand) => (
            <Link className="home-brand-card" href={getBrandHref(brand)} key={brand.brand}>
              <Image
                src={brand.coverImage}
                alt={`Produktet ${brand.brand}`}
                width={780}
                height={520}
              />
              <div>
                <span>{brand.brand}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="process-section home-process">
        <div>
          <p className="eyebrow">Si punojme</p>
          <h2>Nje proces i qarte, nga ideja deri te montimi.</h2>
          <p>
            Cdo porosi pershtatet sipas dimensioneve, perdorimit dhe kerkesave
            teknike te objektit.
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

      <section className="section home-projects">
        <p className="eyebrow">Nga puna jone</p>
        <div className="home-section-head">
          <div>
            <h2>Projekte te perfunduara me kujdes ne cdo detaj.</h2>
          </div>
          <div className="home-section-side">
            <p>
              Shikoni disa nga punimet tona me roleta, xhama palues dhe sisteme
              per banesa e biznese.
            </p>
            <Link className="text-link" href="/projekte">
              Shiko galerine e projekteve <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="home-project-grid">
          {featuredProjects.map((project) => (
            <Link className="home-project-card" href={`/projekte#${project.slug}`} key={project.slug}>
              <Image
                src={project.image}
                alt={project.title}
                width={project.width}
                height={project.height}
              />
              <div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-contact-band">
        <div>
          <p className="eyebrow">Matje dhe oferte</p>
          <h2>Keni nje projekt ne plan?</h2>
          <p>
            Na tregoni dimensionet dhe llojin e produktit. Ekipi yne ju ndihmon
            me zgjedhjen, matjen dhe montimin.
          </p>
        </div>
        <div className="home-contact-actions">
          <Link className="btn primary" href="/kontakt">
            Kerko oferte
          </Link>
          <a className="btn secondary dark" href="tel:+38344467351">
            044 467 351
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
