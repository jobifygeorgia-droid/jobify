import dayjs from "dayjs";
import "dayjs/locale/ka";

/**
 * Formats the given date using Day.js with the Georgian ("ka") locale as "D MMMM YYYY".
 *
 * - Returns an empty string if no date is provided (null, undefined, or empty string).
 * - Accepts either a native Date object or a date string parseable by Day.js.
 * - Requires the Day.js "ka" locale to be available in the runtime for correct localization.
 *
 * @param date - The date to format, as a Date instance or a Day.js-parseable string.
 *
 * @returns The formatted date string (e.g., "5 ოქტომბერი 2024"), or an empty string if input is falsy.
 */
export default function formatDate(date: string | Date): string {
  if (!date) return "";

  return dayjs(date).locale("ka").format("D MMMM YYYY");
}
