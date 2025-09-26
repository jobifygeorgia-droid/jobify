"use client";

import { createContext, useContext } from "react";

import { PATHS } from "@/lib/config";
import { useSearchParamUtils } from "@/hooks/utils";
import { AuthModeT } from "@/components/Auth/auth.types";

type AuthProviderT = {
  children: React.ReactNode;
};

type AuthContextT = {
  method: string | null;
  authMode: AuthModeT | null;
  onCloseAuthPopup: () => void;
  onCancel: () => void;
  onSignIn: () => void;
  onForgotPassword: () => void;
  onChoosePasswordUpdateMethod: () => void;
  onVerifyUserIdentity: () => void;
  onUpdatePassword: () => void;
};

const AuthContext = createContext<AuthContextT | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderT> = ({ children }) => {
  const {
    mergeParams,
    mergeAndNavigate,
    deleteParams,
    navigate,
    searchParams,
    deleteMergeAndNavigate,
  } = useSearchParamUtils();

  const authMode = searchParams.get("auth") as AuthModeT | null;
  const method = searchParams.get("method") as string | null;

  const onCloseAuthPopup = () => {
    if (authMode === "update-success") mergeParams(PATHS.sign_in);
    else deleteParams(["auth", "method"]);

    navigate();
  };

  const onCancel = () =>
    deleteMergeAndNavigate({
      delete: ["method"],
      merge: PATHS.sign_in,
    });

  const onSignIn = () => mergeAndNavigate(PATHS.sign_in);

  const onForgotPassword = () => mergeAndNavigate(PATHS.forgot_password);

  const onChoosePasswordUpdateMethod = () =>
    mergeAndNavigate(PATHS.forgot_password_verify_by_email);

  const onVerifyUserIdentity = () =>
    deleteMergeAndNavigate({
      delete: ["method"],
      merge: PATHS.forgot_password_update,
    });

  const onUpdatePassword = () =>
    mergeAndNavigate(PATHS.forgot_password_update_success);

  return (
    <AuthContext.Provider
      value={{
        authMode,
        method,
        onCloseAuthPopup,
        onCancel,
        onSignIn,
        onForgotPassword,
        onChoosePasswordUpdateMethod,
        onVerifyUserIdentity,
        onUpdatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("please use Auth Context inside Provider");

  return context;
};
