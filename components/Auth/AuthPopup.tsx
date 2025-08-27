"use client";

import { AuthModes, AuthModeT } from "./auth.types";

import AuthModal from "./ui/AuthModal";
import { SuccessPopupWindow } from "@/components/ui";

import UpdatePassword from "./UpdatePassword";
import ForgotPassword from "./ForgotPassword";
import BaseAuthentication from "./BaseAuthentication";
import VerifyUserIdentity from "./VerifyUserIdentity";
import ForgotPasswordUpdateMethod from "./ForgotPasswordUpdateMethod";

const AuthPopupByMode: Record<AuthModeT, React.ReactNode> = {
  base: <BaseAuthentication />,
  ["password-update-method"]: <ForgotPasswordUpdateMethod />,
  ["verify-user"]: <VerifyUserIdentity />,
  ["forgot-password"]: <ForgotPassword />,
  ["update-password"]: <UpdatePassword />,
  ["update-success"]: (
    <SuccessPopupWindow message="პაროლი წარმატებით შეიცვალა" />
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
      <div className="w-[475px] rounded-xl p-6">{AuthPopupByMode[mode]}</div>
    </AuthModal>
  );
};

export default AuthPopup;
