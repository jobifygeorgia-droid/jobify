import logger from "./logger";
import { ReadDataResponseT } from "@/interface/db/common.types";

/**
 * @see
 * - {@link ReadDataResponseT}
 * - {@link logger}
 *
 * Executes an asynchronous action and normalizes its outcome into a consistent
 * ReadDataResponseT shape, providing localized, user-friendly error messages.
 *
 * On success, the resolved value is returned as `data` with `error: null`.
 * On failure, the error is intercepted, logged via `logger(error)`, and mapped to
 * a human-readable message (Georgian) based on the detected HTTP-like status code:
 * - 401: „თქვენ არ ხართ ავტორიზებული. გთხოვთ, გაიარეთ ავტორიზაცია.“
 * - 403: „თქვენ არ გაქვთ შესაბამისი უფლებები ამ ოპერაციის შესასრულებლად.“
 * - 404: „მონაცემი ვერ მოიძებნა.“
 * - Any other/unknown: „მოხდა შეცდომა. გთხოვთ, სცადეთ თავიდან.“
 *
 * If the status cannot be derived from the error, the returned `error.status` defaults to 500.
 * This function does not throw; callers should branch on the presence of `result.error`.
 *
 * @typeParam T - The type of the value the action resolves to on success.
 * @param action - A thunk that returns a Promise resolving to a value of type `T`.
 * @returns A promise that resolves to a `ReadDataResponseT<T>` containing either the `data`
 *          on success or an `error` object with `message` and `status` on failure.
 *
 * @remarks
 * - Relies on an external `logger(error)` helper to extract a `status` from the thrown error.
 * - Messages are localized (Georgian) and intended for end-user display.
 * - Because it converts thrown errors into a structured `error` object, this wrapper is
 *   suitable for UI flows that expect non-throwing data fetch/mutation semantics.
 */
export default async function actionWrapper<T>(
  action: () => Promise<T>
): Promise<ReadDataResponseT<T>> {
  try {
    const response = await action();

    return { data: response, error: null };
  } catch (error: any) {
    const { status } = logger(error);

    let candidateMessage = "";

    if (status === 401)
      candidateMessage =
        "თქვენ არ ხართ ავტორიზებული. გთხოვთ, გაიარეთ ავტორიზაცია.";
    else if (status === 403)
      candidateMessage =
        "თქვენ არ გაქვთ შესაბამისი უფლებები ამ ოპერაციის შესასრულებლად.";
    else if (status === 404) candidateMessage = "მონაცემი ვერ მოიძებნა.";
    else candidateMessage = "მოხდა შეცდომა. გთხოვთ, სცადეთ თავიდან.";

    return {
      data: null,
      error: { message: candidateMessage, status: status ?? 500 },
    };
  }
}
