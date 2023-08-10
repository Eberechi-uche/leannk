"use client";
import { Flex, Text } from "@chakra-ui/react";

export default function StackItemCard() {
  return (
    <>
      <Flex
        minH={"110px"}
        h={"fit-content"}
        bg={"#fff"}
        w={"100%"}
        p={"4"}
        flexDir={"column"}
        borderY={"2px solid"}
        borderLeft={"2px solid"}
        borderColor={"brand.lightgray"}
      >
        <Flex align={"flex-start"}>
          <Flex mx={"4"} align={"flex-end"} flexDir={"column"}>
            <Text fontSize={"2xl"} fontWeight={"800"} color={"brand.gray"}>
              1
            </Text>
          </Flex>

          <Flex>
            <Text>
              Link here and some other text we can also unfurl them there Link
              here and some other text we can also unfurl them there Link here
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
