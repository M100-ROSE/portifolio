import { useEffect, useRef, useState } from "react";
import './App.css';
import { ContatoSection } from "./components/ContatoSection";
import { HeroSection } from "./components/HeroSection";
import { ProjetosSection } from "./components/ProjetosSection";
import { Rodape } from "./components/Rodape";
import { SobreSection } from "./components/SobreSection";
import { Topo } from "./components/Topo";
import type { Contato, Projeto, TechTag } from "./components/types";

// ---------- Dados ----------
// Substitua os placeholders (link/href) pelos seus dados reais.

const techTags: TechTag[] = [
  { label: "React", group: "web" },
  { label: "TypeScript", group: "web" },
  { label: "Next.js", group: "web" },
  { label: "Node.js", group: "web" },
  { label: "Python", group: "linguagem" },
  { label: "Java", group: "linguagem" },
  { label: "C / C++", group: "linguagem" },
  { label: "ESP32", group: "hardware" },
  { label: "Sensores", group: "hardware" },
  { label: "OpenCV", group: "visao" },
  { label: "MediaPipe", group: "visao" },
];

const projetos: Projeto[] = [
  {
    titulo: "Drone esp32",
    descricao:
      "Desenvolvimento de um drone controlado por ESP32, com integração de sensores para navegação e estabilidade, explorando conceitos de hardware e programação embarcada.",
    tags: ["ESP32", "Sensores", "C++"],
    status: "em-breve",
  },
  {
    titulo: "Visão computacional com OpenCV",
    descricao:
      "Experimentos com detecção e percepção visual utilizando OpenCV e MediaPipe, unindo programação e interação com o mundo real.",
    tags: ["Python", "OpenCV", "MediaPipe"],
    link : "https://github.com/M100-ROSE/Lito/tree/main/leitura",
    status: "disponivel",
  },
  {
    titulo: "Portfólio pessoal",
    descricao:
      "Desenvolvimento deste próprio portfólio, utilizando React, TypeScript e Next.js para apresentar meus projetos e habilidades.",
    tags: ["React", "TypeScript"],
    link: "https://github.com/M100-ROSE/linkthree",
    status: "disponivel",
  },
];

const contatos: Contato[] = [
  { label: "E-mail", valor: "kaikeguerlinguer@gmail.com" },
  { label: "GitHub", valor: "M100-ROSE" },
  { label: "LinkedIn", valor: "Kaike Guerlinguer" },
];

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.classList.add("hero--entrar");
    }
  }, []);

  const handleNavClick = () => setMenuAberto(false);

  return (
    <div className="pagina">
      <div className="grade-fundo" aria-hidden="true" />

      <Topo
        menuAberto={menuAberto}
        onToggleMenu={() => setMenuAberto((v) => !v)}
        onNavClick={handleNavClick}
      />

      <main>
        <HeroSection techTags={techTags} heroRef={heroRef} />
        <SobreSection />
        <ProjetosSection projetos={projetos} />
        <ContatoSection contatos={contatos} />
      </main>

      <Rodape />
    </div>
  );
}

export default App;
