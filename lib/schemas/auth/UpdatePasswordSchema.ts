import z from "zod";

import * as validators from "../customValidators";

export const UpdatePasswordSchema = z
  .object({
    new_password: z
      .string()
      .min(1, "გთხოვთ შეიყვანოთ პაროლი")
      .refine(
        validators.isValidPassword.validator,
        validators.isValidPassword.message
      ),
    new_password2: z.string().min(1, "გთხოვთ გაიმეოროთ პაროლი"),
  })
  .refine(
    (data) => {
      return validators.confirmPasswordValidation.validator(
        data.new_password,
        data.new_password2
      );
    },
    {
      message: validators.confirmPasswordValidation.message,
      path: ["confirmPassword"],
    }
  );

export const updatePasswordInitialState: UpdatePasswordSchemaT = {
  new_password: "Pass.4321",
  new_password2: "Pass.4321",
};

export type UpdatePasswordSchemaT = z.infer<typeof UpdatePasswordSchema>;
