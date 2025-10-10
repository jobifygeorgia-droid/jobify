import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { APIErrorMessages } from "@/interface/global.types";

import {
  StatementSchema,
  StatementSchemaT,
  statementInitialState,
} from "@/lib/schemas/user/StatementSchema";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";

export default function useStatementForm(messages: APIErrorMessages | null) {
  const { control, handleSubmit, reset, setError } = useForm<StatementSchemaT>({
    resolver: zodResolver(StatementSchema),
    defaultValues: statementInitialState,
  });

  useEffect(() => {
    return () => {
      reset(statementInitialState);
    };
  }, [reset]);

  usePropagateAPIErrorToHookForms(messages, setError);

  return { control, handleSubmit };
}
