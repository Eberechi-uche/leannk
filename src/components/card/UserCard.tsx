import { Text, Image, Flex } from "@chakra-ui/react";

export default function UserCard() {
  return (
    <>
      <Flex w={"100%"} h={"20vh"} flexDir={"column"}>
        <Image
          src="/images/signUp.webp"
          boxSize={"80px"}
          objectFit={"cover"}
          borderRadius={"full"}
        />
        <Flex w={"100%"} my={"4"}>
          <Text>Hello, </Text>
          <Text textTransform={"capitalize"} fontWeight={"700"} mx={"2"}>
            eberechi
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
