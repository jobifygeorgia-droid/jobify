import {
  FormatDistanceToken,
  formatDistanceStrict,
  FormatDistanceFnOptions,
} from "date-fns";
import { ka } from "date-fns/locale";

export default function calcTimeAgo(date: string) {
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
          result = `${count} წამი`;
          break;
        case "xMinutes":
          result = count === 1 ? "1 წუთის" : `${count} წუთის`;
          break;
        case "xHours":
          result = count === 1 ? "1 საათის" : `${count} საათის`;
          break;
        case "xDays":
          result = count === 1 ? "1 დღის" : `${count} დღის`;
          break;
        case "xMonths":
          result = count === 1 ? "1 თვის" : `${count} თვის`;
          break;
        case "xYears":
          result = count === 1 ? "1 წლის" : `${count} წლის`;
          break;
        default:
          result = `${count}`;
      }

      if (options?.addSuffix) result += " წინ";

      return result;
    },
  };

  return formatDistanceStrict(new Date(), new Date(date), {
    locale: customLocale,
    addSuffix: true,
  });
}
