"use client";

import { Controller } from "react-hook-form";

import { AnchorButton } from "@/components/ui";
import AuthPopupTitle from "./ui/AuthPopupTitle";
import { PasswordField } from "@/components/layouts/Form";
import { useUpdatePasswordForm } from "@/hooks/forms";

const UpdatePassword: React.FC = () => {
  const { control, handleSubmit } = useUpdatePasswordForm();

  const onUpdate = handleSubmit((values) => {
    console.log(values);
  });

  return (
    <div>
      <AuthPopupTitle title="პაროლის აღდგენა" />

      <form onSubmit={onUpdate}>
        <div className="mt-11 flex flex-col gap-3 justify-center">
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <PasswordField
                inputProps={{
                  ...field,
                  label: "პაროლი",
                  labelPosition: "out",
                  message: error?.message,
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, fieldState: { error } }) => (
              <PasswordField
                inputProps={{
                  ...field,
                  label: "გაიმეორე პაროლი",
                  labelPosition: "out",
                  message: error?.message,
                }}
              />
            )}
          />
        </div>

        <div className="mt-16 flex flex-col gap-2">
          <AnchorButton
            scroll={false}
            href="?auth=update-success"
            fullWidth
            buttonType="primary"
          >
            დადასტურება
          </AnchorButton>

          <AnchorButton href="?auth=base" fullWidth buttonType="text">
            უკან დაბრუნება
          </AnchorButton>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
