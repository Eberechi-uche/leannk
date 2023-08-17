// "use client";

import { Flex, ChakraProvider } from "@chakra-ui/react";
import Navbar, { AuthNavbar } from "@/components/Navbar";
import { theme } from "../chakra/theme";
import { auth } from "@/firebase/clientApp";
import { useRouter } from "next/navigation";
import { useIdToken } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import extractUserId from "@/utility/extractUserId";
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [user, loading, error] = useIdToken(auth);
  // const route = useRouter();
  // useEffect(() => {
  //   if (user?.email) {
  //     const profileId = extractUserId(user.email);
  //     route.replace(`/profile/${user.displayName}`);
  //   }
  // }, [user]);
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
