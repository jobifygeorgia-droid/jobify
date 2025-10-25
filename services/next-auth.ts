import NextAuth, { AuthError, JWT } from "next-auth";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import CredentialsProvider from "next-auth/providers/credentials";

import {
  API_ENDPOINT,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/lib/constants";
import { extractCookieHeader } from "@/lib/utils";
import { api_endpoints } from "@/lib/api-endpoints";

export class CustomAuthError extends AuthError {
  constructor(msg: string) {
    super();
    this.message = msg;
    this.stack = undefined;
  }
}

// global singletons (persist inside one node process)
const globalForAuth = globalThis as unknown as {
  refreshPromise?: Promise<any> | null;
  lastRefreshed?: JWT | null;
};

if (!globalForAuth.refreshPromise) globalForAuth.refreshPromise = null;
if (!globalForAuth.lastRefreshed) globalForAuth.lastRefreshed = null;

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Username", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials): Promise<any> {
        try {
          const { data, headers } = await axios.post(
            `${API_ENDPOINT}${api_endpoints.auth.login}`,
            credentials,
            {
              withCredentials: true,
              headers: { "Content-Type": "application/json" },
            }
          );

          const accessToken = await extractCookieHeader(
            headers,
            ACCESS_TOKEN_KEY
          );

          const refreshToken = await extractCookieHeader(
            headers,
            REFRESH_TOKEN_KEY
          );

          const sessionData = {
            access: accessToken,
            refresh: refreshToken,
            exp: jwtDecode(accessToken!).exp! * 1000,
            user: data.user,
          };

          return sessionData;
        } catch (error: any) {
          const backendMessage =
            error?.response?.data?.detail ||
            error?.response?.data?.message ||
            error?.response?.data?.error ||
            null;

          // Fallback human-readable error
          const message = backendMessage || "ელფოსტა ან პაროლი არასწორია";

          throw new CustomAuthError(message);
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      // build sessionData from token on first sign-in by default
      const sessionData: JWT = {
        user: token?.user as JWT["user"] | undefined,
        access: token?.access as string | undefined,
        refresh: token?.refresh as string | undefined,
        exp: token?.access
          ? normalizeExp(jwtDecode(token.access as string).exp!)
          : NaN,
      };

      // build session data for later requests - after initial sign-in
      if (user) {
        sessionData.user = user.user;
        sessionData.access = user.access;
        sessionData.refresh = user.refresh;
        sessionData.exp = normalizeExp(user.exp!);
      }

      const now = Date.now();
      const expMs = normalizeExp(sessionData.exp);
      const isExpired = now > (expMs ?? 0);

      // If session is not expired return it
      if (!isExpired) return sessionData as any;

      // If another refresh is in progress -> await it
      if (globalForAuth.refreshPromise) {
        const onGoingRefresh = await globalForAuth.refreshPromise;
        if (onGoingRefresh) return onGoingRefresh;
      }

      // If a recent refresh result exists and it's newer than the current token -> reuse it
      const lastSession = globalForAuth.lastRefreshed;
      if (lastSession && normalizeExp(lastSession?.exp) > (expMs || 0))
        return lastSession;

      // Start a refresh and store the promise globally
      globalForAuth.refreshPromise = refreshAccessToken(sessionData);

      try {
        const refreshed = await globalForAuth.refreshPromise;
        return refreshed ?? null;
      } finally {
        globalForAuth.refreshPromise = null;
      }
    },

    async session({ token }) {
      return {
        user: token.user,
        access: token.access,
        refresh: token.refresh,
        error: token.error,
        expires: new Date(normalizeExp(token.exp) || Date.now()).toISOString(),
      } as any;
    },
  },
});

// helper to normalize exp from token or number -> milliseconds
function normalizeExp(exp?: number) {
  if (!exp) return NaN;
  // if looks like seconds (10 digits), convert to ms
  if (exp < 1e12) return exp * 1000;
  return exp;
}

export async function refreshAccessToken(
  sessionData: JWT
): Promise<JWT | null> {
  try {
    const cookieHeaders = [
      `${ACCESS_TOKEN_KEY}=${sessionData.access}`,
      `${REFRESH_TOKEN_KEY}=${sessionData.refresh}`,
    ];

    const { headers } = await axios.post(
      `${API_ENDPOINT}${api_endpoints.auth.refresh}`,
      null,
      { withCredentials: true, headers: { Cookie: cookieHeaders } }
    );

    const [newAccessToken, newRefreshToken] = await Promise.all([
      extractCookieHeader(headers, ACCESS_TOKEN_KEY),
      extractCookieHeader(headers, REFRESH_TOKEN_KEY),
    ]);

    const newExp = jwtDecode(newAccessToken!).exp! * 1000;

    const updatedSession = {
      ...sessionData,
      access: newAccessToken,
      refresh: newRefreshToken ?? sessionData.refresh,
      exp: newExp,
    };

    globalForAuth.lastRefreshed = updatedSession;

    return updatedSession;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    // console.log(error);
    sessionData.error = "RefreshAccessTokenError";
    return null;
  }
}

export function checkIsExpired(exp?: string) {
  if (!exp) return true;

  const expDate = new Date(exp).getTime();
  const expMs = normalizeExp(expDate);

  return Date.now() > expMs;
}
