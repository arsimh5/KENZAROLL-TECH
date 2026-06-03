"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function ProjectGallery({ projects }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeProject = activeIndex === null ? null : projects[activeIndex];

  const closeGallery = useCallback(() => setActiveIndex(null), []);

  const goToProject = useCallback(
    (nextIndex) => {
      const projectCount = projects.length;
      setActiveIndex((nextIndex + projectCount) % projectCount);
    },
    [projects.length],
  );

  const showPrevious = useCallback(
    () => goToProject((activeIndex ?? 0) - 1),
    [activeIndex, goToProject],
  );

  const showNext = useCallback(
    () => goToProject((activeIndex ?? 0) + 1),
    [activeIndex, goToProject],
  );

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.body.classList.add("gallery-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeGallery, showNext, showPrevious]);

  return (
    <>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <button
            className="project-card"
            key={project.title}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={project.width}
              height={project.height}
            />
            <span>{project.category}</span>
            <h3>{project.title}</h3>
          </button>
        ))}
      </div>

      {activeProject ? (
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
            onClick={showPrevious}
            type="button"
          />

          <figure className="lightbox-content">
            <div className="lightbox-image-wrap">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                width={activeProject.width}
                height={activeProject.height}
                priority
              />
            </div>

            <figcaption>
              <span>{activeProject.category}</span>
              <h3>{activeProject.title}</h3>
              <p>
                Projekti {activeIndex + 1} nga {projects.length}
              </p>
            </figcaption>
          </figure>

          <button
            aria-label="Fotoja tjeter"
            className="slider-arrow slider-arrow-next"
            onClick={showNext}
            type="button"
          />

          <div className="lightbox-thumbs" aria-label="Zgjedh foton">
            {projects.map((project, index) => (
              <button
                aria-label={`Hap ${project.title}`}
                className={index === activeIndex ? "active" : ""}
                key={project.title}
                onClick={() => setActiveIndex(index)}
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
