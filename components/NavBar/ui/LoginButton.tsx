"use client";

import { useAuthContext } from "@/providers/AuthProvider";
import { Button } from "@/components/ui";

const LoginButton: React.FC = () => {
  const { onSignIn } = useAuthContext();

  return (
    <Button buttonType="primary" paddingSize="base-wider" onClick={onSignIn}>
      შესვლა
    </Button>
  );
};

export default LoginButton;
