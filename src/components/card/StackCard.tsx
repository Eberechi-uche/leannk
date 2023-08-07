import { Flex, Icon, Text } from "@chakra-ui/react";
import { CiShare1 } from "react-icons/ci";
import { Delete, More, Share } from "../Icons/Icons";
export default function StackCard() {
  return (
    <>
      <Flex
        width={"100%"}
        border={"1px solid"}
        borderColor={"blackAlpha.300"}
        borderRadius={"5px"}
        flexDir={"column"}
        my={"4"}
        h={"100%"}
      >
        <Flex
          px={"7"}
          align={"center"}
          justifyContent={"space-between"}
          py={"2"}
        >
          <Text isTruncated fontWeight={"600"}>
            Programming for beginners everhthbbbhbb
          </Text>
          <Flex>
            <Delete />
            <More />
          </Flex>
        </Flex>

        <Flex
          flexDir={"column"}
          py={"4"}
          px={"7"}
          borderTop={"1px solid"}
          w={"100%"}
          borderColor={"inherit"}
        >
          <Text> Programming titbits</Text>
          <Text>Description</Text>
        </Flex>
      </Flex>
    </>
  );
}
