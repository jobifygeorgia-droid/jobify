import { useSession } from "next-auth/react";

import { USER_TYPES } from "@/interface/global.types";
import { usePopupsContext } from "@/providers/PopupsProvider";

/**
 * @see
 * - {@link USER_TYPES}
 * - {@link usePopupsContext}
 *
 * Provides a lazy authorization helper based on the current authentication state and user type.
 *
 * This hook reads the current NextAuth session (without forcing authentication)
 * and exposes predicate functions to check whether the user is an employer or a job seeker.
 * It optionally surfaces a warning alert when access is denied and an alert message is provided.
 *
 * Behavior:
 * - Does not redirect if the user is unauthenticated.
 * - Invokes the optional `onUnauthenticated` callback when no session is present.
 * - Exposes `checkIsEmployer` and `checkIsJobSeeker` predicates that:
 *   - Return a boolean indicating whether the user is allowed.
 *   - Optionally show a warning alert if `alertMessage` is provided and access is denied.
 *
 * @param onUnauthenticated - Optional callback invoked when the user is unauthenticated (no session).
 *
 * @returns An object with:
 * - `session`: The current NextAuth session object (same value as `useSession({ required: false }).data`).
 * - `checkIsEmployer(alertMessage?)`: Returns `true` if `session.user.user_type === USER_TYPES.EMPLOYER`.
 *    If `alertMessage` is provided and the user is not an employer, a warning alert is shown.
 * - `checkIsJobSeeker(alertMessage?)`: Returns `true` if `session.user.user_type === USER_TYPES.JOB_SEEKER`.
 *    If `alertMessage` is provided and the user is not a job seeker, a warning alert is shown.
 *
 * @remarks
 * - Assumes `session.user.user_type` is comparable to `USER_TYPES.EMPLOYER` and `USER_TYPES.JOB_SEEKER`.
 * - Alerts are displayed via `usePopupsContext().addAlert` only when an `alertMessage` is provided and access is denied.
 * - This hook does not enforce navigation or redirects; it is intended for guard checks in UI logic and actions.
 *
 */
export default function useAuthLazyCheck(onUnauthenticated?: () => void) {
  const { addAlert } = usePopupsContext();

  const { data: session } = useSession({
    required: false,
    onUnauthenticated() {
      onUnauthenticated?.();
    },
  });

  const checkIsEmployer = (alertMessage?: string) => {
    const isAllowed = session?.user?.user_type === USER_TYPES.EMPLOYER;

    if (alertMessage && !isAllowed)
      addAlert({
        type: "warning",
        title: "არაავტორიზებული წვდომა",
        text: alertMessage || "თქვენ არ გაქვთ წვდომა მოთხოვნილ ოპერაციაზე",
      });

    return isAllowed;
  };

  const checkIsJobSeeker = (alertMessage?: string) => {
    const isAllowed = session?.user?.user_type === USER_TYPES.JOB_SEEKER;

    if (alertMessage && !isAllowed)
      addAlert({
        type: "warning",
        title: "არაავტორიზებული წვდომა",
        text: alertMessage || "თქვენ არ გაქვთ წვდომა მოთხოვნილ ოპერაციაზე",
      });

    return isAllowed;
  };

  return { session, checkIsEmployer, checkIsJobSeeker };
}
