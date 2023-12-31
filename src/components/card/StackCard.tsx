import { Flex, Icon, MenuDivider, Text } from "@chakra-ui/react";

import { EditStack, MakePublic } from "../Actions/MenuActions";
import { MoreIcon } from "../Icons/Icons";
import Link from "next/link";

import { HiOutlineGlobeAlt, HiLockClosed } from "react-icons/hi";
import { StackType } from "@/chakra/Modals/CreateStackModal";

export default function StackCard(props: StackType) {
  return (
    <>
      <Flex
        width={"100%"}
        flexDir={"column"}
        my={"2"}
        h={"250px"}
        maxH={"230px"}
        bg={props.stackColor}
        borderRadius={"16px"}
        key={props.stackId}
      >
        <Flex justify={"space-between"} px={"5"} align={"center"} pt={"4"}>
          <Icon
            color={"blackAlpha.400"}
            fontSize={"sm"}
            as={props.status === "private" ? HiLockClosed : HiOutlineGlobeAlt}
          />
          <MoreIcon>
            {/* <MakePublic {...props} />
            <MenuDivider borderColor={"gray.700"} borderWidth={"2px"} /> */}
            <EditStack />
          </MoreIcon>
        </Flex>
        <Link href={`/stack/${props.stackId}`}>
          <Flex
            flexDir={"column"}
            cursor={"pointer"}
            px={"5"}
            w={{
              base: "100%",
              lg: "80%",
            }}
            justify={"center"}
          >
            <Text
              fontWeight={"900"}
              fontSize={{
                base: "sm",
                lg: "md",
              }}
              noOfLines={[7]}
              color={"blackAlpha.600"}
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
