import { useState } from "react";

import { getStatus, logger, StatusT } from "@/lib/utils";
import { useAuthContext } from "@/providers/AuthProvider";
import { requestPasswordUpdate } from "@/lib/actions/auth.actions";
import { RequestPasswordUpdateSchemaT } from "@/lib/schemas/auth/RequestPasswordUpdateSchema";

export default function useRequestPasswordUpdateQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());
  const { onChoosePasswordUpdateMethod } = useAuthContext();

  async function requestPasswordUpdateQuery(
    data: RequestPasswordUpdateSchemaT,
    onSuccess?: () => void
  ) {
    try {
      setStatus(() => getStatus.pending());

      await requestPasswordUpdate(data);

      onSuccess?.();
      onChoosePasswordUpdateMethod(data.email);

      setStatus(() => getStatus.success());
    } catch (error) {
      const status = getStatus.failed(error);

      setStatus(() => ({
        ...status,
        message: status.message || "დაფიქსირდა შეცდომა ოპერაციის დროს",
      }));

      logger(error);
    }
  }

  return { status, requestPasswordUpdateQuery };
}
