import classnames from "classnames";

export type ButtonT = {
  fullWidth?: boolean;
  buttonType?: "primary" | "secondary" | "text" | "outlined";
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
} & React.ComponentProps<"button">;

const Button: React.FC<ButtonT> = (props) => {
  const {
    buttonType = "primary",
    textSize = "base",
    paddingSize = "base",
    rounded = "full",
    fullWidth = false,
    justify = "center",
    className,
    children,
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      className={classnames(
        className || "",
        "cursor-pointer flex items-center gap-2 active:outline-none focus:outline-none transition-colors duration-150 disabled:pointer-events-none",
        {
          "justify-center": justify === "center",
          "justify-between": justify === "between",
        },
        {
          "bg-blue text-blue-light hover:bg-blue-hover disabled:bg-blue-light-active active:bg-blue-active focus:bg-blue-active":
            buttonType === "primary",
          "bg-blue-light-hover text-blue hover:bg-blue-light-active disabled:bg-blue-light disabled:text-blue-light-active active:bg-blue-light-active focus:bg-blue-light-active":
            buttonType === "secondary",
          "bg-none border border-bc text-dark-grey-darker hover:border-light-grey-active disabled:bg-light-grey-light-active disabled:text-light-grey-hover active:border-light-grey-dark-active focus:border-light-grey-dark-active":
            buttonType === "outlined",
          "bg-none text-dark-grey-darker font-bold hover:text-dark-grey-dark-hover disabled:text-dark-grey-light-active active:underline focus:underline underline-offset-5":
            buttonType === "text",
        },
        {
          "text-base-sm ": textSize === "sm",
          "text-base ": textSize === "base",
          "text-md": textSize === "md",
          "text-lg": textSize === "lg",
        },
        {
          "py-3 px-5": paddingSize === "base",
          "py-3 px-9": paddingSize === "base-wide",
          "py-3 px-12": paddingSize === "base-wider",
          "py-4 px-10": paddingSize === "md",
        },
        { "w-full": fullWidth },
        {
          "rounded-[3px]": rounded === "sm",
          "rounded-[10px]": rounded === "base",
          "rounded-full": rounded === "full",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
