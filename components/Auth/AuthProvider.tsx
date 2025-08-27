"use client";

import { createContext, useContext } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { AuthModeT } from "./auth.types";

type AuthProviderT = {
  children: React.ReactNode;
};

type AuthContextT = {
  method: string | null;
  authMode: AuthModeT | null;
  onCloseAuthPopup: () => void;
  onChoosePasswordUpdateMethod: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  onVerifyUserIdentity: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const AuthContext = createContext<AuthContextT | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderT> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const nextParams = useSearchParams();

  const searchParams = new URLSearchParams(nextParams);

  const authMode = searchParams.get("auth") as AuthModeT | null;
  const method = searchParams.get("method") as string | null;

  const onCloseAuthPopup = () => {
    searchParams.delete("auth");
    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  const onChoosePasswordUpdateMethod = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    searchParams.set("auth", "verify-user");
    searchParams.set("method", "email");
    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  const onVerifyUserIdentity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchParams.delete("method");
    searchParams.set("auth", "update-password");
    router.push(`${pathname}?${searchParams.toString()}`, { scroll: false });
  };

  return (
    <AuthContext.Provider
      value={{
        authMode,
        method,
        onCloseAuthPopup,
        onChoosePasswordUpdateMethod,
        onVerifyUserIdentity,
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
