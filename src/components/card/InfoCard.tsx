"use client";
import { Flex, Icon, Text, Image, Button } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
export default function InfoCard(props: any) {
  const { icon, smText, lgText, image, desc } = props;
  return (
    <>
      <Flex
        flexDir={"column"}
        px={{
          base: "12",
          lg: "28",
        }}
      >
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
        border={"1.5px solid"}
        borderColor={"brand.lightgray"}
        borderRadius={"5px"}
        flexDir={"column"}
        my={"4"}
        h={"fit-content"}
      >
        <Flex
          flexDir={"column"}
          py={"4"}
          px={"4"}
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
            justifyContent={"space-between"}
            align={"center"}
            my={"5"}
          >
            <Text fontSize={"xs"}>
              Add discription of the stack for more context
            </Text>
            <Icon as={FiPlus} />
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

export function StackDetailsCard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex w={"100%"} h={"fit-content"} px={"4"} align={"center"} my={"4"}>
        <Flex
          w={"100%"}
          flexDir={"column"}
          px={"4"}
          minH={"70px"}
          py={"10"}
          border={"2px solid"}
          borderColor={"brand.lightgray"}
        >
          <Flex w={"100%"} justifyContent={"space-between"} align={"center"}>
            <Text fontWeight={"700"}>Contributors</Text>
            <Flex align={"center"} fontWeight={"700"}>
              <Text>Item list</Text>
              <Text fontSize={"4xl"} mx={"4"} color={"brand.gray"}>
                50
              </Text>
            </Flex>
          </Flex>

          <Flex overflowX={"scroll"}>{children}</Flex>
        </Flex>
      </Flex>
    </>
  );
}
