"use client";

import { Button } from "@/components/ui";
import { useAuthContext } from "@/providers/AuthProvider";

type SignInButtonOnSuccessT = {};

const SignInButtonOnSuccess: React.FC<SignInButtonOnSuccessT> = () => {
  const { onCloseAuthPopup } = useAuthContext();

  return (
    <Button
      fullWidth
      buttonType="primary"
      paddingSize="base-wider"
      className="tablet:hidden"
      onClick={onCloseAuthPopup}
    >
      ავტორიზაცია
    </Button>
  );
};

export default SignInButtonOnSuccess;
