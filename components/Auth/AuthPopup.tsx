"use client";

import { useEffect } from "react";

import { LS } from "@/lib/utils";
import { AuthModes, AuthModeT } from "@/interface/global.types";

import AuthModal from "./ui/AuthModal";
import UpdatePassword from "./UpdatePassword";
import { SuccessPopupWindow } from "@/components/ui";
import BaseAuthentication from "./BaseAuthentication";
import VerifyUserIdentity from "./VerifyUserIdentity";
import SignInButtonOnSuccess from "./ui/SignInButtonOnSuccess";
import ForgotPasswordUpdateMethod from "./ForgotPasswordUpdateMethod";

const AuthPopupByMode: Record<AuthModeT, React.ComponentType> = {
  base: BaseAuthentication,
  ["password-update-method"]: ForgotPasswordUpdateMethod,
  ["verify-user"]: VerifyUserIdentity,
  ["update-password"]: UpdatePassword,
  ["update-success"]: () => (
    <SuccessPopupWindow message="პაროლი წარმატებით შეიცვალა">
      <SignInButtonOnSuccess />
    </SuccessPopupWindow>
  ),
};

type AuthPopupT = {
  authMode: string | undefined;
};

const AuthPopup: React.FC<AuthPopupT> = ({ authMode }) => {
  const mode = authMode as AuthModeT;

  useEffect(() => {
    if (authMode !== "verify-user") LS.removePasswordUpdateTimer();
  }, [authMode]);

  if (!authMode || !AuthModes.includes(mode)) return null;

  const Component = AuthPopupByMode[mode];

  return (
    <AuthModal>
      <div className="w-screen h-screen tablet:h-auto tablet:w-[475px] rounded-xl pt-24 px-6 tablet:p-6">
        <Component />
      </div>
    </AuthModal>
  );
};

export default AuthPopup;
