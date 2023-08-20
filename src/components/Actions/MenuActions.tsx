import {
  Divider,
  Icon,
  List,
  ListIcon,
  ListItem,
  MenuItem,
} from "@chakra-ui/react";

import { LuSettings2 } from "react-icons/lu";
import { HiOutlineShare } from "react-icons/hi";
import { IoMdRemoveCircle } from "react-icons/io";
import { PiCommandBold, PiGlobeBold, PiHouseBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

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

export function MakePublic() {
  return (
    <>
      <MenuItem
        bg={"inherit"}
        display={"flex"}
        alignItems={"center"}
        fontWeight={"inherit"}
      >
        <Icon as={PiCommandBold} mr={"4"} />
        Post on weaves
      </MenuItem>
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
        <ListItem display={"flex"} alignItems={"center"} pl={"4"}>
          <ListIcon as={PiCommandBold} />
          Your weaves
        </ListItem>

        <ListItem display={"flex"} alignItems={"center"} pl={"4"}>
          <ListIcon as={PiGlobeBold} />
          Community
        </ListItem>
      </List>
    </>
  );
}
