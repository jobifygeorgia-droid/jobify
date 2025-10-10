import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SignupUserSchema,
  SignupUserSchemaT,
  signupUserInitialState,
} from "@/lib/schemas/auth/SignupUserSchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

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
