import { Flex, Skeleton, Spinner } from "@chakra-ui/react";

export function LoadingAnimation() {
  return (
    <>
      <Flex w={"100%"} h={"30vh"} align={"center"} justify={"center"}>
        <Spinner
          thickness="3px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="md"
        />
      </Flex>
    </>
  );
}
