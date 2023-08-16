import {
  Badge,
  Divider,
  Icon,
  List,
  ListIcon,
  ListItem,
  MenuItem,
} from "@chakra-ui/react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineShare } from "react-icons/hi";
import { IoIosSettings, IoMdRemoveCircle } from "react-icons/io";
import { PiCommandBold, PiGlobeBold } from "react-icons/pi";

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
        <Badge mx={"2"} colorScheme="orange" fontWeight={"900"}>
          coming soon
        </Badge>
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
  return (
    <>
      <List spacing={6} my={"4"} fontSize={"sm"}>
        <ListItem display={"flex"} alignItems={"center"} px={"4"}>
          <ListIcon as={GoHomeFill} />
          Home
        </ListItem>
        <ListItem display={"flex"} alignItems={"center"} px={"4"}>
          <ListIcon as={IoIosSettings} />
          Profile setting
        </ListItem>
        <Divider />
        <ListItem display={"flex"} alignItems={"center"} px={"4"}>
          <ListIcon as={PiCommandBold} />
          Your weaves
          <Badge mx={"2"} colorScheme="orange" fontWeight={"900"} px={"4"}>
            coming soon
          </Badge>
        </ListItem>

        <ListItem display={"flex"} alignItems={"center"} px={"4"}>
          <ListIcon as={PiGlobeBold} />
          community
          <Badge mx={"2"} colorScheme="orange" fontWeight={"900"}>
            coming soon
          </Badge>
        </ListItem>
      </List>
    </>
  );
}
