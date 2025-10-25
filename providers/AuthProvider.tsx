"use client";

import { useSession } from "next-auth/react";
import { useEffect, useContext, useCallback, createContext } from "react";

import { LS } from "@/lib/utils";
import { PATHS } from "@/lib/config";
import { useSearchParamUtils } from "@/hooks/utils";
import { AuthModes } from "@/interface/global.types";

type AuthProviderT = {
  children: React.ReactNode;
};

type AuthContextT = {
  method: string | null;
  authMode: AuthModes | null;
  onCloseAuthPopup: () => void;
  onCancel: () => void;
  onSignIn: () => void;
  onForgotPassword: () => void;
  onChoosePasswordUpdateMethod: (email: string) => void;
  onVerifyUserIdentity: () => void;
  onUpdatePassword: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextT | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderT> = ({ children }) => {
  const {
    navigate,
    mergeParams,
    deleteParams,
    searchParams,
    mergeAndNavigate,
    deleteMergeAndNavigate,
  } = useSearchParamUtils();

  const { data: session } = useSession();

  const method = searchParams.get("method") as string | null;
  const authMode = searchParams.get("auth") as AuthModes | null;

  // ============== Control Auth Modes ==================== //

  const onCloseAuthPopup = useCallback(() => {
    if (authMode === "update-success") mergeParams(PATHS.sign_in);
    else deleteParams(["auth", "method"]);

    navigate();
  }, [authMode, deleteParams, mergeParams, navigate]);

  const onCancel = () =>
    deleteMergeAndNavigate({
      delete: ["method"],
      merge: PATHS.sign_in,
    });

  const onSignIn = () => mergeAndNavigate(PATHS.sign_in);

  const onForgotPassword = () => mergeAndNavigate(PATHS.forgot_password);

  const onChoosePasswordUpdateMethod = (email: string) => {
    mergeAndNavigate(PATHS.forgot_password_verify_by_email);
    LS.setPasswordUpdateEmail(email);
  };

  const onVerifyUserIdentity = () =>
    deleteMergeAndNavigate({
      delete: ["method"],
      merge: PATHS.forgot_password_update,
    });

  const onUpdatePassword = () =>
    mergeAndNavigate(PATHS.forgot_password_update_success);

  const isAuthenticated = Boolean(session?.user);

  useEffect(() => {
    if (isAuthenticated) onCloseAuthPopup();
  }, [isAuthenticated, onCloseAuthPopup]);

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
        isAuthenticated,
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
