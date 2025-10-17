"use client";

import { Button } from "@/components/ui";
import { useAuthContext } from "@/providers/AuthProvider";

const LoginButton: React.FC = () => {
  const { onSignIn } = useAuthContext();

  return (
    <Button buttonType="primary" paddingSize="base-wider" onClick={onSignIn}>
      შესვლა
    </Button>
  );
};

export default LoginButton;
