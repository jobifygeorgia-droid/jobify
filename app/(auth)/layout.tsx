import { Metadata } from "next";
import { redirect } from "next/navigation";

import { PATHS } from "@/lib/config";
import { auth } from "@/services/next-auth";

type layoutT = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: "Jobify",
    template: "%s | Jobify",
  },
};

const Layout: React.FC<layoutT> = async ({ children }) => {
  const session = await auth();

  if (session) redirect(PATHS.home);

  return <>{children}</>;
};

export default Layout;
