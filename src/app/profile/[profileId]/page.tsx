"use client";
import SingPageLayout from "@/Layouts/SinglePageLayout";
import { CreateStackIcon } from "@/components/Icons/Icons";
import StackCard from "@/components/card/StackCard";
import UserCard from "@/components/card/UserCard";
import { Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { BsCollection } from "react-icons/bs";

export default function AuthProfile() {
  const path = usePathname();
  return (
    <>
      <SingPageLayout>
        <Flex w={"100%"} flexDir={"column"} h={"100%"} p={"4"}>
          <UserCard />

          <Flex w={"100%"} align={"center"} mt={"5"}>
            <Icon as={BsCollection} mr={"3"} fontSize={"xxl"} />
            <Text fontSize={"xl"} fontWeight={"700"}>
              Stacks
            </Text>
            {/* <CreateStackIcon /> */}
          </Flex>
          <Flex
            borderY={"1.5px solid"}
            borderColor={"blackAlpha.200"}
            pt={"7"}
            pb={"2"}
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
