"use client";
import SingPageLayout from "@/Layouts/SinglePageLayout";
import { AddLinkIcon } from "@/components/Icons/Icons";
import StackItemCard from "@/components/card/StackItemCard";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useIdToken } from "react-firebase-hooks/auth";

import { useEffect, useState } from "react";
import { auth, firestore } from "@/firebase/clientApp";
import extractUserId from "@/utility/extractUserId";
import { StackType } from "@/chakra/Modals/CreateStackModal";
import { LinkType } from "@/chakra/Modals/AddLinkModal";
import { LoadingAnimation } from "@/components/Animations/loading";

export default function StackId() {
  const { stackId } = useParams();
  const [links, setLinks] = useState<LinkType[]>([]);
  const [stack, setStack] = useState<StackType>();
  const [loading, setLoading] = useState(true);
  const [user] = useIdToken(auth);

  useEffect(() => {
    const profileid = user?.email && extractUserId(user?.email);
    async function getStackData() {
      const stack = doc(
        firestore,
        "profile",
        profileid!,
        "Stacks",
        stackId as string
      );
      const stackSnap = await getDoc(stack);
      setStack(stackSnap.data() as StackType);
    }
    async function fetchStack() {
      const collectionRef = collection(
        firestore,
        "profile",
        profileid!,
        "Stacks",
        stackId as string,
        "Links"
      );
      const querySnapshot = await getDocs(collectionRef);
      const queryData = querySnapshot.docs.map(
        (doc) =>
          ({
            linkId: doc.id,
            ...doc.data(),
          } as LinkType)
      );
      setLinks(queryData);
      setLoading(false);
    }

    if (user?.email && stackId) {
      getStackData();
      fetchStack();
    }
  }, [stackId, user]);
  return (
    <>
      <SingPageLayout>
        <Flex
          flexDir={"column"}
          w={"100%"}
          position={"relative"}
          minH={"100vh"}
          h={"fit-content"}
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
            <>
              <Text
                fontWeight={"900"}
                fontSize={"xl"}
                color={
                  stack?.stackColor === "#F6F5F4"
                    ? "blackAlpha.700"
                    : stack?.stackColor
                }
              >
                {stack?.stackName}
              </Text>
              <Text>{stack?.note}</Text>
            </>
          </Flex>

          <Flex
            py={"2"}
            px={"4"}
            border={"1px solid"}
            borderRadius={"5px"}
            w={"fit-content"}
            borderColor={"blackAlpha.200"}
          >
            <AddLinkIcon updateLink={setLinks} />
          </Flex>

          <Flex h={"100vh"} w={"100%"} flexDir={"column"} mt={"12"}>
            <SimpleGrid columns={[1, 2]} gap={"2"}>
              {links.map((link) => (
                <Flex key={link.linkId}>
                  <StackItemCard
                    link={link.link}
                    desc={link.desc}
                    metaDomain={link.metaDomain}
                    metaFavicon={link.metaFavicon}
                    metaImageLink={link.metaImageLink}
                    metaLinkDesc={link.metaLinkDesc}
                    linkId={link.linkId}
                    metaTitle={link.metaTitle}
                    colorCode={stack?.stackColor}
                  />
                </Flex>
              ))}
              {loading && <LoadingAnimation />}
              {!loading && links.length === 0 && (
                <Text
                  textAlign={"center"}
                  my={"30%"}
                  fontSize={"sm"}
                  fontWeight={"900"}
                >
                  No links.
                </Text>
              )}
            </SimpleGrid>
          </Flex>
        </Flex>
      </SingPageLayout>
    </>
  );
}
