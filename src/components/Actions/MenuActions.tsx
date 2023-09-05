import {
  Divider,
  Icon,
  List,
  ListIcon,
  ListItem,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";

import { LuSettings2 } from "react-icons/lu";
import { HiOutlineShare } from "react-icons/hi";
import { IoMdRemoveCircle } from "react-icons/io";
import {
  PiCommandBold,
  PiGlobeBold,
  PiHouseBold,
  PiPencilSimpleLineBold,
} from "react-icons/pi";
import { useRouter } from "next/navigation";
import { StackType } from "@/chakra/Modals/CreateStackModal";
import PostStackModal from "@/chakra/Modals/PostStackModal";

export function Delete() {
  return (
    <>
      <MenuItem
        bg={"inherit"}
        display={"flex"}
        alignItems={"center"}
        fontWeight={"inherit"}
      >
        <Icon as={IoMdRemoveCircle} mr={"4"} />
        delete
      </MenuItem>
    </>
  );
}

export function MakePublic(props: StackType) {
  const route = useRouter();
  const { stackColor, stackId, stackName, note } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuItem
        bg={"inherit"}
        display={"flex"}
        alignItems={"center"}
        fontWeight={"inherit"}
        onClick={() => {
          onOpen();
          // route.push("/share/stack");
        }}
        closeOnSelect={false}
      >
        <Icon as={PiGlobeBold} mr={"4"} />
        Post on community
      </MenuItem>
      {isOpen && (
        <PostStackModal
          isOpen={isOpen}
          onClose={onClose}
          stackColor={stackColor}
          stackId={stackId}
          stackName={stackName}
          note={note}
          status={"private"}
        />
      )}
    </>
  );
}
export function ShareToWeave() {
  return (
    <>
      <MenuItem
        bg={"inherit"}
        display={"flex"}
        alignItems={"center"}
        fontWeight={"inherit"}
      >
        <Icon as={HiOutlineShare} mr={"4"} />
        Share
      </MenuItem>
    </>
  );
}
export function EditStack() {
  return (
    <>
      <MenuItem
        bg={"inherit"}
        display={"flex"}
        alignItems={"center"}
        fontWeight={"inherit"}
      >
        <Icon as={PiPencilSimpleLineBold} mr={"4"} />
        Edit Stack
      </MenuItem>
    </>
  );
}

export function GivePermisions() {
  return (
    <>
      <MenuItem bg={"inherit"}>set permision</MenuItem>
    </>
  );
}

export function NavMenuAction() {
  const route = useRouter();
  return (
    <>
      <List spacing={6} my={"4"} fontSize={"sm"}>
        <ListItem
          display={"flex"}
          alignItems={"center"}
          pl={"4"}
          onClick={() => {
            route.push("/");
          }}
        >
          <ListIcon as={PiHouseBold} />
          Home
        </ListItem>

        <ListItem display={"flex"} alignItems={"center"} pl={"4"}>
          <ListIcon as={LuSettings2} />
          Profile setting
        </ListItem>
        <Divider />
        {/* <ListItem display={"flex"} alignItems={"center"} pl={"4"}>
          <ListIcon as={PiCommandBold} />
          Your weaves
        </ListItem> */}

        {/* <ListItem display={"flex"} alignItems={"center"} pl={"4"}>
          <ListIcon as={PiGlobeBold} />
          Community
        </ListItem> */}
      </List>
    </>
  );
}
