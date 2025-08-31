import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SigninSchema,
  SigninSchemaT,
  signinInitialState,
} from "@/lib/schemas/SigninSchema";
import { APIErrorMessages } from "@/interface/global.types";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

export default function useSigninForm(messages: APIErrorMessages | null) {
  const { control, handleSubmit, reset, setError } = useForm<SigninSchemaT>({
    resolver: zodResolver(SigninSchema),
    defaultValues: signinInitialState,
  });

  useEffect(() => {
    return () => {
      reset(signinInitialState);
    };
  }, [reset]);

  usePropagateAPIErrorToHookForms(messages, setError);

  return { control, handleSubmit };
}
