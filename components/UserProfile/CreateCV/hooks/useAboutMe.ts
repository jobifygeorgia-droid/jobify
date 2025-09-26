import { useFormState } from "react-hook-form";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

export default function useAboutMe() {
  const cv = useCV();

  const validateAboutMe = async () => {
    return await cv.trigger([`about_me`]);
  };

  const onToggleAboutMe = async () => {
    const isOpenAndDirty =
      cv.isExpanded === "about_me" && cv.getFieldState("about_me").isDirty;

    if (isOpenAndDirty) await validateAboutMe();

    cv.onExpandTab("about_me");
  };

  const { errors } = useFormState({ control: cv.control });
  const groupIsTouched = cv.getFieldState("about_me").isDirty;

  const hasError = Boolean(errors.about_me);
  const isSucceed = groupIsTouched && !hasError;

  return { onToggleAboutMe, isSucceed, hasError };
}
