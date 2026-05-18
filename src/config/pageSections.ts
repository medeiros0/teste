/**
 * Ordem e tipo de cada bloco na página (âncoras e render em App).
 */
export type ImagePageSection = {
  kind: "image";
  sectionNumber: number;
};

export type QuizPageSection = {
  kind: "quiz";
};

export type VideoPageSection = {
  kind: "video";
  id: string;
  youtubeId: string;
  startSeconds: number;
  title: string;
  navLabel: string;
};

export type PageSection = ImagePageSection | QuizPageSection | VideoPageSection;

const IMAGE_NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14] as const;

const VIDEO_AFTER_5: VideoPageSection = {
  kind: "video",
  id: "sec-5-video",
  youtubeId: "auzYrSpez8Y",
  startSeconds: 120,
  title: "Vídeo",
  navLabel: "Vídeo",
};

function imageSection(sectionNumber: number): ImagePageSection {
  return { kind: "image", sectionNumber };
}

export const PAGE_SECTIONS: PageSection[] = [
  ...IMAGE_NUMS.slice(0, 5).map(imageSection),
  VIDEO_AFTER_5,
  ...IMAGE_NUMS.slice(5, 9).map(imageSection),
  { kind: "quiz" },
  ...IMAGE_NUMS.slice(9).map(imageSection),
];

export function getPageSectionNavId(section: PageSection): string {
  if (section.kind === "image") return `sec-${section.sectionNumber}`;
  if (section.kind === "quiz") return "sec-10";
  return section.id;
}

export function getPageSectionNavLabel(section: PageSection): string {
  if (section.kind === "image") return String(section.sectionNumber);
  if (section.kind === "quiz") return "10";
  return section.navLabel;
}
