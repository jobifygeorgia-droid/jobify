import { Metadata } from "next";

import SignUpUser from "@/components/Auth/SignUpUser";

export const metadata: Metadata = {
  title: "User Sign Up",
};

const page: React.FC = () => {
  return <SignUpUser />;
};

export default page;
