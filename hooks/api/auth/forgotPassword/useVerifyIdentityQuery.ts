import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils";
import { useAuthContext } from "@/providers/AuthProvider";
import { verifyIdentity } from "@/lib/actions/auth.actions";
import { VerifyIdentitySchemaT } from "@/lib/schemas/auth/VerifyIdentitySchema";

/**
 * @see
 * - {@link StatusT}
 * - {@link useAuthContext}
 * - {@link verifyIdentity}
 * - {@link VerifyIdentitySchemaT}
 *
 * Triggers the identity verification request and updates the status lifecycle.
 *
 * Workflow:
 * - Calls the {@link verifyIdentity}({@link VerifyIdentitySchemaT}).
 * - On error:
 *    - sets status to `failed` with a localized fallback message.
 * - On success:
 *    - calls the optional `onSuccess` callback
 *    - invokes {@link useAuthContext}.onVerifyUserIdentity to propagate verification to the auth layer
 *    - sets status to `success`.
 * @returns
 * - An object containing:
 * - `status` — {@link StatusT} reflecting the request lifecycle.
 * - `verifyIdentityQuery`: (data: {@link VerifyIdentitySchemaT}, onSuccess?: () => void) => Promise<void>
 */
export default function useVerifyIdentityQuery() {
  const { onVerifyUserIdentity } = useAuthContext();
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function verifyIdentityQuery(
    data: VerifyIdentitySchemaT,
    onSuccess?: () => void
  ) {
    setStatus(() => getStatus.pending());

    const { error } = await verifyIdentity(data);

    if (error)
      return setStatus(() => ({
        ...getStatus.failed(error),
        message:
          status.message || "დაფიქსირდა შეცდომა მომხმარებლის ვერიფიკაციის დროს",
      }));

    onSuccess?.();
    onVerifyUserIdentity();

    setStatus(() => getStatus.success());
  }

  return { status, verifyIdentityQuery };
}
