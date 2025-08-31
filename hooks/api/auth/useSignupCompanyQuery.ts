import { useState } from "react";

import { getStatus } from "@/lib/utils/status";
import { signupCompany } from "@/lib/actions/auth.actions";

export default function useSignupCompanyQuery() {
  const [status, setStatus] = useState(() => getStatus.idle());

  async function registerCompanyQuery() {
    try {
      setStatus(() => getStatus.pending());

      await signupCompany();

      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() => getStatus.failed(error));
    }
  }

  return { status, registerCompanyQuery };
}
