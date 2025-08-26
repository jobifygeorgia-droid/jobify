import classnames from "classnames";
import { IconPropsT } from "./icons";

type IconChipT = {
  /**
   * size presets
   * - sm > fontSize - 12px / icon size 18/18
   * - base > fontSize - 14px / icon size 22/22
   */
  size?: "sm" | "base";
  text: string;
  Icon: React.ComponentType<IconPropsT>;
};

const IconChip: React.FC<IconChipT> = (props) => {
  const { Icon, text, size = "base" } = props;

  return (
    <div
      className={classnames("flex items-center", {
        "text-sm gap-1": size === "sm",
        "text-base-sm gap-2": size === "base",
      })}
    >
      <Icon
        width={size === "base" ? 22 : 18}
        height={size === "base" ? 22 : 18}
        className="fill-none stroke-light-grey-active"
      />
      <span className="text-light-grey-dark-active">{text}</span>
    </div>
  );
};

export default IconChip;
