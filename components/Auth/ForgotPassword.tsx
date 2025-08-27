import { OTP } from "@/components/layouts/Form";
import { AnchorButton } from "@/components/ui";
import AuthPopupTitle from "./ui/AuthPopupTitle";

const ForgotPassword: React.FC = () => {
  return (
    <div>
      <AuthPopupTitle title="დაგავიწყდა პაროლი ?" />

      <span className="text-base-sm flex flex-col items-center justify-center mt-5">
        <span>პაროლი გამოგზავნილია ნომერზე:</span>
        <span>597***343</span>
      </span>

      <div className="mt-11 flex justify-center">
        <OTP />
      </div>

      <div className="mt-16 flex flex-col gap-2">
        <AnchorButton href="?auth=update-password" fullWidth rounded="base">
          დადასტურება
        </AnchorButton>

        <AnchorButton
          href="?auth=base"
          fullWidth
          buttonType="text"
          rounded="base"
        >
          უკან დაბრუნება
        </AnchorButton>
      </div>
    </div>
  );
};

export default ForgotPassword;
