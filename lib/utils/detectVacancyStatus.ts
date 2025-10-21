import { isBefore } from "date-fns";
import { VACANCY_STATUS_TYPES } from "@/interface/global.types";

/**
 * @See
 * - {@link VACANCY_STATUS_TYPES}
 *
 * Determines the current vacancy status based on publication flags and an optional expiration date.
 *
 * Rules:
 * - A vacancy is considered "published" only if both `is_published` and `is_approved` are true.
 *   - If published and the `expiration_date` is before the current time, returns `VACANCY_STATUS_TYPES.ARCHIVE`.
 *   - If published and the `expiration_date` is in the future or not provided, returns `VACANCY_STATUS_TYPES.ACTIVE`.
 * - If both `is_published` and `is_approved` are false, returns `VACANCY_STATUS_TYPES.DRAFT`.
 * - For any other combination of flags, returns `"unknown"`.
 *
 * @param is_published - Whether the vacancy has been marked as published.
 * @param is_approved - Whether the vacancy has been approved for publication.
 * @param expiration_date - A date/time string parseable by `new Date(...)`. If falsy, the vacancy is treated as not expired.
 *
 * @returns One of `VACANCY_STATUS_TYPES.ACTIVE`, `VACANCY_STATUS_TYPES.ARCHIVE`, `VACANCY_STATUS_TYPES.DRAFT`, or `"unknown"`.
 */
export default function detectVacancyStatus(
  is_published: boolean,
  is_approved: boolean,
  expiration_date: string
): VACANCY_STATUS_TYPES | "unknown" {
  const now = new Date();
  const published = is_published && is_approved;
  const expired = expiration_date
    ? isBefore(new Date(expiration_date), now)
    : false;

  if (published)
    return expired ? VACANCY_STATUS_TYPES.ARCHIVE : VACANCY_STATUS_TYPES.ACTIVE;

  if (!is_published && !is_approved) return VACANCY_STATUS_TYPES.DRAFT;

  return "unknown";
}
