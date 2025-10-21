import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SignupUserSchema,
  SignupUserSchemaT,
  signupUserInitialState,
} from "@/lib/schemas/auth/SignupUserSchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

/**
 * @see
 * - {@link SignupUserSchema}
 *
 * React hook that initializes and manages the "signup user" form.
 *
 * @param messages - API error messages to surface on the form fields; pass `null` if none.
 *
 * Workflow:
 *  - Configures react-hook-form with a Zod-based resolver for {@link SignupUserSchema}
 *  - Seeds the form with {@link signupUserInitialState}
 *  - Propagates server-side API validation errors to the appropriate fields.
 *
 * @returns
 * - control: The react-hook-form control instance for use with Controller/useController.
 * - handleSubmit: A submit handler wrapper that validates against the schema before invoking your callback.
 * - resetForm: A convenience function that resets all fields to {@link signupUserInitialState}.
 */
export default function useSignUpUserForm(messages: APIErrorMessages | null) {
  const { control, handleSubmit, reset, setError } = useForm<SignupUserSchemaT>(
    {
      resolver: zodResolver(SignupUserSchema),
      defaultValues: signupUserInitialState,
    }
  );

  const resetForm = useCallback(() => reset(signupUserInitialState), [reset]);

  usePropagateAPIErrorToHookForms(messages, setError);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  return { control, handleSubmit, resetForm };
}
