import ProductBrands from "../ProductBrands";
import SiteHeader from "../SiteHeader";
import { brandProducts } from "../productData";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata("/markat");

export default function BrandsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-intro brands-page-intro">
        <p className="eyebrow">Markat</p>
        <h1>Profile PVC VEKA, Salamander dhe Baufens.</h1>
        <p>
          Sisteme per dritare, dyer dhe hapje rreshqitese me fotografi dhe te
          dhena teknike. KENZA ju ndihmon me zgjedhjen, matjen dhe montimin
          ne Komoran, Drenas dhe zonat perreth.
        </p>
      </section>

      <section className="section veka-section">
        <div className="section-heading">
          <p className="eyebrow">Markat qe perdorim</p>
        </div>

        <ProductBrands products={brandProducts} />
      </section>
    </main>
  );
}
