"use client";
import { Flex, Text, Icon, Button } from "@chakra-ui/react";
import { BsAsterisk } from "react-icons/bs";
import { SiLinkerd } from "react-icons/si";
import { useRouter } from "next/navigation";
export default function HomeHero() {
  const route = useRouter();
  return (
    <>
      <Flex width={"100%"} h={"fit-content"} px={"2"} py={"10"}>
        <Flex width={"100%"} align={"flex-end"} flexWrap={"wrap"}>
          <Flex width={{ lg: "80%" }}>
            <h1>
              <Icon as={BsAsterisk} /> All your{" "}
              <span className="home-hero"> links </span>in one place, <br />
              yes, why not - <Icon as={SiLinkerd} /> curate the perfect
              collection
              <span className="dot"> .</span>
            </h1>
          </Flex>
          <Flex py={"4"}>
            <Button
              size={"lg"}
              onClick={() => {
                route.push("/profile/you");
              }}
            >
              {" "}
              Get Leannking
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
