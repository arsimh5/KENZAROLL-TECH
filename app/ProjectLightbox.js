"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ProjectLightbox({ project, onClose }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const photos = project.photos;
  const photo = photos[photoIndex];
  const hasMultiplePhotos = photos.length > 1;

  const movePhoto = useCallback((direction) => {
    setPhotoIndex((index) => (index + direction + photos.length) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.classList.add("gallery-open");
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        movePhoto(event.key === "ArrowLeft" ? -1 : 1);
      } else if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll("button");
        const first = buttons?.[0];
        const last = buttons?.[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [movePhoto, onClose]);

  return (
    <div ref={dialogRef} aria-label={`Galeria: ${project.title}`} aria-modal="true"
      className={`project-lightbox${hasMultiplePhotos ? "" : " project-lightbox-single"}`}
      role="dialog" onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}>
      <button ref={closeRef} aria-label="Mbyll galerine" className="lightbox-close"
        onClick={onClose} type="button"><span aria-hidden="true">&times;</span></button>
      {hasMultiplePhotos ? (
        <button aria-label="Fotoja e meparshme" className="slider-arrow slider-arrow-prev"
          onClick={() => movePhoto(-1)} type="button" />
      ) : null}
      <figure className="lightbox-content">
        <div className="lightbox-image-wrap">
          <Image src={photo.src} alt={photo.alt || project.title}
            width={photo.width} height={photo.height}
            sizes="(max-width: 980px) 90vw, 70vw" priority />
        </div>
        <figcaption>
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p aria-live="polite" aria-atomic="true">Foto {photoIndex + 1} nga {photos.length}</p>
        </figcaption>
      </figure>
      {hasMultiplePhotos ? (
        <>
          <button aria-label="Fotoja tjeter" className="slider-arrow slider-arrow-next"
            onClick={() => movePhoto(1)} type="button" />
          <div className="lightbox-thumbs" aria-label="Fotot e ketij projekti">
            {photos.map((item, index) => (
              <button aria-label={`Hap foton ${index + 1} te ${project.title}`}
                aria-pressed={index === photoIndex}
                className={index === photoIndex ? "active" : ""} key={item.src}
                onClick={() => setPhotoIndex(index)} type="button">
                <Image src={item.src} alt="" width={item.width} height={item.height} sizes="82px" />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
