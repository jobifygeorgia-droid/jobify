import { useSession } from "next-auth/react";

import { USER_TYPES } from "@/interface/global.types";
import { usePopupsContext } from "@/providers/PopupsProvider";

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
