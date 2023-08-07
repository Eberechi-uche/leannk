"use client";

import { Flex, Grid, Text } from "@chakra-ui/react";
import Login from "./Login";

export default function UserAuth() {
  return (
    <>
      <Grid w={"100vw"} h={"100vh"} bg={"beige"} placeItems={"center"}>
        <Flex
          maxW={"500px"}
          h={{ base: "100vh", lg: "fit-content" }}
          bg={"#FFFFFF"}
          width={"100%"}
          borderRadius={"5px"}
          flexDir={"column"}
        >
          <Login />
        </Flex>
      </Grid>
    </>
  );
}
