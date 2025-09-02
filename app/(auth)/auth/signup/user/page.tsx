import { Metadata } from "next";

import SignUpUser from "@/components/Auth/SignUpUser";
import SignupContainer from "@/components/Auth/ui/SignupContainer";

export const metadata: Metadata = {
  title: "User Sign Up",
};

const page: React.FC = () => {
  return (
    <SignupContainer>
      <SignUpUser />
    </SignupContainer>
  );
};

export default page;
