import Link from "next/link";

import Divider from "./ui/Divider";
import GoogleButton from "./ui/GoogleButton";
import SignupContainer from "./ui/SignupContainer";
import { Button } from "@/components/ui";
import { TextField, PasswordField, Checkbox } from "@/components/layouts/Form";

const SignUpUser: React.FC = () => {
  return (
    <SignupContainer>
      <form action="" className="w-full max-w-[375px] mt-6 flex flex-col gap-3">
        <TextField label="სახელი" labelPosition="out" />
        <TextField label="ელ.ფოსტა" labelPosition="out" />
        <TextField label="ტელეფონი" labelPosition="out" inputType="number" />
        <PasswordField inputProps={{ label: "პაროლი", labelPosition: "out" }} />

        <div className="flex items-center mt-1">
          <Checkbox id="remember-me">ვეთანხმები</Checkbox>
          &nbsp;&nbsp;
          <Link href="/" className="underline">
            წესებს და პირობებს
          </Link>
        </div>

        <Button rounded="base" className="mt-3">
          რეგისტრაცია
        </Button>

        <div className="my-3">
          <Divider />
        </div>

        <GoogleButton />
      </form>
    </SignupContainer>
  );
};

export default SignUpUser;
