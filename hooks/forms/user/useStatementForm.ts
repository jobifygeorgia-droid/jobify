import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  StatementSchema,
  StatementSchemaT,
  statementInitialState,
} from "@/lib/schemas/user/StatementSchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

/**
 * @see
 * - {@link StatementSchema}
 *
 * React hook that initializes and manages the "request password update" form.
 *
 * @param messages - API error messages to surface on the form fields; pass `null` if none.
 *
 * Workflow:
 *  - Configures react-hook-form with a Zod-based resolver for {@link StatementSchema}
 *  - Seeds the form with {@link statementInitialState}
 *  - Propagates server-side API validation errors to the appropriate fields.
 *
 * @returns
 * - control: The react-hook-form control instance for use with Controller/useController.
 * - handleSubmit: A submit handler wrapper that validates against the schema before invoking your callback.
 * - resetForm: A convenience function that resets all fields to {@link statementInitialState}.
 */
export default function useStatementForm(messages: APIErrorMessages | null) {
  const { control, handleSubmit, reset, setError } = useForm<StatementSchemaT>({
    resolver: zodResolver(StatementSchema),
    defaultValues: statementInitialState,
  });

  const resetForm = useCallback(() => reset(statementInitialState), [reset]);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  usePropagateAPIErrorToHookForms(messages, setError);

  return { control, handleSubmit, resetForm };
}
