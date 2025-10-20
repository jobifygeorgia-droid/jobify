"use client";

import { useSession } from "next-auth/react";

import { Container, Logo } from "@/components/ui";
import { NavList, BurgerMenu, BottomNavigation, User } from "./ui";

const NavBar = () => {
  // const session = await auth();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      <div className="sticky top-0 bg-white z-[999]">
        <Container className="p-0!">
          <nav className="py-4 px-5 desktop-lg:px-0 flex items-center w-full gap-8 text-base font-medium text-dark-grey-dark-hover">
            <Logo />

            <div className="w-full items-center hidden laptop:flex">
              <NavList role={session?.user?.user_type} userId={user?.id} />

              <User user={user} />
            </div>

            <BurgerMenu user={user} />
          </nav>
        </Container>
      </div>

      <BottomNavigation user={user} />
    </>
  );
};

export default NavBar;
