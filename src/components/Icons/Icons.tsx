import { Flex, Icon } from "@chakra-ui/react";
import { MdDelete, MdOutlineAddCircle } from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";
import { GrCommand } from "react-icons/gr";
import { BiAddToQueue } from "react-icons/bi";
import { FaCircleCheck, FaShare } from "react-icons/fa6";
import { Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { BsGlobeAsiaAustralia, BsShareFill } from "react-icons/bs";
import { TbThumbUpFilled } from "react-icons/tb";
import { HiOutlineSaveAs } from "react-icons/hi";
import { AddlinkModal } from "@/chakra/Modals/AddLinkModal";
import { useDisclosure } from "@chakra-ui/react";
import { CreateStackModal } from "@/chakra/Modals/CreateStackModal";
import { PiDotsSix } from "react-icons/pi";
export function ShareIcon() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          border={"1.5px solid"}
          p={"1.5"}
          mx={"1"}
          borderRadius={"full"}
          cursor={"pointer"}
          borderColor={"brand.gray"}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon as={FaShare} fontSize={"lg"} fontWeight={"bold"} />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          share
        </Text>
      </Flex>
    </>
  );
}
export function CreateStackIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"1.5"}
          borderRadius={"full"}
          borderColor={"brand.gray"}
          mx={"1"}
          onClick={onOpen}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon as={BiAddToQueue} fontSize={"lg"} fontWeight={"bold"} />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          Create
        </Text>
        {isOpen && <CreateStackModal isOpen={isOpen} onClose={onClose} />}
      </Flex>
    </>
  );
}
export function MoreIcon({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex cursor={"pointer"} p={"1.5"}>
        <Menu isLazy id={"sbs89"}>
          <MenuButton>
            <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
              <Icon as={PiDotsSix} />
            </Flex>
          </MenuButton>
          <MenuList>{children}</MenuList>
        </Menu>
      </Flex>
    </>
  );
}

export function PublishIcon() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"1.5"}
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

export function AddLinkIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"1.5"}
          borderRadius={"full"}
          borderColor={"brand.gray"}
          mx={"1"}
          onClick={onOpen}
        >
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon as={MdOutlineAddCircle} fontSize={"lg"} fontWeight={"bold"} />
          </Flex>
        </Flex>
        <Text fontWeight={"800"} fontSize={"xs"} color={"brand.darkgray"}>
          Add
        </Text>
      </Flex>
      {isOpen && (
        <AddlinkModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      )}
    </>
  );
}

export function CommentsIcon() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"1.5"}
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

export function LikeIcon() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"1.5"}
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
export function SaveIcon() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"1.5"}
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
export function DeleteIcon() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          _hover={{
            bg: "#F9F9F9",
          }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"1.5"}
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

export function SelectIcon() {
  return (
    <>
      <Flex
        flexDir={"column"}
        align={"center"}
        pos={"absolute"}
        top={"20%"}
        right={"30%"}
      >
        <Flex cursor={"pointer"} p={"1.5"} mx={"1"}>
          <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
            <Icon
              as={FaCircleCheck}
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"green.600"}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
