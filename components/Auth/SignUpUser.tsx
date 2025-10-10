"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller } from "react-hook-form";

import { PATHS } from "@/lib/config";
import { useSignupUserForm } from "@/hooks/forms";
import { useSignupUserQuery } from "@/hooks/api/auth";
import { usePopupsContext } from "@/providers/PopupsProvider";

import {
  Checkbox,
  TextField,
  ErrorMessage,
  PasswordField,
} from "@/components/layouts/Form";
import GoogleButton from "./ui/GoogleButton";
import { Button, Spinner, Divider } from "@/components/ui";

const SignUpUser: React.FC = () => {
  const router = useRouter();
  const { addAlert } = usePopupsContext();

  const [acceptsPrivacyAndPolicy, setAcceptsPrivacyAndPolicy] = useState(false);

  const { registerUserQuery, status } = useSignupUserQuery();

  const { control, handleSubmit, resetForm } = useSignupUserForm(
    status.messages
  );

  const onRegistration = handleSubmit(async (values) => {
    if (!acceptsPrivacyAndPolicy)
      return addAlert({
        type: "warning",
        title: "წესები და პირობები",
        text: "გთხოვთ დაეთანხმოთ წესებსა და პირობებს",
      });

    await registerUserQuery(values);

    addAlert({
      type: "warning",
      title: "თქვენი რეგისტრაციის მოთხოვნა წარმატებით გაიგზავნა",
      text: "თქვენი წარმატებით გაიარეთ რეგისტრაცა. /n გთხოვთ შეამოწმოთ თქვენი ელ.ფოსტა ვერიფიკაციის გასავლელად.",
      delay: 20000,
    });

    resetForm();
    setAcceptsPrivacyAndPolicy(false);

    router.push(PATHS.home);
  });

  return (
    <form
      onSubmit={onRegistration}
      className="w-full max-w-[375px] mt-6 flex flex-col gap-3 relative"
    >
      {status.loading && <Spinner type="relative" />}
      <Controller
        name="full_name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="სრული სახელი"
            labelPosition="out"
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
            label="ელ.ფოსტა"
            labelPosition="out"
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
            label="ტელეფონი"
            labelPosition="out"
            inputType="number"
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
              label: "პაროლი",
              labelPosition: "out",
              message: error?.message,
            }}
          />
        )}
      />
      <div className="text-base-sm tablet:text-base flex items-center gap-1 mt-1">
        <Checkbox
          id="privacy-policy"
          name="privacy_policy"
          checked={acceptsPrivacyAndPolicy}
          onCheck={() => setAcceptsPrivacyAndPolicy((prev) => !prev)}
        >
          ვეთანხმები
        </Checkbox>

        <Link href="/" className="underline leading-0 p-0">
          წესებს და პირობებს
        </Link>
      </div>
      {status.error && <ErrorMessage message={status.message} />}
      <Button
        className="mt-3"
        buttonType="primary"
        disabled={!acceptsPrivacyAndPolicy || status.loading}
      >
        რეგისტრაცია
      </Button>
      <div className="my-3">
        <Divider />
      </div>
      <GoogleButton />
    </form>
  );
};

export default SignUpUser;
