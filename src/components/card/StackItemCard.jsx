"use client";
import { Flex, Text, Image, Icon } from "@chakra-ui/react";
import { DeleteIcon, PinIcon } from "../Icons/Icons";
import { useLinkPreview } from "get-link-preview";
import { useEffect, useState } from "react";
import { LinkType } from "@/chakra/Modals/AddLinkModal";
import { Skeleton } from "@chakra-ui/react";
import Link from "next/link";

export default function StackItemCard({
  desc,
  link,
  metaImageLink,
  metaLinkDesc,
  metaFavicon,
  metaTitle,
  metaDomain,
  linkId,
  colorCode,
}) {
  return (
    <>
      <Flex
        minH={"150px"}
        h={"fit-content"}
        bg={"#fff"}
        w={"100%"}
        p={"2"}
        flexDir={"column"}
        border={"1px solid"}
        borderColor={"brand.gray"}
        borderRadius={"5px"}
        cursor={"pointer"}
        my={"2"}
        justifyContent={"space-between"}
      >
        <Flex w={"100%"} justify={"space-between"} py={"1"}>
          <Text fontSize={"xs"} color={"brand.dark"} fontWeight={"800"}>
            {metaDomain}
          </Text>
          <Flex
            align={"center"}
            justify={"space-between"}
            color={"brand.dark"}
            w={{
              base: "40%",
              lg: "30%",
            }}
          >
            <DeleteIcon />
            <PinIcon />
          </Flex>
        </Flex>
        <Flex>
          <Image
            src={metaFavicon}
            alt={""}
            boxSize={"15px"}
            mr={"4"}
            mt={"1"}
            fallbackSrc="/images/image-placeholder.png"
            objectFit={"contain"}
          />
          <Text mt={"0"} fontWeight={"600"}>
            {desc}
          </Text>
        </Flex>
        <a href={link} target="_blank">
          <Flex
            w={"100%"}
            my={"2"}
            borderRadius={"4px"}
            border={"1px solid"}
            borderColor={colorCode === "#fff" ? "brand.gray" : colorCode}
            pl={"2"}
            bg={colorCode}
            justifyContent={"space-between"}
            fontSize={"xs"}
            align={"center"}
          >
            <Text
              textDecor={"underline"}
              color={colorCode === "#fff" ? "" : colorCode}
              noOfLines={2}
              fontWeight={"900"}
            >
              {metaLinkDesc || metaTitle}
            </Text>
            <Image
              ml={"1"}
              src={metaImageLink}
              alt={""}
              boxSize={"50px"}
              objectFit={"cover"}
              fallbackSrc="/images/drum.svg"
              borderRightRadius={"3px"}
            />
          </Flex>
        </a>
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
            bg={"#fff"}
            my={"2"}
            align={"center"}
          >
            <Text textDecor={"underline"} color={"brand.dark"} noOfLines={2}>
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
