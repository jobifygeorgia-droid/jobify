"use client";

import { Controller } from "react-hook-form";

import { useUpdatePasswordForm } from "@/hooks/forms";
import { useAuthContext } from "@/providers/AuthProvider";

import { Button } from "@/components/ui";
import AuthPopupTitle from "./ui/AuthPopupTitle";
import { PasswordField } from "@/components/layouts/Form";

const UpdatePassword: React.FC = () => {
  const { onUpdatePassword, onCancel } = useAuthContext();
  const { control, handleSubmit } = useUpdatePasswordForm();

  const onUpdate = handleSubmit((values) => {
    onUpdatePassword();
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
          <Button type="submit" buttonType="primary">
            დადასტურება
          </Button>

          <Button onClick={onCancel} fullWidth buttonType="text" type="button">
            უკან დაბრუნება
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
