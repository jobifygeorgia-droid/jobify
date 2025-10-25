import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SigninSchema,
  SigninSchemaT,
  signinInitialState,
} from "@/lib/schemas/auth/SigninSchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

/**
 * @see
 * - {@link SigninSchema}
 *
 * React hook that initializes and manages the sign-in form.
 *
 * @param messages - API error messages to surface on the form fields; pass `null` if none.
 *
 * Workflow:
 *  - Configures react-hook-form with a Zod-based resolver for {@link SigninSchema}
 *  - Seeds the form with {@link signinInitialState}
 *  - Propagates server-side API validation errors to the appropriate fields.
 *
 * @returns
 * - control: The react-hook-form control instance for use with Controller/useController.
 * - handleSubmit: A submit handler wrapper that validates against the schema before invoking your callback.
 * - resetForm: A convenience function that resets all fields to {@link signinInitialState}.
 * - customMessage: A general custom message propagated from server-side errors not tied to specific fields.
 */
export default function useSigninForm(messages: APIErrorMessages | null) {
  const { control, handleSubmit, reset, setError } = useForm<SigninSchemaT>({
    resolver: zodResolver(SigninSchema),
    defaultValues: signinInitialState,
  });

  const resetForm = useCallback(() => reset(signinInitialState), [reset]);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  const { customMessage } = usePropagateAPIErrorToHookForms(messages, setError);

  return { control, handleSubmit, customMessage, resetForm };
}
