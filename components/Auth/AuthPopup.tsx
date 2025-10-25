"use client";

import { useEffect } from "react";

import { LS } from "@/lib/utils";
import { AuthModes } from "@/interface/global.types";

import { AuthModal } from "./ui";
import { AuthConfig } from "./config";

type AuthPopupT = {
  authMode: AuthModes | undefined;
};

const AuthPopup: React.FC<AuthPopupT> = ({ authMode }) => {
  const mode = authMode as AuthModes;

  useEffect(() => {
    if (authMode !== AuthModes.VERIFY_USER) LS.removePasswordUpdateTimer();
  }, [authMode]);

  if (!authMode || !Object.values(AuthModes).includes(mode)) return null;

  const Component = AuthConfig[mode];

  return (
    <AuthModal>
      <div className="w-screen h-screen tablet:h-auto tablet:w-[475px] rounded-xl pt-24 px-6 tablet:p-6">
        <Component />
      </div>
    </AuthModal>
  );
};

export default AuthPopup;
