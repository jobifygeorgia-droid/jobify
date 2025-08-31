import Link from "next/link";

import NavLink from "./NavLink";
import { Logo } from "@/components/ui";
import User from "./User";

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-white z-[99] py-2 flex items-center w-full gap-8 text-base font-medium text-dark-grey-dark-hover">
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
  );
};

export default NavBar;
