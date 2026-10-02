type TopoProps = {
  menuAberto: boolean;
  onToggleMenu: () => void;
  onNavClick: () => void;
};

export function Topo({ menuAberto, onToggleMenu, onNavClick }: TopoProps) {
  return (
    <header className="topo">
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
        <a href="#contato" onClick={onNavClick}>Contato</a>
      </nav>
    </header>
  );
}
