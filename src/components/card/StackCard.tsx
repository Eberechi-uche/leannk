import { Flex, MenuDivider, Text } from "@chakra-ui/react";

import { Delete, MakePublic, ShareToWeave } from "../Actions/MenuActions";
import { MoreIcon } from "../Icons/Icons";
import Link from "next/link";
import { StackType } from "@/chakra/Modals/CreateStackModal";

export default function StackCard(props: StackType) {
  return (
    <>
      <Flex
        width={"100%"}
        flexDir={"column"}
        my={"4"}
        h={"180px"}
        maxH={"230px"}
        border={"1px solid"}
        borderColor={"brand.gray"}
        bg={props.stackColor}
        borderRadius={"5px"}
        key={props.stackId}
      >
        <Flex justify={"flex-end"} px={"5"} align={"center"} pt={"4"}>
          <MoreIcon>
            <MakePublic />
            <MenuDivider />
            <ShareToWeave />
            <MenuDivider />
            <Delete />
          </MoreIcon>
        </Flex>
        <Link href={`/stack/${props.stackId}`}>
          <Flex
            flexDir={"column"}
            cursor={"pointer"}
            px={"5"}
            w={"75%"}
            justify={"center"}
          >
            <Text
              fontWeight={"800"}
              fontSize={{
                base: "lg",
                lg: "md",
              }}
              noOfLines={[4]}
              color={"gray.700"}
            >
              {props.stackName}
            </Text>
          </Flex>
        </Link>
      </Flex>
    </>
  );
}
export function StackCardMini() {
  return (
    <>
      <Flex
        width={"100%"}
        bg={"blue.50"}
        flexDir={"column"}
        h={"100px"}
        fontSize={"sm"}
        maxH={"100px"}
        borderRadius={"7px"}
      >
        <Flex
          h={"100%"}
          px={"7"}
          align={"center"}
          justifyContent={"space-between"}
          py={"2"}
        >
          <Text fontWeight={"400"} noOfLines={[4, 4]}>
            Programming for beginners something dont change hgh ghbghgb
            ghbgfhbfghb
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
