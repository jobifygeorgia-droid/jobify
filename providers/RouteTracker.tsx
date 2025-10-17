"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { LS } from "@/lib/utils";

type RouteTrackerT = {
  children: React.ReactNode;
};

const RouteTracker: React.FC<RouteTrackerT> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const paramsStr = searchParams.toString();

    const fullURL = `${pathname}${paramsStr ? `?${paramsStr}` : ""}`;

    const { currentRoute: lastStoredURL } = LS.getRouteTrack();

    if (lastStoredURL === fullURL) return;

    LS.setRouteTrack(fullURL);
  }, [pathname, searchParams]);

  return <div>{children}</div>;
};

export default RouteTracker;
