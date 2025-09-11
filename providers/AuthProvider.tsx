"use client";

import { createContext, useContext } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { PATHS } from "@/lib/config";
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
  const router = useRouter();
  const pathname = usePathname();
  const nextParams = useSearchParams();

  const searchParams = new URLSearchParams(nextParams);

  const authMode = searchParams.get("auth") as AuthModeT | null;
  const method = searchParams.get("method") as string | null;

  const mergeParams = (targetPath: string) => {
    const targetParams = new URLSearchParams(targetPath);

    for (const [key, value] of targetParams.entries()) {
      searchParams.set(key, value);
    }
  };

  const onCloseAuthPopup = () => {
    if (authMode === "update-success") {
      mergeParams(PATHS.sign_in);
    } else {
      searchParams.delete("auth");
      searchParams.delete("method");
    }

    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  const onCancel = () => {
    mergeParams(PATHS.sign_in);
    searchParams.delete("method");
    router.push(`${pathname}?${searchParams.toString()}`, {
      scroll: false,
    });
  };

  const onSignIn = () => {
    mergeParams(PATHS.sign_in);
    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  const onForgotPassword = () => {
    mergeParams(PATHS.forgot_password);
    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  const onChoosePasswordUpdateMethod = () => {
    mergeParams(PATHS.forgot_password_verify_by_email);
    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  const onVerifyUserIdentity = () => {
    searchParams.delete("method");
    mergeParams(PATHS.forgot_password_update);
    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  const onUpdatePassword = () => {
    mergeParams(PATHS.forgot_password_update_success);
    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

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
