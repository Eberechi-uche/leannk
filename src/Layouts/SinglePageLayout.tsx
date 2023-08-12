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
        borderX={"1px solid"}
        borderColor={{
          base: "#fff",
          lg: "brand.black",
        }}
        alignSelf={"center"}
        pt={"7"}
      >
        {children}
      </Flex>
    </>
  );
}
