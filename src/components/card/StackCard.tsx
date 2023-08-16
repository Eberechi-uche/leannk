import { Flex, MenuDivider, Text } from "@chakra-ui/react";

import { Delete, MakePublic, ShareToWeave } from "../Actions/MenuActions";
import { MoreIcon } from "../Icons/Icons";
import Link from "next/link";

export default function StackCard() {
  return (
    <>
      <Flex
        width={"100%"}
        flexDir={"column"}
        my={"4"}
        h={"220px"}
        maxH={"230px"}
        border={"1px solid"}
        borderColor={"blackAlpha.200"}
        bg={""}
        borderRadius={"5px"}
      >
        <Flex justify={"space-between"} px={"5"} align={"center"} pt={"4"}>
          <Text color={"blackAlpha.500"} fontSize={"sm"}>
            date
          </Text>
          <MoreIcon>
            <MakePublic />
            <MenuDivider />
            <ShareToWeave />
            <MenuDivider />
            <Delete />
          </MoreIcon>
        </Flex>
        <Link href={"/profile/uche/uche"}>
          <Flex
            flexDir={"column"}
            cursor={"pointer"}
            px={"5"}
            h={"150px"}
            w={"70%"}
            justify={"center"}
          >
            <Text fontWeight={"600"} fontSize={"md"} noOfLines={[4]}>
              Stack name and everything else testing and all through communion
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
