"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const groupOrder = ["Te gjitha", "Profile & dritare", "Dyer", "Rreshqitese", "Roleta", "Te tjera"];

function getProductSlug(product) {
  return product.slug ?? product.brand?.toLowerCase() ?? product.title.toLowerCase().replaceAll(" ", "-");
}

function getSystemGroup(system) {
  const value = `${system.name} ${system.type}`.toLowerCase();

  if (value.includes("rolet") || value.includes("shutter") || value.includes("vekavariant")) {
    return "Roleta";
  }

  if (value.includes("rrreshq") || value.includes("slide") || value.includes("motion") || value.includes("move 76")) {
    return "Rreshqitese";
  }

  if (value.includes("dere") || value.includes("dyer") || value.includes("door")) {
    return "Dyer";
  }

  if (value.includes("dritare") || value.includes("profil") || value.includes("window")) {
    return "Profile & dritare";
  }

  return "Te tjera";
}

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
  const [activeGroup, setActiveGroup] = useState("Te gjitha");
  const activeProduct = activeIndex === null ? null : products[activeIndex];
  const availableGroups = activeProduct
    ? groupOrder.filter(
        (group) =>
          group === "Te gjitha" ||
          activeProduct.systems?.some((system) => getSystemGroup(system) === group),
      )
    : [];
  const visibleSystems =
    activeProduct?.systems?.filter(
      (system) => activeGroup === "Te gjitha" || getSystemGroup(system) === activeGroup,
    ) ?? [];

  const closeProduct = useCallback(() => {
    setActiveIndex(null);

    if (typeof window !== "undefined" && window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
  }, []);

  const openProduct = useCallback(
    (index) => {
      setActiveGroup("Te gjitha");
      setActiveIndex(index);

      const slug = getProductSlug(products[index]);
      if (typeof window !== "undefined" && window.location.hash !== `#${slug}`) {
        window.history.pushState(null, "", `#${slug}`);
      }
    },
    [products],
  );

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeProduct();
      }
    };

    document.body.classList.add("gallery-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeProduct]);

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) {
        return;
      }

      const index = products.findIndex((product) => getProductSlug(product) === hash);

      if (index >= 0) {
        setActiveGroup("Te gjitha");
        setActiveIndex(index);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);

    return () => window.removeEventListener("hashchange", openFromHash);
  }, [products]);

  return (
    <>
      <div className="veka-grid">
        {products.map((product, index) => (
          <button
            className="veka-card"
            id={getProductSlug(product)}
            key={product.title}
            onClick={() => openProduct(index)}
            type="button"
          >
            {product.coverImage ? (
              <span className="veka-card-media">
                <Image
                  alt={`${product.title} - katalogu`}
                  height={460}
                  src={product.coverImage}
                  width={760}
                />
              </span>
            ) : null}
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
            onClick={closeProduct}
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

            {activeProduct.highlights?.length ? (
              <div className="brand-highlights">
                {activeProduct.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            ) : null}

            {availableGroups.length > 2 ? (
              <div className="brand-filter" aria-label="Filtro produktet">
                {availableGroups.map((group) => (
                  <button
                    aria-pressed={activeGroup === group}
                    className={activeGroup === group ? "is-active" : ""}
                    key={group}
                    onClick={() => setActiveGroup(group)}
                    type="button"
                  >
                    {group}
                  </button>
                ))}
              </div>
            ) : null}

            {visibleSystems.length ? (
              <div className="brand-system-list">
                {visibleSystems.map((system) => (
                  <section className="brand-system-card" key={system.name}>
                    {system.image ? (
                      <div className="brand-system-media">
                        <Image
                          alt={`${system.name} - ${activeProduct.brand}`}
                          height={560}
                          src={system.image}
                          width={760}
                        />
                      </div>
                    ) : null}

                    <div className="brand-system-content">
                      <div className="brand-system-head">
                        <div>
                          <span>{system.type}</span>
                          <h4>{system.name}</h4>
                        </div>
                        <span className="brand-system-group">{getSystemGroup(system)}</span>
                      </div>

                      <p>{system.summary}</p>

                      <div className="brand-spec-grid">
                        {system.specs.map(([label, value]) => (
                          <span key={`${system.name}-${label}`}>
                            <strong>{label}</strong>
                            {value}
                          </span>
                        ))}
                      </div>

                      {system.features?.length ? (
                        <ul className="brand-feature-list">
                          {system.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      ) : null}

                    </div>
                  </section>
                ))}
              </div>
            ) : null}

            <div className="veka-modal-actions">
              <a className="btn primary" href="/kontakt" onClick={() => setActiveIndex(null)}>
                Kerko oferte per keto produkte
              </a>
            </div>
          </article>
        </div>
      ) : null}
    </>
  );
}
