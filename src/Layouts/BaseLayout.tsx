// "use client";

import { Flex, ChakraProvider } from "@chakra-ui/react";
import Navbar, { AuthNavbar } from "@/components/Navbar";
import { theme } from "../chakra/theme";
import { auth } from "@/firebase/clientApp";
import { useIdToken } from "react-firebase-hooks/auth";
import Loadscreen from "@/components/Animations/Loadscreen";
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading, error] = useIdToken(auth);
  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex
          width={"100%"}
          minH={"100vh"}
          flexDir={"column"}
          h={"fit-content"}
        >
          {user && <AuthNavbar />}
          {!user && !loading && <Navbar />}
          {loading && <Loadscreen />}

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
