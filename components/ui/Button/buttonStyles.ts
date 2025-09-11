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
    "cursor-pointer flex items-center gap-2 active:outline-none focus:outline-none transition-colors duration-150 disabled:pointer-events-none font-medium",
    {
      "justify-center": justify === "center",
      "justify-between": justify === "between",
    },
    {
      "bg-blue-light text-blue hover:bg-blue-hover hover:text-white active:bg-blue-active active:text-white focus:bg-blue-active focus:text-white disabled:bg-blue-light-active disabled:text-white":
        buttonType === "primary",
      "bg-orange-light-hover text-orange hover:bg-orange hover:text-white active:bg-orange-active active:text-white focus:bg-orange-active focus:text-white disabled:bg-orange-light-active disabled:text-white":
        buttonType === "secondary",
      "bg-light-grey text-dark-grey-active hover:bg-light-grey-hover active:bg-light-grey-active focus:bg-light-grey-active disabled:bg-light-grey disabled:text-light-grey-dark":
        buttonType === "tertiary",
      "bg-none border border-bc text-dark-grey-darker hover:border-light-grey-active active:border-light-grey-dark-active focus:border-light-grey-dark-active disabled:bg-light-grey-light-active disabled:text-light-grey-hover":
        buttonType === "outlined",
      "bg-none text-dark-grey-darker hover:text-dark-grey-dark-hover disabled:text-dark-grey-light-active active:underline focus:underline underline-offset-5":
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
