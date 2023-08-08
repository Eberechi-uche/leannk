"use client";
import SingPageLayout from "@/Layouts/SinglePageLayout";
import { InfoCardAbout, StackDetailsCard } from "@/components/card/InfoCard";
import { ProfileCard } from "@/components/card/ProfileCard";
import StackItemCard from "@/components/card/StackItemCard";
import { Flex, SimpleGrid, Avatar, Text } from "@chakra-ui/react";

export default function StackId() {
  return (
    <>
      <SingPageLayout>
        <Flex flexDir={"column"} h={"fit-content"} px={"4"} w={"100%"}>
          <ProfileCard />
          <InfoCardAbout />
        </Flex>
        <StackDetailsCard>
          <Text> No contributions</Text>
        </StackDetailsCard>
        <Flex bg={"#FAFAFA"} p={"4"} h={"100vh"} w={"100%"} flexDir={"column"}>
          <SimpleGrid columns={[1, 2]} gap={"4"}>
            <StackItemCard />
            <StackItemCard />
            <StackItemCard />
            <StackItemCard />
          </SimpleGrid>
        </Flex>
      </SingPageLayout>
    </>
  );
}
