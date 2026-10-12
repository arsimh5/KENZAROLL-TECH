import Image from "next/image";
import Link from "next/link";

export default function ProductBrands({ products }) {
  return (
    <div className="veka-grid">
      {products.map((product) => (
        <Link className="veka-card" id={product.slug}
          href={`/markat/${product.slug}`} key={product.slug}>
          {product.coverImage ? (
            <span className="veka-card-media">
              <Image alt={`${product.title} - katalogu`} height={460}
                src={product.coverImage} width={760} />
            </span>
          ) : null}
          <div className="veka-card-top">
            <span className="veka-depth">{product.brand}</span>
          </div>
          <h3>{product.title}</h3>
          <p>{product.text}</p>
          <div className="veka-card-footer">
            <span className="veka-metric">{product.uf}</span>
            <span className="veka-more" aria-hidden="true">&rarr;</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
