import Link from "next/link";

import { DYNAMIC_ROUTES } from "@/lib/config";

import LoginButton from "./ui/LoginButton";

const User: React.FC = () => {
  return (
    <div className="flex items-center gap-5">
      <Link href={DYNAMIC_ROUTES.company_profile("123")}>
        კომპანიის პროფილი
      </Link>
      <Link href={DYNAMIC_ROUTES.user_profile("123")}>პროფილი</Link>
      <LoginButton />
    </div>
  );
};

export default User;
