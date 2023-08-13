import { Flex, MenuDivider, Text } from "@chakra-ui/react";

import { MakePublic, ShareToWeave } from "../Actions/MenuActions";
import { MoreIcon } from "../Icons/Icons";
import Link from "next/link";

export default function StackCard() {
  return (
    <>
      <Flex
        width={"100%"}
        flexDir={"column"}
        my={"4"}
        h={"230px"}
        maxH={"230px"}
        border={"1px solid"}
        borderColor={"brand.black"}
        boxShadow="lg"
        borderBottom={"10px solid"}
        bg={"#0000"}
        borderBottomRadius={"4px"}
      >
        <Flex justify={"space-between"} px={"5"} align={"center"} py={"4"}>
          <Text color={"blackAlpha.500"} fontSize={"sm"}>
            date
          </Text>
          <MoreIcon>
            <MakePublic />
            <MenuDivider />
            <ShareToWeave />
          </MoreIcon>
        </Flex>
        <Link href={"/profile/uche/uche"}>
          <Flex flexDir={"column"} cursor={"pointer"} px={"5"} pb={"2"}>
            <Flex align={"center"}>
              <Text fontWeight={"900"} fontSize={"md"}>
                Programming for beginners and somethings that never just changes
              </Text>
            </Flex>

            <Flex
              flexDir={"column"}
              h={"70px"}
              w={"100%"}
              borderColor={"inherit"}
            >
              <Text fontSize={"xs"}>
                short description goes ModalHeader short description short
                description goes ModalHeader short description
              </Text>
            </Flex>
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
          <Text fontWeight={"600"} noOfLines={[4, 4]}>
            Programming for beginners something dont change hgh ghbghgb
            ghbgfhbfghb
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
