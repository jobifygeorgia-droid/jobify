import Link from "next/link";

import NavLink from "./NavLink";
import { Container, Logo } from "@/components/ui";
import User from "./User";

const NavBar: React.FC = () => {
  return (
    <div className="sticky top-0 bg-white z-[99]">
      <Container className="p-0!">
        <nav className="py-2 flex items-center w-full gap-8 text-base font-medium text-dark-grey-dark-hover">
          <Logo />

          <ul className="flex items-center gap-10 pl-16">
            <NavLink href="/">მთავარი</NavLink>
            <NavLink href="/">შეფასებები</NavLink>
          </ul>

          <div className="flex items-center ml-auto gap-8">
            <Link href="/">ვაკანსიის დამატება</Link>

            <User />
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default NavBar;
