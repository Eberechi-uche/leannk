"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function CommunityHero() {
  return (
    <>
      <Flex
        width={"100%"}
        h={"95vh"}
        w={"100vw"}
        textAlign={"center"}
        bgImage={"images/communication.svg"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
      >
        <Text fontSize={"2xl"} fontWeight={"900"}>
          Comming soon...
        </Text>
      </Flex>
    </>
  );
}
