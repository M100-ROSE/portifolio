import type { Projeto } from "./types";

type ProjetosSectionProps = {
  projetos: Projeto[];
};

export function ProjetosSection({ projetos }: ProjetosSectionProps) {
  return (
    <section id="projetos" className="secao">
      <h2 className="secao__titulo">
        <span className="secao__no" aria-hidden="true" />
        Projetos
      </h2>
      <p className="secao__lede">
        Em vez de apenas falar sobre o que sei fazer, a ideia é mostrar
        na prática aquilo que venho aprendendo e construindo. Cada
        projeto terá seu próprio link assim que estiver publicado.
      </p>

      <div className="projetos__grade">
        {projetos.map((projeto) => (
          <article key={projeto.titulo} className="card-projeto">
            <div className="card-projeto__topo">
              <h3>{projeto.titulo}</h3>
              <span className={`status status--${projeto.status}`}>
                {projeto.status === "disponivel" ? "Disponível" : "Em breve"}
              </span>
            </div>
            <p>{projeto.descricao}</p>
            <ul className="card-projeto__tags">
              {projeto.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {projeto.link ? (
              <a href={projeto.link} className="card-projeto__link">
                Ver projeto →
              </a>
            ) : (
              <span className="card-projeto__link card-projeto__link--desabilitado">
                Link em breve
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
