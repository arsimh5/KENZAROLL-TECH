"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function ProjectGallery({ projects, variant = "section" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const currentProject = projects[currentIndex];
  const lightboxProject = lightboxIndex === null ? null : projects[lightboxIndex];
  const isHero = variant === "hero";

  const closeGallery = useCallback(() => setLightboxIndex(null), []);

  const goToProject = useCallback(
    (nextIndex) => {
      const projectCount = projects.length;
      setCurrentIndex((nextIndex + projectCount) % projectCount);
    },
    [projects.length],
  );

  const goToLightboxProject = useCallback(
    (nextIndex) => {
      const projectCount = projects.length;
      const normalizedIndex = (nextIndex + projectCount) % projectCount;
      setCurrentIndex(normalizedIndex);
      setLightboxIndex(normalizedIndex);
    },
    [projects.length],
  );

  const showPrevious = useCallback(
    () => goToProject(currentIndex - 1),
    [currentIndex, goToProject],
  );

  const showNext = useCallback(
    () => goToProject(currentIndex + 1),
    [currentIndex, goToProject],
  );

  const showLightboxPrevious = useCallback(
    () => goToLightboxProject((lightboxIndex ?? currentIndex) - 1),
    [currentIndex, goToLightboxProject, lightboxIndex],
  );

  const showLightboxNext = useCallback(
    () => goToLightboxProject((lightboxIndex ?? currentIndex) + 1),
    [currentIndex, goToLightboxProject, lightboxIndex],
  );

  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showLightboxPrevious();
      }

      if (event.key === "ArrowRight") {
        showLightboxNext();
      }
    };

    document.body.classList.add("gallery-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeGallery, lightboxIndex, showLightboxNext, showLightboxPrevious]);

  return (
    <>
      <div className={isHero ? "project-slider hero-project-slider" : "project-slider"}>
        <div className="project-slider-top">
          <span>
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
          <div className="project-slider-controls" aria-label="Kontrollat e slider-it">
            <button
              aria-label="Projekti i meparshem"
              className="slider-control slider-control-prev"
              onClick={showPrevious}
              type="button"
            />
            <button
              aria-label="Projekti tjeter"
              className="slider-control slider-control-next"
              onClick={showNext}
              type="button"
            />
          </div>
        </div>

        {isHero ? (
          <div className="hero-project-stage">
            <button
              aria-label={`Hap galerine per ${currentProject.title}`}
              className="hero-project-media"
              onClick={() => setLightboxIndex(currentIndex)}
              type="button"
            >
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                width={currentProject.width}
                height={currentProject.height}
                priority
              />
            </button>

            <div className="hero-project-content">
              <p className="eyebrow">KENZA Roll & Tech</p>
              <span>{currentProject.category}</span>
              <h1>Dyer, dritare, roleta dhe fasada moderne.</h1>
              <p>
                Projekte te realizuara me matje, prodhim dhe montim profesional
                per banesa, lokale dhe objekte biznesi.
              </p>
              <div className="hero-proof" aria-label="Pikat kryesore">
                <span>Matje ne objekt</span>
                <span>Porosi sipas dimensionit</span>
                <span>Komoran, Drenas</span>
              </div>
              <div className="hero-actions">
                <a className="btn primary" href="#kontakt">
                  Kerko oferte
                </a>
                <a className="btn secondary dark" href="#sherbime">
                  Cfare ofrojme
                </a>
              </div>
            </div>

            <div className="hero-project-caption">
              <strong>{currentProject.title}</strong>
              <span>
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        ) : (
          <button
            aria-label={`Hap galerine per ${currentProject.title}`}
            className="project-stage"
            onClick={() => setLightboxIndex(currentIndex)}
            type="button"
          >
            <div className="project-media">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                width={currentProject.width}
                height={currentProject.height}
                priority
              />
            </div>
            <div className="project-details">
              <span>{currentProject.category}</span>
              <h3>{currentProject.title}</h3>
              <p>Projekt i realizuar nga kompania KENZA Roll & Tech.</p>
            </div>
          </button>
        )}

        <div className="project-thumbs" aria-label="Zgjedh projektin">
          {projects.map((project, index) => (
            <button
              aria-label={`Shfaq ${project.title}`}
              className={index === currentIndex ? "active" : ""}
              key={project.title}
              onClick={() => goToProject(index)}
              type="button"
            >
              <Image
                src={project.image}
                alt=""
                width={project.width}
                height={project.height}
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </div>

      {lightboxProject ? (
        <div
          aria-label="Galeria e projekteve"
          aria-modal="true"
          className="project-lightbox"
          role="dialog"
        >
          <button
            aria-label="Mbyll galerine"
            className="lightbox-close"
            onClick={closeGallery}
            type="button"
          >
            X
          </button>

          <button
            aria-label="Fotoja e meparshme"
            className="slider-arrow slider-arrow-prev"
            onClick={showLightboxPrevious}
            type="button"
          />

          <figure className="lightbox-content">
            <div className="lightbox-image-wrap">
              <Image
                src={lightboxProject.image}
                alt={lightboxProject.title}
                width={lightboxProject.width}
                height={lightboxProject.height}
                priority
              />
            </div>

            <figcaption>
              <span>{lightboxProject.category}</span>
              <h3>{lightboxProject.title}</h3>
              <p>
                Projekti {lightboxIndex + 1} nga {projects.length}
              </p>
            </figcaption>
          </figure>

          <button
            aria-label="Fotoja tjeter"
            className="slider-arrow slider-arrow-next"
            onClick={showLightboxNext}
            type="button"
          />

          <div className="lightbox-thumbs" aria-label="Zgjedh foton">
            {projects.map((project, index) => (
              <button
                aria-label={`Hap ${project.title}`}
                className={index === lightboxIndex ? "active" : ""}
                key={project.title}
                onClick={() => goToLightboxProject(index)}
                type="button"
              >
                <Image
                  src={project.image}
                  alt=""
                  width={project.width}
                  height={project.height}
                />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
