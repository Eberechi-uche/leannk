// "use client";

import { Flex, ChakraProvider } from "@chakra-ui/react";
import Navbar, { AuthNavbar } from "@/components/Navbar";
import { theme } from "../chakra/theme";
import { auth } from "@/firebase/clientApp";
import { useRouter } from "next/navigation";
import { useIdToken } from "react-firebase-hooks/auth";
import { useEffect } from "react";
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading, error] = useIdToken(auth);
  const route = useRouter();
  useEffect(() => {
    if (user) {
      route.replace(`/profile/${user.displayName}`);
    }
  }, [user]);
  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex
          width={"100%"}
          minH={"100vh"}
          flexDir={"column"}
          h={"fit-content"}
        >
          {user ? (
            <>
              <AuthNavbar />
            </>
          ) : (
            <>
              <Navbar />
            </>
          )}

          {children}
        </Flex>
      </ChakraProvider>
    </>
  );
}
