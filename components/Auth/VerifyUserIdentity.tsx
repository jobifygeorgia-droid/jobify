import AuthPopupTitle from "./ui/AuthPopupTitle";
import { useAuthContext } from "./AuthProvider";
import { OTP } from "@/components/layouts/Form";
import { AnchorButton, Button } from "@/components/ui";

const VerifyUserIdentity: React.FC = () => {
  const { method, onCloseAuthPopup, onVerifyUserIdentity } = useAuthContext();

  const keyWord =
    method === "email" ? "ელ.ფოსტაზე" : method === "mobile" ? "ნომერზე" : "";

  if (!method) onCloseAuthPopup();

  return (
    <div>
      <AuthPopupTitle title="დაგავიწყდა პაროლი ?" />

      <span className="text-base-sm flex flex-col items-center justify-center mt-5">
        <span>პაროლი გამოგზავნილია {keyWord}:</span>
        <span>example@io.com</span>
      </span>

      <form>
        <div className="mt-11 flex justify-center">
          <OTP />
        </div>

        <div className="mt-16 flex flex-col gap-2">
          <Button onClick={onVerifyUserIdentity} fullWidth rounded="base">
            დადასტურება
          </Button>

          <AnchorButton
            href="?auth=base"
            fullWidth
            buttonType="text"
            rounded="base"
          >
            უკან დაბრუნება
          </AnchorButton>
        </div>
      </form>
    </div>
  );
};

export default VerifyUserIdentity;
