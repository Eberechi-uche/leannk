// "use client";

import { Flex, Text, Button, Heading, ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { theme } from "../chakra/theme";
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex width={"100%"} h={"100vh"} flexDir={"column"}>
          <Navbar />
          {children}
        </Flex>
      </ChakraProvider>
    </>
  );
}
