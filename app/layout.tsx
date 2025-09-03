import { Noto_Sans_Georgian } from "next/font/google";
import { Suspense } from "react";

import "@/styles/globals.css";

import ThemeRegistry from "@/services/mui/ThemeRegistry";
import { AuthProvider, PopupsProvider, RouteTracker } from "@/providers";

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
      <body className={`${notoSansGeorgian.className}`}>
        <ThemeRegistry>
          <RouteTracker>
            <Suspense fallback={null}>
              <PopupsProvider>
                <AuthProvider>
                  {children}
                  {AuthPopup}
                </AuthProvider>
              </PopupsProvider>
            </Suspense>
          </RouteTracker>
        </ThemeRegistry>

        <div id="portal" />
      </body>
    </html>
  );
};

export default RootLayout;
