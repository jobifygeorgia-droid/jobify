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

/**
 * @see
 * - {@link LocationT}
 * - {@link SelectValueT}
 * - {@link VacancySchema}
 *
 * React hook that initializes and manages the "vacancy" form.
 *
 * @param messages - API error messages to surface on the form fields; pass `null` if none.
 *
 * Workflow:
 *  - Configures react-hook-form with a Zod-based resolver for {@link VacancySchema}
 *  - Seeds the form with {@link vacancyInitialState}
 *  - Propagates server-side API validation errors to the appropriate fields.
 *
 * @returns
 * - control: The react-hook-form control instance for use with Controller/useController.
 * - handleSubmit: A submit handler wrapper that validates against the schema before invoking your callback.
 * - resetForm: A convenience function that resets all fields to {@link vacancyInitialState}.
 * - onChangeCategory: Handler for category select changes.
 * - onChangeLocation: Handler for location selection changes.
 * - editorRefs: Refs for rich text editors used in the form.
 */
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

    // manually revalidate location field
    form.trigger("location_name");
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
    editorRefs,
    onChangeCategory,
    onChangeLocation,
  };
}
