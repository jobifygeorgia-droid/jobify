import { Metadata } from "next";

import { Container } from "@/components/ui";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { SendResumeProvider } from "@/providers";

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
    <SendResumeProvider>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <Container>{children}</Container>
        <Footer />
      </div>
    </SendResumeProvider>
  );
};

export default Layout;
