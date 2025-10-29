import { Fragment } from "react";
import { Controller } from "react-hook-form";

import { useCV } from "@/components/UserProfile/CreateCV/CVProvider";
import { useWorkingExperience } from "@/components/UserProfile/CreateCV/hooks";

import {
  FormGroupGrid,
  FormGroupContainer,
  ArrayFieldsControl,
  WorkingExperienceReview,
} from "@/components/UserProfile/CreateCV/ui";
import { TextField, DatePicker, Switch } from "@/components/layouts/Form";

const WorkingExperience: React.FC = () => {
  const { watch, control } = useCV();
  const wex = useWorkingExperience();

  return (
    <FormGroupContainer
      title="სამუშაო გამოცდილება"
      name="working_experience"
      isSucceed={wex.isSucceed}
      hasError={wex.hasError}
      onExpand={wex.onToggleWorkingExperience}
    >
      {wex.working_experiences.map((education, index) => (
        <Fragment key={`working-experience-review-${education.id}`}>
          <WorkingExperienceReview
            index={index}
            watch={watch}
            onDelete={() => wex.onRemoveWorkingExperience(index)}
            onEdit={() => wex.onSelectWorkingExperienceField(index)}
          />
        </Fragment>
      ))}

      {wex.working_experiences.map((experience, index) =>
        wex.selectedWorkingExperienceFieldIndex !== index ? null : (
          <FormGroupGrid key={`working-experience-form-${experience.id}`}>
            <Controller
              control={control}
              name={`working_experience.${index}.position`}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="პოზიცია"
                  message={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name={`working_experience.${index}.company`}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="კომპანია"
                  message={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name={`working_experience.${index}.start_date`}
              render={({ field, fieldState: { error } }) => (
                <DatePicker
                  {...field}
                  disableFuture
                  label="დაწყების თარიღი"
                  message={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name={`working_experience.${index}.end_date`}
              render={({ field, fieldState: { error } }) => (
                <DatePicker
                  {...field}
                  disableFuture
                  label="დასრულების თარიღი"
                  message={error?.message}
                />
              )}
            />

            <div className="col-span-1 tablet:col-span-2 flex justify-end">
              <Controller
                control={control}
                name={`working_experience.${index}.isOngoingWork`}
                render={({ field: { onChange, ...field } }) => (
                  <Switch
                    label="მიმდინარე სამსახური"
                    {...field}
                    onChange={(v) => onChange(v)}
                  />
                )}
              />
            </div>
          </FormGroupGrid>
        )
      )}

      <ArrayFieldsControl
        onAdd={wex.onAppendWorkingExperience}
        onRemove={() =>
          wex.onRemoveWorkingExperience(wex.selectedWorkingExperienceFieldIndex)
        }
      />
    </FormGroupContainer>
  );
};

export default WorkingExperience;
