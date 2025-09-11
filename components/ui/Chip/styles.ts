import classnames from "classnames";

type Params = {
  className?: string;
  isActive?: boolean;
  type: "primary" | "secondary" | "tertiary";
};

export const chipStyles = (params: Params) =>
  classnames(
    "rounded-full text-base-sm text-center",
    {
      "bg-blue-light text-dark-grey-dark-active leading-[18px] py-3 px-7 cursor-pointer":
        params.type === "primary" || params.type === "secondary",
      "bg-orange-light text-orange font-medium leading-5 py-[3px] px-3":
        params.type === "tertiary",
    },
    {
      "bg-blue! text-white": params.isActive && params.type === "primary",
      "bg-orange text-white": params.isActive && params.type === "secondary",
    },
    params.className || ""
  );
