"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type RouteTrackerT = {
  children: React.ReactNode;
};

const RouteTracker: React.FC<RouteTrackerT> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const paramsStr = searchParams.toString();

    const fullURL = `${pathname}${paramsStr ? `?${paramsStr}` : ""}`;

    const lastStoredURL = localStorage.getItem("currentRoute") || "";

    if (lastStoredURL === fullURL) return;

    localStorage.setItem("previousRoute", lastStoredURL);
    localStorage.setItem("currentRoute", fullURL);
  }, [pathname, searchParams]);

  return <div>{children}</div>;
};

export default RouteTracker;
