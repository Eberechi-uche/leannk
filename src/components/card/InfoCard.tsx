"use client";
import { Flex, Icon, Text, Image } from "@chakra-ui/react";
import { GrStackOverflow } from "react-icons/gr";
export default function InfoCard(props: any) {
  const { icon, smText, lgText, image, desc } = props;
  return (
    <>
      <Flex flexDir={"column"} px={"10"}>
        <Flex align={"center"} fontSize={{ base: "lg" }} display={"flex"}>
          <Icon as={icon} />
          <Text>{smText}</Text>
        </Flex>

        <Text fontSize={{ base: "2xl", md: "4xl", lg: "7xl" }}>{lgText}</Text>
        <Flex
          width={"100%"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          mt={"10"}
          overflow={"clip"}
        >
          <Flex width={{ base: "100%", lg: "30%" }}>
            <Text>{desc}</Text>
          </Flex>
          <Flex mt={{ base: "20", lg: "0" }} width={{ lg: "50%" }}>
            <Image src={image} objectFit={"cover"} h={{ base: "130%" }} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
