import { Flex, Image, Text } from "@chakra-ui/react";
import generateAvatar from "@/utility/generateAvatar";

export default function AuthCard({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  image = generateAvatar(name);
  return (
    <>
      <Flex w={"100%"} align={"center"} my={"4"} flexDir={"column"}>
        <Image src={image} alt={""} boxSize={"50px"} borderRadius={"full"} />
        <Text> {name}</Text>
      </Flex>
    </>
  );
}
