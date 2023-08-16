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
            <Flex width={{ md: " 60%", lg: "70%" }} color={"brand.black"}>
              <Text
                fontSize={{
                  base: "22px",
                  md: "24px",
                  lg: "46px",
                }}
                fontWeight={"900"}
                lineHeight={"2"}
              >
                <Icon as={BsAsterisk} /> All your links, bookmarks and
                Everything else in one place <br />
                <Icon as={SiLinkerd} /> curate the perfect collection .
              </Text>
            </Flex>
            <Link href={"/UserAuth?auth=sign-up"}>
              <Flex py={"4"} align={"center"} w={"100%"}>
                <Image
                  src={"images/wave.svg"}
                  alt={"svg"}
                  w={"30px"}
                  h={"60px"}
                  mr={"1"}
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
