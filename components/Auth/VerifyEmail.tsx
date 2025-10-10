/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import classnames from "classnames";
import { useCallback, useEffect, useState } from "react";

import { LS } from "@/lib/utils";
import { verifyEmail } from "@/lib/actions/auth.actions";

import { Success } from "@/components/ui/icons";
import { SecondarySpinner } from "@/components/ui";

type VerifyEmailT = { token: string };

const VerifyEmail: React.FC<VerifyEmailT> = ({ token }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const verify = useCallback(async () => {
    setIsLoading(true);

    if (LS.getEmailVerificationStatus() === "1") {
      setIsLoading(false);
      setIsVerified(true);

      return;
    }

    try {
      await verifyEmail(token);
      LS.setEmailVerificationStatus(true);
      setIsVerified(true);
    } catch (error: any) {
      setIsVerified(false);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (!token) return;

    verify();
  }, [verify, token]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-12">
      {!isVerified && !isLoading && (
        <div className="flex flex-col justify-start items-center gap-4 h-[140px]">
          <div className="text-center flex flex-col gap-4">
            <span className="font-medium text-red text-md">
              თქვენი ელ. ფოსტის ვერიფიკაცია ვერ მოხერხდა
            </span>
          </div>
        </div>
      )}

      {!isVerified && isLoading && (
        <div className="flex flex-col justify-start items-center gap-12 h-[140px]">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-xl font-bold tracking-wide">
              თქვენ წარმატებით დარეგისტრირდით Jobify.ge - ზე
            </span>
            <span className="text-md font-medium">
              გთხოვთ დაგველოდოთ სანამ თქვენი ელ. ფოსტა ვერიფიკაციას გაივლის
            </span>
          </div>

          <SecondarySpinner />
        </div>
      )}

      {isVerified && (
        <>
          <Success />

          <div
            className={classnames(
              "transition-transform duration-500 ease-in-out origin-center h-[140px]",
              { "scale-0": !isVerified, "scale-100": isVerified }
            )}
          >
            <div className="text-center flex flex-col gap-4">
              <p className="tracking-wide text-lg font-semibold">
                თქვენმა ელ. ფოსტამ წარმატებით გაიარა ვერიფიკაცია
              </p>
              <span className="font-medium text-md">
                შეგიძლიათ დახუროთ ეს ფანჯარა
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
