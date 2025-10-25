import { useState } from "react";
import { useRouter } from "next/navigation";

import { PATHS } from "@/lib/config";
import { getStatus, StatusT } from "@/lib/utils";
import { signupCompany } from "@/lib/actions/auth.actions";
import { SignupCompanySchemaT } from "@/lib/schemas/auth/SignupCompanySchema";

/**
 * @see
 * - {@link PATHS}
 * - {@link StatusT}
 * - {@link signupCompany}
 * - {@link SignupCompanySchemaT}
 *
 * React hook that orchestrates the company signup flow and exposes request status and an action to trigger registration.
 *
 * Workflow:
 * - Calls the {@link signupCompany}({@link SignupCompanySchemaT})
 * - On success:
 *    - an optional `onSuccess` callback is invoked
 *    - the user is redirected to the home route via the router.
 * - On failure:
 *   - sets status to `failed` with a localized fallback message
 *
 * @returns An object with:
 * - `status` — {@link StatusT} reflecting the request lifecycle.
 * - `registerCompanyQuery`: (data: {@link SignupCompanySchemaT}, onSuccess?: () => void) => Promise<void>
 */
export default function useSignupCompanyQuery() {
  const router = useRouter();
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function registerCompanyQuery(
    data: SignupCompanySchemaT,
    onSuccess?: () => void
  ) {
    setStatus(() => getStatus.pending());

    const { error } = await signupCompany(data);

    if (error)
      return setStatus(() => ({
        ...getStatus.failed(error),
        message:
          error.message ||
          "დაფიქსირდა შეცდომა იურიდიული პირის რეგისტრაციის დროს",
      }));

    onSuccess?.();
    setStatus(() => getStatus.success());

    router.push(PATHS.home);
  }

  return { status, registerCompanyQuery };
}
