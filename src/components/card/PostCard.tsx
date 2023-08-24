"use client";
import { StackType } from "@/chakra/Modals/CreateStackModal";
import { Flex, Text, Image } from "@chakra-ui/react";

import { Timestamp } from "firebase/firestore/lite";

export type PostType = StackType & {
  profileId: string;
  profileDN: string;
  profileImageUrl: string;
  postDesc: string;
  tag?: string[];
  stackItemRef: string;
  timeStamp: Timestamp;
};
export default function Postcard(props: PostType) {
  return (
    <>
      <Flex
        w={"100%"}
        p={"4"}
        fontSize={"sm"}
        borderBottom={"1.5px solid"}
        borderColor={"brand.gray"}
        my={"2"}
      >
        <Flex w={"100%"}>
          <Flex w={"100%"}>
            <Image
              src={props.profileImageUrl}
              alt={props.profileDN}
              fallbackSrc="images/thumbs.svg"
              boxSize={"30px"}
              borderRadius={"full"}
              mr={"4"}
            />

            <Flex w={"100%"} flexDir={"column"}>
              <Flex w={"100%"}>
                <Text fontWeight={"700"} fontSize={"xs"}>
                  {props.profileDN}
                  user profile name
                </Text>
              </Flex>

              <Text>
                {" "}
                {props.postDesc}e resource was preloaded using link preload but
                not used within a few seconds from the window's load event.
                Please make sure it has an appropriate `as` value and it is
                preloaded intentionally.
              </Text>
              <PostStack
                stackColor={props.stackColor || "#2F810A"}
                stackId={props.stackId}
                stackName={props.stackName || "javascript and everthing else"}
                note={props.note}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
function PostStack(props: StackType) {
  return (
    <Flex
      bg={props.stackColor}
      width={"100%"}
      flexDir={"column"}
      my={"4"}
      h={"180px"}
      maxH={"230px"}
      borderRadius={"5px"}
    >
      <Flex
        flexDir={"column"}
        cursor={"pointer"}
        px={"5"}
        w={{
          base: "90%",
          lg: "70%",
        }}
        justify={"center"}
        py={"5"}
      >
        <Text
          fontWeight={"900"}
          fontSize={{
            base: "2xl",
            lg: "lg",
          }}
          noOfLines={[4]}
          color={"blackAlpha.600"}
        >
          {props.stackName}
        </Text>
      </Flex>
    </Flex>
  );
}
