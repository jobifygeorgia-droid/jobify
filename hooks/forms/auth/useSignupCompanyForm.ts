import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SignupCompanySchema,
  SignupCompanySchemaT,
  signupCompanyInitialState,
} from "@/lib/schemas/auth/SignupCompanySchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

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
