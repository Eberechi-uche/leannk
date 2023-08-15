"use client";
import { Flex, Text, Image } from "@chakra-ui/react";
import { DeleteIcon } from "../Icons/Icons";

export default function StackItemCard() {
  return (
    <>
      <Flex
        minH={"110px"}
        h={"fit-content"}
        bg={"#fff"}
        w={"100%"}
        p={"2"}
        flexDir={"column"}
        border={"1.5px solid"}
        borderColor={"blackAlpha.200"}
        borderLeft={"4px solid"}
        borderLeftColor={"brand.yellow"}
        cursor={"pointer"}
        borderRadius={"5px"}
        my={"2"}
      >
        <Flex w={"100%"} justify={"flex-end"} py={"1"}>
          <DeleteIcon />
        </Flex>
        <Flex align={"flex-start"}>
          <Flex mx={"2"} align={"flex-end"} flexDir={"column"}>
            <Text fontSize={"2xl"} fontWeight={"800"} color={"brand.gray"}>
              1
            </Text>
          </Flex>

          <Flex>
            <Text fontSize={"sm"}>
              Link here and some other text we can also unfurl them there Link
              here and some other text we can also unfurl them there Link here
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
export function StackItemCardPreview() {
  return (
    <Flex
      minH={"110px"}
      h={"fit-content"}
      bg={"#fff"}
      w={"100%"}
      p={"2"}
      flexDir={"column"}
      border={"1.5px solid"}
      borderColor={"blackAlpha.200"}
      cursor={"pointer"}
      borderRadius={"5px"}
      my={"2"}
    >
      <Flex align={"flex-start"}>
        <Flex mx={"2"} align={"flex-end"} flexDir={"column"}>
          <Text fontSize={"2xl"} fontWeight={"800"} color={"brand.gray"}>
            1
          </Text>
        </Flex>

        <Flex>
          <Text fontSize={"sm"}>
            Link here and some other text we can also unfurl them there Link
            here and some other text we can also unfurl them there Link here
          </Text>
        </Flex>
      </Flex>
      <Flex
        w={"100%"}
        py={"1"}
        border={"1.5px solid"}
        borderColor={"blackAlpha.200"}
        borderRadius={"5px"}
        px={"2"}
        justifyContent={"space-between"}
        fontSize={"xs"}
      >
        <Text isTruncated textDecor={"underline"} color={"gray.500"}>
          somelinke here and other thing lets see what happens when we have a
          long text
        </Text>
        <Image
          src={"/images/signUp.webp"}
          alt={""}
          boxSize={"25px"}
          objectFit={"cover"}
          borderRadius={"3px"}
        />
      </Flex>
    </Flex>
  );
}
