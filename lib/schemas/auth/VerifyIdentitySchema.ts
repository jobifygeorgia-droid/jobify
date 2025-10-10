import z from "zod";

import * as validators from "../customValidators";

export const VerifyIdentitySchema = z.object({
  pin: z
    .string()
    .min(1, "გთხოვთ შეიყვანოთ პინი")
    .refine(validators.isNumeric.validator, validators.isNumeric.message),
});

export const verifyIdentityInitialState: VerifyIdentitySchemaT = {
  pin: "",
};

export type VerifyIdentitySchemaT = z.infer<typeof VerifyIdentitySchema>;
