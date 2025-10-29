import { IS_PRODUCTION } from "@/lib/constants";

/**
 * @see
 * - {@link IS_PRODUCTION}
 *
 * Normalizes unknown errors into a user-facing message and optional HTTP status code.
 *
 * Behavior:
 * - If `IS_PRODUCTION` is truthy, returns a redacted result: `{ message: "An unexpected error occurred.", status: 400 }`.
 * - Otherwise attempts to extract:
 *   - `status` from `error.response.status` (Axios-style errors).
 *   - `message` from `error.response.data.detail`, `error.response.data.message`, or `error.message`.
 *   - If `error` is a string, uses it directly as the message.
 *
 * Side effects:
 * - Logs a structured entry to `console.error` with the resolved `message`, `status`, and original `error`.
 *
 * @param error - The caught error value. May be a string, an `Error`-like object, or an Axios-like error with a `response` shape.
 *
 * @returns An object containing the user-facing `message` and an optional `status` number.
 *
 * @remarks
 * - Relies on a global `IS_PRODUCTION` flag to decide whether to redact details.
 * - `status` may be `undefined` if it cannot be derived from the input.
 * - Useful in catch blocks or API boundaries to provide consistent error reporting.
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

  console.error("💥 Error Logger 💥", { message, status });

  return { message, status };
}
