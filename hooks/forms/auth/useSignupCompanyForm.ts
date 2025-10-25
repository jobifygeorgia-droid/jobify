import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SignupCompanySchema,
  SignupCompanySchemaT,
  signupCompanyInitialState,
} from "@/lib/schemas/auth/SignupCompanySchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

/**
 * @see
 * - {@link SignupCompanySchema}
 *
 * React hook that initializes and manages the "signup company" form.
 *
 * @param messages - API error messages to surface on the form fields; pass `null` if none.
 *
 * Workflow:
 *  - Configures react-hook-form with a Zod-based resolver for {@link SignupCompanySchema}
 *  - Seeds the form with {@link signupCompanyInitialState}
 *  - Propagates server-side API validation errors to the appropriate fields.
 *
 * @returns
 * - control: The react-hook-form control instance for use with Controller/useController.
 * - handleSubmit: A submit handler wrapper that validates against the schema before invoking your callback.
 * - resetForm: A convenience function that resets all fields to {@link signupCompanyInitialState}.
 */
export default function useSignupCompanyForm(
  messages: APIErrorMessages | null
) {
  const { control, handleSubmit, reset, setError } =
    useForm<SignupCompanySchemaT>({
      resolver: zodResolver(SignupCompanySchema),
      defaultValues: signupCompanyInitialState,
    });

  const resetForm = useCallback(
    () => reset(signupCompanyInitialState),
    [reset]
  );

  usePropagateAPIErrorToHookForms(messages, setError);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  return { control, handleSubmit, resetForm };
}
