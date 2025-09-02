import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils/status";
import { updatePassword } from "@/lib/actions/auth.actions";

export default function useUpdatePasswordQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function updatePasswordQuery() {
    try {
      setStatus(() => getStatus.pending());

      await updatePassword();

      setStatus(() => getStatus.success());
    } catch (error) {
      setStatus(() =>
        getStatus.failed(error, "დაფიქსირდა შეცდომა პაროლის აღდგენის დროს")
      );
    }
  }

  return { status, updatePasswordQuery };
}
