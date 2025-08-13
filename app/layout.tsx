import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "@/styles/globals.css";

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
      <body className={`${notoSansGeorgian.className}`}>{children}</body>
    </html>
  );
}
