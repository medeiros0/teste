import type { ReactNode } from "react";
import "./SectionShell.css";

type SectionShellProps = {
  /** ID da âncora, ex: sec-3 */
  id: string;
  /** Título visível no cartão estilo formulário */
  title: string;
  /** Número opcional mostrado como etiqueta da secção */
  sectionNumber?: number;
  children: ReactNode;
};

/**
 * Moldura visual inspirada em secções de Google Forms:
 * cartão branco, barra lateral colorida, título e conteúdo.
 */
export function SectionShell({
  id,
  title,
  sectionNumber,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="section-shell"
      aria-labelledby={`${id}-heading`}
    >
      <div className="section-shell__card">
        <div className="section-shell__accent" aria-hidden />
        <div className="section-shell__body">
          <header className="section-shell__header">
            {sectionNumber != null && (
              <span className="section-shell__badge" aria-hidden>
                {sectionNumber}
              </span>
            )}
            <h2 id={`${id}-heading`} className="section-shell__title">
              {title}
            </h2>
          </header>
          <div className="section-shell__content">{children}</div>
        </div>
      </div>
    </section>
  );
}
