import z from "zod";

import * as validators from "./customValidators";

export const UpdatePasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "გთხოვთ შეიყვანოთ პაროლი")
      .refine(
        validators.isValidPassword.validator,
        validators.isValidPassword.message
      ),
    confirmPassword: z.string().min(1, "გთხოვთ გაიმეოროთ პაროლი"),
  })
  .refine(
    (data) => {
      return validators.confirmPasswordValidation.validator(
        data.password,
        data.confirmPassword
      );
    },
    {
      message: validators.confirmPasswordValidation.message,
      path: ["confirmPassword"],
    }
  );

export const updatePasswordInitialState: UpdatePasswordSchemaT = {
  password: "password",
  confirmPassword: "password",
};

export type UpdatePasswordSchemaT = z.infer<typeof UpdatePasswordSchema>;
