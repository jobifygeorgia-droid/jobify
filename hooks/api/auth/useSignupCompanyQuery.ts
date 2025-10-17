import { useState } from "react";
import { useRouter } from "next/navigation";

import { PATHS } from "@/lib/config";
import { getStatus, logger, StatusT } from "@/lib/utils";
import { signupCompany } from "@/lib/actions/auth.actions";
import { SignupCompanySchemaT } from "@/lib/schemas/auth/SignupCompanySchema";

export default function useSignupCompanyQuery() {
  const router = useRouter();
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function registerCompanyQuery(
    data: SignupCompanySchemaT,
    onSuccess?: () => void
  ) {
    try {
      setStatus(() => getStatus.pending());

      await signupCompany(data);

      setStatus(() => getStatus.success());

      onSuccess?.();

      router.push(PATHS.home);
    } catch (error) {
      const status = getStatus.failed(error);

      setStatus(() => ({
        ...status,
        message:
          status.message ||
          "დაფიქსირდა შეცდომა იურიდიული პირის რეგისტრაციის დროს",
      }));

      logger(error);
    }
  }

  return { status, registerCompanyQuery };
}
