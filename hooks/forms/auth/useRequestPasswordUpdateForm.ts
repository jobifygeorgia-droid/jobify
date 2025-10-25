import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  RequestPasswordUpdateSchema,
  RequestPasswordUpdateSchemaT,
  requestPasswordUpdateInitialState,
} from "@/lib/schemas/auth/RequestPasswordUpdateSchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

/**
 * @see
 * - {@link RequestPasswordUpdateSchema}
 *
 * React hook that initializes and manages the "request password update" form.
 *
 * @param messages - API error messages to surface on the form fields; pass `null` if none.
 *
 * Workflow:
 *  - Configures react-hook-form with a Zod-based resolver for {@link RequestPasswordUpdateSchema}
 *  - Seeds the form with {@link requestPasswordUpdateInitialState}
 *  - Propagates server-side API validation errors to the appropriate fields.
 *
 * @returns
 * - control: The react-hook-form control instance for use with Controller/useController.
 * - handleSubmit: A submit handler wrapper that validates against the schema before invoking your callback.
 * - resetForm: A convenience function that resets all fields to {@link requestPasswordUpdateInitialState}.
 */
export default function useRequestPasswordUpdateForm(
  messages: APIErrorMessages | null
) {
  const { control, handleSubmit, reset, setError } =
    useForm<RequestPasswordUpdateSchemaT>({
      resolver: zodResolver(RequestPasswordUpdateSchema),
      defaultValues: requestPasswordUpdateInitialState,
    });

  const resetForm = useCallback(
    () => reset(requestPasswordUpdateInitialState),
    [reset]
  );

  usePropagateAPIErrorToHookForms(messages, setError);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  return { control, resetForm, handleSubmit };
}
