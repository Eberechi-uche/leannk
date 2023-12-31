"use client";
import { Flex, Icon, Text, Image, Button } from "@chakra-ui/react";

import UserInputText from "../Inputs/UserInputText";
import { useState } from "react";

import { BsArrowRight } from "react-icons/bs";
export default function InfoCard(props: any) {
  const { icon, smText, lgText, image, desc, color } = props;
  return (
    <>
      <Flex
        flexDir={"column"}
        px={{
          base: "12",
          lg: "28",
        }}
        color={color ? color : ""}
      >
        <Flex align={"center"} fontSize={{ base: "lg" }} display={"flex"}>
          <Icon as={icon} />
          <Text>{smText}</Text>
        </Flex>

        <Text fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>{lgText}</Text>
        <Flex width={"100%"} flexWrap={"wrap"} justifyContent={"space-between"}>
          <Flex width={{ base: "100%", md: "70%", lg: "30%" }}>
            <Text>{desc}</Text>
          </Flex>

          <Flex mt={{ base: "20", lg: "0" }} width={{ md: "70%", lg: "70%" }}>
            <Image src={image} objectFit={"contain"} w={"100%"} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export function InfoCardAbout() {
  const [updateDesc, setUpdateDesc] = useState(0);
  const [desc, setDesc] = useState("");

  const handleTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(e.target.value);
  };
  return (
    <>
      <Flex
        width={"100%"}
        border={"1.5px solid"}
        borderColor={"#000"}
        // borderRadius={"5px"}
        flexDir={"column"}
        my={"4"}
        px={"4"}
        h={"fit-content"}
      >
        {updateDesc === 0 && (
          <>
            <Flex
              bg={"brand.yellow"}
              border={"1.5px solid"}
              borderColor={"brand.black"}
              onClick={() => {
                setUpdateDesc(1);
              }}
              // borderRadius={"5px"}
              color={"#fff"}
              justifyContent={"space-between"}
              align={"center"}
              my={"5"}
              cursor={"pointer"}
            >
              <Flex p={"3"} w={"70%"}>
                <Text fontSize={"sm"}>
                  Add discription of the stack for more context
                </Text>
              </Flex>

              <Flex
                bg={"brand.black"}
                h={"100%"}
                flexDir={"column"}
                align={"center"}
                justify={"center"}
                p={"4"}
              >
                <Icon as={BsArrowRight} />
              </Flex>
            </Flex>
            <Text>
              This strategy states that the element that is inserted last will
              come out first. You can take a pile of plates kept on top of each
              other as a real-life example. The plate which we put last is on
              the top and since we remove the plate that is at the top, we can
              say that the plate that was put last comes out first.
            </Text>
          </>
        )}
        <Flex
          flexDir={"column"}
          py={"4"}
          // borderTop={"1px solid"}
          w={"100%"}
          borderColor={"inherit"}
        >
          {updateDesc === 1 && (
            <>
              <Flex w={"100%"} flexDir={"column"} my={"3"}>
                <UserInputText
                  onChange={handleTextAreaInput}
                  value={desc}
                  placeHolder="Enter stack description"
                  name="desc"
                />
                <Flex
                  w={{ base: "50%", lg: "20%" }}
                  justify={"space-between"}
                  alignSelf={"flex-end"}
                >
                  <Button
                    onClick={() => {
                      setUpdateDesc(0);
                      setDesc("");
                    }}
                    variant={"outline"}
                    size={"sm"}
                    mx={"4"}
                  >
                    cancel
                  </Button>
                  <Button size={"sm"}> update</Button>
                </Flex>
              </Flex>
            </>
          )}
          <Flex justify={"flex-end"}>
            <Button size={"sm"}>follow Stack</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export function StackDetailsCard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex w={"100%"} h={"fit-content"} align={"center"} my={"4"}>
        <Flex
          w={"100%"}
          flexDir={"column"}
          px={"4"}
          minH={"70px"}
          py={"10"}
          border={"1.5px solid"}
          borderColor={"brand.black"}
        >
          <Flex w={"100%"} justifyContent={"space-between"} align={"center"}>
            <Text fontWeight={"700"}>Contributors</Text>
            <Flex align={"center"} fontWeight={"700"}>
              <Text>Item list</Text>
              <Text fontSize={"4xl"} mx={"4"} color={"brand.gray"}>
                50
              </Text>
            </Flex>
          </Flex>

          <Flex
            overflowX={"scroll"}
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
