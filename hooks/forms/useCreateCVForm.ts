import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CVSchema, CVSchemaT, cvInitialState } from "@/lib/schemas/CVSchema";

export default function useCreateCVForm() {
  const { control, handleSubmit, reset, ...formControl } = useForm<CVSchemaT>({
    resolver: zodResolver(CVSchema),
    defaultValues: cvInitialState,
  });

  const {
    fields: working_experiences,
    append: appendWorkingExperience,
    remove: removeWorkingExperience,
  } = useFieldArray({
    control,
    name: "working_experience",
  });

  const onAppendWorkingExperience = () =>
    appendWorkingExperience(cvInitialState.working_experience[0]);

  const onRemoveWorkingExperience = (index: number) => {
    if (working_experiences.length === 1) return;

    removeWorkingExperience(index);
  };

  const {
    fields: educations,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const onAppendEducation = () => appendEducation(cvInitialState.education[0]);

  const onRemoveEducation = (index: number) => {
    if (educations.length === 1) return;

    removeEducation(index);
  };

  const { append: appendLanguage, remove: removeLanguage } = useFieldArray({
    control,
    name: "foreign_languages",
  });

  const onAppendLanguage = (value: CVSchemaT["foreign_languages"][0]) =>
    appendLanguage(value);

  const onRemoveLanguage = (index: number) => {
    removeLanguage(index);
  };

  const {
    fields: certificates,
    append: appendCertificate,
    remove: removeCertificate,
  } = useFieldArray({
    control,
    name: "certificates",
  });

  const onAppendCertificate = () =>
    appendCertificate(cvInitialState.certificates[0]);

  const onRemoveCertificate = (index: number) => {
    if (certificates.length === 1) return;

    removeCertificate(index);
  };

  const skills = formControl.watch("skills");

  const onAddSkill = (skill: string) =>
    formControl.setValue("skills", Array.from(new Set([...skills, skill])));

  const onRemoveSkill = (index: number) =>
    formControl.setValue(
      "skills",
      skills.filter((_, sIndex) => index !== sIndex)
    );

  const onReset = () => reset(cvInitialState);

  useEffect(() => {
    return () => {
      reset(cvInitialState);
    };
  }, [reset]);

  return {
    control,
    onReset,
    formControl,
    handleSubmit,
    working_experiences,
    onAppendWorkingExperience,
    onRemoveWorkingExperience,
    educations,
    onAppendEducation,
    onRemoveEducation,
    onAppendLanguage,
    onRemoveLanguage,
    onAddSkill,
    onRemoveSkill,
    certificates,
    onAppendCertificate,
    onRemoveCertificate,
  };
}
