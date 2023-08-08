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
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=leannk"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=leannk"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=lennk"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=lannk"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=leann"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=lnk"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=lannky"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=leannb"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=lnku"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=leaxcb"}
            mx={"2"}
          />
          <Avatar
            size={"sm"}
            src={"https://api.dicebear.com/6.x/thumbs/svg?seed=lnkuu"}
            mx={"2"}
          />
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
