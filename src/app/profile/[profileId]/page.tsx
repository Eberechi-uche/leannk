"use client";
import SingPageLayout from "@/Layouts/SinglePageLayout";
import { CreateStackIcon } from "@/components/Icons/Icons";
import StackCard from "@/components/card/StackCard";
import UserCard from "@/components/card/UserCard";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function AuthProfile() {
  const path = usePathname();
  return (
    <>
      <SingPageLayout>
        <Flex w={"100%"} flexDir={"column"} h={"100%"} p={"4"}>
          <UserCard />
          {/* <Flex
            w={"100%"}
            justify={"flex-start"}
            position={"sticky"}
            h={"20"}
            top={"0"}
            zIndex={"10"}
            align={"center"}
          ></Flex> */}
          <Flex
            w={{
              base: "60%",
              lg: "30%",
            }}
            alignSelf={"center"}
            my={"5"}
            py={"1"}
            align={"center"}
            justify={"center"}
            borderRadius={"5px"}
            border={"1.5px solid"}
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
