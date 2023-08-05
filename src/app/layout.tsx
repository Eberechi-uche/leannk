import "./globals.css";
import type { Metadata } from "next";

import "@fontsource/zen-tokyo-zoo";
import "@fontsource-variable/baloo-da-2";
import { Providers } from "../chakra/providers";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
