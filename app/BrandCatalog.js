"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const groupOrder = ["Te gjitha", "Profile & dritare", "Dyer", "Rreshqitese", "Roleta", "Te tjera"];

function getSystemGroup(system) {
  const value = `${system.name} ${system.type}`.toLowerCase();
  if (value.includes("rolet") || value.includes("shutter") || value.includes("vekavariant")) {
    return "Roleta";
  }
  if (value.includes("rreshq") || value.includes("slide") || value.includes("motion") || value.includes("move 76")) {
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

export default function BrandCatalog({ product }) {
  const [activeGroup, setActiveGroup] = useState("Te gjitha");
  const availableGroups = groupOrder.filter((group) =>
    group === "Te gjitha" || product.systems.some((system) => getSystemGroup(system) === group),
  );
  const visibleSystems = product.systems.filter((system) =>
    activeGroup === "Te gjitha" || getSystemGroup(system) === activeGroup,
  );

  return (
    <section className="section brand-catalog" aria-label={`Katalogu ${product.brand}`}>
      <div className="brand-catalog-inner">
        <div className="veka-detail-grid">
          <span><strong>Perdorimi</strong>{product.uf}</span>
          <span><strong>Thellesia</strong>{product.depth}</span>
          <span><strong>Pershtatja</strong>{product.bestFor}</span>
        </div>

        {product.highlights?.length ? (
          <div className="brand-highlights">
            {product.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
          </div>
        ) : null}

        {availableGroups.length > 2 ? (
          <div className="brand-filter" role="group" aria-label="Filtro produktet">
            {availableGroups.map((group) => (
              <button aria-pressed={activeGroup === group}
                className={activeGroup === group ? "is-active" : ""}
                key={group} onClick={() => setActiveGroup(group)} type="button">
                {group}
              </button>
            ))}
          </div>
        ) : null}

        <div className="brand-system-list">
          {visibleSystems.map((system) => (
            <article className="brand-system-card" key={system.name}>
              {system.image ? (
                <div className="brand-system-media">
                  <Image alt={`${system.name} - ${product.brand}`} height={560}
                    src={system.image} width={760}
                    sizes="(max-width: 980px) 100vw, 32vw" />
                </div>
              ) : null}
              <div className="brand-system-content">
                <div className="brand-system-head">
                  <div>
                    <span>{system.type}</span>
                    <h2>{system.name}</h2>
                  </div>
                  <span className="brand-system-group">{getSystemGroup(system)}</span>
                </div>
                <p>{system.summary}</p>
                <div className="brand-spec-grid">
                  {system.specs.map(([label, value]) => (
                    <span key={`${system.name}-${label}`}>
                      <strong>{label}</strong>{value}
                    </span>
                  ))}
                </div>
                {system.features?.length ? (
                  <ul className="brand-feature-list">
                    {system.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="catalog-actions">
          <Link className="btn primary" href="/kontakt">Kerko oferte per keto produkte</Link>
          <Link className="text-link" href="/markat">Te gjitha markat <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </section>
  );
}
