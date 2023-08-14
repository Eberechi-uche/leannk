"use client";

import { Flex, Icon, Image, MenuDivider, Text } from "@chakra-ui/react";
import { RiSettings4Fill } from "react-icons/ri";

export function ProfileCard() {
  return (
    <>
      <Flex
        w={"100%"}
        align={"center"}
        justify={"center"}
        textAlign={"center"}
        flexDir={"column"}
      >
        <Flex pos={"relative"}>
          <Flex
            position={"absolute"}
            bottom={"-3px"}
            right={"-2px"}
            borderRadius={"full"}
            p={"1"}
            bg={"brand.yellow"}
          >
            <Icon as={RiSettings4Fill} />
          </Flex>

          <Image
            src={"/images/signUp.webp"}
            boxSize={"45px"}
            objectFit={"cover"}
            borderRadius={"full"}
          />
        </Flex>

        <Flex flexWrap={"wrap"} isTruncated flexDir={"column"}>
          <Text fontWeight={"300"} mx={"1"} isTruncated>
            @[username]
          </Text>
          <Text fontWeight={"300"} mx={"1"} isTruncated>
            user email
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
