import { VACANCY_TYPES } from "@/interface/global.types";

/**
 * @see
 * - {@link VACANCY_TYPES} for the available vacancy type constants.
 *
 * Transforms a VACANCY_TYPES enum value into its Georgian (ka) display label.
 *
 * Mappings:
 * - VACANCY_TYPES.FULL_TIME  -> "სრული განაკვეთი"
 * - VACANCY_TYPES.PART_TIME  -> "ჰიბრიდული"
 * - VACANCY_TYPES.REMOTE     -> "დისტანციური"
 *
 * Returns an empty string for unrecognized or unsupported values.
 *
 * @param vacancyType - The vacancy type enum value to transform.
 *
 * @returns The localized Georgian label for the given vacancy type, or an empty string if unknown.
 *
 */
export default function transformVacancyType(vacancyType: VACANCY_TYPES) {
  switch (vacancyType) {
    case VACANCY_TYPES.FULL_TIME:
      return "სრული განაკვეთი";
    case VACANCY_TYPES.PART_TIME:
      return "ჰიბრიდული";
    case VACANCY_TYPES.REMOTE:
      return "დისტანციური";
    default:
      return "";
  }
}
