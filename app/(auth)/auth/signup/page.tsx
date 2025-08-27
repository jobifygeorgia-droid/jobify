import { Metadata } from "next";
import SignUp from "@/components/Auth/SignUp";

export const metadata: Metadata = {
  title: "Sign Up",
};

const page: React.FC = () => {
  return <SignUp />;
};

export default page;
