import { Menu } from "./styles";
import { useMenuContext } from "./Menu";

type MenuListT = {
  children: React.ReactNode;
};

const MenuList: React.FC<MenuListT> = (props) => {
  const { children } = props;

  const { open, onClose, anchorEl } = useMenuContext();

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={onClose}
      onClick={onClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
    </Menu>
  );
};

export default MenuList;
