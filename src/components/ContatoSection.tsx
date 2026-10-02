import type { Contato } from "./types";

type ContatoSectionProps = {
  contatos: Contato[];
};

export function ContatoSection({ contatos }: ContatoSectionProps) {
  return (
    <section id="contato" className="secao">
      <h2 className="secao__titulo">
        <span className="secao__no" aria-hidden="true" />
        Contato
      </h2>
      <p className="secao__lede">
        Se quiser conhecer melhor meu trabalho, acompanhar meus projetos
        ou simplesmente conversar, essas são as melhores formas de me
        encontrar.
      </p>

      <ul className="lista-contato">
        {contatos.map((contato) => (
          <li key={contato.label}>
            {contato.href ? (
              <a href={contato.href} target="_blank" rel="noreferrer">
                <span className="lista-contato__no" aria-hidden="true" />
                <span className="lista-contato__label">{contato.label}</span>
                <span className="lista-contato__valor">{contato.valor}</span>
              </a>
            ) : (
              <span className="lista-contato__indisponivel">
                <span className="lista-contato__no" aria-hidden="true" />
                <span className="lista-contato__label">{contato.label}</span>
                <span className="lista-contato__valor">{contato.valor}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
