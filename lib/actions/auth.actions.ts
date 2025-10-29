"use server";

import { cookies } from "next/headers";

import { api } from "@/services/axios/api";
import { api_endpoints } from "@/lib/api-endpoints";

import { USER_TYPES } from "@/interface/global.types";
import { PASSWORD_RESET_TOKEN_KEY } from "@/lib/constants";
import { actionWrapper, extractCookieHeader } from "@/lib/utils";

import { UserSessionT } from "@/interface/db/auth.types";
import { SignupUserSchemaT } from "@/lib/schemas/auth/SignupUserSchema";
import { SignupCompanySchemaT } from "@/lib/schemas/auth/SignupCompanySchema";
import { UpdatePasswordSchemaT } from "@/lib/schemas/auth/UpdatePasswordSchema";
import { VerifyIdentitySchemaT } from "@/lib/schemas/auth/VerifyIdentitySchema";
import { RequestPasswordUpdateSchemaT } from "@/lib/schemas/auth/RequestPasswordUpdateSchema";

export async function signupUser(data: SignupUserSchemaT) {
  return await actionWrapper(async () => {
    const { response } = await api.post<
      SignupUserSchemaT & { user_type: USER_TYPES },
      UserSessionT
    >(api_endpoints.auth.register, {
      ...data,
      user_type: USER_TYPES.JOB_SEEKER,
    });

    return response;
  });
}

export async function signupCompany(data: SignupCompanySchemaT) {
  return await actionWrapper(async () => {
    const modifiedData = {
      user_type: USER_TYPES.EMPLOYER,
      ...data,
      employer_profile: {
        ...data.employer_profile,
        phone_number: data.phone_number,
      },
    };
    console.log(modifiedData);

    const { response } = await api.post<any, UserSessionT>(
      api_endpoints.auth.register,
      modifiedData
    );
    // const { response } = await api.post<
    //   SignupCompanySchemaT & { user_type: USER_TYPES },
    //   UserSessionT
    // >(api_endpoints.auth.register, {
    //   ...data,
    //   user_type: USER_TYPES.EMPLOYER,
    // });

    return response;
  });
}

export async function verifyEmail(token: string) {
  return await actionWrapper(async () => {
    const { response } = await api.post(api_endpoints.auth.verifyEmail, {
      token,
    });

    return response;
  });
}

export async function logout() {
  return await actionWrapper(async () => {
    const { response } = await api.post(api_endpoints.auth.logout);

    return response;
  });
}

export async function requestPasswordUpdate(
  data: RequestPasswordUpdateSchemaT
) {
  return await actionWrapper(async () => {
    const { response } = await api.post(
      api_endpoints.auth.requestPasswordReset,
      data
    );

    return response;
  });
}

export async function verifyIdentity(data: VerifyIdentitySchemaT) {
  return await actionWrapper(async () => {
    const { response, headers } = await api.post(
      api_endpoints.auth.verifyPasswordResetPin,
      data
    );

    const token = await extractCookieHeader(headers, PASSWORD_RESET_TOKEN_KEY);

    if (!token) throw new Error("Token is not provided from the server");

    const cookieStore = await cookies();
    cookieStore.set(PASSWORD_RESET_TOKEN_KEY, token);

    return response;
  });
}

export async function updatePassword(data: UpdatePasswordSchemaT) {
  return await actionWrapper(async () => {
    const cookieStore = await cookies();
    const resetToken = cookieStore.get(PASSWORD_RESET_TOKEN_KEY)?.value;

    if (!resetToken) throw new Error("Token is not provided");

    const { response } = await api.post(
      api_endpoints.auth.updatePassword,
      data,
      [`${PASSWORD_RESET_TOKEN_KEY}=${resetToken}`]
    );

    cookieStore.delete(PASSWORD_RESET_TOKEN_KEY);

    return response;
  });
}
