import { Noto_Sans_Georgian } from "next/font/google";

import "@/styles/globals.css";
import RootProvider from "./RootProvider";
import GoogleFontIconsHead from "@/components/ui/icons/GoogleFontIconsHead";

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-noto-sans-georgian",
  weight: ["100", "300", "400", "500", "700", "900"],
});

type RootLayoutT = {
  children: React.ReactNode;
  AuthPopup: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutT> = ({ children, AuthPopup }) => {
  return (
    <html lang="en">
      <GoogleFontIconsHead />
      <body className={`${notoSansGeorgian.className}`}>
        <RootProvider>
          {children}
          {AuthPopup}
        </RootProvider>

        <div id="portal" />
      </body>
    </html>
  );
};

export default RootLayout;
