/**
 * Configuração das secções só com imagem (1–9 e 11–13).
 * Coloque os PNG na pasta `public/` (ex.: secção8.png ou section8.png).
 * Os nomes possíveis são tentados em `getSectionImageCandidates`.
 */
export type ImageSectionConfig = {
  sectionNumber: number;
  title: string;
  /** Texto para leitores de ecrã / contexto da imagem */
  alt: string;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13] as const;

export const IMAGE_SECTIONS: ImageSectionConfig[] = nums.map((sectionNumber) => ({
  sectionNumber,
  title: `Secção ${sectionNumber}`,
  alt: `Imagem ilustrativa da secção ${sectionNumber}`,
}));
