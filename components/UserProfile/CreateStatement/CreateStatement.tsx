"use client";

import { Controller } from "react-hook-form";

import { TipTapProvider } from "@/providers";
import { useStatementForm } from "@/hooks/forms";

import {
  Label,
  Select,
  Checkbox,
  TextField,
  ChipsField,
  TextEditor,
  DropzoneFileInput,
} from "@/components/layouts/Form";
import { Button } from "@/components/ui";
import { Crown } from "@/components/ui/icons";
import { useState } from "react";
import { usePopupsContext } from "@/providers/PopupsProvider";

type CreateStatementT = {};

const jobTypes = [
  { title: "დისტანციური", value: "დისტანციური" },
  { title: "ჰიბრიდული", value: "ჰიბრიდული" },
  { title: "საოფისე", value: "საოფისე" },
];

const CreateStatement: React.FC<CreateStatementT> = () => {
  const { addAlert } = usePopupsContext();
  const { control, handleSubmit } = useStatementForm(null);

  const [acceptsDataUsage, setAcceptsDataUsage] = useState(false);

  const onPublishStatement = handleSubmit((data) => {
    if (!acceptsDataUsage)
      return addAlert({
        type: "warning",
        title: "წესები და პირობები",
        text: "გთხოვთ დაეთანხმოთ წესებსა და პირობებს",
      });

    console.log(data);
  });

  return (
    <div className="h-[85vh] flex items-stretch">
      <div className="flex-1 bg-dark-grey-light max-h-[83vh] rounded-2xl"></div>
      <div className="flex-1 h-full overflow-y-auto scrollbar">
        <form
          onSubmit={onPublishStatement}
          className="w-full max-w-[620px] px-10 py-6 mx-auto flex flex-col gap-6"
        >
          <Controller
            control={control}
            name="job_type"
            render={({ field, fieldState: { error } }) => (
              <ChipsField
                data={jobTypes}
                value={field.value}
                label="სამუშაო ტიპი *"
                onChange={field.onChange}
                message={error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="discipline"
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="სამუშაო სფერო *"
                labelPosition="out"
                {...field}
                message={error?.message}
              />
            )}
          />

          <div className="grid grid-cols-2 gap-x-5 gap-y-1">
            <div className="col-span-2">
              <Label label="ანაზღაურება *" labelPosition="out" />
            </div>

            <Controller
              control={control}
              name="salary.from"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="დან"
                  labelPosition="out"
                  {...field}
                  message={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="salary.to"
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="მდე"
                  labelPosition="out"
                  {...field}
                  message={error?.message}
                />
              )}
            />
          </div>

          <Controller
            control={control}
            name="about_me"
            render={({ field, fieldState: { error } }) => (
              <TipTapProvider readonly={false} content={field.value}>
                <TextEditor
                  label="ჩემს შესახებ *"
                  height="180px"
                  {...field}
                  message={error?.message}
                />
              </TipTapProvider>
            )}
          />

          <DropzoneFileInput type="video" />

          <Checkbox
            size="medium"
            id="data-useage"
            name="data-useage"
            isChecked={acceptsDataUsage}
            onChange={() => setAcceptsDataUsage((prev) => !prev)}
          >
            <span className="text-base-sm">
              ვეთანხმები მონაცემების დამუშავებას და სამომავლოდ გამოყენებას
            </span>
          </Checkbox>

          <div className="bg-blue-light py-3 px-4 rounded-xl flex items-center justify-between gap-4 text-base-sm">
            <figure className="flex items-center gap-4">
              <div className="size-10 bg-blue text-white rounded-full overflow-hidden flex items-center justify-center">
                <Crown />
              </div>
              <figcaption className="font-medium">VIP მომსახურება</figcaption>
            </figure>

            <div className="flex items-center gap-4">
              <span>7.00₾</span>

              <Select
                width="110px"
                containerClassName="border-orange"
                options={[
                  { label: "1 დღე", value: "one-day" },
                  { label: "10 დღე", value: "ten-day" },
                ]}
                instanceId="select-vip-days"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button fullWidth buttonType="primary" disabled={!acceptsDataUsage}>
              გამოქვეყნება
            </Button>

            <Button fullWidth buttonType="tertiary">
              გაუქმება
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStatement;
