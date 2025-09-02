import { useState } from "react";

import { signIn } from "@/lib/actions/auth.actions";
import { getStatus, StatusT } from "@/lib/utils/status";
import { SigninSchemaT } from "@/lib/schemas/SigninSchema";

export default function useSigninQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function signInQuery(data: SigninSchemaT) {
    try {
      setStatus(() => getStatus.pending());

      await signIn(data);

      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() =>
        getStatus.failed(error, "დაფიქსირდა შეცდომა ავტორიზაციის დროს")
      );
    }
  }

  return { status, signInQuery };
}
