"use client";

import { useEffect, useState } from "react";

function WindowIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 48 48"
    >
      <path d="M9 10h30v28H9z" />
      <path d="M24 10v28" />
      <path d="M9 24h30" />
    </svg>
  );
}

export default function ProductBrands({ products }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeProduct = activeIndex === null ? null : products[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.body.classList.add("gallery-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="veka-grid">
        {products.map((product, index) => (
          <button
            className="veka-card"
            key={product.title}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <div className="veka-card-top">
              <span className="veka-icon" aria-hidden="true">
                <WindowIcon />
              </span>
              <span className="veka-depth">{product.brand ?? "PVC"}</span>
            </div>
            <h3>{product.title}</h3>
            <p>{product.text}</p>
            <div className="veka-card-footer">
              <span className="veka-metric">{product.uf}</span>
              <span className="veka-more">Detaje</span>
            </div>
          </button>
        ))}
      </div>

      {activeProduct ? (
        <div
          aria-label={`Detajet per ${activeProduct.title}`}
          aria-modal="true"
          className="veka-modal"
          role="dialog"
        >
          <button
            aria-label="Mbyll detajet"
            className="lightbox-close"
            onClick={() => setActiveIndex(null)}
            type="button"
          >
            X
          </button>

          <article className="veka-modal-card">
            <div className="veka-modal-head">
              <span className="veka-icon large" aria-hidden="true">
                <WindowIcon />
              </span>
              <div>
                <p className="eyebrow">Produktet {activeProduct.brand ?? "PVC"}</p>
                <h3>{activeProduct.title}</h3>
              </div>
            </div>

            <p className="veka-modal-text">{activeProduct.description}</p>

            <div className="veka-detail-grid">
              <span>
                <strong>Perdorimi</strong>
                {activeProduct.uf}
              </span>
              <span>
                <strong>Kategoria</strong>
                {activeProduct.depth}
              </span>
              <span>
                <strong>Pershtatja</strong>
                {activeProduct.bestFor}
              </span>
            </div>

            <a className="btn primary" href="#kontakt" onClick={() => setActiveIndex(null)}>
              Kerko oferte per keto produkte
            </a>
          </article>
        </div>
      ) : null}
    </>
  );
}
