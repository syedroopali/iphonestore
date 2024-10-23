import type { Metadata } from "next";
import "@/app/_styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Cyber",
    default: "Welcome to Cyber",
  },
  description: "Iphone store to get all the prodcuts related to iphone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[90rem] m-auto`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
