import SingPageLayout from "@/Layouts/SinglePageLayout";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { CreateStackIcon } from "../Icons/Icons";
import StackCard from "../card/StackCard";

export default function AuthHomePage() {
  return (
    <>
      <SingPageLayout>
        <Flex w={"100%"} flexDir={"column"} h={"100%"} p={"4"}>
          <Flex
            py={"2"}
            px={"4"}
            border={"1px solid"}
            borderRadius={"5px"}
            w={"fit-content"}
            borderColor={"blackAlpha.200"}
          >
            <CreateStackIcon />
          </Flex>
          <SimpleGrid w={"100%"} columns={[1, 2, 2, 3]} gap={"5"}>
            <StackCard />
            <StackCard />
            <StackCard />
            <StackCard />
            <StackCard />
            <StackCard />
          </SimpleGrid>
        </Flex>
      </SingPageLayout>
    </>
  );
}
