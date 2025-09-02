import z from "zod";

import * as validators from "./customValidators";

export const SigninSchema = z.object({
  email: z.email("გთხოვთ მიუთითოთ ვალიდური იმაილი"),
  password: z
    .string()
    .min(1, "გთხოვთ შეიყვანოთ პაროლი")
    .refine(
      validators.isValidPassword.validator,
      validators.isValidPassword.message
    ),
});

export const signinInitialState: SigninSchemaT = {
  email: "user@io.com",
  password: "password.1234",
};

export type SigninSchemaT = z.infer<typeof SigninSchema>;
