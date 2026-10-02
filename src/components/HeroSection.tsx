import type { RefObject } from "react";
import type { TechTag } from "./types";

type HeroSectionProps = {
  techTags: TechTag[];
  heroRef: RefObject<HTMLDivElement | null>;
};

export function HeroSection({ techTags, heroRef }: HeroSectionProps) {
  return (
    <section id="inicio" className="secao hero" ref={heroRef}>
      <p className="rotulo">REV. 2026 · PONTA GROSSA, PR</p>
      <h1 className="hero__titulo">
        Kaike Raphael
        <br />
        Machado Guerlinguer
      </h1>
      <p className="hero__cargo">
        Estudante de Desenvolvimento de Sistemas — Ensino Médio Técnico,
        Colégio Estadual Presidente Kennedy
      </p>
      <p className="hero__texto">
        Curioso por natureza, gosto de entender como as coisas funcionam
        e transformar ideias em projetos que possam realmente ser
        utilizados. Transito entre desenvolvimento web, hardware e
        visão computacional — sempre aprendendo com o que dá certo e,
        principalmente, com o que não dá.
      </p>

      <ul className="tags" aria-label="Tecnologias estudadas">
        {techTags.map((tech) => (
          <li key={tech.label} className={`tag tag--${tech.group}`}>
            {tech.label}
          </li>
        ))}
      </ul>

      <svg className="hero__esquema" viewBox="0 0 600 60" aria-hidden="true">
        <line x1="0" y1="30" x2="600" y2="30" className="hero__esquema-linha" />
        <circle cx="20" cy="30" r="4" className="hero__esquema-no" />
        <circle cx="220" cy="30" r="4" className="hero__esquema-no" />
        <circle cx="420" cy="30" r="4" className="hero__esquema-no" />
        <circle cx="580" cy="30" r="4" className="hero__esquema-no" />
      </svg>
    </section>
  );
}
