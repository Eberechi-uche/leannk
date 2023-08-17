// "use client";

import { Flex, ChakraProvider } from "@chakra-ui/react";
import Navbar, { AuthNavbar } from "@/components/Navbar";
import { theme } from "../chakra/theme";
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex
          width={"100%"}
          minH={"100vh"}
          flexDir={"column"}
          h={"fit-content"}
        >
          <Navbar />
          {children}
        </Flex>
      </ChakraProvider>
    </>
  );
}

export function AuthBaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex
          width={"100%"}
          minH={"100vh"}
          flexDir={"column"}
          h={"fit-content"}
        >
          <AuthNavbar />

          {children}
        </Flex>
      </ChakraProvider>
    </>
  );
}
