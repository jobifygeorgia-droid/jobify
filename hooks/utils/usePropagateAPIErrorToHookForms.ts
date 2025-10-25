import { useEffect, useState } from "react";
import { UseFormSetError, FieldValues, FieldPath } from "react-hook-form";

import { APIErrorMessages } from "@/interface/global.types";

/**
 * @see
 * - {@link APIErrorMessages}
 *
 * Propagates API validation errors into react-hook-form field errors and exposes a form-level message.
 *
 * This hook observes an API error payload and:
 * - Applies field-specific validation errors to react-hook-form using the provided `setError`.
 * - Captures any non-field error as a single form-level `customMessage`.
 *
 * Only the first error string for each field is assigned to the field, while any non-array value in the payload
 * is treated as a form-level message.
 *
 * @typeParam T - The react-hook-form field values shape used to infer valid field paths.
 *
 * @param messages - The API error payload. Typically a record where keys are field names and values are either:
 * - an array of error messages (applied to the corresponding form field), or
 * - a single string interpreted as a form-level/custom error message.
 * Pass `null` to skip propagation.
 *
 * @param setError - The react-hook-form `setError` function used to attach validation errors to individual fields.
 *
 * @returns An object with:
 * - `customMessage`: string — The latest form-level error message derived from the API response (empty string by default).
 *
 * @remarks
 * - The effect runs whenever `messages` or `setError` changes.
 * - Only the first message in a field's message array is applied to that field.
 * - Non-array values in the payload are considered form-level messages and stored in `customMessage`.
 * - If `messages` is `null`, no changes are made; the previously stored `customMessage` is not cleared by this hook.
 */
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
