"use client";

import Link from "next/link";
import { useState } from "react";
import { Controller } from "react-hook-form";

import { useSignupCompanyForm } from "@/hooks/forms";
import { useSignupCompanyQuery } from "@/hooks/api/auth";
import { usePopupsContext } from "@/providers/PopupsProvider";

import {
  Checkbox,
  TextField,
  ErrorMessage,
  PasswordField,
} from "@/components/layouts/Form";
import GoogleButton from "./ui/GoogleButton";
import { Button, Divider, Spinner } from "@/components/ui";

const SignUpCompany: React.FC = () => {
  const { addAlert } = usePopupsContext();

  const { status, registerCompanyQuery } = useSignupCompanyQuery();
  const { control, handleSubmit, resetForm } = useSignupCompanyForm(
    status.messages
  );

  const [acceptsPrivacyAndPolicy, setAcceptsPrivacyAndPolicy] = useState(false);

  const onRegistrationSuccess = () => {
    resetForm();
    setAcceptsPrivacyAndPolicy(false);
    addAlert({
      type: "warning",
      title: "თქვენი რეგისტრაციის მოთხოვნა წარმატებით გაიგზავნა",
      text: "კომპანიის პროფილი გააქტიურდება ადმინისტარატორის დადასტურებისთანავე. /n გთხოვთ შეამოწმოთ თქვენი ელ.ფოსტა ვერიფიკაციის გასავლელად.",
      delay: 20000,
    });
  };

  const onRegistration = handleSubmit(async (values) => {
    if (!acceptsPrivacyAndPolicy)
      return addAlert({
        type: "warning",
        title: "წესები და პირობები",
        text: "გთხოვთ დაეთანხმოთ წესებსა და პირობებს",
      });

    await registerCompanyQuery(values, onRegistrationSuccess);
  });

  return (
    <>
      <form
        onSubmit={onRegistration}
        className="w-full max-w-[375px] mt-6 flex flex-col gap-3"
      >
        {status.loading && <Spinner type="inline" />}

        <Controller
          control={control}
          name="employer_profile.company_name"
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              labelPosition="out"
              label="კომპანიის სახელი"
              message={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="employer_profile.company_id_number"
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              labelPosition="out"
              label="საიდენტიფიკაციო კოდი"
              message={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="employer_profile.contact_person"
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              labelPosition="out"
              label="საკონტაქტო პირი"
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
              labelPosition="out"
              label="ტელეფონი"
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
    </>
  );
};

export default SignUpCompany;
