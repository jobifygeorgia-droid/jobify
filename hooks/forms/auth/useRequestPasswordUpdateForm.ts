import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  RequestPasswordUpdateSchema,
  RequestPasswordUpdateSchemaT,
  requestPasswordUpdateInitialState,
} from "@/lib/schemas/auth/RequestPasswordUpdateSchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

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
