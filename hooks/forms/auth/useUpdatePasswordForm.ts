import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  UpdatePasswordSchema,
  UpdatePasswordSchemaT,
  updatePasswordInitialState,
} from "@/lib/schemas/auth/UpdatePasswordSchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

/**
 * @see
 * - {@link UpdatePasswordSchema}
 *
 * React hook that initializes and manages the "update password" form.
 *
 * @param messages - API error messages to surface on the form fields; pass `null` if none.
 *
 * Workflow:
 *  - Configures react-hook-form with a Zod-based resolver for {@link UpdatePasswordSchema}
 *  - Seeds the form with {@link updatePasswordInitialState}
 *  - Propagates server-side API validation errors to the appropriate fields.
 *
 * @returns
 * - control: The react-hook-form control instance for use with Controller/useController.
 * - handleSubmit: A submit handler wrapper that validates against the schema before invoking your callback.
 * - resetForm: A convenience function that resets all fields to {@link updatePasswordInitialState}.
 */
export default function useUpdatePasswordForm(
  messages: APIErrorMessages | null
) {
  const { control, handleSubmit, reset, setError } =
    useForm<UpdatePasswordSchemaT>({
      resolver: zodResolver(UpdatePasswordSchema),
      defaultValues: updatePasswordInitialState,
    });

  const resetForm = useCallback(
    () => reset(updatePasswordInitialState),
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
