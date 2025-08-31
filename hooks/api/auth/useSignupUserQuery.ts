import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils/status";
import { signupUser } from "@/lib/actions/auth.actions";
import { SignupUserSchemaT } from "@/lib/schemas/SignupUserSchema";

export default function useSignupUserQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function registerUserQuery(data: SignupUserSchemaT) {
    try {
      setStatus(() => getStatus.pending());

      await signupUser(data);

      setStatus(() => getStatus.success());
    } catch (error: any) {
      setStatus(() =>
        getStatus.failed(error, "დაფიქსირდა შეცდომა რეგისტრაციის დროს")
      );
    }
  }

  return { status, registerUserQuery };
}
