import { Metadata } from "next";

type layoutT = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: "Jobify",
    template: "%s | Jobify",
  },
};

const Layout: React.FC<layoutT> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
