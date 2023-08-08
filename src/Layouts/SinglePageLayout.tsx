import { Flex } from "@chakra-ui/react";
import { Children } from "react";

export default function SingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Flex
        maxW={"950px"}
        h={"fit-content"}
        w={"100%"}
        flexDir={"column"}
        align={"center"}
        borderX={"2px solid"}
        borderColor={"brand.lightgray"}
        alignSelf={"center"}
        pt={"7"}
      >
        {children}
      </Flex>
    </>
  );
}
