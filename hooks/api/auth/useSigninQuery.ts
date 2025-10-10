import { useState } from "react";
import { useRouter } from "next/navigation";

import { getStatus, StatusT } from "@/lib/utils";
import { signIn } from "@/lib/actions/auth.actions";
import { useAuthContext } from "@/providers/AuthProvider";
import { SigninSchemaT } from "@/lib/schemas/auth/SigninSchema";

export default function useSigninQuery() {
  const router = useRouter();
  const { onCloseAuthPopup } = useAuthContext();

  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function signInQuery(data: SigninSchemaT) {
    try {
      setStatus(() => getStatus.pending());

      await signIn(data);

      onCloseAuthPopup();
      setStatus(() => getStatus.success());

      router.refresh();
    } catch (error) {
      setStatus(() =>
        getStatus.failed(error, "დაფიქსირდა შეცდომა ავტორიზაციის დროს")
      );
    }
  }

  return { status, signInQuery };
}
