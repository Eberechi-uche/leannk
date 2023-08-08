"use client";

import { Flex, Image, Text } from "@chakra-ui/react";
import { Comments, Like, Publish, Save } from "../Icons/Icons";

export function ProfileCard() {
  return (
    <>
      <Flex w={"100%"} p={"4"} align={"center"} my={"4"}>
        <Flex w={"100%"} align={"flex-start"} justifyContent={"space-between"}>
          <Flex align={"center"}>
            <Image
              src={"/images/signUp.webp"}
              boxSize={"40px"}
              objectFit={"cover"}
              borderRadius={"full"}
            />
            <Flex mx="4" flexWrap={"wrap"}>
              <Text mx={"1"}> Curated by </Text>
              <Text fontWeight={"800"} mx={"1"}>
                Eberechi
              </Text>
            </Flex>
          </Flex>

          <Flex>
            <Comments />
            <Like />
            <Save />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
