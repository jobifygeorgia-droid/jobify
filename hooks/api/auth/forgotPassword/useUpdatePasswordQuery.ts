import { useState } from "react";

import { getStatus, LS, StatusT } from "@/lib/utils";
import { useAuthContext } from "@/providers/AuthProvider";
import { updatePassword } from "@/lib/actions/auth.actions";
import { UpdatePasswordSchemaT } from "@/lib/schemas/auth/UpdatePasswordSchema";

/**
 * @see
 * - {@link StatusT}
 * - {@link useAuthContext}
 * - {@link updatePassword}
 * - {@link UpdatePasswordSchemaT}
 *
 * Custom React hook that provides a status value and an asynchronous function to update a user's password.
 *
 * Workflow:
 * - calls the {@link updatePassword}({@link UpdatePasswordSchemaT})
 * - on error:
 *    - sets the status to a `failed`
 *    - attaches the API error (using a Georgian fallback message when the error message is absent),
 * - on success:
 *    - removes the password-reset email marker from local storage
 *    - invokes an optional success callback
 *    - signals the authentication context that the password was updated
 *    - sets the status to `success`.
 *
 * @returns An object containing:
 * - `status` — {@link StatusT} reflecting the request lifecycle.
 *  - `updatePasswordQuery`: (data: {@link UpdatePasswordSchemaT}, onSuccess?: () => void) => Promise<void>
 *
 * @remarks
 * - Side effects: modifies local storage via LS.removePasswordUpdateEmail() and calls onUpdatePassword() from the authentication context.
 * - Errors from the API are reflected in the returned status; a default Georgian error message ("დაფიქსირდა შეცდომა პაროლის აღდგენის დროს") is used when the API error has no message.
 */
export default function useUpdatePasswordQuery() {
  const { onUpdatePassword } = useAuthContext();

  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function updatePasswordQuery(
    data: UpdatePasswordSchemaT,
    onSuccess?: () => void
  ) {
    setStatus(() => getStatus.pending());

    const { error } = await updatePassword(data);

    if (error)
      return setStatus(() => ({
        ...getStatus.failed(error),
        message: error.message || "დაფიქსირდა შეცდომა პაროლის აღდგენის დროს",
      }));

    LS.removePasswordUpdateEmail();

    onSuccess?.();
    onUpdatePassword();

    setStatus(() => getStatus.success());
  }

  return { status, updatePasswordQuery };
}
