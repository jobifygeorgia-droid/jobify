import { useState } from "react";

import { getStatus, logger, LS, StatusT } from "@/lib/utils";
import { updatePassword } from "@/lib/actions/auth.actions";
import { useAuthContext } from "@/providers/AuthProvider";
import { UpdatePasswordSchemaT } from "@/lib/schemas/auth/UpdatePasswordSchema";

export default function useUpdatePasswordQuery() {
  const { onUpdatePassword } = useAuthContext();

  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function updatePasswordQuery(
    data: UpdatePasswordSchemaT,
    onSuccess?: () => void
  ) {
    try {
      setStatus(() => getStatus.pending());

      await updatePassword(data);

      LS.removePasswordUpdateEmail();

      onSuccess?.();
      onUpdatePassword();

      setStatus(() => getStatus.success());
    } catch (error) {
      const status = getStatus.failed(error);

      setStatus(() => ({
        ...status,
        message: status.message || "დაფიქსირდა შეცდომა პაროლის აღდგენის დროს",
      }));

      logger(error);
    }
  }

  return { status, updatePasswordQuery };
}
