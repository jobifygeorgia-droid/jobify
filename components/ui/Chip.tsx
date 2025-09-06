import classnames from "classnames";

type ClickableChipT = {
  isActive: boolean;
  onClick: () => void;
};

type StaticChipT = {
  isActive?: undefined;
  onClick?: undefined;
};

type ChipT = {
  className?: string;
  children: React.ReactNode;
} & (ClickableChipT | StaticChipT);

const Chip: React.FC<ChipT> = (props) => {
  const { children, isActive, className, onClick } = props;

  const isStaticChip = isActive === undefined;

  return (
    <span
      onClick={onClick}
      className={classnames(
        "rounded-full text-base-sm text-center",
        className || "",
        {
          "bg-orange-light text-orange font-medium leading-5 py-[3px] px-3":
            isStaticChip,
          "bg-blue-light text-dark-grey-dark-active leading-[18px] py-3 px-7 cursor-pointer":
            !isStaticChip,
        },
        { "bg-orange text-white": isActive }
      )}
    >
      {children}
    </span>
  );
};

export default Chip;
