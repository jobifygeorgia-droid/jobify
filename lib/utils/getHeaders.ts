"use server";

import logger from "./logger";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/lib/constants";
import { auth, checkIsExpired, refreshAccessToken } from "@/services/next-auth";

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
