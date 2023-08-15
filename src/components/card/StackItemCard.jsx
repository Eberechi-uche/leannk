"use client";
import { Flex, Text, Image, Icon } from "@chakra-ui/react";
import { DeleteIcon } from "../Icons/Icons";
import { useLinkPreview } from "get-link-preview";
import { useEffect } from "react";
import { BiLink } from "react-icons/bi";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

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
        <Flex w={"100%"} justify={"flex-end"} py={"1"}>
          <DeleteIcon />
        </Flex>
        <Flex align={"flex-start"}>
          <Flex mx={"2"} align={"flex-end"} flexDir={"column"}>
            <Text fontSize={"2xl"} fontWeight={"800"} color={"brand.gray"}>
              1
            </Text>
          </Flex>

          <Flex>
            <Text fontSize={"sm"}>
              Link here and some other text we can also unfurl them there Link
              here and some other text we can also unfurl them there Link here
            </Text>
          </Flex>
        </Flex>
        <Flex
          w={"100%"}
          py={"1"}
          border={"1.5px solid"}
          borderColor={"blackAlpha.200"}
          borderRadius={"5px"}
          px={"2"}
          justifyContent={"space-between"}
          fontSize={"xs"}
          align={"center"}
        >
          <Text textDecor={"underline"} color={"gray.500"} noOfLines={2}>
            somelinke here and other thing lets see what happens when we have a
            long text omelinke here and other thing lets see what happens when
            we have a long text
          </Text>
          <Image
            ml={"1"}
            src={"/images/signUp.webp"}
            alt={""}
            boxSize={"30px"}
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

  useEffect(() => {
    if (data && data.success !== false) {
      updateNewLink((prev) => ({
        ...prev,
        metaImageLink: data.image,
        metaLinkDesc: data.description,
      }));
    }
    console.log(error, data);
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
      <Flex align={"flex-start"}>
        <Flex mx={"2"} align={"flex-end"} flexDir={"column"}>
          <Icon as={BiLink} fontSize={"2xl"} color={"brand.dark"} />
        </Flex>

        <Flex>
          <Text fontSize={"sm"}>{desc}</Text>
        </Flex>
      </Flex>
      {loading && <Skeleton height="20px" />}
      {!loading && data && data.success == false && (
        <>
          <Flex width={"100%"} justify={"center"}>
            <Text color={"red.200"} fontSize={"xs"} fontWeight={"800"}>
              {data.message}
            </Text>
          </Flex>
        </>
      )}
      {!loading && data && data.description && data.sucess !== false && (
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
            align={"center"}
          >
            <Text textDecor={"underline"} color={"gray.500"} noOfLines={2}>
              {data.description}
            </Text>
            <Image
              src={data.image}
              alt={""}
              boxSize={"30px"}
              objectFit={"cover"}
              borderRadius={"3px"}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
}
