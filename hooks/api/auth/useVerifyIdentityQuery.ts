import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils";
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
