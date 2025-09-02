import z from "zod";

import * as validators from "./customValidators";

export const RequestPasswordUpdateSchema = z.object({
  email: z.email("გთხოვთ მიუთითოთ ვალიდური იმაილი"),
  phone_number: z
    .string()
    .min(1, "გთხოვთ შეიყვანოთ მობ. ნომერი")
    .transform((v) => "+995".concat(v))
    .refine(
      validators.isValidGeorgianPhoneNumber.validator,
      validators.isValidGeorgianPhoneNumber.message
    ),
});

export const requestPasswordUpdateInitialState: RequestPasswordUpdateSchemaT = {
  email: "user@io.com",
  phone_number: "555444333",
};

export type RequestPasswordUpdateSchemaT = z.infer<
  typeof RequestPasswordUpdateSchema
>;
