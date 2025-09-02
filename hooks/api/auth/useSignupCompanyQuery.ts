import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils/status";
import { signupCompany } from "@/lib/actions/auth.actions";

export default function useSignupCompanyQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function registerCompanyQuery() {
    try {
      setStatus(() => getStatus.pending());

      await signupCompany();

      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() =>
        getStatus.failed(
          error,
          "დაფიქსირდა შეცდომა იურიდიული პირის რეგისტრაციის დროს"
        )
      );
    }
  }

  return { status, registerCompanyQuery };
}
