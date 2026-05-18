/**
 * Configuração das secções só com imagem (1–9, 11–14).
 * Coloque os PNG na pasta `public/`.
 */
export type ImageSectionConfig = {
  sectionNumber: number;
  alt: string;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14] as const;

export const IMAGE_SECTIONS: ImageSectionConfig[] = nums.map((sectionNumber) => ({
  sectionNumber,
  alt: `Conteúdo visual do bloco ${sectionNumber}`,
}));
