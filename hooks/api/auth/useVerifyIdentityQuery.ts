import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils/status";
import { verifyIdentity } from "@/lib/actions/auth.actions";

export default function useVerifyIdentityQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function verifyIdentityQuery() {
    try {
      setStatus(() => getStatus.pending());

      await verifyIdentity();

      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() =>
        getStatus.failed(
          error,
          "დაფიქსირდა შეცდომა მომხმარებლის ვერიფიკაციის დროს"
        )
      );
    }
  }

  return { status, verifyIdentityQuery };
}
