"use client";

import { Controller } from "react-hook-form";

import { useVerifyIdentityForm } from "@/hooks/forms";
import { useAuthContext } from "@/providers/AuthProvider";

import { Button } from "@/components/ui";
import { OTP } from "@/components/layouts/Form";
import AuthPopupTitle from "./ui/AuthPopupTitle";

const VerifyUserIdentity: React.FC = () => {
  const { method, onCloseAuthPopup, onVerifyUserIdentity, onCancel } =
    useAuthContext();

  const { control, handleSubmit } = useVerifyIdentityForm();

  const keyWord =
    method === "email" ? "ელ.ფოსტაზე" : method === "mobile" ? "ნომერზე" : "";

  const onVerify = handleSubmit((values) => {
    onVerifyUserIdentity();
    console.log(values);
  });

  if (!method) onCloseAuthPopup();

  return (
    <div>
      <AuthPopupTitle title="დაგავიწყდა პაროლი ?" />

      <span className="text-base-sm flex flex-col items-center justify-center mt-5">
        <span>პაროლი გამოგზავნილია {keyWord}:</span>
        <span>example@io.com</span>
      </span>

      <form onSubmit={onVerify}>
        <div className="mt-11 flex justify-center">
          <Controller
            control={control}
            name="pin"
            render={({ field, fieldState: { error } }) => (
              <OTP {...field} message={error?.message} />
            )}
          />
        </div>

        <div className="mt-16 flex flex-col gap-2">
          <Button fullWidth buttonType="primary" type="submit">
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

export default VerifyUserIdentity;
