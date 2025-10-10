"use client";

import Image from "next/image";
import { Controller } from "react-hook-form";

import {
  workTypeOptions,
  vacancyTypeOptions,
  workCategoryOptions,
} from "@/lib/static-data";
import { TipTapProvider } from "@/providers";
import { useVacancyForm } from "@/hooks/forms";

import {
  Label,
  TextField,
  ChipsField,
  TextEditor,
  Select,
} from "@/components/layouts/Form";
import { Button, ScrollableContainer } from "@/components/ui";
import { SelectedOptionT } from "@/components/layouts/Form/types/form-fields.types";

type CreateVacancyT = {};

const CreateVacancy: React.FC<CreateVacancyT> = () => {
  const { control, handleSubmit } = useVacancyForm(null);

  const onChangeCategory = (
    value: SelectedOptionT<{ value: string; label: string }>,
    cb: (v: Array<string>) => void
  ) => {
    if (Array.isArray(value)) cb(value.map((v) => v.value));
  };

  const onCreateVacancy = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div className="bg-white rounded-2xl w-full laptop:h-[80vh] laptop:my-6 flex items-stretch overflow-hidden">
      <div className="hidden laptop:block flex-1 h-full">
        <figure className="relative h-full w-full">
          <Image
            fill
            alt="create cv"
            src="/typing-machine.png"
            className="object-cover tablet:object-[0px_-220px] desktop-sm:object-[0px_-150px] h-full"
          />
        </figure>
      </div>

      <div className="flex-1 tablet:pt-2 desktop-lg:pt-6 pb-2">
        <ScrollableContainer
          rounded={0}
          height={"100%"}
          transparentScroll
          wrapperClassName="tablet:w-[600px] mx-auto!"
        >
          <form
            onSubmit={onCreateVacancy}
            className="px-2 laptop:px-10 pt-4 mx-auto pb-0 flex flex-col gap-6 h-full w-full"
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
                <Select
                  onChange={(v) => onChangeCategory(v, field.onChange)}
                  placeholder=""
                  isMulti
                  label="კატეგორია"
                  options={workCategoryOptions}
                  instanceId="vacancy-categories"
                  containerClassName="rounded-lg!"
                  message={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="description"
              render={({ field, fieldState: { error } }) => (
                <TipTapProvider readonly={false} content={field.value}>
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
                <TipTapProvider readonly={false} content={field.value}>
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
              name="title"
              render={({ field, fieldState: { error } }) => (
                <TipTapProvider readonly={false}>
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
                      {...field}
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
                      {...field}
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
              name="title"
              render={({ field, fieldState: { error } }) => (
                <ChipsField
                  {...field}
                  message={error?.message}
                  data={vacancyTypeOptions}
                  label="განცხადების ტიპი"
                />
              )}
            />

            <Controller
              control={control}
              name="location"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  message={error?.message}
                  label="მდებარეობა"
                  labelPosition="out"
                />
              )}
            />

            <Button buttonType="primary">გამოქვეყნება</Button>
          </form>
        </ScrollableContainer>
      </div>
    </div>
  );
};

export default CreateVacancy;
