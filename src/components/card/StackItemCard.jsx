"use client";
import { Flex, Text, Image, Icon } from "@chakra-ui/react";
import { DeleteIcon, MoreIcon, PinIcon } from "../Icons/Icons";
import { useLinkPreview } from "get-link-preview";
import { useEffect, useState } from "react";
import { LinkType } from "@/chakra/Modals/AddLinkModal";
import { Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import { Delete } from "../Actions/MenuActions";

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
        bg={"#F6F5F4"}
        w={"100%"}
        px={"2"}
        flexDir={"column"}
        borderRadius={"16px"}
        cursor={"pointer"}
        my={"2"}
        justifyContent={"space-between"}
      >
        <Flex w={"100%"} justify={"space-between"} py={"1"} align={"center"}>
          <Text fontSize={"xs"} color={"brand.dark"} fontWeight={"800"}>
            {metaDomain}
          </Text>
          <MoreIcon>
            <Delete />
          </MoreIcon>
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
          <Text mt={"0"} fontWeight={"400"} noOfLines={5}>
            {desc}
          </Text>
        </Flex>
        <a href={link} target="_blank">
          <Flex
            w={"100%"}
            my={"2"}
            pl={"2"}
            borderRadius={"8.5px"}
            borderColor={colorCode === "#F6F5F4" ? "brand.gray" : colorCode}
            bg={colorCode === "#F6F5F4" ? "blackAlpha.200" : colorCode}
            justifyContent={"space-between"}
            fontSize={"xs"}
            align={"center"}
            h={"fit-content"}
            overflow={"clip"}
          >
            <Text
              textDecor={"underline"}
              color={colorCode === "#F6F5F4" ? "#000" : "#fff"}
              noOfLines={2}
              fontWeight={"900"}
            >
              {metaLinkDesc || metaTitle}
            </Text>
            <Image
              ml={"1"}
              src={metaImageLink}
              alt={""}
              boxSize={"100px"}
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
      minH={"150px"}
      h={"fit-content"}
      bg={"#F6F5F4"}
      w={"100%"}
      p={"2"}
      flexDir={"column"}
      borderRadius={"7px"}
      cursor={"pointer"}
      my={"2"}
      color={"#000"}
      justifyContent={"space-between"}
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
            border={"1.5px solid"}
            borderColor={"blackAlpha.200"}
            borderRadius={"5px"}
            pl={"2"}
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
              boxSize={"70px"}
              objectFit={"cover"}
              borderRightRadius={"3px"}
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
