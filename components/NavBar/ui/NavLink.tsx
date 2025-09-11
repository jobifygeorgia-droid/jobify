import Link from "next/link";

type NavLinkT = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkT> = (props) => {
  const { children, href } = props;

  return (
    <li className="hover:text-blue transition-colors duration-150">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLink;
