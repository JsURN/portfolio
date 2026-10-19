"use client";

import Image from "next/image";
import { useCallback, useState, type KeyboardEvent } from "react";

import { projects } from "~/data/projects";

import { Icon } from "./icons";

function formatProjectNumber(value: number) {
  return String(value + 1).padStart(2, "0");
}

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const moveTo = useCallback(
    (nextIndex: number, nextDirection: "next" | "previous") => {
      setDirection(nextDirection);
      setActiveIndex((nextIndex + projects.length) % projects.length);
    },
    [],
  );

  const showNext = useCallback(() => {
    moveTo(activeIndex + 1, "next");
  }, [activeIndex, moveTo]);

  const showPrevious = useCallback(() => {
    moveTo(activeIndex - 1, "previous");
  }, [activeIndex, moveTo]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }
  };

  const project = projects[activeIndex] ?? projects[0]!;

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Projetos selecionados"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="project-carousel__viewport" aria-live="polite">
        <article
          key={project.id}
          className={`project-card project-card--${direction}`}
          aria-label={`Projeto ${formatProjectNumber(activeIndex)} de ${formatProjectNumber(projects.length - 1)}`}
        >
          <div className="project-card__image-wrap">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={780}
              className="project-card__image"
              sizes="(max-width: 768px) 100vw, 55vw"
              unoptimized={project.image.endsWith(".svg")}
            />
            <span className="project-card__status">{project.status}</span>
          </div>
          <div className="project-card__content">
            <p className="project-card__index">
              projeto / {formatProjectNumber(activeIndex)}
            </p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card__meta" aria-label="Tecnologias">
              {project.technologies.map((technology, index) => (
                <span key={technology} className="project-card__technology">
                  {technology}
                  {index < project.technologies.length - 1 ? (
                    <span aria-hidden="true"> • </span>
                  ) : null}
                </span>
              ))}
            </div>
            {project.repository ? (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Ver repositório <Icon name="external-link" size={17} />
              </a>
            ) : (
              <span className="project-card__placeholder-note">
                sem repositório ou demonstração publicada
              </span>
            )}
          </div>
        </article>
      </div>

      <div className="project-carousel__controls">
        <div
          className="project-carousel__indicators"
          aria-label="Selecionar projeto"
        >
          {projects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`project-carousel__indicator ${index === activeIndex ? "is-active" : ""}`}
              aria-label={`Mostrar projeto ${formatProjectNumber(index)}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() =>
                moveTo(index, index > activeIndex ? "next" : "previous")
              }
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="project-carousel__actions">
          <span
            className="project-carousel__counter"
            aria-label={`Projeto ${formatProjectNumber(activeIndex)} de 03`}
          >
            {formatProjectNumber(activeIndex)} <span aria-hidden="true">/</span>{" "}
            {formatProjectNumber(projects.length - 1)}
          </span>
          <button
            type="button"
            className="project-carousel__arrow"
            aria-label="Mostrar projeto anterior"
            onClick={showPrevious}
          >
            <Icon name="chevron-left" size={20} />
          </button>
          <button
            type="button"
            className="project-carousel__arrow"
            aria-label="Mostrar próximo projeto"
            onClick={showNext}
          >
            <Icon name="chevron-right" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
