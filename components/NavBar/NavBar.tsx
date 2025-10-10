import { auth } from "@/services/next-auth";

import User from "./User";
import NavList from "./ui/NavList";
import BurgerMenu from "./ui/BurgerMenu";
import BottomNavigation from "./ui/BottomNavigation";
import { Container, Logo } from "@/components/ui";

const NavBar = async () => {
  const session = await auth();

  return (
    <>
      <div className="sticky top-0 bg-white z-[999]">
        <Container className="p-0!">
          <nav className="py-4 px-5 desktop-lg:px-0 flex items-center w-full gap-8 text-base font-medium text-dark-grey-dark-hover">
            <Logo />

            <div className="w-full items-center hidden laptop:flex">
              <NavList role={session?.user?.user_type} />

              <User role={session?.user?.user_type} />
            </div>

            <BurgerMenu />
          </nav>
        </Container>
      </div>

      <BottomNavigation />
    </>
  );
};

export default NavBar;
