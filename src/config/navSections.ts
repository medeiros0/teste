import {
  PAGE_SECTIONS,
  getPageSectionNavId,
  getPageSectionNavLabel,
} from "./pageSections";

/**
 * Lista usada pela Navbar: mesma ordem que PAGE_SECTIONS.
 */
export type NavSection = {
  id: string;
  label: string;
};

export const NAV_SECTIONS: NavSection[] = PAGE_SECTIONS.map((section) => ({
  id: getPageSectionNavId(section),
  label: getPageSectionNavLabel(section),
}));
