import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn as nextAuthSignIn } from "next-auth/react";

import { getStatus, logger, StatusT } from "@/lib/utils";
import { useAuthContext } from "@/providers/AuthProvider";
import { SigninSchemaT } from "@/lib/schemas/auth/SigninSchema";

export default function useSigninQuery() {
  const router = useRouter();
  const { onCloseAuthPopup } = useAuthContext();

  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function signInQuery(data: SigninSchemaT, onSuccess?: () => void) {
    setStatus(() => getStatus.pending());

    const results = await nextAuthSignIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (results.error) {
      const status = getStatus.failed(results.error);

      setStatus(() => ({
        ...status,
        message: "წარმოიშვა შეცდომა ავტორიზაციის დროს",
      }));

      logger(results.error);

      return;
    }

    onSuccess?.();
    onCloseAuthPopup();

    setStatus(() => getStatus.success());

    router.refresh();
  }

  return { status, signInQuery };
}
