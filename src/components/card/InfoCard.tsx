"use client";
import { Flex, Icon, Text, Image, Button } from "@chakra-ui/react";
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

export function InfoCardAbout() {
  return (
    <>
      <Flex
        width={"100%"}
        border={"1px solid"}
        borderColor={"blackAlpha.300"}
        borderRadius={"5px"}
        flexDir={"column"}
        my={"4"}
        h={"fit-content"}
      >
        <Flex
          flexDir={"column"}
          py={"4"}
          px={"7"}
          borderTop={"1px solid"}
          w={"100%"}
          borderColor={"inherit"}
        >
          <Flex
            bg={"blackAlpha.900"}
            h={"40px"}
            borderRadius={"5px"}
            color={"#fff"}
            p={"2"}
          >
            <Text fontSize={"xs"}>
              Add discription of the stack for more context
            </Text>
          </Flex>
          <Text>
            This strategy states that the element that is inserted last will
            come out first. You can take a pile of plates kept on top of each
            other as a real-life example. The plate which we put last is on the
            top and since we remove the plate that is at the top, we can say
            that the plate that was put last comes out first.
          </Text>
          <Flex justify={"flex-end"}>
            <Button size={"xs"}>follow Stack</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
