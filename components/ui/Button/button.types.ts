import Link from "next/link";

export type ButtonBaseT = {
  fullWidth?: boolean;
  buttonType?: "primary" | "secondary" | "tertiary" | "text" | "outlined";
  /**
   * children alignment presets
   * - default - start
   */
  justify?: "center" | "between";
  /**
   * Border radius presets
   * - default - full
   * - sm → 3px
   * - base → 10px
   * - full → 100%
   */
  rounded?: "sm" | "base" | "full";
  /**
   * Text size of the button
   * - default - base
   * - sm → 14px
   * - base → 16px
   * - md → 18px
   * - lg → 20px
   */
  textSize?: "sm" | "base" | "md" | "lg";
  /**
   * Padding presets
   * - default - base
   * - base → px-5 py-3 → (20/12)
   * - base-wide → px-9 py-3 → (36/12)
   * - base-wider → px-12 py-3 → (48/12)
   * - md → px-10 py-4 → (40/16)
   */
  paddingSize?: "base" | "base-wide" | "base-wider" | "md";
  className?: string;
};

export type ButtonT = ButtonBaseT & React.ComponentProps<"button">;
export type AnchorButtonT = ButtonBaseT & React.ComponentProps<typeof Link>;
