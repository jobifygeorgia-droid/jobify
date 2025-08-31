import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  VerifyIdentitySchema,
  VerifyIdentitySchemaT,
  verifyIdentityInitialState,
} from "@/lib/schemas/VerifyIdentitySchema";

export default function useVerifyIdentityForm() {
  const { control, handleSubmit, reset } = useForm<VerifyIdentitySchemaT>({
    resolver: zodResolver(VerifyIdentitySchema),
    defaultValues: verifyIdentityInitialState,
  });

  useEffect(() => {
    return () => {
      reset(verifyIdentityInitialState);
    };
  }, [reset]);

  return { control, handleSubmit };
}
