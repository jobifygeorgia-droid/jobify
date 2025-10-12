import { Editor } from "@tiptap/react";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  VacancySchema,
  VacancySchemaT,
  vacancyInitialState,
} from "@/lib/schemas/company/VacancySchema";
import { SelectValueT } from "@/interface/ui/forms-ui";
import { usePropagateAPIErrorToHookForms } from "@/hooks/utils";
import { APIErrorMessages, LocationT } from "@/interface/global.types";

export default function useVacancyForm(messages: APIErrorMessages | null) {
  const { control, handleSubmit, reset, setError, ...form } =
    useForm<VacancySchemaT>({
      resolver: zodResolver(VacancySchema),
      defaultValues: vacancyInitialState,
    });

  const onChangeCategory = (
    value: SelectValueT,
    cb: (v: Array<string>) => void
  ) => {
    if (Array.isArray(value)) cb(value.map((v) => v.value));
  };

  const onChangeLocation = (location: LocationT) => {
    form.setValue("latitude", location.lat);
    form.setValue("longitude", location.lon);
    form.setValue("location", location.location);
    form.setValue("location_name", location.location_name);
  };

  const editorRefs = {
    description: useRef<Editor | null>(null),
    requirements: useRef<Editor | null>(null),
    advantages: useRef<Editor | null>(null),
  };

  const resetForm = useCallback(() => {
    reset({ ...vacancyInitialState });
    Object.values(editorRefs).forEach((ref) =>
      ref.current?.commands.setContent("")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  usePropagateAPIErrorToHookForms(messages, setError);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  return {
    control,
    handleSubmit,
    resetForm,
    onChangeCategory,
    onChangeLocation,
    editorRefs,
  };
}
