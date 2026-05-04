import { useCallback, useMemo, useState } from "react";
import { SectionShell } from "./SectionShell";
import { getSectionImageCandidates } from "../lib/sectionImageUrls";
import "./ImageSection.css";

type ImageSectionProps = {
  sectionNumber: number;
  title: string;
  alt: string;
};

type LoadState = { candidateIndex: number; allFailed: boolean };

/** Dimensão máxima recomendada das artes (proporção mantida em ecrãs menores). */
const IMAGE_MAX_W = 650;
const IMAGE_MAX_H = 906;

/**
 * Secção com imagem até 650×906 px, responsiva (contain, sem cortar).
 * Tenta vários nomes de ficheiro em `public/` até um carregar (ex.: secção8.png vs section8.png).
 */
export function ImageSection({
  sectionNumber,
  title,
  alt,
}: ImageSectionProps) {
  const id = `sec-${sectionNumber}`;
  const candidates = useMemo(
    () => getSectionImageCandidates(sectionNumber),
    [sectionNumber],
  );

  const [{ candidateIndex, allFailed }, setLoad] = useState<LoadState>({
    candidateIndex: 0,
    allFailed: false,
  });

  const src = candidates[candidateIndex] ?? candidates[0];

  const handleImgError = useCallback(() => {
    setLoad((prev) => {
      const next = prev.candidateIndex + 1;
      if (next < candidates.length) {
        return { candidateIndex: next, allFailed: false };
      }
      return { candidateIndex: prev.candidateIndex, allFailed: true };
    });
  }, [candidates.length]);

  return (
    <SectionShell id={id} title={title} sectionNumber={sectionNumber}>
      <div className="image-section__viewport">
        {!allFailed ? (
          <img
            key={src}
            className="image-section__img"
            src={src}
            alt={alt}
            width={IMAGE_MAX_W}
            height={IMAGE_MAX_H}
            onError={handleImgError}
            decoding="async"
            loading="lazy"
          />
        ) : (
          <div className="image-section__fallback" role="alert">
            <p>Não foi possível carregar a imagem desta secção.</p>
            <p className="image-section__fallback-hint">
              Coloque um ficheiro em <code>public/</code> com um destes nomes:{" "}
              <code>secção{sectionNumber}.png</code>, <code>secao{sectionNumber}.png</code> ou{" "}
              <code>section{sectionNumber}.png</code>.
            </p>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
