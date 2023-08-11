"use client";

import { Flex, Image, Text } from "@chakra-ui/react";
import {
  AddLinkIcon,
  CommentsIcon,
  DeleteIcon,
  LikeIcon,
  MoreIcon,
  PublishIcon,
  SaveIcon,
} from "../Icons/Icons";

export function ProfileCard() {
  return (
    <>
      <Flex w={"100%"} p={"2"} align={"center"} my={"10"}>
        <Flex w={"100%"} align={"flex-start"} justifyContent={"space-between"}>
          <Flex align={"center"} isTruncated>
            <Image
              src={"/images/signUp.webp"}
              boxSize={"40px"}
              objectFit={"cover"}
              borderRadius={"full"}
            />
            <Flex mx="4" flexWrap={"wrap"} isTruncated>
              <Text mx={"1"}> Curated by </Text>
              <Text fontWeight={"800"} mx={"1"} isTruncated>
                Eberechi uche richard
              </Text>
            </Flex>
          </Flex>
          {
            <Flex>
              <MoreIcon>
                <Text></Text>
              </MoreIcon>
            </Flex>
          }
          {/* <Flex>
            <CommentIcon />
            <LikeIcon />
            <SaveIcon />
          </Flex> */}
        </Flex>
      </Flex>
    </>
  );
}
