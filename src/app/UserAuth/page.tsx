"use client";

import { Flex, Grid, Text } from "@chakra-ui/react";
import Login from "./Login";
import { useState } from "react";
import { SiGeant } from "react-icons/si";
import SignUp from "./SignUp";

const images = ["images/weave.webp", "images/signUp.webp"];
export default function UserAuth() {
  const [authPage, setAuthPage] = useState(0);

  function handleAuthPageChange(value: number) {
    setAuthPage(value);
  }
  return (
    <>
      <Grid
        w={"100vw"}
        h={"100vh"}
        bg={"beige"}
        placeItems={"center"}
        bgImage={images[authPage]}
        bgPosition={"center"}
        bgSize={"contain"}
        transition={"all 0.7s ease-in-out"}
      >
        <Flex
          maxW={"500px"}
          h={{ base: "90vh", lg: "fit-content" }}
          bg={"#FFFFFF"}
          width={"100%"}
          borderRadius={"5px"}
          flexDir={"column"}
          alignSelf={{ base: "flex-end", lg: "center" }}
        >
          {authPage === 0 && <Login handlePageChange={handleAuthPageChange} />}
          {authPage === 1 && (
            <SignUp handleAuthPageChange={handleAuthPageChange} />
          )}
        </Flex>
      </Grid>
    </>
  );
}
