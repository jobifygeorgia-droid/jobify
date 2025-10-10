import { useEffect, useState } from "react";
import { UseFormSetError, FieldValues, FieldPath } from "react-hook-form";

import { APIErrorMessages } from "@/interface/global.types";

export default function usePropagateAPIErrorToHookForms<T extends FieldValues>(
  messages: APIErrorMessages | null,
  setError: UseFormSetError<T>
) {
  const [customMessage, setCustomMessage] = useState("");

  useEffect(() => {
    if (!messages) return;

    Object.entries(messages).forEach(([key, messages]) => {
      if (Array.isArray(messages)) {
        if (!messages || messages.length === 0) return;

        const fieldKey = key as FieldPath<T>;

        if (fieldKey in ({} as T))
          setError(fieldKey, { type: "manual", message: messages[0] });
      } else {
        setCustomMessage(messages);
      }
    });
  }, [messages, setError]);

  return { customMessage };
}
