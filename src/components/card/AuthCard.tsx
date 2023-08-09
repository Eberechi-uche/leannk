import { Flex, Image, Text } from "@chakra-ui/react";

export default function AuthCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <>
      <Flex w={"100%"} align={"center"} my={"4"} flexDir={"column"}>
        <Image src={image} alt={""} boxSize={"50px"} borderRadius={"full"} />
        <Text> {name}</Text>
      </Flex>
    </>
  );
}
