import SingPageLayout from "@/Layouts/SinglePageLayout";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { CreateStackIcon } from "../Icons/Icons";
import StackCard from "../card/StackCard";
import { auth, firestore } from "@/firebase/clientApp";
import { useIdToken } from "react-firebase-hooks/auth";
import extractUserId from "@/utility/extractUserId";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { StackType } from "@/chakra/Modals/CreateStackModal";
import { LoadingAnimation } from "../Animations/loading";

export default function AuthHomePage() {
  const [user, loading, error] = useIdToken(auth);
  const [fetchingStacks, setFetchingStack] = useState(true);
  const [stacks, setStacks] = useState<StackType[]>([]);

  const profileId = user?.email && extractUserId(user?.email);
  useEffect(() => {
    async function fetchStack() {
      const collectionRef = collection(
        firestore,
        "profile",
        profileId!,
        "Stacks"
      );
      const querySnapshot = await getDocs(collectionRef);
      const queryData = querySnapshot.docs.map(
        (doc) =>
          ({
            stackId: doc.id,
            ...doc.data(),
          } as StackType)
      );
      setStacks(queryData);
      setFetchingStack(false);
    }
    fetchStack();
  }, [user]);
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
            <CreateStackIcon stack={stacks} setStack={setStacks} />
          </Flex>
          <SimpleGrid w={"100%"} columns={[1, 2, 2, 3]} gap={"5"}>
            {stacks.map((stack) => (
              <Flex key={stack.stackId}>
                <StackCard
                  stackColor={stack.stackColor}
                  stackId={stack.stackId}
                  stackName={stack.stackName}
                  note={stack.note}
                />
              </Flex>
            ))}
            {fetchingStacks && <LoadingAnimation />}
            {!fetchingStacks && stacks.length === 0 && (
              <Text textAlign={"center"} my={"30%"} fontSize={"sm"}>
                You do not have any stacks...
              </Text>
            )}
          </SimpleGrid>
        </Flex>
      </SingPageLayout>
    </>
  );
}
