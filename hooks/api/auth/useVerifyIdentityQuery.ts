import { useState } from "react";

import { getStatus, logger, StatusT } from "@/lib/utils";
import { useAuthContext } from "@/providers/AuthProvider";
import { verifyIdentity } from "@/lib/actions/auth.actions";
import { VerifyIdentitySchemaT } from "@/lib/schemas/auth/VerifyIdentitySchema";

export default function useVerifyIdentityQuery() {
  const { onVerifyUserIdentity } = useAuthContext();
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function verifyIdentityQuery(data: VerifyIdentitySchemaT) {
    try {
      setStatus(() => getStatus.pending());

      await verifyIdentity(data);

      onVerifyUserIdentity();

      setStatus(() => getStatus.success());
    } catch (error) {
      const status = getStatus.failed(error);

      setStatus(() => ({
        ...status,
        message:
          status.message || "დაფიქსირდა შეცდომა მომხმარებლის ვერიფიკაციის დროს",
      }));

      logger(error);
    }
  }

  return { status, verifyIdentityQuery };
}
