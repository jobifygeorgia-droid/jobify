import { ChipT } from "@/interface/ui/ui";
import { chipStyles } from "./styles";

const Chip: React.FC<ChipT> = (props) => {
  const { isActive, className, type = "primary", size } = props;

  return (
    <span
      onClick={props.onClick}
      className={chipStyles({ isActive, className, type, size })}
    >
      {props.children}
    </span>
  );
};

export default Chip;
