"use client";

import { LS } from "@/lib/utils";
import { useRouter } from "next/navigation";

type BurgerMenuListItemT = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenuListItem: React.FC<BurgerMenuListItemT> = (props) => {
  const { children, onClick, href, setIsOpen } = props;

  const router = useRouter();

  const onClickHandler = () => {
    if (href) router.push(href);

    setIsOpen(false);
    LS.removeBurgerMenuState();

    onClick?.();
  };

  return (
    <li
      onClick={onClickHandler}
      className="py-3 px-5 hover:text-blue flex items-center gap-3 font-medium cursor-pointer"
    >
      {children}
    </li>
  );
};

export default BurgerMenuListItem;
