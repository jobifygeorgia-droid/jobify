import { useState } from "react";
import { useRouter } from "next/navigation";

import { PATHS } from "@/lib/config";
import { getStatus, logger, StatusT } from "@/lib/utils";
import { signupUser } from "@/lib/actions/auth.actions";
import { SignupUserSchemaT } from "@/lib/schemas/auth/SignupUserSchema";

export default function useSignupUserQuery() {
  const router = useRouter();
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function registerUserQuery(
    data: SignupUserSchemaT,
    onSuccess?: () => void
  ) {
    try {
      setStatus(() => getStatus.pending());

      await signupUser(data);

      setStatus(() => getStatus.success());

      onSuccess?.();

      router.push(PATHS.home);
    } catch (error: any) {
      const status = getStatus.failed(error);

      setStatus(() => ({
        ...status,
        message:
          status.message || "დაფიქსირდა შეცდომა მომხმარებლის რეგისტრაციის დროს",
      }));

      logger(error);
    }
  }

  return { status, registerUserQuery };
}
