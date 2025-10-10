import z from "zod";

import * as validators from "../customValidators";

export const SignupCompanySchema = z.object({
  email: z.email("გთხოვთ მიუთითოთ ვალიდური იმაილი"),
  password: z
    .string()
    .min(1, "გთხოვთ შეიყვანოთ პაროლი")
    .refine(
      validators.isValidPassword.validator,
      validators.isValidPassword.message
    ),
  phone_number: z
    .string()
    .min(1, "გთხოვთ შეიყვანოთ მობ. ნომერი")
    .transform((v) => "+995".concat(v))
    .refine(
      validators.isValidGeorgianPhoneNumber.validator,
      validators.isValidGeorgianPhoneNumber.message
    ),
  employer_profile: z.object({
    company_name: z
      .string()
      .min(1, "გთხოვთ შეიყვანოთ კომპანიის სახელი")
      .refine(
        validators.isOnlyGeorgianLetters.validator,
        validators.isOnlyLatinLetters.message
      ),
    company_id_number: z.string("გთხოვთ მიუთითოთ საიდენტიფიკაციო კოდი"),
    contact_person: z.email("გთხოვთ მიუთითოთ საკონტაქტო პირის ელ.ფოსტა"),
  }),
});

export const signupCompanyInitialState: SignupCompanySchemaT = {
  employer_profile: {
    company_name: "კომპანიის სახელი",
    company_id_number: "12AC34BV",
    contact_person: "contact@io.com",
  },
  email: "nike@io.com",
  phone_number: "555444333",
  password: "Pass.1234",
};

export type SignupCompanySchemaT = z.infer<typeof SignupCompanySchema>;
