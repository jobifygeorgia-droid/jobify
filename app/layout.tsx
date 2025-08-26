import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";

import "@/styles/globals.css";
import ThemeRegistry from "@/services/mui/ThemeRegistry";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { Container } from "@/components/ui";

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-noto-sans-georgian",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Jobify",
    template: "%s | ",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansGeorgian.className}`}>
        <ThemeRegistry>
          <div className="flex flex-col min-h-screen">
            <Container>
              <NavBar />
              {children}
            </Container>

            <Footer />
          </div>
        </ThemeRegistry>

        <div id="portal" />
      </body>
    </html>
  );
}
