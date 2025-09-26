import classnames from "classnames";

import { Menu } from "@/components/ui";
import { IconT } from "@/components/ui/icons";

type OptionItemT = {
  text: string;
  isDanger?: boolean;
  onClick: () => void;
  Icon: React.ComponentType<IconT>;
};

const OptionItem: React.FC<OptionItemT> = (props) => {
  const { Icon, text, isDanger, onClick } = props;

  return (
    <Menu.MenuItem
      onClick={onClick}
      className={classnames({
        "hover:text-red!": isDanger,
        "hover:text-blue!": !isDanger,
      })}
    >
      <span className="size-5 flex items-center justify-center">
        <Icon size={22} className="text-current" />
      </span>
      <span className="text-base-sm">{text}</span>
    </Menu.MenuItem>
  );
};

export default OptionItem;
