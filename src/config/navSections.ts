/**
 * Lista única usada pela Navbar: âncoras #sec-1 … #sec-13.
 * Rótulos só com número — navegação mantém-se no cabeçalho.
 */
export type NavSection = {
  id: string;
  label: string;
};

export const NAV_SECTIONS: NavSection[] = Array.from({ length: 13 }, (_, i) => {
  const n = i + 1;
  return {
    id: `sec-${n}`,
    label: String(n),
  };
});
