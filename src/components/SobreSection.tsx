export function SobreSection() {
  return (
    <section id="sobre" className="secao">
      <h2 className="secao__titulo">
        <span className="secao__no" aria-hidden="true" />
        Sobre
      </h2>

      <div className="sobre__grade">
        <p>
          Atualmente curso o Ensino Médio integrado ao Curso Técnico em
          Desenvolvimento de Sistemas, com conclusão prevista para 2028.
          Desde que comecei a estudar tecnologia, programação se tornou
          uma área que desperta muito a minha curiosidade.
        </p>
        <p>
          No desenvolvimento web, trabalho com HTML, CSS e JavaScript,
          além de TypeScript, React, Next.js e Node.js. Também estudo
          linguagens como C, C++, Java e Python, o que me permite
          experimentar diferentes formas de resolver problemas.
        </p>
        <p>
          Além do software, tenho interesse em hardware e interação com
          o mundo real: já desenvolvi projetos com ESP32 e sensores, e
          venho explorando visão computacional com OpenCV e MediaPipe —
          uma área que une programação, tecnologia e percepção visual.
        </p>
        <p>
          Ainda estou no começo da minha trajetória profissional, e por
          isso considero cada projeto uma oportunidade de aprender algo
          novo. Nem tudo funciona de primeira — e é tentando descobrir
          por que algo não funciona que acontece o maior aprendizado.
        </p>
      </div>
    </section>
  );
}
