"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
} from "@/services/next-auth";
import { publicApi } from "@/services/axios/api";
import { api_endpoints } from "@/lib/api-endpoints";

import { extractCookieHeader } from "@/lib/utils";
import { cookieOptions, USER_TYPES } from "@/lib/config";
import { APP_ORIGIN, PASSWORD_RESET_TOKEN_KEY } from "@/lib/constants";

import { UserSessionT } from "@/interface/db/auth.types";
import { SigninSchemaT } from "@/lib/schemas/auth/SigninSchema";
import { SignupUserSchemaT } from "@/lib/schemas/auth/SignupUserSchema";
import { SignupCompanySchemaT } from "@/lib/schemas/auth/SignupCompanySchema";
import { UpdatePasswordSchemaT } from "@/lib/schemas/auth/UpdatePasswordSchema";
import { VerifyIdentitySchemaT } from "@/lib/schemas/auth/VerifyIdentitySchema";
import { RequestPasswordUpdateSchemaT } from "@/lib/schemas/auth/RequestPasswordUpdateSchema";

export async function signupUser(data: SignupUserSchemaT) {
  const { data: response } = await publicApi.post<UserSessionT>(
    api_endpoints.auth.register,
    {
      ...data,
      user_type: USER_TYPES.JOB_SEEKER,
    }
  );

  return response;
}

export async function signupCompany(data: SignupCompanySchemaT) {
  const { data: response } = await publicApi.post<UserSessionT>(
    api_endpoints.auth.register,
    {
      ...data,
      user_type: USER_TYPES.EMPLOYER,
    }
  );

  return response;
}

export async function verifyEmail(token: string) {
  const { data: response } = await publicApi.post(
    api_endpoints.auth.verifyEmail,
    { token }
  );

  return response;
}

export async function signIn(data: SigninSchemaT) {
  await nextAuthSignIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
    callbackUrl: APP_ORIGIN,
  });
}

export async function logout() {
  await publicApi.post(api_endpoints.auth.logout);
  await nextAuthSignOut({ redirect: false });
  redirect("/");
}

export async function requestPasswordUpdate(
  data: RequestPasswordUpdateSchemaT
) {
  const { data: response } = await publicApi.post(
    api_endpoints.auth.requestPasswordReset,
    data
  );

  return response;
}

export async function verifyIdentity(data: VerifyIdentitySchemaT) {
  const { data: response, headers } = await publicApi.post(
    api_endpoints.auth.verifyPasswordResetPin,
    data
  );

  const token = await extractCookieHeader(headers, PASSWORD_RESET_TOKEN_KEY);

  if (!token) throw new Error("Token is not provided from the server");

  const cookieStore = await cookies();
  cookieStore.set(PASSWORD_RESET_TOKEN_KEY, token || "", cookieOptions);

  return response;
}

export async function updatePassword(data: UpdatePasswordSchemaT) {
  const cookieStore = await cookies();
  const resetToken = cookieStore.get("reset_token")?.value;

  if (!resetToken) throw new Error("Token is not provided");

  const { data: response } = await publicApi.post(
    api_endpoints.auth.updatePassword,
    data,
    { headers: { Cookie: [`${PASSWORD_RESET_TOKEN_KEY}=${resetToken}`] } }
  );

  cookieStore.delete(PASSWORD_RESET_TOKEN_KEY);

  return response;
}
