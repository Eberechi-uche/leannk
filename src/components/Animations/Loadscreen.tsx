import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { HiOutlineGlobeAlt } from "react-icons/hi";

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
      <Flex align={"center"} justify={"center"}>
        <Text fontSize={"xs"} fontWeight={"900"}>
          Community
        </Text>
        <Icon as={HiOutlineGlobeAlt} fontSize={"md"} ml={"3"} />
      </Flex>
    </Flex>
  );
}
