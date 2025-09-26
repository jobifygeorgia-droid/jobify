"use client";

import { Modal } from "@/components/ui";
import { useAuthContext } from "../../../providers/AuthProvider";
import { AuthModes } from "@/components/Auth/auth.types";

type AuthModalT = {
  children: React.ReactNode;
};

const AuthModal: React.FC<AuthModalT> = ({ children }) => {
  const { authMode, onCloseAuthPopup } = useAuthContext();

  if (!authMode || !AuthModes.includes(authMode)) return null;

  return (
    <Modal rounded="lg" onClose={onCloseAuthPopup} backdrop zIndexOnMobile={99}>
      {children}
    </Modal>
  );
};

export default AuthModal;
