import { Metadata } from "next";

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

type layoutT = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: "Jobify",
    template: "%s | Jobify",
  },
  description: "",
};

const Layout: React.FC<layoutT> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
