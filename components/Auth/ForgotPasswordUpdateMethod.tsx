"use client";

import { useState } from "react";
import { Controller } from "react-hook-form";

import { Radio, TextField } from "@/components/layouts/Form";
import AuthPopupTitle from "./ui/AuthPopupTitle";
import { AnchorButton, Button } from "@/components/ui";
import { useAuthContext } from "../../providers/AuthProvider";
import { useRequestPasswordUpdateForm } from "@/hooks/forms";

const options = [
  { label: "ელ.ფოსტით აღდგენა", value: "email", id: "update-by-email" },
  {
    label: "ტელეფონის ნომრით აღდგენა",
    value: "phone_number",
    id: "update-by-phone-number",
  },
];

const ForgotPasswordUpdateMethod: React.FC = () => {
  const { control, onReset, handleSubmit } = useRequestPasswordUpdateForm();

  const [updateMethod, setUpdateMethod] = useState<string>("email");

  const { onChoosePasswordUpdateMethod } = useAuthContext();

  const onChangeMethod = (value: string | number) => {
    onReset();
    setUpdateMethod(value as string);
  };

  const onRequest = handleSubmit((values) => {
    onChoosePasswordUpdateMethod();
    console.log(values);
  });

  return (
    <div>
      <AuthPopupTitle title="დაგავიწყდა პაროლი ?" />

      <span className="text-base-sm flex justify-center mt-5">
        აირჩიე პაროლის აღდგენის მეთოდი
      </span>

      <form onSubmit={onRequest}>
        <div className="mt-11">
          <Radio
            value={updateMethod}
            data={options}
            name="update-password-method"
            direction="column"
            onChange={onChangeMethod}
          />

          <div className="mt-6">
            {updateMethod === "email" && (
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="ელ.ფოსტა"
                    labelPosition="out"
                    message={error?.message}
                  />
                )}
              />
            )}

            {updateMethod === "phone_number" && (
              <Controller
                control={control}
                name="phone_number"
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    labelPosition="out"
                    label="ტელეფონის ნომერი"
                    inputType="number"
                    message={error?.message}
                  />
                )}
              />
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2">
          <Button fullWidth rounded="base" buttonType="primary">
            გაგრძელება
          </Button>

          <AnchorButton
            href="?auth=base"
            fullWidth
            buttonType="text"
            rounded="base"
          >
            გაუქმება
          </AnchorButton>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordUpdateMethod;
