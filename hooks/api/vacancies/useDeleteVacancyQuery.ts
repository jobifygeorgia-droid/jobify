import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils";
import { deleteVacancy } from "@/lib/actions/vacancy.actions";

export default function useDeleteVacancyQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  const deleteVacancyQuery = async (
    id: string,
    onSuccess?: () => void,
    onError?: (message: string) => void
  ) => {
    if (!id) return;

    setStatus(() => getStatus.pending());

    const { error } = await deleteVacancy(id);

    if (error) {
      const message =
        error.message || "დაფიქსირდა შეცდომა ვაკანსიის წაშლის დროს";

      setStatus(() => ({
        ...getStatus.failed(error),
        message,
      }));

      onError?.(message);

      return;
    }

    onSuccess?.();
    setStatus(() => getStatus.success());
  };

  return { deleteVacancyQuery, status };
}
