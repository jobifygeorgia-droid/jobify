import Link from "next/link";

import Divider from "./ui/Divider";
import GoogleButton from "./ui/GoogleButton";
import AuthPopupTitle from "./ui/AuthPopupTitle";

import { Button } from "@/components/ui";
import { PasswordField, TextField, Checkbox } from "@/components/layouts/Form";

const BaseAuthentication: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <AuthPopupTitle title="ავტორიზაცია" />

      <form className="flex flex-col gap-3">
        <TextField labelPosition="out" label="მობილური ნომერი" />

        <PasswordField inputProps={{ labelPosition: "out", label: "პაროლი" }} />

        <div className="flex items-center justify-between">
          <Checkbox id="remember-me">დამახსოვრება</Checkbox>

          <Link
            href="?auth=password-update-method"
            className="text-base-sm text-light-grey-dark-active hover:underline"
          >
            დაგავიწყდა პაროლი ?
          </Link>
        </div>

        <Button fullWidth rounded="base" className="mt-1">
          შესვლა
        </Button>
      </form>

      <div className="w-full mt-3 flex flex-col gap-2">
        <Divider />

        <div className="mt-3">
          <GoogleButton />
        </div>
      </div>

      <div className="flex justify-center text-base-sm">
        <span className="text-light-grey-dark-active">არ გაქვს ანგარიში ?</span>
        &nbsp;
        <Link
          href="/auth/signup"
          className="font-semibold text-blue hover:underline"
        >
          დარეგისტრირდი
        </Link>
      </div>
    </div>
  );
};

export default BaseAuthentication;
