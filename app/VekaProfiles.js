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

export default function VekaProfiles({ profiles }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeProfile = activeIndex === null ? null : profiles[activeIndex];

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
        {profiles.map((profile, index) => (
          <button
            className="veka-card"
            key={profile.title}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <div className="veka-card-top">
              <span className="veka-icon" aria-hidden="true">
                <WindowIcon />
              </span>
              <span className="veka-depth">{profile.depth}</span>
            </div>
            <h3>{profile.title}</h3>
            <p>{profile.text}</p>
            <div className="veka-card-footer">
              <span className="veka-metric">{profile.uf}</span>
              <span className="veka-more">Detaje</span>
            </div>
          </button>
        ))}
      </div>

      {activeProfile ? (
        <div
          aria-label={`Detajet per ${activeProfile.title}`}
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
                <p className="eyebrow">Profili VEKA</p>
                <h3>{activeProfile.title}</h3>
              </div>
            </div>

            <p className="veka-modal-text">{activeProfile.description}</p>

            <div className="veka-detail-grid">
              <span>
                <strong>Izolimi</strong>
                {activeProfile.uf}
              </span>
              <span>
                <strong>Thellesia</strong>
                {activeProfile.depth}
              </span>
              <span>
                <strong>Pershtatja</strong>
                {activeProfile.bestFor}
              </span>
            </div>

            <a className="btn primary" href="#kontakt" onClick={() => setActiveIndex(null)}>
              Kerko oferte per kete profil
            </a>
          </article>
        </div>
      ) : null}
    </>
  );
}
