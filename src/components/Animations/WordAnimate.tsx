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
      <Flex width={"100%"} h={"fit-content"} px={"7"} py={"7"}>
        <Flex
          fontSize={{ base: "37px", lg: "7xl" }}
          color={"blackAlpha.200"}
          width={"100%"}
          flexWrap={"wrap"}
          justify={"space-around"}
        >
          <Text
            mx={"4"}
            transition={"color 0.7s ease-in-out"}
            color={style === 0 ? "blackAlpha.600" : ""}
          >
            facebook
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style === 1 ? "blackAlpha.700" : ""}
          >
            twitter
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style % 2 == 0 ? "blackAlpha.700" : "blackAlpha.200"}
          >
            {" "}
            Threads
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style % 2 !== 0 ? "blackAlpha.700" : "blackAlpha.200"}
          >
            {" "}
            Blog Post
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style % 2 == 0 ? "blackAlpha.700" : "blackAlpha.200"}
          >
            Articles
          </Text>
          <Text
            transition={"all 1.5s ease-in-out"}
            mx={"4"}
            color={style % 2 !== 0 ? "blackAlpha.700" : "blackAlpha.200"}
          >
            Medium
          </Text>
          <Text
            color={style % 3 == 0 ? "blackAlpha.700" : "blackAlpha.200"}
            transition={"all 1.5s ease-in-out"}
          >
            {" "}
            substack
          </Text>
          <Text
            color={style % 3 == 0 ? "blackAlpha.700" : "blackAlpha.200"}
            transition={"all 1.5s ease-in-out"}
          >
            {" "}
            Hashnode
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
