import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  UpdatePasswordSchema,
  UpdatePasswordSchemaT,
  updatePasswordInitialState,
} from "@/lib/schemas/UpdatePasswordSchema";

export default function useUpdatePasswordForm() {
  const { control, handleSubmit, reset } = useForm<UpdatePasswordSchemaT>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues: updatePasswordInitialState,
  });

  useEffect(() => {
    return () => {
      reset(updatePasswordInitialState);
    };
  }, []);

  return { control, handleSubmit };
}
