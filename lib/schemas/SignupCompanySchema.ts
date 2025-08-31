import z from "zod";

import * as validators from "./customValidators";

export const SignupCompanySchema = z.object({
  company_name: z
    .string()
    .min(1, "გთხოვთ შეიყვანოთ კომპანიის სახელი")
    .refine(
      validators.isOnlyGeorgianLetters.validator,
      validators.isOnlyLatinLetters.message
    ),
  company_id: z.email("გთხოვთ მიუთითოთ საიდენტიფიკაციო კოდი"),
  contact_person: z.email("გთხოვთ მიუთითოთ საკონტაქტო პირი"),
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

export const signupCompanyInitialState: SignupCompanySchemaT = {
  company_name: "კომპანიის სახელი",
  company_id: "12AC34BV",
  contact_person: "საკონტაქტო პირი",
  email: "company@io.com",
  phone_number: "555444333",
  password: "password",
};

export type SignupCompanySchemaT = z.infer<typeof SignupCompanySchema>;
