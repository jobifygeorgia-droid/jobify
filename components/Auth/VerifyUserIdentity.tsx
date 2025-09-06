"use client";

import { Controller } from "react-hook-form";

import AuthPopupTitle from "./ui/AuthPopupTitle";
import { useAuthContext } from "../../providers/AuthProvider";
import { OTP } from "@/components/layouts/Form";
import { AnchorButton, Button } from "@/components/ui";
import { useVerifyIdentityForm } from "@/hooks/forms";

const VerifyUserIdentity: React.FC = () => {
  const { method, onCloseAuthPopup, onVerifyUserIdentity } = useAuthContext();

  const { control, handleSubmit } = useVerifyIdentityForm();

  const keyWord =
    method === "email" ? "ელ.ფოსტაზე" : method === "mobile" ? "ნომერზე" : "";

  const onVerify = handleSubmit((values) => {
    onVerifyUserIdentity();
    console.log(values);
  });

  if (!method) onCloseAuthPopup();

  // FIX: show error message in otp input

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
          <Button fullWidth rounded="base" buttonType="primary">
            დადასტურება
          </Button>

          <AnchorButton
            href="?auth=base"
            fullWidth
            buttonType="text"
            rounded="base"
          >
            უკან დაბრუნება
          </AnchorButton>
        </div>
      </form>
    </div>
  );
};

export default VerifyUserIdentity;
