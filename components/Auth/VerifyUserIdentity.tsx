"use client";

import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { Controller } from "react-hook-form";

import { LS } from "@/lib/utils";
import { useVerifyIdentityForm } from "@/hooks/forms";
import { useVerifyIdentityQuery } from "@/hooks/api/auth";
import { useAuthContext } from "@/providers/AuthProvider";

import Timer from "./ui/Timer";
import { Spinner } from "@/components/ui";
import AuthPopupTitle from "./ui/AuthPopupTitle";
import { OTP, ErrorMessage } from "@/components/layouts/Form";
import ForgotPasswordActionButtons from "./ui/ForgotPasswordActionButtons";

const VerifyUserIdentity: React.FC = () => {
  // ============== Core State ==================== //

  const { method, onCloseAuthPopup, onCancel } = useAuthContext();

  const { verifyIdentityQuery, status } = useVerifyIdentityQuery();
  const { control, handleSubmit, resetForm } = useVerifyIdentityForm(
    status.messages
  );

  const keyWord =
    method === "email" ? "ელ.ფოსტაზე" : method === "mobile" ? "ნომერზე" : "";

  const updateEmail = LS.getPasswordUpdateEmail();

  // ============== Control Timer ==================== //

  const DURATION = 15 * 60 * 1000; // 15 minutes in ms

  const [isExpired, setIsExpired] = useState(false);
  const { seconds, minutes, restart, pause } = useTimer({
    autoStart: false,
    expiryTimestamp: new Date(),
    onExpire: () => setIsExpired(true),
  });

  useEffect(() => {
    const storedDate = LS.getPasswordUpdateTimer();

    if (storedDate) restart(new Date(Number(storedDate)), true);
    else {
      const newExpiry = new Date(Date.now() + DURATION);
      LS.setPasswordUpdateTimer(newExpiry.getTime().toString());
      restart(newExpiry, true);
    }

    return () => {
      pause();
    };
  }, [restart, DURATION, pause]);

  // ============== Handle Request ==================== //

  const onVerifyIdentity = handleSubmit(async (values) => {
    if (isExpired) return;

    await verifyIdentityQuery(values);
    resetForm();
  });

  if (!method || !updateEmail) onCloseAuthPopup();

  return (
    <div className="relative">
      {status.loading && <Spinner />}

      <AuthPopupTitle title="დაგავიწყდა პაროლი ?" />

      <span className="text-base-sm flex flex-col items-center justify-center mt-5">
        <span>პაროლი გამოგზავნილია {keyWord}:</span>
        <span>{updateEmail}</span>
      </span>

      <form onSubmit={onVerifyIdentity}>
        <div className="mt-11 flex flex-col items-center justify-center gap-2">
          <Controller
            control={control}
            name="pin"
            render={({ field, fieldState: { error } }) => (
              <OTP {...field} message={error?.message} />
            )}
          />

          {status.error && <ErrorMessage message={status.message} />}

          {isExpired && (
            <div className="flex flex-col gap-2">
              <ErrorMessage message="თქვენი პინის ვალიდურობის ვადა ამოიწურა" />
              <button
                className="text-base-sm text-blue underline cursor-pointer"
                type="button"
              >
                თავიდან გაგზავნა
              </button>
            </div>
          )}

          {!isExpired && <Timer timer={{ minutes, seconds }} />}
        </div>

        <ForgotPasswordActionButtons
          onCancel={onCancel}
          disabled={status.loading || isExpired}
          titles={["დადასტურება", "უკან დაბრუნება"]}
        />
      </form>
    </div>
  );
};

export default VerifyUserIdentity;
