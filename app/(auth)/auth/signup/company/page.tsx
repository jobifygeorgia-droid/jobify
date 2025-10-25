import { Metadata } from "next";

import { SignUpCompany } from "@/components/Auth";
import { SignupContainer } from "@/components/Auth/ui";

export const metadata: Metadata = {
  title: "Company Sign Up",
};

const page: React.FC = () => {
  return (
    <SignupContainer>
      <SignUpCompany />
    </SignupContainer>
  );
};

export default page;
