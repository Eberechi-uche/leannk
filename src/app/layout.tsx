import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChakraProviders from "./chakra/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leannk",
  description: "one stop for all your bookmarks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ChakraProviders>
        <body className={inter.className}>{children}</body>
      </ChakraProviders>
    </html>
  );
}
