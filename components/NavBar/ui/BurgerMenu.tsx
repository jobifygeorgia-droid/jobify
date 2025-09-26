"use client";

import { useSearchParamUtils } from "@/hooks/utils";

import { BurgerMenu as BurgerMenuIcon, Close } from "@/components/ui/icons";
import Link from "next/link";
import { DYNAMIC_ROUTES, PATHS } from "@/lib/config";

type BurgerMenuT = {};

const BurgerMenu: React.FC<BurgerMenuT> = () => {
  const { mergeAndNavigate, deleteAndNavigate, searchParams } =
    useSearchParamUtils();

  const isOpen = searchParams.get("menu") === "open";

  const onToggleMenu = () => {
    if (isOpen) deleteAndNavigate(["menu"]);
    else mergeAndNavigate("menu=open");
  };

  return (
    <>
      <button
        onClick={onToggleMenu}
        className="laptop:hidden ml-auto flex items-center justify-center relative z-[9999] cursor-pointer"
      >
        {isOpen ? <Close size={32} /> : <BurgerMenuIcon size={32} />}
      </button>

      {isOpen && (
        <div className="scroll-block fixed z-[999] inset-0 flex justify-end">
          <div className="h-screen w-[320px] bg-white border-l border-l-bc flex flex-col py-4 px-2 gap-3 text-base-sm">
            <Link href={DYNAMIC_ROUTES.company_profile("123")}>
              კომპანიის პროფილი
            </Link>
            <Link href={DYNAMIC_ROUTES.user_profile("123")}>
              მომხმარებლის პროფილი
            </Link>
            <Link href={PATHS.sign_in}>შესვლა</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
