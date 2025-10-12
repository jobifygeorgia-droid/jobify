import { AxiosError } from "axios";
import { IS_PRODUCTION } from "@/lib/constants";

export default function logger(error: Error | AxiosError | string) {
  if (IS_PRODUCTION) return;

  if (typeof error === "string") {
    console.error(error);
  } else if (error instanceof AxiosError) {
    console.error("Axios error:", error.message);
  } else {
    console.error("Unknown error:", error);
  }
}
