import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  VerifyIdentitySchema,
  VerifyIdentitySchemaT,
  verifyIdentityInitialState,
} from "@/lib/schemas/auth/VerifyIdentitySchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

/**
 * @see
 * - {@link VerifyIdentitySchema}
 *
 * React hook that initializes and manages the "verify identity" form.
 *
 * @param messages - API error messages to surface on the form fields; pass `null` if none.
 *
 * Workflow:
 *  - Configures react-hook-form with a Zod-based resolver for {@link VerifyIdentitySchema}
 *  - Seeds the form with {@link verifyIdentityInitialState}
 *  - Propagates server-side API validation errors to the appropriate fields.
 *
 * @returns
 * - control: The react-hook-form control instance for use with Controller/useController.
 * - handleSubmit: A submit handler wrapper that validates against the schema before invoking your callback.
 * - resetForm: A convenience function that resets all fields to {@link verifyIdentityInitialState}.
 */
export default function useVerifyIdentityForm(
  messages: APIErrorMessages | null
) {
  const { control, handleSubmit, reset, setError } =
    useForm<VerifyIdentitySchemaT>({
      resolver: zodResolver(VerifyIdentitySchema),
      defaultValues: verifyIdentityInitialState,
    });

  const resetForm = useCallback(
    () => reset(verifyIdentityInitialState),
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
