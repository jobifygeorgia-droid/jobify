import { Metadata } from "next";

import SignUpCompany from "@/components/Auth/SignUpCompany";

export const metadata: Metadata = {
  title: "Company Sign Up",
};

const page: React.FC = () => {
  return <SignUpCompany />;
};

export default page;
