"use client";

import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function WordAnimate() {
  const [style, setStyle] = useState(0);

  useEffect(() => {
    let timeOut = setInterval(() => {
      setStyle(Math.floor(Math.random() * 8));
    }, 1500);

    return () => clearInterval(timeOut);
  }, []);
  return (
    <>
      <Flex width={"100%"} h={"fit-content"} px={"7"} py={"7"} bg={"#000"}>
        <Flex
          fontSize={{ base: "12px", lg: "3xl" }}
          color={"whiteAlpha.700"}
          width={"100%"}
          flexWrap={"wrap"}
          fontWeight={"900"}
          justify={"space-around"}
        >
          <Text
            mx={"4"}
            transition={"color 0.7s ease-in-out"}
            color={style === 0 ? "brand.yellow" : "inherit"}
          >
            facebook
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style === 1 ? "brand.yellow" : "inherit"}
          >
            twitter
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style % 2 == 0 ? "brand.yellow" : "inherit"}
          >
            Threads
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style % 2 !== 0 ? "brand.yellow" : "inherit"}
          >
            Blog Post
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style % 2 == 0 ? "brand.yellow" : "inherit"}
          >
            Articles
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style % 2 !== 0 ? "brand.yellow" : "inherit"}
          >
            Medium
          </Text>
          <Text
            color={style % 3 == 0 ? "brand.yellow" : "inherit"}
            transition={"all 1.5s ease-in-out"}
          >
            substack
          </Text>
          <Text
            color={style % 3 == 0 ? "brand.yellow" : "inherit"}
            transition={"all 1.5s ease-in-out"}
          >
            Hashnode
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
