import { NAV_SECTIONS } from "../config/navSections";
import "./Navbar.css";

/**
 * Barra de navegação fixa com links por âncora para as 13 secções.
 */
export function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#sec-1">
          One-page
        </a>
        <nav className="navbar__nav" aria-label="Secções do site">
          <ul className="navbar__list">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a className="navbar__link" href={`#${s.id}`}>
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
