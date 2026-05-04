/**
 * Lista única usada pela Navbar: âncoras #sec-1 … #sec-13.
 * Altere os rótulos aqui para refletir títulos reais do site.
 */
export type NavSection = {
  id: string;
  label: string;
};

export const NAV_SECTIONS: NavSection[] = Array.from({ length: 13 }, (_, i) => {
  const n = i + 1;
  return {
    id: `sec-${n}`,
    label: `Secção ${n}`,
  };
});
