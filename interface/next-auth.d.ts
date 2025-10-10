import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { USER_TYPES } from "@/lib/config";

declare module "next-auth" {
  interface Session {
    access?: string;
    refresh?: string;
    error?: string;
    exp?: number;
    user?: {
      id: number;
      email: string;
      user_type: USER_TYPES;
      full_name: string;
      phone_number: string | null;
    };
  }

  interface User {
    access?: string;
    refresh?: string;
    exp?: number;
    user?: {
      id: number;
      email: string;
      user_type: USER_TYPES;
      full_name: string;
      phone_number: string | null;
    };
  }

  interface JWT {
    access?: string;
    refresh?: string;
    error?: string;
    exp?: number;
    user?: {
      id: number;
      email: string;
      user_type: USER_TYPES;
      full_name: string;
      phone_number: string | null;
    };
  }
}
