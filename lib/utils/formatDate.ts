import dayjs from "dayjs";
import "dayjs/locale/ka";

export default function formatDate(date: string | Date): string {
  if (!date) return "";

  return dayjs(date).locale("ka").format("D MMMM YYYY");
}
