"use client";

import Link from "next/link";
import { useState } from "react";
import { Controller } from "react-hook-form";

import { useSignupCompanyForm } from "@/hooks/forms";

import GoogleButton from "./ui/GoogleButton";
import { Button, Divider } from "@/components/ui";
import { TextField, PasswordField, Checkbox } from "@/components/layouts/Form";
import { usePopupsContext } from "@/providers/PopupsProvider";

const SignUpCompany: React.FC = () => {
  const { addAlert } = usePopupsContext();
  const { control, handleSubmit } = useSignupCompanyForm();

  const [acceptsPrivacyAndPolicy, setAcceptsPrivacyAndPolicy] = useState(false);

  const onRegistration = handleSubmit((values) => {
    if (!acceptsPrivacyAndPolicy)
      return addAlert({
        type: "warning",
        title: "წესები და პირობები",
        text: "გთხოვთ დაეთანხმოთ წესებსა და პირობებს",
      });

    addAlert({
      type: "warning",
      title: "თქვენი რეგისტრაციის მოთხოვნა წარმატებით გაიგზავნა",
      text: "კომპანიის პროფილი გააქტიურდება ადმინისტარატორის დადასტურებისთანავე",
      delay: 20000,
    });

    console.log(values);
  });

  return (
    <form
      onSubmit={onRegistration}
      className="w-full max-w-[375px] mt-6 flex flex-col gap-3"
    >
      <Controller
        control={control}
        name="company_name"
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
        name="company_id"
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
        name="contact_person"
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
          id="remember-me"
          name="privacy_policy"
          isChecked={acceptsPrivacyAndPolicy}
          onChange={(checked) => setAcceptsPrivacyAndPolicy(checked)}
        >
          ვეთანხმები
        </Checkbox>
        <Link href="/" className="underline leading-0 p-0">
          წესებს და პირობებს
        </Link>
      </div>

      <Button
        className="mt-3"
        buttonType="primary"
        disabled={!acceptsPrivacyAndPolicy}
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

export default SignUpCompany;
