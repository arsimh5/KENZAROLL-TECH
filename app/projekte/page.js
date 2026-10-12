import ProjectGallery from "../ProjectGallery";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { projects } from "../siteData";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/projekte");

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-intro">
        <p className="eyebrow">Projektet</p>
        <h1>Projekte me roleta dhe xhama palues.</h1>
        <p>
          Punime te realizuara nga KENZA Roll dhe KENZA Tech per banesa,
          ballkone, lokale dhe objekte biznesi: roleta alumini, mbyllje
          ballkonesh me xhama palues dhe montim sipas dimensioneve.
        </p>
      </section>

      <section className="section projects-page-section">
        <ProjectGallery projects={projects} />
      </section>

      <SiteFooter />
    </main>
  );
}
