"use server";

import { request } from "@/lib/utils/request";
import { SignupUserSchemaT } from "@/lib/schemas/SignupUserSchema";
import { UserTypes } from "@/interface/global.types";
import { SignupUserResponseT } from "@/interface/db/auth.types";
import { SigninSchemaT } from "../schemas/SigninSchema";

export async function signupUser(data: SignupUserSchemaT) {
  const user = await request<SignupUserResponseT>("/register", {
    method: "POST",
    body: { ...data, user_type: UserTypes.JOB_SEEKER },
  });

  console.log(user);
}

export async function signupCompany() {}

export async function signIn(data: SigninSchemaT) {
  const session = await request("/token/email", { method: "POST", body: data });
  console.log(session);
}

export async function requestPasswordUpdate() {}

export async function verifyIdentity() {}

export async function updatePassword() {}
