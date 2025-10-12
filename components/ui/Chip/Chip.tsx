import { ChipT } from "@/interface/ui/ui";
import { chipStyles } from "./styles";

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
