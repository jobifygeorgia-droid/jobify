"use client";

import { Controller } from "react-hook-form";

import { LS } from "@/lib/utils";
import { usePersistedTimer } from "@/hooks/utils";
import { useVerifyIdentityForm } from "@/hooks/forms";
import { useVerifyIdentityQuery } from "@/hooks/api/auth";
import { useAuthContext } from "@/providers/AuthProvider";

import {
  Timer,
  AuthPopupTitle,
  ForgotPasswordActionButtons,
} from "@/components/Auth/ui";
import { Spinner } from "@/components/ui";
import { OTP, ErrorMessage } from "@/components/layouts/Form";

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

  const { isExpired, timer } = usePersistedTimer({
    timeInMinutes: 15,
    uniqueKey: LS.PASSWORD_UPDATE_COUNTDOWN_TIMER_KEY,
  });

  // ============== Handle Request ==================== //

  const onVerifyIdentity = handleSubmit(async (values) => {
    if (isExpired) return;

    await verifyIdentityQuery(values, resetForm);
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
            name="pin"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <OTP {...field} message={error?.message} />
            )}
          />

          {status.error && <ErrorMessage message={status.message} />}

          {isExpired && (
            <div className="flex flex-col gap-2">
              <ErrorMessage message="თქვენი პინის ვალიდურობის ვადა ამოიწურა" />
              <button
                type="button"
                className="text-base-sm text-blue underline cursor-pointer"
              >
                თავიდან გაგზავნა
              </button>
            </div>
          )}

          {!isExpired && (
            <Timer timer={{ minutes: timer.minutes, seconds: timer.seconds }} />
          )}
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
