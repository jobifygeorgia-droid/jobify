import { Metadata } from "next";

import { SignUpUser } from "@/components/Auth";
import { SignupContainer } from "@/components/Auth/ui";

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
