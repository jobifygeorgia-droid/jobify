import classnames from "classnames";
import MuiMenuItem from "@mui/material/MenuItem";

import { useMenuContext } from "./Menu";

type MenuItemT = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
};

const MenuItem: React.FC<MenuItemT> = (props) => {
  const { children, className, onClick } = props;
  const { onClose } = useMenuContext();

  const onHandleClick = () => {
    onClick();
    onClose();
  };

  return (
    <MuiMenuItem
      onClick={onHandleClick}
      className={classnames(
        "flex items-center gap-4 text-dark-grey text-sm",
        className || ""
      )}
    >
      {children}
    </MuiMenuItem>
  );
};

export default MenuItem;
