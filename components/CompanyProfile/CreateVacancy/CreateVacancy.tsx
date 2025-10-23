"use client";

import { Controller } from "react-hook-form";

import { TipTapProvider } from "@/providers";
import { useVacancyForm } from "@/hooks/forms";
import { useAuthLazyCheck } from "@/hooks/utils";
import { useCreateVacancyQuery } from "@/hooks/api/company/vacancies";
import { workTypeOptions, vacancyTypeOptions } from "@/lib/static-data";

import {
  Label,
  TextField,
  ChipsField,
  TextEditor,
  ErrorMessage,
  LocationField,
  CategoriesField,
} from "@/components/layouts/Form";
import { Aside, FormContainer } from "./ui";
import { Button, Spinner } from "@/components/ui";

type CreateVacancyT = {};

const CreateVacancy: React.FC<CreateVacancyT> = () => {
  const { checkIsEmployer } = useAuthLazyCheck();

  const { status, createVacancyQuery } = useCreateVacancyQuery();

  const { control, handleSubmit, resetForm, editorRefs, ...handlers } =
    useVacancyForm(status.messages);

  const onCreateVacancy = handleSubmit(async (values) => {
    const isEmployer = checkIsEmployer(
      "თქვენ არ გაქვთ წვდომა მოთხოვნილ ოპერაციაზე"
    );

    if (!isEmployer) return;

    await createVacancyQuery(values, resetForm);
  });

  return (
    <div className="bg-white rounded-2xl w-full laptop:h-[80vh] laptop:my-6 flex items-stretch overflow-hidden">
      <Aside />

      <FormContainer disableScroll={status.loading}>
        {status.loading && (
          <div className="absolute w-full bottom-0 h-[80vh] z-10">
            <Spinner />
          </div>
        )}

        <form
          onSubmit={onCreateVacancy}
          className="px-2 laptop:px-10 pt-4 mx-auto pb-0 flex flex-col gap-6 h-full w-full relative"
        >
          <Controller
            control={control}
            name="title"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                message={error?.message}
                label="პოზიციის დასახელება"
                labelPosition="out"
              />
            )}
          />

          <Controller
            control={control}
            name="categories"
            render={({ field, fieldState: { error } }) => (
              <CategoriesField
                value={field.value}
                message={error?.message}
                onChange={(category) =>
                  handlers.onChangeCategory(category, field.onChange)
                }
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({ field, fieldState: { error } }) => (
              <TipTapProvider
                readonly={false}
                content={field.value}
                ref={editorRefs.description}
              >
                <TextEditor
                  {...field}
                  message={error?.message}
                  label="სამუშაოს აღწერა"
                  height="200px"
                />
              </TipTapProvider>
            )}
          />

          <Controller
            control={control}
            name="requirements"
            render={({ field, fieldState: { error } }) => (
              <TipTapProvider
                readonly={false}
                content={field.value}
                ref={editorRefs.requirements}
              >
                <TextEditor
                  {...field}
                  message={error?.message}
                  label="საკვალიფიკაციო მოთხოვნები"
                  height="200px"
                />
              </TipTapProvider>
            )}
          />

          <Controller
            control={control}
            name="advantages"
            render={({ field, fieldState: { error } }) => (
              <TipTapProvider
                readonly={false}
                content={field.value}
                ref={editorRefs.advantages}
              >
                <TextEditor
                  {...field}
                  message={error?.message}
                  label="კომპანიის უპირატესობები"
                  height="200px"
                />
              </TipTapProvider>
            )}
          />

          <div className="flex flex-col gap-2">
            <Label label="ანაზღაურება" labelPosition="out" />

            <div className="flex gap-5 w-full order-1">
              <Controller
                control={control}
                name="min_salary"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...{
                      ...field,
                      value: field.value ? field.value.toString() : "",
                      onChange: (e) => field.onChange(Number(e.target.value)),
                    }}
                    message={error?.message}
                    label="დან"
                    labelPosition="out"
                    containerClassName="flex-1"
                  />
                )}
              />

              <Controller
                control={control}
                name="max_salary"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...{
                      ...field,
                      value: field.value ? field.value.toString() : "",
                      onChange: (e) => field.onChange(Number(e.target.value)),
                    }}
                    message={error?.message}
                    label="მდე"
                    labelPosition="out"
                    containerClassName="flex-1"
                  />
                )}
              />
            </div>
          </div>

          <Controller
            control={control}
            name="vacancy_type"
            render={({ field, fieldState: { error } }) => (
              <ChipsField
                {...field}
                message={error?.message}
                data={workTypeOptions}
                label="ვაკანსიის ტიპი"
              />
            )}
          />

          <Controller
            control={control}
            name="is_premium"
            render={({
              field: { onChange, ...field },
              fieldState: { error },
            }) => (
              <ChipsField
                {...{ ...field, value: field.value ? "premium" : "standard" }}
                onChange={(v) => onChange(v === "premium")}
                message={error?.message}
                data={vacancyTypeOptions}
                label="განცხადების ტიპი"
              />
            )}
          />

          <Controller
            control={control}
            name="location_name"
            render={({ field, fieldState: { error } }) => (
              <LocationField
                value={field.value}
                onChange={handlers.onChangeLocation}
                textFieldProps={{
                  message: error?.message,
                }}
              />
            )}
          />

          {status.error && <ErrorMessage message={status.message} />}

          <Button buttonType="primary">გამოქვეყნება</Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default CreateVacancy;
