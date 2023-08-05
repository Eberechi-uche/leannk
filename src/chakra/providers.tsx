"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import BaseLayout from "@/Layouts/BaseLayout";
// app/providers.tsx

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <BaseLayout>{children}</BaseLayout>
      </ChakraProvider>
    </CacheProvider>
  );
}
