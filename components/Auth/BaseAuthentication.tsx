"use client";

import Link from "next/link";
import { Controller } from "react-hook-form";

import { PATHS } from "@/lib/config";
import { useSigninForm } from "@/hooks/forms";
import { useSigninQuery } from "@/hooks/api/auth";
import { useAuthContext } from "@/providers/AuthProvider";

import {
  Checkbox,
  TextField,
  ErrorMessage,
  PasswordField,
} from "@/components/layouts/Form";
import GoogleButton from "./ui/GoogleButton";
import AuthPopupTitle from "./ui/AuthPopupTitle";
import { Button, Divider, Spinner } from "@/components/ui";

const BaseAuthentication: React.FC = () => {
  const { onForgotPassword } = useAuthContext();

  const { signInQuery, status } = useSigninQuery();

  const { control, handleSubmit, resetForm } = useSigninForm(status?.messages);

  const onSignin = handleSubmit(async (values) => {
    await signInQuery(values);
    resetForm();
  });

  return (
    <div className="flex flex-col gap-6 relative">
      {status.loading && <Spinner type="relative" />}

      <AuthPopupTitle title="ავტორიზაცია" />

      <form onSubmit={onSignin} className="flex flex-col gap-3">
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              labelPosition="out"
              label="მობილური ნომერი"
              message={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <PasswordField
              inputProps={{
                ...field,
                labelPosition: "out",
                label: "პაროლი",
                message: error?.message,
              }}
            />
          )}
        />

        {status.error && <ErrorMessage message={status.message} />}

        <div className="flex items-center justify-between">
          <Checkbox id="remember-me">დამახსოვრება</Checkbox>

          <button
            type="button"
            onClick={onForgotPassword}
            className="text-base-sm text-light-grey-dark-active hover:underline cursor-pointer"
          >
            დაგავიწყდა პაროლი ?
          </button>
        </div>

        <Button
          fullWidth
          disabled={status.loading}
          className="mt-1"
          buttonType="primary"
          type="submit"
        >
          შესვლა
        </Button>
      </form>

      <div className="w-full mt-3 flex flex-col gap-2">
        <Divider />

        <div className="mt-3">
          <GoogleButton />
        </div>
      </div>

      <div className="flex justify-center text-base-sm">
        <span className="text-light-grey-dark-active">არ გაქვს ანგარიში ?</span>
        &nbsp;
        <Link
          href={PATHS.sign_up}
          className="font-semibold text-blue hover:underline"
        >
          დარეგისტრირდი
        </Link>
      </div>
    </div>
  );
};

export default BaseAuthentication;
