import classnames from "classnames";

import { ButtonBaseT } from "./button.types";

export const buttonStyles = (params: ButtonBaseT) => {
  const {
    buttonType,
    textSize = "base",
    paddingSize = "base",
    rounded = "base",
    fullWidth = false,
    justify = "center",
    className,
  } = params;

  return classnames(
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
  );
};
