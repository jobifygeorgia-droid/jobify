"use client";

import { useState, createContext, useContext } from "react";

import MenuButton from "./MenuButton";
import MenuList from "./MenuList";
import MenuItem from "./MenuItem";

type MenuT = React.FC<{ children: React.ReactNode }> & {
  MenuButton: typeof MenuButton;
  MenuList: typeof MenuList;
  MenuItem: typeof MenuItem;
};

type MenuContextT = {
  onClose: () => void;
  anchorEl: null | HTMLElement;
  open: boolean;
  onOpen: (e: React.MouseEvent<HTMLElement>) => void;
};

const MenuContext = createContext<MenuContextT>({
  onClose: () => {},
  anchorEl: null,
  open: false,
  onOpen: () => {},
});

const Menu: MenuT = (props) => {
  const { children } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const onOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const onClose = () => setAnchorEl(null);

  return (
    <MenuContext.Provider value={{ onClose, anchorEl, open, onOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

Menu.MenuButton = MenuButton;
Menu.MenuList = MenuList;
Menu.MenuItem = MenuItem;

export default Menu;

export const useMenuContext = () => useContext(MenuContext);
