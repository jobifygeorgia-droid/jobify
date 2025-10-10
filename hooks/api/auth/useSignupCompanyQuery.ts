import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils";
import { signupCompany } from "@/lib/actions/auth.actions";
import { SignupCompanySchemaT } from "@/lib/schemas/auth/SignupCompanySchema";

export default function useSignupCompanyQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function registerCompanyQuery(data: SignupCompanySchemaT) {
    try {
      setStatus(() => getStatus.pending());

      await signupCompany(data);

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
