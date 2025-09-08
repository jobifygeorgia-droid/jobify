import classnames from "classnames";

import { Menu } from "@/components/ui";
import { IconPropsT } from "@/components/ui/icons";

type OptionItemT = {
  Icon: React.ComponentType<IconPropsT>;
  text: string;
  isDanger?: boolean;
};

const OptionItem: React.FC<OptionItemT> = (props) => {
  const { Icon, text, isDanger } = props;

  return (
    <Menu.MenuItem
      className={classnames({
        "hover:text-red!": isDanger,
        "hover:text-blue!": !isDanger,
      })}
    >
      <span className="size-5 flex items-center justify-center">
        <Icon width={22} height={22} className="fill-current" />
      </span>
      <span className="text-base-sm">{text}</span>
    </Menu.MenuItem>
  );
};

export default OptionItem;
