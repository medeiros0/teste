/**
 * URLs candidatas para a imagem de cada secção (ficheiros em `public/`).
 * Ordem: nomes em português comuns primeiro, depois variantes sem acento / em inglês.
 * O deploy com `base` no Vite usa `import.meta.env.BASE_URL`.
 */
export function getSectionImageCandidates(sectionNumber: number): string[] {
  const n = String(sectionNumber);
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith("/") ? base : `${base}/`;

  const file = (filename: string) =>
    `${prefix}${filename}`.replace(/\/{2,}/g, "/");

  return [
    file(`secção${n}.png`),
    file(`secao${n}.png`),
    file(`section${n}.png`),
    file(`Section${n}.png`),
    file(`SECÇÃO${n}.PNG`),
    file(`SECTION${n}.PNG`),
  ];
}
