"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import { Button } from "@/components/ui";
import { logout } from "@/lib/actions/auth.actions";

const LoginButton: React.FC = () => {
  const { onSignIn } = useAuthContext();

  return (
    <>
      <Button
        buttonType="primary"
        paddingSize="base-wider"
        onClick={async () => {
          await logout();
        }}
      >
        გასვლა
      </Button>
      <Button buttonType="primary" paddingSize="base-wider" onClick={onSignIn}>
        შესვლა
      </Button>
    </>
  );
};

export default LoginButton;
