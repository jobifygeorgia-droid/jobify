import { useState } from "react";
import { useFormState } from "react-hook-form";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

export default function useSkills() {
  const cv = useCV();

  const skills = cv.watch("skills");

  const [selectedSkillFieldIndex, setSelectSkillFieldIndex] = useState(
    () => skills.length - 1
  );

  const validateSkill = async () => {
    return await cv.trigger([`skills.${selectedSkillFieldIndex}`]);
  };

  const onToggleSkills = async () => {
    const freshSkills = cv.getValues("skills");
    const lastItem = freshSkills[freshSkills.length - 1];

    const isOpenAndDirty =
      cv.isExpanded === "skills" && cv.getFieldState(`skills`).isDirty;

    if (freshSkills.length === 1 && isOpenAndDirty)
      await cv.trigger(["skills"]);
    if (freshSkills.length > 1 && isOpenAndDirty && lastItem !== "")
      await validateSkill();

    cv.onExpandTab("skills");
  };

  const [addedSkills, setAddedSkills] = useState<Array<string>>([]);

  const onAppendSkill = async () => {
    const isValid = await validateSkill();

    if (!isValid) return;

    cv.setValue("skills", [...skills, ""]);
    setAddedSkills(() => skills);

    const freshSkills = cv.getValues("skills");
    setSelectSkillFieldIndex(freshSkills.length - 1);
  };

  const onRemoveSkill = (index: number) => {
    cv.setValue(
      "skills",
      skills.filter((_, sIndex) => index !== sIndex)
    );

    const freshSkills = cv.getValues("skills");

    setAddedSkills(() => freshSkills.filter((s) => s !== ""));
    setSelectSkillFieldIndex(freshSkills.length - 1);
  };

  const onCancelSkill = () => {
    const freshSkills = cv.getValues("skills");
    const lastIndex = freshSkills.length - 1;

    if (selectedSkillFieldIndex === lastIndex) {
      cv.setValue(`skills.${selectedSkillFieldIndex}`, "");
    } else {
      onRemoveSkill(selectedSkillFieldIndex);
      setSelectSkillFieldIndex(lastIndex);
    }
  };

  const { errors } = useFormState({ control: cv.control });
  const groupIsTouched = cv.getFieldState("skills").isDirty;

  const hasError = Boolean(errors.skills);
  const isSucceed = groupIsTouched && !hasError;

  return {
    isSucceed,
    hasError,
    onToggleSkills,
    skills,
    addedSkills,
    selectedSkillFieldIndex,
    onAppendSkill,
    onRemoveSkill,
    onCancelSkill,
  };
}
