"use client";

import { AuthModes, AuthModeT } from "./auth.types";

import AuthModal from "./ui/AuthModal";
import { SuccessPopupWindow } from "@/components/ui";

import UpdatePassword from "./UpdatePassword";
import BaseAuthentication from "./BaseAuthentication";
import VerifyUserIdentity from "./VerifyUserIdentity";
import ForgotPasswordUpdateMethod from "./ForgotPasswordUpdateMethod";
import SignInButtonOnSuccess from "./ui/SignInButtonOnSuccess";

const AuthPopupByMode: Record<AuthModeT, React.ReactNode> = {
  base: <BaseAuthentication />,
  ["password-update-method"]: <ForgotPasswordUpdateMethod />,
  ["verify-user"]: <VerifyUserIdentity />,
  ["update-password"]: <UpdatePassword />,
  ["update-success"]: (
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

  if (!authMode || !AuthModes.includes(mode)) return null;

  return (
    <AuthModal>
      <div className="w-screen h-screen tablet:h-auto tablet:w-[475px] rounded-xl pt-24 px-6 tablet:p-6">
        {AuthPopupByMode[mode]}
      </div>
    </AuthModal>
  );
};

export default AuthPopup;
