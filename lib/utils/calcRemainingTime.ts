import {
  differenceInHours,
  differenceInDays,
  differenceInMonths,
} from "date-fns";

export default function calcRemainingTime(date: string): string {
  const now = new Date();
  const targetDate = new Date(date);

  const hours = differenceInHours(targetDate, now);
  if (hours < 24) {
    return `${hours} საათი`;
  }

  const days = differenceInDays(targetDate, now);
  if (days < 30) {
    return `${days} დღე`;
  }

  const months = differenceInMonths(targetDate, now);

  return `${months} თვე`;
}
