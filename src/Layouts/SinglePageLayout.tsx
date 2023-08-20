import { Flex } from "@chakra-ui/react";

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
        alignSelf={"center"}
      >
        {children}
      </Flex>
    </>
  );
}
