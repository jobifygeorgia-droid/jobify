import { chipStyles } from "./styles";

type ClickableChipT = {
  isActive: boolean;
  onClick: () => void;
};

type StaticChipT = {
  isActive?: undefined;
  onClick?: undefined;
};

export type ChipT = {
  type?: "primary" | "secondary" | "tertiary";
  className?: string;
  children: React.ReactNode;
} & (ClickableChipT | StaticChipT);

const Chip: React.FC<ChipT> = (props) => {
  const { children, isActive, className, onClick, type = "primary" } = props;

  return (
    <span
      onClick={onClick}
      className={chipStyles({ isActive, className, type })}
    >
      {children}
    </span>
  );
};

export default Chip;
