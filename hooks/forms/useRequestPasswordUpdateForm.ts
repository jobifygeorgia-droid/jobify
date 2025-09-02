import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  RequestPasswordUpdateSchema,
  RequestPasswordUpdateSchemaT,
  requestPasswordUpdateInitialState,
} from "@/lib/schemas/RequestPasswordUpdateSchema";

export default function useRequestPasswordUpdateForm() {
  const { control, handleSubmit, reset } =
    useForm<RequestPasswordUpdateSchemaT>({
      resolver: zodResolver(RequestPasswordUpdateSchema),
      defaultValues: requestPasswordUpdateInitialState,
    });

  const onReset = () => reset(requestPasswordUpdateInitialState);

  useEffect(() => {
    return () => {
      reset(requestPasswordUpdateInitialState);
    };
  }, [reset]);

  return { control, onReset, handleSubmit };
}
