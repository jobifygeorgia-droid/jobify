import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils";
import { VacancySchemaT } from "@/lib/schemas/company/VacancySchema";
import { createVacancy } from "@/lib/actions/vacancy.actions";

export default function useCreateVacancyQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function createVacancyQuery(data: VacancySchemaT) {
    try {
      setStatus(() => getStatus.pending());

      await createVacancy(data);

      setStatus(() => getStatus.success());
    } catch (error: any) {
      setStatus(() =>
        getStatus.failed(error, "დაფიქსირდა შეცდომა ვაკანსიის შექმნის დროს")
      );
    }
  }

  return { status, createVacancyQuery };
}
