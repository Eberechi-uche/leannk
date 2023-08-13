"use client";
import { Flex, Text, Icon, Button, Image } from "@chakra-ui/react";
import { BsAsterisk } from "react-icons/bs";
import { SiLinkerd } from "react-icons/si";
import { useRouter } from "next/navigation";
import Link from "next/link";
import WordAnimate from "../Animations/WordAnimate";
export default function HomeHero() {
  const route = useRouter();
  return (
    <>
      <Flex
        flexDir={"column"}
        maxW={"2020px"}
        alignSelf={"center"}
        w={"100%"}
        bg={"brand.yellow"}
        // bgGradient="linear(to-b, brand.yellow,  whiteAlpha.500 )"
      >
        <Flex
          width={"100%"}
          h={"fit-content"}
          px={{ base: "7", lg: "12" }}
          py={"14"}
          borderBottom={"1px solid"}
          borderColor={"brand.black"}
        >
          <Flex width={"100%"} align={"flex-end"} flexWrap={"wrap"}>
            <Flex width={{ lg: "80%" }} color={"brand.black"}>
              <h1>
                <Icon as={BsAsterisk} /> All your
                <span className="home-hero"> links, bookmarks </span>
                <span
                  style={{
                    color: "#FFA500",
                    margin: " 0 5px ",
                  }}
                >
                  &
                </span>
                Everything else in one place,
                <br />
                - <Icon as={SiLinkerd} /> curate the perfect collection
                <span className="dot"> .</span>
              </h1>
            </Flex>
            <Link href={"/profile/uche"}>
              <Flex py={"4"} align={"center"} w={"100%"}>
                <Image
                  src={"images/wave.svg"}
                  alt={"svg"}
                  boxSize={{
                    base: "60px",
                    lg: "90px",
                  }}
                  mr={"2"}
                  w={"min-content"}
                />
                <Button size={"lg"} mr={"4"}>
                  Get started
                </Button>
                <Image
                  src={"images/Arrow.svg"}
                  alt={"svg"}
                  boxSize={{
                    base: "60px",
                    lg: "90px",
                  }}
                />
              </Flex>
            </Link>
          </Flex>
        </Flex>
        <WordAnimate />
      </Flex>
    </>
  );
}
