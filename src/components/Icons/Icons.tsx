import { Flex, Icon } from "@chakra-ui/react";
import { MdAddLink, MdDelete } from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";
import { GrChapterAdd, GrCommand } from "react-icons/gr";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { TbThumbUpFilled } from "react-icons/tb";
import { HiOutlineSaveAs } from "react-icons/hi";

export function Share() {
  return (
    <>
      <Flex
        _hover={{
          bg: "#F9F9F9",
        }}
        border={"1.5px solid"}
        p={"2.5"}
        mx={"1"}
        borderRadius={"full"}
        cursor={"pointer"}
        borderColor={"brand.gray"}
      >
        <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
          <Icon as={GrCommand} fontSize={"lg"} fontWeight={"bold"} />
        </Flex>
      </Flex>
    </>
  );
}
export function CreateStack() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"2.5"}
          borderRadius={"full"}
          borderColor={"brand.gray"}
          mx={"1"}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon as={GrChapterAdd} fontSize={"lg"} fontWeight={"bold"} />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          Create
        </Text>
      </Flex>
    </>
  );
}
export function More({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex
        _hover={{
          bg: "#F9F9F9",
        }}
        cursor={"pointer"}
        border={"1.5px solid"}
        p={"2.5"}
        borderRadius={"full"}
        borderColor={"brand.gray"}
        mx={"1"}
      >
        <Menu isLazy>
          {({ isOpen }) => (
            <>
              <MenuButton>
                <Flex
                  color={"blackAlpha.900"}
                  align={"center"}
                  justify={"center"}
                >
                  <Icon
                    as={isOpen ? FaAngleUp : FaAngleDown}
                    fontSize={"lg"}
                    fontWeight={"bold"}
                  />
                </Flex>
              </MenuButton>
              <MenuList>{children}</MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </>
  );
}

export function Publish() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"2.5"}
          borderRadius={"full"}
          borderColor={"brand.gray"}
          mx={"1"}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon
              as={BsGlobeAsiaAustralia}
              fontSize={"lg"}
              fontWeight={"bold"}
            />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          Publish
        </Text>
      </Flex>
    </>
  );
}

export function AddLink() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"2.5"}
          borderRadius={"full"}
          borderColor={"brand.gray"}
          mx={"1"}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon as={MdAddLink} fontSize={"lg"} fontWeight={"bold"} />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          Add Link
        </Text>
      </Flex>
    </>
  );
}

export function Comments() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"2.5"}
          borderRadius={"full"}
          borderColor={"brand.gray"}
          mx={"1"}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon as={RiChat1Line} fontSize={"lg"} fontWeight={"bold"} />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          comment
        </Text>
      </Flex>
    </>
  );
}

export function Like() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"2.5"}
          borderRadius={"full"}
          borderColor={"brand.gray"}
          mx={"1"}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon as={TbThumbUpFilled} fontSize={"lg"} fontWeight={"bold"} />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          Like
        </Text>
      </Flex>
    </>
  );
}
export function Save() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"2.5"}
          borderRadius={"full"}
          borderColor={"brand.gray"}
          mx={"1"}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon as={HiOutlineSaveAs} fontSize={"lg"} fontWeight={"bold"} />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          save
        </Text>
      </Flex>
    </>
  );
}
export function Delete() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"2.5"}
          borderRadius={"full"}
          borderColor={"brand.gray"}
          mx={"1"}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon as={MdDelete} fontSize={"lg"} fontWeight={"bold"} />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          Delete
        </Text>
      </Flex>
    </>
  );
}
