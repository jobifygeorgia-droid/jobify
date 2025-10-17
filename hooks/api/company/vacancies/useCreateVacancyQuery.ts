import { useState } from "react";

import { getStatus, logger, StatusT } from "@/lib/utils";
import { VacancySchemaT } from "@/lib/schemas/company/VacancySchema";
import { createVacancy } from "@/lib/actions/vacancy.actions";

export default function useCreateVacancyQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function createVacancyQuery(
    data: VacancySchemaT,
    onSuccess?: () => void
  ) {
    try {
      setStatus(() => getStatus.pending());

      await createVacancy(data);

      setStatus(() => getStatus.success());
      onSuccess?.();
    } catch (error: any) {
      const status = getStatus.failed(error);

      setStatus(() => ({
        ...status,
        message: status.message || "დაფიქსირდა შეცდომა ვაკანსიის შექმნის დროს",
      }));

      logger(error);
      console.log(error);
    }
  }

  return { status, createVacancyQuery };
}
