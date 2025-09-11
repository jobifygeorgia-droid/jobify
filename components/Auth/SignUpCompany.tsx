"use client";

import Link from "next/link";
import { Controller } from "react-hook-form";

import { useSignupCompanyForm } from "@/hooks/forms";

import GoogleButton from "./ui/GoogleButton";
import { Button, Divider } from "@/components/ui";
import { TextField, PasswordField, Checkbox } from "@/components/layouts/Form";

const SignUpCompany: React.FC = () => {
  const { control, handleSubmit } = useSignupCompanyForm();

  const onRegistration = handleSubmit((values) => {
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
            labelPosition="out"
            label="ელ.ფოსტა"
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

      <div className="flex items-center mt-1">
        <Checkbox id="remember-me">ვეთანხმები</Checkbox>
        &nbsp;&nbsp;
        <Link href="/" className="underline">
          წესებს და პირობებს
        </Link>
      </div>

      <Button className="mt-3" buttonType="primary">
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
