"use client";
import { Flex, Text, Image, Icon } from "@chakra-ui/react";
import { DeleteIcon } from "../Icons/Icons";
import { useLinkPreview } from "get-link-preview";
import { useEffect, useState } from "react";

import { Skeleton } from "@chakra-ui/react";

export default function StackItemCard() {
  return (
    <>
      <Flex
        minH={"110px"}
        h={"fit-content"}
        bg={"#fff"}
        w={"100%"}
        p={"2"}
        flexDir={"column"}
        border={"1.5px solid"}
        borderColor={"blackAlpha.200"}
        borderLeft={"4px solid"}
        borderLeftColor={"brand.yellow"}
        cursor={"pointer"}
        borderRadius={"5px"}
        my={"2"}
      >
        <Flex w={"100%"} justify={"space-between"} py={"1"}>
          <Text fontSize={"xs"} color={"brand.dark"}>
            sitename
          </Text>
          <DeleteIcon />
        </Flex>
        <Flex>
          <Image
            src={""}
            alt={""}
            boxSize={"15px"}
            mr={"4"}
            mt={"1"}
            fallbackSrc="/images/image-placeholder.png"
            objectFit={"contain"}
            borderRadius={"full"}
          />
          <Text fontSize={"sm"} mt={"0"}>
            some description here and there
          </Text>
        </Flex>
        <Flex
          w={"100%"}
          my={"2"}
          py={"1"}
          border={"1.5px solid"}
          borderColor={"blackAlpha.200"}
          borderRadius={"5px"}
          px={"2"}
          justifyContent={"space-between"}
          fontSize={"xs"}
          align={"center"}
        >
          <Text textDecor={"underline"} color={"brand.dark"} noOfLines={2}>
            somelinke here and other thing lets see what happens when we have a
            l
          </Text>
          <Image
            ml={"1"}
            src={"/images/signUp.webp"}
            alt={""}
            boxSize={"35px"}
            objectFit={"cover"}
            borderRadius={"3px"}
          />
        </Flex>
      </Flex>
    </>
  );
}
export function StackItemCardPreview({ url, updateNewLink, desc }) {
  const { getLinkPreviewData, loading, error, data } = useLinkPreview(url);
  const [unfurledLink, setUnfurlLink] = useState({});

  useEffect(() => {
    if (data && data.success === true) {
      setUnfurlLink(data);
      updateNewLink((prev) => ({
        ...prev,
        metaImageLink: data.image || "",
        metaLinkDesc: data.description || "",
        metaFavicon: data.favicon || "",
        metaTitle: data.title || "",
        metaDomain: data.domain || "",
      }));
    }
  }, [data]);

  return (
    <Flex
      minH={"110px"}
      h={"fit-content"}
      bg={"#fff"}
      w={"100%"}
      p={"2"}
      flexDir={"column"}
      border={"1.5px solid"}
      borderColor={"blackAlpha.200"}
      cursor={"pointer"}
      borderRadius={"5px"}
      my={"2"}
    >
      <Flex>
        <Text fontSize={"xs"} color={"brand.dark"}>
          {unfurledLink && unfurledLink.domain}
        </Text>
      </Flex>
      <Flex>
        <Image
          src={unfurledLink && unfurledLink.favicon}
          alt={""}
          boxSize={"15px"}
          mr={"4"}
          mt={"1"}
          fallbackSrc="/images/image-placeholder.png"
          objectFit={"contain"}
          borderRadius={"full"}
        />
        <Text fontSize={"sm"} mt={"0"}>
          {desc}
        </Text>
      </Flex>
      {loading && <Skeleton height="50px" my={"2"} />}
      {!loading && data && data.sucess == false && (
        <>
          <Flex width={"100%"} justify={"center"}>
            <Text color={"red.200"} fontSize={"xs"} fontWeight={"800"}>
              {data.message}
            </Text>
          </Flex>
        </>
      )}
      {!loading && Object.keys(unfurledLink).length > 0 && (
        <>
          <Flex
            w={"100%"}
            h={"50px"}
            py={"1"}
            border={"1.5px solid"}
            borderColor={"blackAlpha.200"}
            borderRadius={"5px"}
            px={"2"}
            justifyContent={"space-between"}
            fontSize={"xs"}
            bg={"#000"}
            my={"2"}
            align={"center"}
          >
            <Text
              textDecor={"underline"}
              color={"brand.lightgray"}
              noOfLines={2}
            >
              {unfurledLink.description || unfurledLink.title}
            </Text>
            <Image
              src={unfurledLink.image}
              alt={""}
              boxSize={"35px"}
              objectFit={"cover"}
              borderRadius={"3px"}
              fontSize={"xs"}
              ml={"2"}
              fallbackSrc="/images/drum.svg"
            />
          </Flex>
        </>
      )}
    </Flex>
  );
}
