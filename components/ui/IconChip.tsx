import classnames from "classnames";
import { IconT } from "./icons";

type IconChipT = {
  /**
   * size presets
   * - sm > fontSize - 12px / icon size 18/18
   * - base > fontSize - 14px / icon size 22/22
   */
  size?: "sm" | "base";
  text: string;
  Icon?: React.ComponentType<IconT>;
  children?: React.ReactNode;
  className?: string;
};

const IconChip: React.FC<IconChipT> = (props) => {
  const { Icon, text, size = "base", children, className = "" } = props;

  return (
    <div
      className={classnames("flex items-center", className, {
        "text-sm gap-1": size === "sm",
        "text-sm laptop:text-base-sm gap-2": size === "base",
      })}
    >
      {children ? (
        children
      ) : Icon ? (
        <Icon
          size={size === "base" ? 22 : 18}
          className="fill-none stroke-light-grey-active"
        />
      ) : null}
      <span className="text-light-grey-dark-active">{text}</span>
    </div>
  );
};

export default IconChip;
