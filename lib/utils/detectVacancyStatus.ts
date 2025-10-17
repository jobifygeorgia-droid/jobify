import { isBefore } from "date-fns";
import { VACANCY_STATUS_TYPES } from "@/interface/global.types";

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
