import "./globals.css";
import type { Metadata } from "next";

import "@fontsource/zen-tokyo-zoo";
import "@fontsource-variable/baloo-da-2";
import "@fontsource/source-sans-pro/200.css";
import "@fontsource/source-sans-pro/300.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
// Supports weights 100-900
import "@fontsource-variable/inter";
// import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-sans-pro/900.css";
import { Providers } from "../chakra/providers";

export const metadata: Metadata = {
  title: "Lynnk",
  description: "one stop for all your bookmarks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
