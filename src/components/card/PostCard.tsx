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
      <Flex w={"100%"}>
        <Flex w={"100%"}>
          <Flex w={"100%"}>
            <Flex>
              <Image
                src={props.profileImageUrl}
                alt={props.profileDN}
                fallbackSrc=""
              />
            </Flex>
            <Flex>
              <Flex>
                <Text fontWeight={"700"}>{props.profileDN}</Text>
              </Flex>

              <Text> {props.postDesc}</Text>
              <PostStack
                stackColor={props.stackColor}
                stackId={props.stackId}
                stackName={props.stackName}
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
      borderRadius={"10px"}
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
      >
        <Text
          fontWeight={"900"}
          fontSize={{
            base: "sm",
            lg: "md",
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
