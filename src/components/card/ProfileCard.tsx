"use client";

import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import { RiSettings4Fill } from "react-icons/ri";

export function ProfileCard() {
  return (
    <>
      <Flex w={"100%"} flexDir={"column"} px={"2"}>
        <Flex pos={"relative"}>
          <Image
            src={"/images/thumbs.svg"}
            boxSize={"25px"}
            objectFit={"cover"}
            borderRadius={"full"}
          />
        </Flex>

        <Flex flexWrap={"wrap"} isTruncated flexDir={"column"}>
          <Text mx={"1"} isTruncated fontWeight={"600"}>
            @[username]
          </Text>
          <Text mx={"1"} isTruncated>
            user email
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
