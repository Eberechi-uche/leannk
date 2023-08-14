import { Text, Image, Flex } from "@chakra-ui/react";
import { AddLinkIcon, CreateStackIcon } from "../Icons/Icons";

export default function UserCard() {
  return (
    <>
      <Flex w={"100%"} h={"fit-content"} flexDir={"column"} fontSize={"xl"}>
        <Flex w={"100%"} my={"4"} justifyContent={"space-between"}>
          <Flex>
            <Text>Hello, </Text>
            <Text textTransform={"capitalize"} fontWeight={"700"} mx={"2"}>
              [profile name]
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
