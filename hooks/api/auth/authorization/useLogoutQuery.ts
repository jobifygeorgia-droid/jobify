"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut as nextAuthSignOut, useSession } from "next-auth/react";

import { PATHS } from "@/lib/config";
import { logout } from "@/lib/actions/auth.actions";
import { getStatus, isPrivateRoute, logger, LS, StatusT } from "@/lib/utils";

/**
 * @see
 * - {@link PATHS}
 * - {@link logout}
 *
 * React hook that encapsulates the full sign-out workflow and exposes its async status.
 *
 * Workflow:
 * - Sets status to `pending` and resolves the current route from local storage to detect if user is located on private route.
 * - Calls the app-level {@link logout}() API.
 * - On failure:
 *   - sets status to `failed` with a localized fallback message
 * - On success:
 *   - triggers `NextAuth signOut` with a redirect to `PATHS.home`
 *   - updates the NextAuth session
 *   - sets status to `success`
 *   - optionally navigates to `PATHS.home` if the current route is private
 *   - refreshes the router.
 *
 * Side effects:
 * - Navigates (push to home for private routes) and refreshes the current route.
 * - Invokes NextAuth `signOut` and `useSession().update()`.
 *
 * Usage notes:
 * - Client-only: call from React components (e.g., event handlers), not during render.
 * - The returned `status` reflects the lifecycle: idle → pending → success | failed.
 *
 * @returns An object with:
 * - `status` — {@link StatusT} reflecting the request lifecycle.
 * - `logoutQuery`: () => Promise<void> - async function to initiate the logout workflow.
 */
export default function useLogoutQuery() {
  const router = useRouter();
  const { update } = useSession();

  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function logoutQuery() {
    setStatus(() => getStatus.pending());

    const { currentRoute } = LS.getRouteTrack();
    const isOnPrivateRoute = isPrivateRoute(currentRoute);

    const { error } = await logout();

    if (error) {
      setStatus(() => ({
        ...getStatus.failed(error),
        message: error.message || "დაფიქსირდა შეცდომა საიტიდან გასვლის დროს",
      }));

      logger(error);

      return;
    }

    await nextAuthSignOut({ redirectTo: PATHS.home });
    await update();

    setStatus(() => getStatus.success());
    if (isOnPrivateRoute) router.push(PATHS.home);

    router.refresh();
  }

  return { logoutQuery, status };
}
