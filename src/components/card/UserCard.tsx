import { Text, Image, Flex } from "@chakra-ui/react";
import { AddLinkIcon, CreateStackIcon } from "../Icons/Icons";

export default function UserCard() {
  return (
    <>
      <Flex w={"100%"} h={"fit-content"} flexDir={"column"}>
        <Image
          src="/images/signUp.webp"
          boxSize={"80px"}
          objectFit={"cover"}
          borderRadius={"full"}
        />
        <Flex w={"100%"} my={"4"} justifyContent={"space-between"}>
          <Flex>
            <Text>Hello, </Text>
            <Text textTransform={"capitalize"} fontWeight={"700"} mx={"2"}>
              eberechi
            </Text>
          </Flex>

          <Flex align={"center"}>
            <CreateStackIcon />
            <AddLinkIcon />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
