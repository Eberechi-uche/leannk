"use client";
import { Flex, Text } from "@chakra-ui/react";

export default function StackItemCard() {
  return (
    <>
      <Flex
        h={"110px"}
        bg={"#fff"}
        w={"100%"}
        p={"4"}
        borderTopRadius={"7px"}
        flexDir={"column"}
      >
        <Flex>
          <Flex>
            <Text> Link here</Text>
          </Flex>
          <Flex></Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </>
  );
}
