import classnames from "classnames";
import MuiMenuItem from "@mui/material/MenuItem";

import { useMenuContext } from "./Menu";

type MenuItemT = {
  children: React.ReactNode;
  className?: string;
};

const MenuItem: React.FC<MenuItemT> = (props) => {
  const { children, className } = props;
  const { onClose } = useMenuContext();

  return (
    <MuiMenuItem
      onClick={onClose}
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
