import User from "./User";
import BottomNavigation from "./ui/BottomNavigation";
import BurgerMenu from "./ui/BurgerMenu";
import NavList from "./ui/NavList";
import { Container, Logo } from "@/components/ui";

const NavBar: React.FC = () => {
  const roles = ["job_seeker", "employer"];

  const isAuthenticated = 0;
  const role = isNaN(isAuthenticated) ? "" : roles[isAuthenticated];

  return (
    <>
      <div className="sticky top-0 bg-white z-[999]">
        <Container className="p-0!">
          <nav className="py-4 px-5 desktop-lg:px-0 flex items-center w-full gap-8 text-base font-medium text-dark-grey-dark-hover">
            <Logo />

            <div className="w-full items-center hidden laptop:flex">
              <NavList role={role} />

              <User role={role} />
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
