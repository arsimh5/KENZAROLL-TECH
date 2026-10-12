import Link from "next/link";
import { notFound } from "next/navigation";
import BrandCatalog from "../../BrandCatalog";
import SiteFooter from "../../SiteFooter";
import SiteHeader from "../../SiteHeader";
import { brandProducts } from "../../productData";
import { createPageMetadata } from "../../seo";

export function generateStaticParams() {
  return brandProducts.map((product) => ({ brand: product.slug }));
}

export async function generateMetadata({ params }) {
  const { brand } = await params;
  const product = brandProducts.find((item) => item.slug === brand);
  if (!product) return {};
  return createPageMetadata(`/markat/${product.slug}`);
}

export default async function BrandPage({ params }) {
  const { brand } = await params;
  const product = brandProducts.find((item) => item.slug === brand);
  if (!product) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="page-intro brand-page-intro">
        <Link className="text-link catalog-back" href="/markat">
          <span aria-hidden="true">&larr;</span> Te gjitha markat
        </Link>
        <p className="eyebrow">Katalogu {product.brand}</p>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <nav className="brand-page-nav" aria-label="Kataloget e markave">
          {brandProducts.map((item) => (
            <Link href={`/markat/${item.slug}`} key={item.slug}
              aria-current={item.slug === product.slug ? "page" : undefined}>
              {item.brand}
            </Link>
          ))}
        </nav>
      </section>
      <BrandCatalog key={product.slug} product={product} />
      <SiteFooter />
    </main>
  );
}
