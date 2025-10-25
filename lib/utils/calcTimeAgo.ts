import {
  FormatDistanceToken,
  formatDistanceStrict,
  FormatDistanceFnOptions,
} from "date-fns";
import { ka } from "date-fns/locale";

/**
 * Returns a human-readable relative time string between “now” and the given date,
 * localized to Georgian (ka), e.g., "3 საათის წინ".
 *
 * Behavior:
 * - If the provided date/time is in the future (strictly greater than now), returns "".
 * - Otherwise, returns a Georgian "ago" string using date-fns `formatDistanceStrict`
 *   with a custom Georgian locale that:
 *   - Formats seconds, minutes, hours, days, months, and years in Georgian.
 *   - Always appends the suffix "წინ" ("ago") when a suffix is requested.
 *
 * Notes:
 * - The distance is computed from the current time (`new Date()`) to the provided date.
 * - The input must be a string parseable by the JavaScript `Date` constructor. Parsing of
 *   non-ISO strings is environment-dependent; prefer ISO 8601 (e.g., "2025-10-21T09:00:00Z").
 *
 * @param date - A date/time string (ideally ISO 8601) parseable by `new Date(date)`.
 * @returns A Georgian localized distance string such as "5 წუთის წინ", "1 დღის წინ", or "3 თვის წინ",
 *          or an empty string if the provided time is in the future.
 * @throws RangeError If the input cannot be parsed into a valid `Date`.
 */
export default function calcTimeAgo(date: string): string {
  const target = new Date(date);

  if (isNaN(target.getTime())) throw new RangeError("Invalid time value");

  const now = new Date();

  if (target.getTime() > now.getTime()) return "";

  const customLocale = {
    ...ka,
    formatDistance: (
      token: FormatDistanceToken,
      count: number,
      options: FormatDistanceFnOptions | undefined
    ) => {
      let result = "";

      switch (token) {
        case "xSeconds":
          result = `${count} წამის`;
          break;
        case "xMinutes":
          result = `${count} წუთის`;
          break;
        case "xHours":
          result = `${count} საათის`;
          break;
        case "xDays":
          result = `${count} დღის`;
          break;
        case "xMonths":
          result = `${count} თვის`;
          break;
        case "xYears":
          result = `${count} წლის`;
          break;
        default:
          result = `${count}`;
      }

      if (options?.addSuffix) result += " წინ";

      return result;
    },
  };

  return formatDistanceStrict(now, target, {
    locale: customLocale,
    addSuffix: true,
  });
}
