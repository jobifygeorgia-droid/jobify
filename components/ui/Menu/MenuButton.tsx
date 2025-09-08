import classnames from "classnames";

import { useMenuContext } from "./Menu";

type MenuButtonT = {
  className?: string;
  children: React.ReactNode;
};

const MenuButton: React.FC<MenuButtonT> = (props) => {
  const { children, className } = props;

  const { onOpen } = useMenuContext();

  return (
    <button
      type="button"
      onClick={onOpen}
      className={classnames("cursor-pointer outline-none", className || "")}
    >
      {children}
    </button>
  );
};

export default MenuButton;
