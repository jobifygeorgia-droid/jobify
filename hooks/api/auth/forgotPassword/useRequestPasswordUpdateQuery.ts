import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils";
import { useAuthContext } from "@/providers/AuthProvider";
import { requestPasswordUpdate } from "@/lib/actions/auth.actions";
import { RequestPasswordUpdateSchemaT } from "@/lib/schemas/auth/RequestPasswordUpdateSchema";

/**
 * @see
 * - {@link useAuthContext}
 * - {@link requestPasswordUpdate}
 * - {@link RequestPasswordUpdateSchemaT}
 *
 * React hook that orchestrates the forgot password flow.
 *
 * Workflow:
 * - Calls the app-level {@link requestPasswordUpdate}({@link RequestPasswordUpdateSchemaT}).
 * - On success:
 *   - updates the authentication context with the chosen password update method using the submitted email.
 *   - invokes {@link useAuthContext}.onChoosePasswordUpdateMethod to persist the email.
 *   - invokes the optional `onSuccess` callback.
 *   - sets status to `success`.
 * - On failure:
 *   - sets status to `failed` with a localized fallback message
 *
 * Side effects:
 * - Persists the email in the auth context to proceed with the next step of the flow.
 *
 * @returns An object containing:
 * - `status` — {@link StatusT} reflecting the request lifecycle.
 * - `requestPasswordUpdateQuery`: (data: {@link RequestPasswordUpdateSchemaT}, onSuccess?: () => void) => Promise<void>
 */
export default function useRequestPasswordUpdateQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());
  const { onChoosePasswordUpdateMethod } = useAuthContext();

  async function requestPasswordUpdateQuery(
    data: RequestPasswordUpdateSchemaT,
    onSuccess?: () => void
  ) {
    setStatus(() => getStatus.pending());

    const { error } = await requestPasswordUpdate(data);

    if (error)
      return setStatus(() => ({
        ...getStatus.failed(error),
        message: error.message || "დაფიქსირდა შეცდომა ოპერაციის დროს",
      }));

    onSuccess?.();
    onChoosePasswordUpdateMethod(data.email);

    setStatus(() => getStatus.success());
  }

  return { status, requestPasswordUpdateQuery };
}
