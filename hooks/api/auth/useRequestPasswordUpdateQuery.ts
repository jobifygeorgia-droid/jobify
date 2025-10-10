import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils";
import { useAuthContext } from "@/providers/AuthProvider";
import { requestPasswordUpdate } from "@/lib/actions/auth.actions";
import { RequestPasswordUpdateSchemaT } from "@/lib/schemas/auth/RequestPasswordUpdateSchema";

export default function useRequestPasswordUpdateQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());
  const { onChoosePasswordUpdateMethod } = useAuthContext();

  async function requestPasswordUpdateQuery(
    data: RequestPasswordUpdateSchemaT
  ) {
    try {
      setStatus(() => getStatus.pending());

      await requestPasswordUpdate(data);

      setStatus(() => getStatus.success());
      onChoosePasswordUpdateMethod(data.email);
    } catch (error) {
      setStatus(() =>
        getStatus.failed(error, "დაფიქსირდა შეცდომა ოპერაციის დროს")
      );
    }
  }

  return { status, requestPasswordUpdateQuery };
}
