import { Metadata } from "next";

import SignUpCompany from "@/components/Auth/SignUpCompany";
import SignupContainer from "@/components/Auth/ui/SignupContainer";

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
