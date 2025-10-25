"use client";

import { Controller } from "react-hook-form";

import { useUpdatePasswordForm } from "@/hooks/forms";
import { useUpdatePasswordQuery } from "@/hooks/api/auth";
import { useAuthContext } from "@/providers/AuthProvider";

import {
  AuthPopupTitle,
  ForgotPasswordActionButtons,
} from "@/components/Auth/ui";
import { Spinner } from "@/components/ui";
import { PasswordField, ErrorMessage } from "@/components/layouts/Form";

const UpdatePassword: React.FC = () => {
  const { onCancel } = useAuthContext();

  const { updatePasswordQuery, status } = useUpdatePasswordQuery();

  const { control, handleSubmit, resetForm } = useUpdatePasswordForm(
    status.messages
  );

  const onUpdate = handleSubmit(async (values) => {
    await updatePasswordQuery(values, resetForm);
  });

  return (
    <div className="relative">
      {status.loading && <Spinner />}

      <AuthPopupTitle title="პაროლის აღდგენა" />

      <form onSubmit={onUpdate}>
        <div className="mt-11 flex flex-col gap-3 justify-center">
          <Controller
            control={control}
            name="new_password"
            render={({ field, fieldState: { error } }) => (
              <PasswordField
                inputProps={{
                  ...field,
                  label: "პაროლი",
                  message: error?.message,
                }}
              />
            )}
          />

          <Controller
            control={control}
            name="new_password2"
            render={({ field, fieldState: { error } }) => (
              <PasswordField
                inputProps={{
                  ...field,
                  label: "გაიმეორე პაროლი",
                  message: error?.message,
                }}
              />
            )}
          />

          {status.error && <ErrorMessage message={status.message} />}
        </div>

        <ForgotPasswordActionButtons
          onCancel={onCancel}
          disabled={status.loading}
          titles={["დადასტურება", "უკან დაბრუნება"]}
        />
      </form>
    </div>
  );
};

export default UpdatePassword;
