"use client";

import { AuthModes } from "@/interface/global.types";
import { useAuthContext } from "@/providers/AuthProvider";

import { Modal } from "@/components/ui";

type AuthModalT = {
  children: React.ReactNode;
};

const AuthModal: React.FC<AuthModalT> = ({ children }) => {
  const { authMode, onCloseAuthPopup, isAuthenticated } = useAuthContext();

  if (!authMode || !AuthModes.includes(authMode) || isAuthenticated)
    return null;

  return (
    <Modal rounded="lg" onClose={onCloseAuthPopup} backdrop zIndexOnMobile={99}>
      {children}
    </Modal>
  );
};

export default AuthModal;
