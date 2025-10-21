"use server";

import logger from "./logger";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/lib/constants";
import { auth, checkIsExpired, refreshAccessToken } from "@/services/next-auth";

/**
 * @see
 * - {@link auth}
 * - {@link ACCESS_TOKEN_KEY}
 * - {@link REFRESH_TOKEN_KEY}
 *
 * Builds an HTTP headers object for authenticated JSON requests.
 *
 * This function retrieves the current session, checks whether the access token
 * is expired, and attempts to refresh it if necessary. It then assembles a
 * Cookie header containing the access and refresh tokens (when available) and
 * sets the Content-Type to application/json.
 *
 * If token refresh fails, the error is logged and a minimal headers object is
 * returned that includes Content-Type but no authentication cookies.
 *
 * @returns A promise resolving to an object suitable for HTTP requests. On success,
 * returns an object with a `headers` property containing:
 * - Cookie: a semicolon-delimited string of available auth cookies
 * - Content-Type: "application/json"
 * On refresh failure, the returned headers omit authentication cookies but still
 * include Content-Type: "application/json".
 *
 * @remarks
 * - Tokens are considered expired based on `session.expires`.
 * - Access and refresh tokens are included using their respective cookie keys.
 * - Empty cookie entries are filtered out before joining with "; ".
 */
export default async function getHeaders() {
  let session = await auth();
  const isExpired = checkIsExpired(session?.expires);

  if (isExpired && session?.refresh) {
    try {
      session = await refreshAccessToken(session);
    } catch (error) {
      logger(error);
      return { Cookie: [], "Content-Type": "application/json" };
    }
  }

  const accessToken = session?.access;
  const refreshToken = session?.refresh;

  const cookieHeader = [
    accessToken ? `${ACCESS_TOKEN_KEY}=${accessToken}` : "",
    refreshToken ? `${REFRESH_TOKEN_KEY}=${refreshToken}` : "",
  ]
    .filter(Boolean)
    .join("; ");

  return {
    headers: { Cookie: cookieHeader, "Content-Type": "application/json" },
  };
}
