import { useState } from "react";

import { getStatus } from "@/lib/utils/status";
import { requestPasswordUpdate } from "@/lib/actions/auth.actions";

export default function useRequestPasswordUpdateQuery() {
  const [status, setStatus] = useState(() => getStatus.idle());

  async function requestPasswordUpdateQuery() {
    try {
      setStatus(() => getStatus.pending());

      await requestPasswordUpdate();

      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() => getStatus.failed(error));
    }
  }

  return { status, requestPasswordUpdateQuery };
}
