import { AnchorButton } from "@/components/ui";
import AuthPopupTitle from "./ui/AuthPopupTitle";
import { PasswordField } from "@/components/layouts/Form";

const UpdatePassword: React.FC = () => {
  return (
    <div>
      <AuthPopupTitle title="პაროლის აღდგენა" />

      <form>
        <div className="mt-11 flex flex-col gap-3 justify-center">
          <PasswordField
            inputProps={{ label: "პაროლი", labelPosition: "out" }}
          />
          <PasswordField
            inputProps={{ label: "გაიმეორე პაროლი", labelPosition: "out" }}
          />
        </div>

        <div className="mt-16 flex flex-col gap-2">
          <AnchorButton href="?auth=update-success" fullWidth rounded="base">
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
      </form>
    </div>
  );
};

export default UpdatePassword;
