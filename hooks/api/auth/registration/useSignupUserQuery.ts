import { useState } from "react";
import { useRouter } from "next/navigation";

import { PATHS } from "@/lib/config";
import { getStatus, StatusT } from "@/lib/utils";
import { signupUser } from "@/lib/actions/auth.actions";
import { SignupUserSchemaT } from "@/lib/schemas/auth/SignupUserSchema";

/**
 * @see
 * - {@link PATHS}
 * - {@link signupUser}
 * - {@link SignupUserSchemaT}
 *
 * A React hook that orchestrates the user signup flow and manages its lifecycle state.
 *
 * Workflow:
 * - calls the {@link signupUser}({@link SignupUserSchemaT})
 * - On success:
 *    - optionally calls a provided `onSuccess` callback
 *    - redirects to the home page.
 * - On failure:
 *   - sets status to `failed` with a localized fallback message
 *
 * Side effects:
 * - Updates local React state for {@link StatusT}.
 * - Performs client-side navigation via Next.js router.
 *
 * @returns An object with:
 * - `status` — {@link StatusT} reflecting the request lifecycle.
 * - `registerUserQuery`: (data: {@link SignupUserSchemaT}, onSuccess?: () => void) => Promise<void>
 */
export default function useSignupUserQuery() {
  const router = useRouter();
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function registerUserQuery(
    data: SignupUserSchemaT,
    onSuccess?: () => void
  ) {
    setStatus(() => getStatus.pending());

    const { error } = await signupUser(data);

    if (error)
      return setStatus(() => ({
        ...getStatus.failed(error),
        message:
          error.message || "დაფიქსირდა შეცდომა მომხმარებლის რეგისტრაციის დროს",
      }));

    setStatus(() => getStatus.success());

    onSuccess?.();

    router.push(PATHS.home);
  }

  return { status, registerUserQuery };
}
