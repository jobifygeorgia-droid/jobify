import { useState } from "react";

import { getStatus } from "@/lib/utils/status";
import { verifyIdentity } from "@/lib/actions/auth.actions";

export default function useVerifyIdentityQuery() {
  const [status, setStatus] = useState(() => getStatus.idle());

  async function verifyIdentityQuery() {
    try {
      setStatus(() => getStatus.pending());

      await verifyIdentity();

      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() => getStatus.failed(error));
    }
  }

  return { status, verifyIdentityQuery };
}
