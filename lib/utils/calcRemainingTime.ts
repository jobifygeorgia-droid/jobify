import {
  differenceInDays,
  differenceInHours,
  differenceInYears,
  differenceInMonths,
} from "date-fns";

/**
 * Calculates the remaining time from the current moment to a target date and returns
 * a compact Georgian-language label.
 *
 * Selection logic:
 * - Returns "past" if the target date/time is earlier than now.
 * - Returns hours if the difference is less than 24 hours.
 * - Returns days if the difference is less than 30 days.
 * - Returns months if the difference is less than 12 months.
 * - Returns years otherwise.
 *
 * The numeric value is the count of full units (truncated toward zero).
 *
 * Notes:
 * - Output uses Georgian unit words: "საათი" (hour), "დღე" (day), "თვე" (month), "წელი" (year).
 * - Parsing and timezone handling follow JavaScript Date semantics; provide an ISO 8601 string with timezone for predictability.
 * - Relies on `differenceInHours`, `differenceInDays`, `differenceInMonths`, and `differenceInYears` (e.g., from date-fns) being available in scope.
 *
 * @param date - Target date/time as a string parseable by `new Date()` (prefer ISO 8601 with timezone).
 * @returns "past" if the target is earlier than now; otherwise a human-readable Georgian string
 * indicating the remaining time in hours, days, months, or years.
 * @throws RangeError If the parsed date is invalid (propagated from the date-difference utilities).
 */
export default function calcRemainingTime(date: string): string {
  const now = new Date();
  const targetDate = new Date(date);

  if (targetDate.getTime() < now.getTime()) {
    return "past";
  }

  const hours = differenceInHours(targetDate, now);
  if (hours < 24) return `${hours} საათი`;

  const days = differenceInDays(targetDate, now);
  if (days < 30) return `${days} დღე`;

  const months = differenceInMonths(targetDate, now);
  if (months < 12) return `${months} თვე`;

  const years = differenceInYears(targetDate, now);
  return `${years} წელი`;
}
