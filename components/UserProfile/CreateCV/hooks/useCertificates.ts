import { useState } from "react";
import { useFieldArray, useFormState } from "react-hook-form";

import { objectDeepCopy } from "@/lib/utils";
import { cvInitialState } from "@/lib/schemas/user/CVSchema";
import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";

export default function useCertificates() {
  const cv = useCV();

  const {
    fields: certificates,
    append: appendCertificate,
    remove: removeCertificate,
  } = useFieldArray({
    control: cv.control,
    name: "certificates",
  });

  const [selectedCertificatesFieldIndex, setSelectedCertificatesFieldIndex] =
    useState(() => certificates.length - 1);

  const validateCertificate = async () => {
    return await cv.trigger([
      `certificates.${selectedCertificatesFieldIndex}.name`,
      `certificates.${selectedCertificatesFieldIndex}.organization`,
      `certificates.${selectedCertificatesFieldIndex}.end_date`,
    ]);
  };

  const onSelectCertificateField = async (index: number) => {
    const temp = objectDeepCopy(
      cv.getValues(`certificates.${selectedCertificatesFieldIndex}`)
    );

    delete (temp as any).id;

    const currentFieldHasValues = Object.values(temp).some(
      (value) => value !== ""
    );

    if (currentFieldHasValues) {
      const isValid = await validateCertificate();
      if (!isValid) return;
    } else {
      removeCertificate(selectedCertificatesFieldIndex);
    }

    setSelectedCertificatesFieldIndex(index);
  };

  const onToggleCertificates = async () => {
    const isOpenAndDirty =
      cv.isExpanded === "certificates" &&
      cv.getFieldState(`certificates.${selectedCertificatesFieldIndex}`)
        .isDirty;

    if (isOpenAndDirty) await validateCertificate();

    cv.onExpandTab("certificates");
  };

  const onAppendCertificate = async () => {
    const isValid = await validateCertificate();

    if (!isValid) return;

    appendCertificate(cvInitialState.certificates[0]);
    setSelectedCertificatesFieldIndex(certificates.length);
  };

  const onRemoveCertificate = (index: number) => {
    if (certificates.length === 1) return;

    removeCertificate(index);

    setSelectedCertificatesFieldIndex(() => certificates.length - 2);
  };

  const { errors } = useFormState({ control: cv.control });
  const groupIsTouched = cv.getFieldState("certificates").isDirty;

  const hasError = Boolean(errors.certificates);
  const isSucceed = groupIsTouched && !hasError;

  return {
    isSucceed,
    hasError,
    onToggleCertificates,
    certificates,
    selectedCertificatesFieldIndex,
    onRemoveCertificate,
    onAppendCertificate,
    onSelectCertificateField,
  };
}
