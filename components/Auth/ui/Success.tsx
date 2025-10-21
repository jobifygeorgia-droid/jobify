import { SignInButtonOnSuccess } from "./";
import { SuccessPopupWindow } from "@/components/ui";

const Success: React.FC = () => {
  return (
    <SuccessPopupWindow message="პაროლი წარმატებით შეიცვალა">
      <SignInButtonOnSuccess />
    </SuccessPopupWindow>
  );
};

export default Success;
