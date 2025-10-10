"use client";

import Link from "next/link";
import { useMemo } from "react";
import classnames from "classnames";
import { usePathname } from "next/navigation";

import { DYNAMIC_ROUTES, USER_TYPES } from "@/lib/config";

const nav_routes = (userId: string) => [
  {
    title: "მთავარი",
    href: "/",
    roles: [USER_TYPES.EMPLOYER],
  },
  {
    title: "სამუშაო პანელი",
    href: DYNAMIC_ROUTES.company_profile(userId),
    roles: [USER_TYPES.EMPLOYER],
  },
];

type NavListT = {
  role: USER_TYPES | undefined;
};

const NavList: React.FC<NavListT> = (props) => {
  const { role } = props;

  const pathname = usePathname();

  const routes = useMemo(() => {
    return role
      ? nav_routes("123").filter((route) => route.roles.includes(role))
      : [];
  }, [role]);

  if (!role) return null;

  return (
    <ul className="flex items-center gap-10 pl-16">
      {routes.map((route) => (
        <li
          key={route.href}
          className={classnames(
            "hover:text-blue transition-colors duration-150",
            { "text-blue": pathname === route.href }
          )}
        >
          <Link href={route.href}>{route.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
