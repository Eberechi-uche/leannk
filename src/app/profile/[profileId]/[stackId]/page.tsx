"use client";
import SingPageLayout from "@/Layouts/SinglePageLayout";
import { AddLinkIcon } from "@/components/Icons/Icons";
import { InfoCardAbout, StackDetailsCard } from "@/components/card/InfoCard";
import { ProfileCard } from "@/components/card/ProfileCard";
import StackItemCard from "@/components/card/StackItemCard";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

export default function StackId() {
  return (
    <>
      <SingPageLayout>
        <Flex
          flexDir={"column"}
          w={"100%"}
          position={"relative"}
          h={"max-content"}
          px={"4"}
        >
          <Flex
            width={"100%"}
            flexDir={"column"}
            my={"10"}
            pb={"4"}
            borderBottom={"1px solid"}
            borderColor={"blackAlpha.200"}
          >
            <Text fontWeight={"800"} fontSize={"2xl"}>
              Programming for beginners links and resourses
            </Text>
            <Text>
              short description of the stack goes here short description short
              description goes ModalHeader short description
            </Text>
          </Flex>

          {/* <ProfileCard /> */}
          <Flex
            borderBottom={"1.5px solid"}
            borderColor={"blackAlpha.200"}
            pt={"7"}
          >
            <AddLinkIcon />
          </Flex>

          {/* <Flex flexDir={"column"} h={"fit-content"} w={"100%"}>
            <InfoCardAbout />
          </Flex> */}

          {/* <StackDetailsCard>
            <Avatar
              size={"sm"}
              src={"https://api.dicebear.com/6.x/thumbs/svg?seed=leannk"}
              mx={"2"}
            />
          </StackDetailsCard> */}
          {/* <Flex
            w={"100%"}
            justify={"space-between"}
            // position={"sticky"}
            h={"20"}
            top={"0"}
            zIndex={"10"}
            align={"center"}
            px={"2"}
          >
            <Flex w={"fit-content"} align={"center"}>
              <CommentsIcon />
              <LikeIcon />
            </Flex>

            <Flex w={"fit-content"}>
              <SaveIcon />
              <ShareIcon />
            </Flex>
          </Flex> */}
          <Flex h={"100vh"} w={"100%"} flexDir={"column"} mt={"12"}>
            <SimpleGrid columns={[1, 2]} gap={"2"}>
              <StackItemCard />
              <StackItemCard />
              <StackItemCard />
              <StackItemCard />
            </SimpleGrid>
          </Flex>
        </Flex>
      </SingPageLayout>
    </>
  );
}
