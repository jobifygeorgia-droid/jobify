import { useState } from "react";
import { useFieldArray, useFormState } from "react-hook-form";

import { cvInitialState } from "@/lib/schemas/CVSchema";
import { objectDeepCopy } from "@/lib/utils/objectDeepCopy";
import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

export default function useEducation() {
  const cv = useCV();

  const {
    fields: educations,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control: cv.control,
    name: "education",
  });

  const [selectedEducationFieldIndex, setSelectedEducationFieldIndex] =
    useState(() => educations.length - 1);

  const validateEducation = async () => {
    return await cv.trigger([
      `education.${selectedEducationFieldIndex}.degree`,
      `education.${selectedEducationFieldIndex}.faculty`,
      `education.${selectedEducationFieldIndex}.university`,
    ]);
  };

  const onSelectEducationField = async (index: number) => {
    const temp = objectDeepCopy(
      cv.getValues(`education.${selectedEducationFieldIndex}`)
    );

    delete (temp as any).id;

    const currentFieldHasValues = Object.values(temp).some(
      (value) => value !== ""
    );

    if (currentFieldHasValues) {
      const isValid = await validateEducation();
      if (!isValid) return;
    } else {
      removeEducation(selectedEducationFieldIndex);
    }

    setSelectedEducationFieldIndex(index);
  };

  const onToggleEducation = async () => {
    const isOpenAndDirty =
      cv.isExpanded === "education" &&
      cv.getFieldState(`education.${selectedEducationFieldIndex}`).isDirty;

    if (isOpenAndDirty) await validateEducation();

    cv.onExpandTab("education");
  };

  const onAppendEducation = async () => {
    const isValid = await validateEducation();

    if (!isValid) return;

    appendEducation(cvInitialState.education[0]);
    setSelectedEducationFieldIndex(educations.length);
  };

  const onRemoveEducation = (index: number) => {
    if (educations.length === 1) return;

    removeEducation(index);

    /* -2 because of scheduling 
    - in the execution process system haven't yet know that we removed one of the field 
    - so in that case now it shows always the latest field of array
    - and as we are doing early return above - length===1 that guarantees the expected result
     */
    setSelectedEducationFieldIndex(() => educations.length - 2);
  };

  const { errors } = useFormState({ control: cv.control });
  const groupIsTouched = cv.getFieldState("education").isDirty;

  const hasError = Boolean(errors.education);
  const isSucceed = groupIsTouched && !hasError;

  return {
    isSucceed,
    hasError,
    onToggleEducation,
    educations,
    onAppendEducation,
    onRemoveEducation,
    onSelectEducationField,
    selectedEducationFieldIndex,
  };
}
