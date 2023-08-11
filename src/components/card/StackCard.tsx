import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MakePublic, ShareToWeave } from "../Actions/MenuActions";
import { MoreIcon } from "../Icons/Icons";
import Link from "next/link";

export default function StackCard() {
  const route = useRouter();
  return (
    <>
      <Flex
        width={"100%"}
        borderRadius={"5px"}
        flexDir={"column"}
        my={"4"}
        h={"230px"}
        maxH={"230px"}
        bg={"blue.50"}
      >
        <Flex justify={"space-between"} px={"7"} align={"center"} py={"2"}>
          <Text color={"blackAlpha.500"} fontSize={"sm"}>
            date
          </Text>
          <MoreIcon>
            <MakePublic />
            <ShareToWeave />
          </MoreIcon>
        </Flex>
        <Link href={"/profile/uche/uche"}>
          <Flex flexDir={"column"} cursor={"pointer"}>
            <Flex
              px={"7"}
              align={"center"}
              justifyContent={"space-between"}
              py={"2"}
            >
              <Text fontWeight={"600"}>
                Programming for beginners and somethings that never just changes
              </Text>
            </Flex>

            <Flex
              flexDir={"column"}
              py={"2"}
              px={"7"}
              h={"70px"}
              w={"100%"}
              borderColor={"inherit"}
            >
              <Text fontSize={"xs"}>
                short description goes ModalHeader short description goes
                ModalHeader short description goes ModalHeader short description
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
