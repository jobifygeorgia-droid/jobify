"use client";

import { Fragment } from "react";
import { Controller } from "react-hook-form";

import { TipTapProvider } from "@/providers";
import useCreateCVForm from "@/hooks/forms/useCreateCVForm";

import {
  Switch,
  TextField,
  TextEditor,
  DatePicker,
} from "@/components/layouts/Form";
import * as UI from "./ui";

type CreateCVT = {};

const CreateCV: React.FC<CreateCVT> = () => {
  const { control, ...form } = useCreateCVForm();

  return (
    <div className="flex items-stretch gap-5 h-full py-7">
      <div className="flex-1 flex flex-col gap-6">
        <UI.FormHeader />

        <div className="">
          <form className="flex flex-col gap-4">
            <UI.FormGroupContainer title="პერსონალური დეტალები">
              <UI.FormGroupGrid>
                <Controller
                  control={control}
                  name="fullname"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      labelPosition="out"
                      label="სახელი და გვარი *"
                      message={error?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="profession"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      labelPosition="out"
                      label="პროფესია *"
                      message={error?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="email"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      labelPosition="out"
                      label="ელ.ფოსტა *"
                      message={error?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="phone_number"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      labelPosition="out"
                      label="ტელეფონი *"
                      message={error?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="address"
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      labelPosition="out"
                      label="მისამართი *"
                      message={error?.message}
                      containerClassName="col-span-2"
                    />
                  )}
                />
              </UI.FormGroupGrid>
            </UI.FormGroupContainer>

            <UI.FormGroupContainer title="ჩემს შესახებ">
              <UI.FormGroupGrid>
                <TipTapProvider readonly={false}>
                  <Controller
                    control={control}
                    name="about_me"
                    render={({ field, fieldState: { error } }) => (
                      <TextEditor
                        height="220px"
                        message={error?.message}
                        className="col-span-2"
                        label="გაგვაცანი შენი თავი"
                        onChange={(v: string) => field.onChange(v)}
                      />
                    )}
                  />
                </TipTapProvider>
              </UI.FormGroupGrid>
            </UI.FormGroupContainer>

            <UI.FormGroupContainer title="სამუშაო გამოცდილება">
              {form.working_experiences.map((experience, index, array) => (
                <UI.FormGroupGrid
                  key={experience.id}
                  showDivider={index + 1 < array.length}
                >
                  {array.length > 1 && (
                    <UI.RemoveArrayFieldButton
                      onRemove={() => form.onRemoveWorkingExperience(index)}
                    />
                  )}

                  <Controller
                    control={control}
                    name={`working_experience.${index}.position`}
                    render={({ field, fieldState: { error } }) => (
                      <TextField
                        {...field}
                        labelPosition="out"
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
                        labelPosition="out"
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
                        label="დასრულების თარიღი"
                        message={error?.message}
                      />
                    )}
                  />

                  <div className="col-span-2 flex justify-end">
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
                </UI.FormGroupGrid>
              ))}

              <UI.ArrayFieldsControl
                onAppend={form.onAppendWorkingExperience}
              />
            </UI.FormGroupContainer>

            <UI.FormGroupContainer title="განათლება">
              {form.educations.map((education, index, array) => (
                <Fragment key={education.id}>
                  <UI.EducationReview
                    index={index}
                    watch={form.formControl.watch}
                  />

                  <Controller
                    control={control}
                    name={`education.${index}.degree`}
                    render={({ field, fieldState: { error } }) => (
                      <UI.DegreesChips
                        value={field.value}
                        message={error?.message}
                        onChoose={(v) => field.onChange(v)}
                      />
                    )}
                  />

                  <UI.FormGroupGrid showDivider={index + 1 < array.length}>
                    {array.length > 1 && (
                      <UI.RemoveArrayFieldButton
                        onRemove={() => form.onRemoveEducation(index)}
                      />
                    )}

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
                  </UI.FormGroupGrid>
                </Fragment>
              ))}

              <UI.ArrayFieldsControl onAppend={form.onAppendEducation} />
            </UI.FormGroupContainer>

            <UI.FormGroupContainer title="უნარები">
              <Controller
                control={control}
                name="skills"
                render={({ field, fieldState: { error } }) => (
                  <UI.SkillsField
                    skills={field.value}
                    message={error?.message}
                    onAddSkill={form.onAddSkill}
                    onRemoveSkill={form.onRemoveSkill}
                  />
                )}
              />
            </UI.FormGroupContainer>

            <UI.FormGroupContainer title="უცხო ენა">
              <Controller
                control={control}
                name="foreign_languages"
                render={({ field, fieldState: { error } }) => (
                  <UI.ForeignLanguagesField
                    message={error?.message}
                    languages={field.value}
                    onAddLanguage={form.onAppendLanguage}
                    onRemoveLanguage={form.onRemoveLanguage}
                  />
                )}
              />
            </UI.FormGroupContainer>

            <UI.FormGroupContainer title="სერთიფიკატები">
              {form.certificates.map((certificate, index, array) => (
                <Fragment key={certificate.id}>
                  <UI.CertificatesReview
                    index={index}
                    watch={form.formControl.watch}
                  />

                  <UI.FormGroupGrid showDivider={index + 1 < array.length}>
                    {array.length > 1 && (
                      <UI.RemoveArrayFieldButton
                        onRemove={() => form.onRemoveCertificate(index)}
                      />
                    )}

                    <Controller
                      control={control}
                      name={`certificates.${index}.name`}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          label="დასახელება"
                          labelPosition="out"
                          {...field}
                          message={error?.message}
                        />
                      )}
                    />

                    <Controller
                      control={control}
                      name={`certificates.${index}.organization`}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          label="ორგანიზაცია"
                          labelPosition="out"
                          {...field}
                          message={error?.message}
                        />
                      )}
                    />

                    <Controller
                      control={control}
                      name={`certificates.${index}.end_date`}
                      render={({ field, fieldState: { error } }) => (
                        <DatePicker
                          label="დასრულების თარიღი"
                          {...field}
                          message={error?.message}
                        />
                      )}
                    />
                  </UI.FormGroupGrid>
                </Fragment>
              ))}

              <UI.ArrayFieldsControl onAppend={form.onAppendCertificate} />
            </UI.FormGroupContainer>
          </form>
        </div>
      </div>

      <div className="flex-1 h-[86vh] bg-light-grey rounded-2xl sticky top-24"></div>
    </div>
  );
};

export default CreateCV;
