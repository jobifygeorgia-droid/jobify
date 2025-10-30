"use client";

import { useLogoutQuery } from "@/hooks/api/auth";

import { Logout } from "@/components/ui/icons";

type BurgerMenuLogoutButtonT = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenuLogoutButton: React.FC<BurgerMenuLogoutButtonT> = (props) => {
  const { setIsOpen } = props;

  const { logoutQuery } = useLogoutQuery();

  const onLogout = async () => {
    await logoutQuery();
    setIsOpen(false);
  };

  return (
    <button
      onClick={onLogout}
      className="py-3 px-5 mt-auto w-max flex items-center gap-3 cursor-pointer"
    >
      <Logout />
      <span>გასვლა</span>
    </button>
  );
};

export default BurgerMenuLogoutButton;
