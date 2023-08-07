import { Flex, Icon } from "@chakra-ui/react";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { CgPlayListAdd } from "react-icons/cg";
import { PiListPlusFill } from "react-icons/pi";
import { FiShare } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { GrCommand } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa";

export function Share() {
  return (
    <>
      <Flex
        border={"2px solid"}
        p={"2.5"}
        mx={"1"}
        borderRadius={"8px"}
        borderColor={"#DBDBDE"}
      >
        <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
          <Icon as={GrCommand} fontSize={"sm"} fontWeight={"bold"} />
        </Flex>
      </Flex>
    </>
  );
}
export function Delete() {
  return (
    <>
      <Flex
        border={"2px solid"}
        p={"2.5"}
        borderRadius={"8px"}
        borderColor={"#DBDBDE"}
        mx={"1"}
      >
        <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
          <Icon as={MdDelete} fontSize={"sm"} fontWeight={"bold"} />
        </Flex>
      </Flex>
    </>
  );
}
export function More() {
  return (
    <>
      <Flex
        border={"2px solid"}
        p={"2.5"}
        borderRadius={"8px"}
        borderColor={"#DBDBDE"}
        mx={"1"}
      >
        <Flex color={"blackAlpha.900"} align={"center"} justify={"center"}>
          <Icon as={FaAngleDown} fontSize={"sm"} fontWeight={"bold"} />
        </Flex>
      </Flex>
    </>
  );
}
