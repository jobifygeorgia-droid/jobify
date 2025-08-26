import classnames from "classnames";

import Tooltip from "./Tooltip";
import { IconPropsT } from "@/components/ui/icons";

type MenuButtonT = {
  isActive?: boolean;
  disabled?: boolean;
  title?: string;
  onClick?: () => void;
  Icon: React.ComponentType<IconPropsT>;
};

const MenuButton: React.FC<MenuButtonT> = (props) => {
  const { Icon, onClick, isActive, disabled, title } = props;

  return (
    <button
      onClick={onClick}
      className={classnames(
        "group relative text-2xl flex items-center justify-center capitalize cursor-pointer size-8 rounded-full",
        {
          "bg-blue": isActive,
          "opacity-50": disabled,
        }
      )}
    >
      {title && <Tooltip>{title}</Tooltip>}

      <Icon
        width={18}
        height={18}
        className={classnames({ "text-white": isActive })}
      />
    </button>
  );
};

export default MenuButton;
