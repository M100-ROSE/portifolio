import { useEffect, useState } from "react";

type TopoProps = {
  menuAberto: boolean;
  onToggleMenu: () => void;
  onNavClick: () => void;
};

export function Topo({ menuAberto, onToggleMenu, onNavClick }: TopoProps) {
  const [rolado, setRolado] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`topo ${rolado ? "topo--rolado" : ""}`}>
      <a href="#inicio" className="topo__marca">
        KRMG<span className="topo__marca-ponto">.</span>
      </a>

      <button
        className="topo__toggle"
        type="button"
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuAberto}
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`topo__nav ${menuAberto ? "topo__nav--aberto" : ""}`}>
        <a href="#sobre" onClick={onNavClick}>Sobre</a>
        <a href="#projetos" onClick={onNavClick}>Projetos</a>
        <a href="#contato" className="topo__cta" onClick={onNavClick}>Contato</a>
      </nav>
    </header>
  );
}
