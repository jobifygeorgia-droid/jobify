import classnames from "classnames";

import Tooltip from "./Tooltip";
import { StaticIconT } from "@/components/ui/icons";
import { useTipTap } from "@/providers/TipTapProvider";

type MenuButtonT = {
  isActive?: boolean;
  disabled?: boolean;
  title?: string;
  onClick?: () => void;
  Icon: React.ComponentType<StaticIconT>;
};

const MenuButton: React.FC<MenuButtonT> = (props) => {
  const { menuButtonSize: size } = useTipTap();
  const { Icon, onClick, isActive, disabled, title } = props;

  return (
    <button
      onClick={onClick}
      className={classnames(
        "group/tiptap relative text-2xl flex items-center justify-center capitalize cursor-pointer size-8 rounded-full",
        {
          "bg-blue": isActive,
          "opacity-50": disabled,
        }
      )}
    >
      {title && <Tooltip>{title}</Tooltip>}

      <Icon
        width={size}
        height={size}
        className={classnames({ "text-white": isActive })}
      />
    </button>
  );
};

export default MenuButton;
