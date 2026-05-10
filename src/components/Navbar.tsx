import { NAV_SECTIONS } from "../config/navSections";
import "./Navbar.css";

/**
 * Barra de navegação fixa com links por âncora (rótulos numéricos).
 */
export function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#sec-1">
          Início
        </a>
        <nav className="navbar__nav" aria-label="Navegação do conteúdo">
          <ul className="navbar__list">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a className="navbar__link" href={`#${s.id}`} title={`Ir para o bloco ${s.label}`}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
