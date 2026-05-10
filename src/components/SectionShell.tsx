import type { ReactNode } from "react";
import "./SectionShell.css";

type SectionShellProps = {
  id: string;
  title: string;
  showHeader?: boolean;
  children: ReactNode;
};

/**
 * Bloco de conteúdo com vidro leve integrado ao fundo (sem cartão com sombra).
 */
export function SectionShell({
  id,
  title,
  showHeader = true,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="section-shell" aria-labelledby={`${id}-heading`}>
      <div className="section-shell__card">
        <div className="section-shell__body">
          {showHeader ? (
            <header className="section-shell__header">
              <h2 id={`${id}-heading`} className="section-shell__title">
                {title}
              </h2>
            </header>
          ) : (
            <h2 id={`${id}-heading`} className="sr-only">
              {title}
            </h2>
          )}
          <div className="section-shell__content">{children}</div>
        </div>
      </div>
    </section>
  );
}
