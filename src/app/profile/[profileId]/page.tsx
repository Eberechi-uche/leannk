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
          <Flex
            w={"100%"}
            justify={"center"}
            position={"sticky"}
            h={"20"}
            top={"0"}
            bg={"#fff"}
            zIndex={"10"}
            align={"center"}
          >
            <Flex w={"fit-content"} align={"center"}>
              <CreateStackIcon />
            </Flex>
          </Flex>
          <SimpleGrid w={"100%"} columns={[1, 2, 3]} gap={"5"}>
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
