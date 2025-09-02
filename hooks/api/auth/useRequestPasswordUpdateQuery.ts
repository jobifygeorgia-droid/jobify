import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils/status";
import { requestPasswordUpdate } from "@/lib/actions/auth.actions";

export default function useRequestPasswordUpdateQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function requestPasswordUpdateQuery() {
    try {
      setStatus(() => getStatus.pending());

      await requestPasswordUpdate();

      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() =>
        getStatus.failed(error, "დაფიქსირდა შეცდომა ოპერაციის დროს")
      );
    }
  }

  return { status, requestPasswordUpdateQuery };
}
