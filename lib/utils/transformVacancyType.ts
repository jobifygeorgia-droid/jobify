import { VACANCY_TYPES } from "@/interface/global.types";

export default function transformVacancyType(vacancy_type: VACANCY_TYPES) {
  switch (vacancy_type) {
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
