import { IS_PRODUCTION } from "@/lib/constants";

/**
 * Universal error logger for both Axios and native errors.
 * Logs detailed info only in non-production environments.
 * Returns a clean, user-safe message string.
 */
export default function logger(error: any) {
  if (IS_PRODUCTION)
    return { message: "An unexpected error occurred.", status: 400 };

  let message = "Unknown error";
  let status: number | undefined;

  if (typeof error === "object" && error !== null) {
    const err = error as any;
    status = err?.response?.status;

    message =
      err?.response?.data?.detail ||
      err?.response?.data?.message ||
      err?.message ||
      message;
  } else if (typeof error === "string") {
    message = error;
  }

  console.error("💥 Error Logger 💥", { message, status, error });

  return { message, status };
}
