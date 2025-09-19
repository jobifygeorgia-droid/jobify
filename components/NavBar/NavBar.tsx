import User from "./User";
import NavList from "./ui/NavList";
import { Container, Logo } from "@/components/ui";

const NavBar: React.FC = () => {
  const roles = ["job_seeker", "employer"];

  const isAuthenticated = 0;
  const role = isNaN(isAuthenticated) ? "" : roles[isAuthenticated];

  return (
    <div className="sticky top-0 bg-white z-[99]">
      <Container className="p-0!">
        <nav className="py-4 flex items-center w-full gap-8 text-base font-medium text-dark-grey-dark-hover">
          <Logo />

          <NavList role={role} />

          <User role={role} />
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
