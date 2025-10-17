"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut as nextAuthSignOut } from "next-auth/react";

import { PATHS } from "@/lib/config";
import { logout } from "@/lib/actions/auth.actions";
import { getStatus, isPrivateRoute, logger, LS, StatusT } from "@/lib/utils";

export default function useLogoutQuery() {
  const router = useRouter();
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function logoutQuery() {
    try {
      setStatus(() => getStatus.pending());

      const { currentRoute } = LS.getRouteTrack();
      const isOnPrivateRoute = isPrivateRoute(currentRoute);

      await logout();
      await nextAuthSignOut({ redirectTo: PATHS.home });

      router.refresh();
      setStatus(() => getStatus.success());

      if (isOnPrivateRoute) router.push(PATHS.home);
    } catch (error) {
      const status = getStatus.failed(error);

      setStatus(() => ({
        ...status,
        message: status.message || "დაფიქსირდა შეცდომა საიტიდან გასვლის დროს",
      }));

      logger(error);
    }
  }

  return { logoutQuery, status };
}
