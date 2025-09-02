import { useEffect } from "react";
import { UseFormSetError, FieldValues, FieldPath } from "react-hook-form";

import { APIErrorMessages } from "@/interface/global.types";

export default function usePropagateAPIErrorToHookForms<T extends FieldValues>(
  messages: APIErrorMessages | null,
  setError: UseFormSetError<T>
) {
  useEffect(() => {
    if (!messages) return;

    Object.entries(messages).forEach(([key, messages]) => {
      if (!messages || !Array.isArray(messages) || messages.length === 0)
        return;

      const fieldKey = key as FieldPath<T>;

      setError(fieldKey, {
        type: "manual",
        message: messages[0],
      });
    });
  }, [messages, setError]);
}
