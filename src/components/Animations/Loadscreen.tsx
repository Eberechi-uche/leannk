import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Loadscreen() {
  return (
    <Flex w={"100dvw"} h={"100dvh"} justify={"center"} align={"center"}>
      <Heading fontWeight={"light"}>LYNNK</Heading>
    </Flex>
  );
}
export function LoadscreenCommunity() {
  return (
    <Flex
      w={"100dvw"}
      h={"100dvh"}
      justify={"center"}
      align={"center"}
      flexDir={"column"}
    >
      <Heading fontWeight={"light"}>LYNNK</Heading>
      <Text fontSize={"xs"} fontWeight={"900"}>
        Community
      </Text>
    </Flex>
  );
}
