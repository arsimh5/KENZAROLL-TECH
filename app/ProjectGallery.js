"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import ProjectLightbox from "./ProjectLightbox";

export default function ProjectGallery({ projects, variant = "section" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const triggerRef = useRef(null);
  const currentProject = projects[currentIndex];
  const lightboxProject = lightboxIndex === null ? null : projects[lightboxIndex];
  const isHero = variant === "hero";

  const openGallery = useCallback((index, trigger) => {
    triggerRef.current = trigger ?? document.activeElement;
    setLightboxIndex(index);
    if (!isHero) {
      window.history.replaceState(null, "", `#${projects[index].slug}`);
    }
  }, [isHero, projects]);

  const closeGallery = useCallback(() => {
    setLightboxIndex(null);
    if (!isHero && projects.some((project) => window.location.hash === `#${project.slug}`)) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    triggerRef.current?.focus();
  }, [isHero, projects]);

  useEffect(() => {
    if (isHero) return undefined;
    const syncHash = () => {
      const index = projects.findIndex((project) => window.location.hash === `#${project.slug}`);
      if (index >= 0) {
        openGallery(index, document.getElementById(projects[index].slug));
      } else {
        setLightboxIndex(null);
      }
    };
    const frame = window.requestAnimationFrame(syncHash);
    window.addEventListener("hashchange", syncHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncHash);
    };
  }, [isHero, openGallery, projects]);

  const goToProject = (index) => {
    setCurrentIndex((index + projects.length) % projects.length);
  };

  return (
    <>
      {isHero ? (
        <div className="project-slider hero-project-slider">
          <div className="project-slider-top">
            <span>
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
            <div className="project-slider-controls" aria-label="Kontrollat e slider-it">
              <button aria-label="Projekti i meparshem" className="slider-control slider-control-prev"
                onClick={() => goToProject(currentIndex - 1)} type="button" />
              <button aria-label="Projekti tjeter" className="slider-control slider-control-next"
                onClick={() => goToProject(currentIndex + 1)} type="button" />
            </div>
          </div>
          <div className="hero-project-stage">
            <button aria-label={`Hap galerine per ${currentProject.title}`}
              className="hero-project-media"
              onClick={(event) => openGallery(currentIndex, event.currentTarget)} type="button">
              <Image src={currentProject.image} alt={currentProject.title}
                width={currentProject.width} height={currentProject.height} priority />
            </button>
            <div className="hero-project-content">
              <p className="eyebrow">KENZA Roll & Tech</p>
              <span>{currentProject.category}</span>
              <h1>Dyer dhe dritare ne Drenas.</h1>
              <p>
                Dritare PVC e alumini, roleta, xhama palues dhe fasada ventiluese.
                Matje, prodhim sipas porosise dhe montim nga KENZA ne Komoran
                dhe zonat perreth.
              </p>
              <div className="hero-proof" aria-label="Pikat kryesore">
                <span>Matje ne objekt</span>
                <span>Porosi sipas dimensionit</span>
                <span>Komoran, Drenas</span>
              </div>
              <div className="hero-actions">
                <a className="btn primary" href="/kontakt">Kerko oferte</a>
                <a className="btn secondary dark" href="/sherbime">Cfare ofrojme</a>
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
          <div className="project-thumbs" aria-label="Zgjedh projektin">
            {projects.map((project, index) => (
              <button aria-label={`Shfaq ${project.title}`}
                aria-pressed={index === currentIndex}
                className={index === currentIndex ? "active" : ""}
                key={project.slug} onClick={() => goToProject(index)} type="button">
                <Image src={project.image} alt="" width={project.width} height={project.height} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map((project, index) => (
            <button id={project.slug} className="project-card" key={project.slug}
              aria-label={`Hap galerine per ${project.title}`}
              onClick={(event) => openGallery(index, event.currentTarget)}
              type="button">
              <div className="project-card-media">
                <Image src={project.image} alt={project.title} width={project.width}
                  height={project.height} sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" />
              </div>
              <div className="project-card-copy">
                <span>{project.category}</span>
                <h2>{project.title}</h2>
              </div>
            </button>
          ))}
        </div>
      )}
      {lightboxProject ? (
        <ProjectLightbox key={lightboxProject.slug} project={lightboxProject} onClose={closeGallery} />
      ) : null}
    </>
  );
}
