"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { DYNAMIC_ROUTES } from "@/lib/config";
import { useLogoutQuery } from "@/hooks/api/auth";

import { Menu } from "@/components/ui";
import { Person, Logout } from "@/components/ui/icons";

type AvatarMenuT = {
  isUser?: boolean;
  userId: number;
};

const AvatarMenu: React.FC<AvatarMenuT> = (props) => {
  const { isUser, userId } = props;

  const router = useRouter();

  const { logoutQuery } = useLogoutQuery();

  const userSrc =
    "https://images.unsplash.com/photo-1681500920181-0aff411f8cab?q=80&w=856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const companySrc =
    "https://images.unsplash.com/photo-1706879349357-f17b91de99a5?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const src = isUser ? userSrc : companySrc;

  const onNavigateToProfile = () => {
    router.push(
      isUser
        ? DYNAMIC_ROUTES.user_profile(userId.toString())
        : DYNAMIC_ROUTES.company_profile(userId.toString()),
      { scroll: true }
    );
  };

  return (
    <Menu>
      <Menu.MenuButton>
        <figure className="size-[54px] aspect-square relative bg-light-grey rounded-full overflow-hidden">
          <Image src={src} alt="" fill className="object-cover object-center" />
        </figure>
      </Menu.MenuButton>

      <Menu.MenuList>
        <Menu.MenuItem
          onClick={onNavigateToProfile}
          className="hover:text-blue!"
        >
          <Person size={18} className="text-current" />
          <span className="text-base-sm">პროფილი</span>
        </Menu.MenuItem>

        <Menu.MenuItem onClick={logoutQuery} className="hover:text-red!">
          <Logout size={18} className="text-current" />
          <span className="text-base-sm">გასვლა</span>
        </Menu.MenuItem>
      </Menu.MenuList>
    </Menu>
  );
};

export default AvatarMenu;
