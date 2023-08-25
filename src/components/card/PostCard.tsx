"use client";
import { StackType } from "@/chakra/Modals/CreateStackModal";
import { Flex, Text, Image, Icon } from "@chakra-ui/react";

import { Timestamp } from "firebase/firestore/lite";
import { BookmarkIcon, LikeIcon, SaveIcon } from "../Icons/Icons";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

export interface PostType extends StackType {
  profileId: string;
  profileDN: string;
  profileImageUrl: string;
  postDesc: string;
  tag?: string[];
  stackItemRef: string;
  timeStamp: Timestamp;
  postId?: string;
}
export default function Postcard(props: PostType) {
  return (
    <>
      <Flex
        w={"100%"}
        p={"5"}
        h={"300px"}
        maxH={"250px"}
        flexDir={"column"}
        bg={"brand.lightgray"}
        borderRadius={"5px"}
        justify={"space-evenly"}
      >
        <Flex flexDir={"column"}>
          <Image
            src={props.profileImageUrl}
            alt={props.profileDN}
            fallbackSrc="images/thumbs.svg"
            boxSize={"40px"}
            borderRadius={"full"}
          />
          <Text fontWeight={"500"} fontSize={"md"} mt={"2"}>
            {props.profileDN}
          </Text>
        </Flex>

        <Flex w={"100%"} flexDir={"column"}>
          <Flex w={"100%"}></Flex>

          <Text my={"2"} fontSize={"sm"} noOfLines={3}>
            {props.postDesc}
          </Text>
        </Flex>
        <Flex w={"100%"} cursor={"pointer"} align={"center"}>
          <Flex
            bg={props.stackColor}
            w={"100%"}
            borderRadius={"full"}
            px={"4"}
            h={"fit-content"}
            align={"center"}
            py={"3"}
            justify={"space-between"}
          >
            <Text
              fontSize={"md"}
              noOfLines={1}
              color={"blackAlpha.600"}
              fontWeight={"600"}
            >
              {props.stackName}
            </Text>
            <Icon as={FaArrowRightLong} />
          </Flex>
          <BookmarkIcon />
        </Flex>
      </Flex>
    </>
  );
}
function PostStack(props: StackType) {
  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      my={"4"}
      h={"180px"}
      maxH={"230px"}
      borderRadius={"10px"}
      bg={props.stackColor}
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
