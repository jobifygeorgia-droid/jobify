import { useState } from "react";

import { getStatus, StatusT } from "@/lib/utils";
import { createVacancy } from "@/lib/actions/vacancy.actions";
import { VacancySchemaT } from "@/lib/schemas/company/VacancySchema";

/**
 * @see
 * - {@link StatusT}
 * - {@link createVacancy}
 * - {@link VacancySchemaT}
 *
 * Provides a React hook for creating a vacancy and tracking the request lifecycle.
 *
 * Workflow:
 * - calls the {@link createVacancy}({@link VacancySchemaT})
 * - On success:
 *   - invokes the optional `onSuccess` callback.
 *   - sets status to `success`
 * - On failure:
 *   - sets status to `failed` with error details and a localized fallback message.
 *
 * @returns
 * An object with:
 * - `status` — {@link StatusT} reflecting the request lifecycle.
 * - `createVacancyQuery` — (data: {@link VacancySchemaT}, onSuccess?: () => void) => Promise<void>
 */
export default function useCreateVacancyQuery() {
  const [status, setStatus] = useState<StatusT>(() => getStatus.idle());

  async function createVacancyQuery(
    data: VacancySchemaT,
    onSuccess?: () => void
  ) {
    setStatus(() => getStatus.pending());

    const { error } = await createVacancy(data);

    if (error)
      return setStatus(() => ({
        ...getStatus.failed(error),
        message: error.message || "დაფიქსირდა შეცდომა ვაკანსიის შექმნის დროს",
      }));

    onSuccess?.();
    setStatus(() => getStatus.success());
  }

  return { status, createVacancyQuery };
}
