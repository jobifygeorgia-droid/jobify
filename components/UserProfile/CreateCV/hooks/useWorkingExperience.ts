import { useState } from "react";
import { useFieldArray, useFormState } from "react-hook-form";

import { objectDeepCopy } from "@/lib/utils";
import { cvInitialState } from "@/lib/schemas/user/CVSchema";
import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

export default function useWorkingExperience() {
  const cv = useCV();

  const {
    fields: working_experiences,
    append: appendWorkingExperience,
    remove: removeWorkingExperience,
  } = useFieldArray({
    control: cv.control,
    name: "working_experience",
  });

  const [
    selectedWorkingExperienceFieldIndex,
    setSelectedWorkingExperienceFieldIndex,
  ] = useState(() => working_experiences.length - 1);

  const validateWorkingExperience = async () => {
    return await cv.trigger([
      `working_experience.${selectedWorkingExperienceFieldIndex}.position`,
      `working_experience.${selectedWorkingExperienceFieldIndex}.company`,
      `working_experience.${selectedWorkingExperienceFieldIndex}.start_date`,
      `working_experience.${selectedWorkingExperienceFieldIndex}.end_date`,
      `working_experience.${selectedWorkingExperienceFieldIndex}.isOngoingWork`,
    ]);
  };

  const onSelectWorkingExperienceField = async (index: number) => {
    const temp = objectDeepCopy(
      cv.getValues(`working_experience.${selectedWorkingExperienceFieldIndex}`)
    );

    delete (temp as any).id;
    delete (temp as any).isOngoingWork;

    const currentFieldHasValues = Object.values(temp).some(
      (value) => value !== ""
    );

    if (currentFieldHasValues) {
      const isValid = await validateWorkingExperience();
      if (!isValid) return;
    } else {
      removeWorkingExperience(selectedWorkingExperienceFieldIndex);
    }

    setSelectedWorkingExperienceFieldIndex(index);
  };

  const onToggleWorkingExperience = async () => {
    const isOpenAndDirty =
      cv.isExpanded === "working_experience" &&
      cv.getFieldState(
        `working_experience.${selectedWorkingExperienceFieldIndex}`
      ).isDirty;

    if (isOpenAndDirty) await validateWorkingExperience();

    cv.onExpandTab("working_experience");
  };

  const onAppendWorkingExperience = async () => {
    const isValid = await validateWorkingExperience();

    if (!isValid) return;

    appendWorkingExperience(cvInitialState.working_experience[0]);
    setSelectedWorkingExperienceFieldIndex(working_experiences.length);
  };

  const onRemoveWorkingExperience = (index: number) => {
    if (working_experiences.length === 1) return;

    removeWorkingExperience(index);

    setSelectedWorkingExperienceFieldIndex(
      () => working_experiences.length - 2
    );
  };

  const { errors } = useFormState({ control: cv.control });
  const groupIsTouched = cv.getFieldState("working_experience").isDirty;

  const hasError = Boolean(errors.working_experience);
  const isSucceed = groupIsTouched && !hasError;

  return {
    isSucceed,
    hasError,
    onToggleWorkingExperience,
    working_experiences,
    onAppendWorkingExperience,
    onRemoveWorkingExperience,
    onSelectWorkingExperienceField,
    selectedWorkingExperienceFieldIndex,
  };
}
