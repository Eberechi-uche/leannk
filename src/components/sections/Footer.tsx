"use client";

import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
export default function Footer() {
  return (
    <>
      <Flex
        width={"100%"}
        height={"30vh"}
        bg={"#000"}
        color={"whiteAlpha.900"}
        p={"4"}
      >
        <Flex width={"100%"} flexDir={"column"}>
          <Flex width={"100%"} justifyContent={"space-between"}>
            <Heading fontWeight={"light"}> LYNNK</Heading>
            <Flex
              width={"50%"}
              justifyContent={"space-evenly"}
              fontSize={"32px"}
            >
              <Icon as={TiSocialTwitter} />
              <Icon as={TiSocialInstagram} />
            </Flex>
          </Flex>
          <Flex flexDir={"column"}>
            <Text> About us</Text>
            <Text>Blog</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
