/**
 * Converts a company name into its Georgian genitive form (ნათესაობითი ბრუნვა)
 * e.g.:
 *  Nike → Nike-ის
 *  ნიკორა → ნიკორას
 *  რედბერი → რედბერის
 */
export default function toGenitive(name: string): string {
  const trimmed = name.trim();

  // Handle Latin words (brand names like Nike, Apple, etc.)
  const isLatin = /^[a-zA-Z]+$/.test(trimmed);

  if (isLatin) return `${trimmed}-ის`;

  // Handle Georgian rules
  const lastChar = trimmed.slice(-1);

  if (["ა"].includes(lastChar)) return `${trimmed.slice(0, -1)}ას`;

  if (["ი"].includes(lastChar)) return `${trimmed.slice(0, -1)}ერის`;

  if (["ე", "ო", "უ"].includes(lastChar)) return `${trimmed.slice(0, -1)}ოს`;

  // Default fallback
  return `${trimmed}-ის`;
}
