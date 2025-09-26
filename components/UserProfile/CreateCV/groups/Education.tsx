import { Fragment } from "react";
import { Controller } from "react-hook-form";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";
import { useEducation } from "@/components/UserProfile/CreateCV/hooks";

import {
  FormGroupGrid,
  EducationReview,
  ArrayFieldsControl,
  FormGroupContainer,
} from "@/components/UserProfile/CreateCV/ui";
import { ChipsField, DatePicker, TextField } from "@/components/layouts/Form";

const degrees = [
  { title: "ბაკალავრიატი", value: "ბაკალავრიატი" },
  { title: "მაგისტრატურა", value: "მაგისტრატურა" },
  { title: "დოქტორანტურა", value: "დოქტორანტურა" },
];

const Education: React.FC = () => {
  const { watch, control } = useCV();
  const edu = useEducation();

  return (
    <FormGroupContainer
      title="განათლება"
      name="education"
      isSucceed={edu.isSucceed}
      hasError={edu.hasError}
      onExpand={edu.onToggleEducation}
    >
      {edu.educations.map((education, index) => (
        <EducationReview
          key={`education-review-${education.id}`}
          index={index}
          watch={watch}
          onDelete={() => edu.onRemoveEducation(index)}
          onEdit={() => edu.onSelectEducationField(index)}
        />
      ))}

      {edu.educations.map((education, index) =>
        edu.selectedEducationFieldIndex !== index ? null : (
          <Fragment key={`education-form-${education.id}`}>
            <Controller
              control={control}
              name={`education.${index}.degree`}
              render={({ field, fieldState: { error } }) => (
                <ChipsField
                  data={degrees}
                  value={field.value}
                  message={error?.message}
                  onChange={(v) => field.onChange(v)}
                />
              )}
            />

            <FormGroupGrid>
              <Controller
                control={control}
                name={`education.${index}.faculty`}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    labelPosition="out"
                    label="ფაკულტეტი"
                    message={error?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={`education.${index}.university`}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    labelPosition="out"
                    label="უნივერსიტეტი"
                    message={error?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={`education.${index}.start_date`}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    {...field}
                    label="დაწყების თარიღი"
                    message={error?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name={`education.${index}.end_date`}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    {...field}
                    label="დასრულების თარიღი"
                    message={error?.message}
                  />
                )}
              />
            </FormGroupGrid>
          </Fragment>
        )
      )}

      <ArrayFieldsControl
        onAdd={edu.onAppendEducation}
        onRemove={() => edu.onRemoveEducation(edu.selectedEducationFieldIndex)}
      />
    </FormGroupContainer>
  );
};

export default Education;
