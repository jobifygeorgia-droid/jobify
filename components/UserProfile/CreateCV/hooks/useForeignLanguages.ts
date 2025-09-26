import { useState } from "react";
import { useFieldArray, useFormState } from "react-hook-form";

import { cvInitialState, CVSchemaT } from "@/lib/schemas/CVSchema";
import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

export default function useForeignLanguages() {
  const cv = useCV();

  const {
    append: appendLanguage,
    remove: removeLanguage,
    fields: foreignLanguages,
  } = useFieldArray({
    control: cv.control,
    name: "foreign_languages",
  });

  const [
    selectedForeignLanguageFieldIndex,
    setSelectForeignLanguageFieldIndex,
  ] = useState(() => foreignLanguages.length - 1);

  const validateForeignLanguage = async () => {
    return await cv.trigger([
      `foreign_languages.${selectedForeignLanguageFieldIndex}.language`,
      `foreign_languages.${selectedForeignLanguageFieldIndex}.level`,
    ]);
  };

  const onToggleForeignLanguages = async () => {
    const freshForeignLanguages = cv.getValues("foreign_languages");
    const lastItem = freshForeignLanguages[freshForeignLanguages.length - 1];

    const hasValues = Object.values(lastItem).every((v) => v === "");

    const isOpenAndDirty =
      cv.isExpanded === "foreign_languages" &&
      cv.getFieldState(`foreign_languages`).isDirty;

    if (freshForeignLanguages.length === 1 && isOpenAndDirty)
      await cv.trigger(["foreign_languages"]);
    if (freshForeignLanguages.length > 1 && isOpenAndDirty && !hasValues)
      await validateForeignLanguage();

    cv.onExpandTab("foreign_languages");
  };

  const [addedForeignLanguages, setAddedForeignLanguages] = useState<
    CVSchemaT["foreign_languages"]
  >([]);

  const onAppendForeignLanguage = async () => {
    const isValid = await validateForeignLanguage();

    if (!isValid) return;

    appendLanguage(cvInitialState.foreign_languages[0]);

    const freshForeignLanguages = cv.getValues("foreign_languages");
    const lastItemIndex = freshForeignLanguages.length - 1;

    setAddedForeignLanguages(() =>
      freshForeignLanguages.slice(0, lastItemIndex)
    );

    setSelectForeignLanguageFieldIndex(lastItemIndex);
  };

  const onRemoveForeignLanguage = (index: number) => {
    if (foreignLanguages.length === 1) return;

    removeLanguage(index);

    setAddedForeignLanguages((prev) =>
      prev.filter((_, prevIndex) => prevIndex !== index)
    );

    const freshForeignLanguages = cv.getValues("foreign_languages");
    setSelectForeignLanguageFieldIndex(freshForeignLanguages.length - 1);
  };

  const onCancelForeignLanguage = () => {
    const freshForeignLanguages = cv.getValues("foreign_languages");
    const lastItemIndex = freshForeignLanguages.length - 1;

    if (selectedForeignLanguageFieldIndex === lastItemIndex) {
      cv.setValue(
        `foreign_languages.${selectedForeignLanguageFieldIndex}`,
        cvInitialState.foreign_languages[0]
      );
    } else {
      onRemoveForeignLanguage(selectedForeignLanguageFieldIndex);
      setSelectForeignLanguageFieldIndex(lastItemIndex);
    }
  };

  const { errors } = useFormState({ control: cv.control });
  const groupIsTouched = cv.getFieldState("foreign_languages").isDirty;

  const hasError = Boolean(errors.foreign_languages);
  const isSucceed = groupIsTouched && !hasError;

  return {
    isSucceed,
    hasError,
    onToggleForeignLanguages,
    foreignLanguages,
    addedForeignLanguages,
    selectedForeignLanguageFieldIndex,
    onAppendForeignLanguage,
    onRemoveForeignLanguage,
    onCancelForeignLanguage,
  };
}
