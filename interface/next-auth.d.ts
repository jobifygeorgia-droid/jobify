import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { USER_TYPES } from "@/interface/global.types";
import { SessionUserT } from "./global.types";

declare module "next-auth" {
  interface Session {
    access?: string;
    refresh?: string;
    error?: string;
    expires?: string;
    user?: SessionUserT;
  }

  interface User {
    access?: string;
    refresh?: string;
    exp?: number;
    user?: SessionUserT;
  }

  interface JWT {
    access?: string;
    refresh?: string;
    error?: string;
    exp?: number;
    user?: SessionUserT;
  }
}
