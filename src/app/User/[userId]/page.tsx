"use client";
import StackCard from "@/components/card/StackCard";
import UserCard from "@/components/card/UserCard";
import { Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function AuthProfile() {
  const path = usePathname();
  return (
    <>
      <Flex w={"100%"} flexDir={"column"} h={"100%"} p={"4"}>
        <UserCard />
        <SimpleGrid w={"100%"} columns={[1, 2, 4]} gap={"5"}>
          <StackCard />
          <StackCard />
          <StackCard />
          <StackCard />
          <StackCard />
          <StackCard />
        </SimpleGrid>
      </Flex>
    </>
  );
}
