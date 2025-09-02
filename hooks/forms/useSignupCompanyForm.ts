import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  SignupCompanySchema,
  SignupCompanySchemaT,
  signupCompanyInitialState,
} from "@/lib/schemas/SignupCompanySchema";

export default function useSignupCompanyForm() {
  const { control, handleSubmit, reset } = useForm<SignupCompanySchemaT>({
    resolver: zodResolver(SignupCompanySchema),
    defaultValues: signupCompanyInitialState,
  });

  useEffect(() => {
    return () => {
      reset(signupCompanyInitialState);
    };
  }, [reset]);

  return { control, handleSubmit };
}
