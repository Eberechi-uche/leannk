import { Button, Flex, Icon } from "@chakra-ui/react";
import { TbPlaylistAdd } from "react-icons/tb";
import { RiChat1Line, RiShareForward2Line } from "react-icons/ri";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { IoMdRemoveCircleOutline } from "react-icons/io";

import { FaCircleCheck } from "react-icons/fa6";
import { Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { HiMenuAlt4, HiOutlineSave, HiPlus } from "react-icons/hi";
import { AddlinkModal } from "@/chakra/Modals/AddLinkModal";
import { useDisclosure } from "@chakra-ui/react";
import { CreateStackModal } from "@/chakra/Modals/CreateStackModal";
import { PiDotsSix, PiPlusLight } from "react-icons/pi";
import { ProfileCard } from "../card/ProfileCard";
export function ShareIcon() {
  return (
    <>
      <Flex flexDir={"column"} align={"center"}>
        <Flex
          border={"1.5px solid"}
          p={"1.5"}
          mx={"1"}
          borderRadius={"full"}
          px={"3"}
          cursor={"pointer"}
          borderColor={"brand.black"}
          color={"#fff"}
        >
          <Flex align={"center"} justify={"center"}>
            <Icon
              as={RiShareForward2Line}
              fontSize={"lg"}
              fontWeight={"bold"}
            />
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
        <Flex cursor={"pointer"} onClick={onOpen}>
          <Flex align={"center"} justify={"center"}>
            <Icon as={HiPlus} fontSize={"xl"} color={"blackAlpha.400"} />

            <Text fontWeight={"800"} fontSize={"sm"} mx={"2"}>
              New stack...
            </Text>
          </Flex>
        </Flex>

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
              <Icon as={PiDotsSix} fontSize={"2xl"} />
            </Flex>
          </MenuButton>
          <MenuList
            border={"0px solid"}
            borderColor={"blackAlpha.200"}
            fontWeight={"600"}
          >
            {children}
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
}
export function NavDrawer({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex cursor={"pointer"} p={"1.5"}>
        <Flex
          color={"blackAlpha.900"}
          align={"center"}
          justify={"center"}
          onClick={onOpen}
        >
          <Icon as={HiMenuAlt4} fontSize={"xl"} />
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size={{
            base: "xs",
            lg: "xs",
          }}
        >
          <DrawerOverlay />
          <DrawerContent fontSize={"lg"}>
            <DrawerCloseButton />
            <DrawerHeader my={"4"}></DrawerHeader>
            <ProfileCard />
            <DrawerBody>{children}</DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose} size={"sm"}>
                Sign out
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
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
          px={"3"}
          borderColor={"brand.black"}
          mx={"1"}
        >
          <Flex align={"center"} justify={"center"}>
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
          // _hover={{
          //   bg: "#F9F9F9",
          // }}
          cursor={"pointer"}
          p={"1.5"}
          mx={"1"}
          onClick={onOpen}
        >
          <Flex align={"center"} justify={"center"}>
            <Icon as={TbPlaylistAdd} fontSize={"lg"} />
            <Text fontWeight={"800"} mx={"2"}>
              Add link...
            </Text>
          </Flex>
        </Flex>
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
          // _hover={{
          //   bg: "#F9F9F9",
          // }}
          bg={"brand.black"}
          color={"#fff"}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"1.5"}
          borderRadius={"full"}
          px={"3"}
          borderColor={"brand.black"}
          mx={"1"}
        >
          <Flex align={"center"} justify={"center"}>
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
          px={"3"}
          borderColor={"brand.black"}
          mx={"1"}
          bg={"brand.black"}
          color={"#fff"}
        >
          <Flex align={"center"} justify={"center"}>
            <Icon as={AiOutlineHeart} fontSize={"lg"} fontWeight={"bold"} />
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
          // _hover={{
          //   bg: "#F9F9F9",
          // }}
          cursor={"pointer"}
          border={"1.5px solid"}
          p={"1.5"}
          borderRadius={"full"}
          px={"3"}
          borderColor={"brand.black"}
          mx={"1"}
          bg={"brand.black"}
          color={"#fff"}
        >
          <Flex align={"center"} justify={"center"}>
            <Icon as={HiOutlineSave} fontSize={"lg"} fontWeight={"bold"} />
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
          // _hover={{
          //   bg: "#F9F9F9",
          // }}
          cursor={"pointer"}
          px={"3"}
          mx={"1"}
        >
          <Flex align={"center"} justify={"center"}>
            <Icon
              as={IoMdRemoveCircleOutline}
              fontSize={"lg"}
              fontWeight={"bold"}
            />
          </Flex>
        </Flex>
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
              fontSize={"3xl"}
              fontWeight={"bold"}
              color={"green.600"}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
