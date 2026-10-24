import type { RefObject } from "react";
import type { TechTag } from "./types";

type HeroSectionProps = {
  techTags: TechTag[];
  heroRef: RefObject<HTMLDivElement | null>;
};

export function HeroSection({ techTags, heroRef }: HeroSectionProps) {
  return (
    <section id="inicio" className="secao hero" ref={heroRef}>
      <span className="hero__decor hero__decor--mais" aria-hidden="true">+</span>
      <span className="hero__decor hero__decor--x" aria-hidden="true">×</span>

      <p className="rotulo">REV. 2026 · PONTA GROSSA, PR</p>

      <h1 className="hero__titulo">
        Kaike Raphael
        <br />
        Machado <span className="hero__destaque">Guerlinguer</span>
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

      <div className="hero__acoes">
        <a href="#projetos" className="botao botao--solido">Ver projetos</a>
        <a href="#contato" className="botao botao--ghost">Contato</a>
      </div>

      <a href="#sobre" className="hero__scroll" aria-label="Rolar para a seção Sobre">
        <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path
            d="M3 5.5 8 10.5 13 5.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <svg
        className="hero__waves"
        viewBox="0 0 880 620"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <path
            id="hero-onda"
            vectorEffect="non-scaling-stroke"
            fill="none"
            d="M-80 430 C 150 660, 330 -40, 540 190 C 720 380, 830 80, 980 -60"
          />
        </defs>
        <g className="hero__waves-g">
          <use href="#hero-onda" transform="translate(24 -170)" opacity="0.18" />
          <use href="#hero-onda" transform="translate(-24 -136)" opacity="0.2" />
          <use href="#hero-onda" transform="translate(24 -102)" opacity="0.26" />
          <use href="#hero-onda" transform="translate(-24 -68)" opacity="0.32" />
          <use href="#hero-onda" transform="translate(24 -34)" opacity="0.42" />
          <use href="#hero-onda" transform="translate(0 0)" opacity="0.55" />
          <use href="#hero-onda" transform="translate(-24 34)" opacity="0.42" />
          <use href="#hero-onda" transform="translate(24 68)" opacity="0.32" />
          <use href="#hero-onda" transform="translate(-24 102)" opacity="0.26" />
          <use href="#hero-onda" transform="translate(24 136)" opacity="0.2" />
          <use href="#hero-onda" transform="translate(-24 170)" opacity="0.18" />
          <use href="#hero-onda" transform="translate(0 204)" opacity="0.18" />
        </g>
      </svg>
    </section>
  );
}
