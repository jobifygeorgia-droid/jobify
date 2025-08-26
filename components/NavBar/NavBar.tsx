import Link from "next/link";

import NavLink from "./NavLink";
import { Logo, Button } from "@/components/ui";

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center w-full gap-8 text-base font-medium text-dark-grey-dark-hover">
      <Logo />

      <ul className="flex items-center gap-10 pl-16">
        <NavLink href="/">მთავარი</NavLink>
        <NavLink href="/">შეფასებები</NavLink>
      </ul>

      <div className="flex items-center ml-auto gap-8">
        <Link href="/">ვაკანსიის დამატება</Link>

        <Button paddingSize="base-wider">შესვლა</Button>
      </div>
    </nav>
  );
};

export default NavBar;
