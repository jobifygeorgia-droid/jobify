import NextAuth, { JWT } from "next-auth";
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
        const res = await fetch(`${API_ENDPOINT}${api_endpoints.auth.login}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        if (!res.ok) return null;

        const data = await res.json();

        const sessionData = {
          access: data.access,
          refresh: data.refresh,
          exp: jwtDecode(data.access!).exp! * 1000,
          user: {
            id: data?.id,
            email: data?.email,
            full_name: data?.full_name,
            user_type: data?.user_type,
          },
        };

        return sessionData;
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

async function refreshAccessToken(sessionData: JWT): Promise<JWT | null> {
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

    console.log("TOKEN IS REFRESHED", {
      PID: process.pid,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });

    return updatedSession;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    // console.log(error);
    sessionData.error = "RefreshAccessTokenError";
    return null;
  }
}
