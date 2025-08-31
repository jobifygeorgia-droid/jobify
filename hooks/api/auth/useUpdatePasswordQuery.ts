import { useState } from "react";

import { getStatus } from "@/lib/utils/status";
import { updatePassword } from "@/lib/actions/auth.actions";

export default function useUpdatePasswordQuery() {
  const [status, setStatus] = useState(() => getStatus.idle());

  async function updatePasswordQuery() {
    try {
      setStatus(() => getStatus.pending());

      await updatePassword();

      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() => getStatus.failed(error));
    }
  }

  return { status, updatePasswordQuery };
}
