"use client";

import Link from "next/link";
import { useMemo } from "react";
import classnames from "classnames";
import { usePathname } from "next/navigation";

import { DYNAMIC_ROUTES } from "@/lib/config";
import { USER_TYPES } from "@/interface/global.types";

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
  userId?: number;
  role?: USER_TYPES;
};

const NavList: React.FC<NavListT> = (props) => {
  const { role, userId } = props;

  const pathname = usePathname();

  const routes = useMemo(() => {
    return role && userId
      ? nav_routes(userId.toString()).filter((route) =>
          route.roles.includes(role)
        )
      : [];
  }, [role, userId]);

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
