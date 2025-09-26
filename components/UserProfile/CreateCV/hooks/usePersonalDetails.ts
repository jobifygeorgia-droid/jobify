import { useFormState } from "react-hook-form";
import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

export default function usePersonalDetails() {
  const cv = useCV();

  const validatePersonalDetails = async () => {
    return await cv.trigger([
      `personal_details.fullname`,
      `personal_details.profession`,
      `personal_details.email`,
      `personal_details.phone_number`,
      `personal_details.address`,
    ]);
  };

  const onTogglePersonalDetails = async () => {
    const isOpenAndDirty =
      cv.isExpanded === "personal_details" &&
      cv.getFieldState("personal_details").isDirty;

    if (isOpenAndDirty) await validatePersonalDetails();

    cv.onExpandTab("personal_details");
  };

  const { errors } = useFormState({ control: cv.control });
  const groupIsTouched = cv.getFieldState("personal_details").isDirty;

  const hasError = Boolean(errors.personal_details);
  const isSucceed = groupIsTouched && !hasError;

  return { onTogglePersonalDetails, isSucceed, hasError };
}
