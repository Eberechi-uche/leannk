import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function StackCard() {
  const route = useRouter();
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
        onClick={() => {
          route.push("/profile/uche/uche");
        }}
      >
        <Flex
          px={"7"}
          align={"center"}
          justifyContent={"space-between"}
          py={"2"}
        >
          <Text isTruncated fontWeight={"600"}>
            Programming for beginners
          </Text>
          {/* <Flex>
            <More>
              <Delete />
              <MakePublic />
              <ShareToWeave />
            </More>
          </Flex> */}
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
