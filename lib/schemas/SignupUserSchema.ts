import z from "zod";

import * as validators from "./customValidators";

export const SignupUserSchema = z.object({
  username: z
    .string()
    .min(1, "გთხოვთ შეიყვანოთ მომხმარებლის სრული სახელი")
    .refine(
      validators.isOnlyGeorgianLetters.validator,
      validators.isOnlyLatinLetters.message
    ),
  email: z.email("გთხოვთ მიუთითოთ ვალიდური იმაილი"),
  phone_number: z
    .string()
    .min(1, "გთხოვთ შეიყვანოთ მობ. ნომერი")
    .transform((v) => "+995".concat(v))
    .refine(
      validators.isValidGeorgianPhoneNumber.validator,
      validators.isValidGeorgianPhoneNumber.message
    ),
  password: z
    .string()
    .min(1, "გთხოვთ შეიყვანოთ პაროლი")
    .refine(
      validators.isValidPassword.validator,
      validators.isValidPassword.message
    ),
});

export const signupUserInitialState: SignupUserSchemaT = {
  username: "მომხმარებლის სახელი",
  email: "user@io.com",
  phone_number: "555444333",
  password: "password.1234",
};

export type SignupUserSchemaT = z.infer<typeof SignupUserSchema>;
