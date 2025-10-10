import z from "zod";

import * as validators from "../customValidators";

export const SignupUserSchema = z.object({
  full_name: z
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
  email: "snow@io.com",
  password: "Pass.1234",
  phone_number: "555444332",
  full_name: "ჯონ სნოუ",
};

export type SignupUserSchemaT = z.infer<typeof SignupUserSchema>;
