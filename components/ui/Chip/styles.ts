import classnames from "classnames";

type Params = {
  className?: string;
  isActive?: boolean;
  type: "primary" | "secondary" | "tertiary";
  size?: "sm";
};

export const chipStyles = (params: Params) => {
  const isPrimaryOrSecondary =
    params.type === "primary" || params.type === "secondary";

  return classnames(
    "rounded-full text-sm tablet:text-base-sm text-center",
    {
      "bg-blue-light text-dark-grey-dark-active leading-[18px] py-2 tablet:py-3 px-4 tablet:px-7 cursor-pointer":
        isPrimaryOrSecondary,
      "bg-orange-light text-orange tablet:font-medium text-xs! tablet:text-sm! leading-5 py-[1px] px-3 line-clamp-1":
        params.type === "tertiary",
    },
    {
      "bg-blue! text-white": params.isActive && params.type === "primary",
      "bg-orange text-white": params.isActive && params.type === "secondary",
    },
    {
      "tablet:px-4! tablet:py-2!": params.size === "sm" && isPrimaryOrSecondary,
    },
    params.className || ""
  );
};
