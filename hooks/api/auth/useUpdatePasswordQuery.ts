import { useState } from "react";

import { getStatus, LS, StatusT } from "@/lib/utils";
import { updatePassword } from "@/lib/actions/auth.actions";
import { useAuthContext } from "@/providers/AuthProvider";
import { UpdatePasswordSchemaT } from "@/lib/schemas/auth/UpdatePasswordSchema";

export default function useUpdatePasswordQuery() {
  const { onUpdatePassword } = useAuthContext();

  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function updatePasswordQuery(data: UpdatePasswordSchemaT) {
    try {
      setStatus(() => getStatus.pending());

      await updatePassword(data);

      onUpdatePassword();
      LS.removePasswordUpdateEmail();
      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() =>
        getStatus.failed(error, "დაფიქსირდა შეცდომა პაროლის აღდგენის დროს")
      );
    }
  }

  return { status, updatePasswordQuery };
}
