import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn as nextAuthSignIn, useSession } from "next-auth/react";

import { getStatus, StatusT } from "@/lib/utils";
import { useAuthContext } from "@/providers/AuthProvider";
import { SigninSchemaT } from "@/lib/schemas/auth/SigninSchema";

/**
 * @see
 * - {@link StatusT}
 * - {@link SigninSchemaT}
 * - {@link useAuthContext}
 *
 * A React hook that performs credential-based authentication via NextAuth without redirecting,
 * tracks request status, updates the active session, closes an authentication popup, and refreshes
 * the Next.js router upon success.
 *
 * Workflow:
 * - Calls the app-level {@link nextAuthSignIn}({@link SigninSchemaT}).
 * - On failure:
 *    - sets status to `failed` with a localized fallback message
 * - On success:
 *    - updates the NextAuth session
 *    - closes any active authorization popup via {@link useAuthContext}
 *    - sets status to `success`
 *
 * Side effects:
 * - Calls NextAuth's session update to re-hydrate session data after successful sign-in.
 * - Invokes the authentication UI context to close any active authorization popup.
 * - Triggers a Next.js router refresh to revalidate server/client data post sign-in.
 *
 * Usage notes:
 * - Must be used within a NextAuth SessionProvider.
 * - Requires an AuthContext provider exposing an `onCloseAuthPopup` function.
 * - Assumes a Next.js App Router environment for `router.refresh()`.
 *
 * @returns
 * - An object containing:
 * - `status` — {@link StatusT} reflecting the request lifecycle.
 *   - `signInQuery`(data: {@link SigninSchemaT}, onSuccess?: () => void): Promise<void>
 *
 * @remarks
 * - Redirect is explicitly disabled to support in-place flows such as modals or popups.
 * - The failure message is localized for end-users while preserving the original error for diagnostics.
 */
export default function useSigninQuery() {
  const router = useRouter();
  const { update } = useSession();
  const { onCloseAuthPopup } = useAuthContext();

  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function signInQuery(data: SigninSchemaT, onSuccess?: () => void) {
    setStatus(() => getStatus.pending());

    const { error } = await nextAuthSignIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (error)
      return setStatus(() => ({
        ...getStatus.failed(error),
        message: "წარმოიშვა შეცდომა ავტორიზაციის დროს",
      }));

    await update();

    onSuccess?.();
    onCloseAuthPopup();
    setStatus(() => getStatus.success());

    router.refresh();
  }

  return { status, signInQuery };
}
