import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { APIErrorMessages } from "@/interface/global.types";

import {
  VacancySchema,
  VacancySchemaT,
  vacancyInitialState,
} from "@/lib/schemas/company/VacancySchema";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

export default function useVacancyForm(messages: APIErrorMessages | null) {
  const { control, handleSubmit, reset, setError } = useForm<VacancySchemaT>({
    resolver: zodResolver(VacancySchema),
    defaultValues: vacancyInitialState,
  });

  useEffect(() => {
    return () => {
      reset(vacancyInitialState);
    };
  }, [reset]);

  usePropagateAPIErrorToHookForms(messages, setError);

  return { control, handleSubmit };
}
