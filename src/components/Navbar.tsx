import { Flex, Heading, Button, Text, Image } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Community, NavDrawer } from "./Icons/Icons";
import { NavMenuAction } from "./Actions/MenuActions";
import { auth } from "@/firebase/clientApp";
import { useIdToken } from "react-firebase-hooks/auth";
import extractUserId from "@/utility/extractUserId";
import { useEffect } from "react";

export default function Navbar() {
  const path = usePathname();

  return (
    <>
      <Flex
        width={"100%"}
        px={"4"}
        py={"4"}
        bg={"brand.yellow"}
        display={path === "/UserAuth" ? "none" : "flex"}
      >
        <Flex width={"100%"} align={"center"} justify={"space-between"}>
          <Link href={"/"}>
            <Heading fontWeight={"light"}>lynnk</Heading>
          </Link>

          <>
            <Link href={"/UserAuth?auth=sign-in"}>
              <Button>Sign in</Button>
            </Link>
          </>
        </Flex>
      </Flex>
    </>
  );
}

export function AuthNavbar() {
  const [user, loading, error] = useIdToken(auth);
  return (
    <>
      <Flex
        width={"100%"}
        px={"4"}
        py={"4"}
        borderBottom={"1.5px solid"}
        borderColor={"blackAlpha.200"}
        position={"sticky"}
        top={"0"}
        zIndex={"10"}
        bg={"#fff"}
      >
        <Flex width={"100%"} align={"center"} justify={"space-between"}>
          <NavDrawer>
            <NavMenuAction />
          </NavDrawer>
          {/* <Link href={"/community"}>
            <Community />
          </Link> */}

          <Image
            src={user?.photoURL!}
            alt={"profile picture"}
            boxSize={"25px"}
            borderRadius={"full"}
            fallbackSrc="images/thumbs.svg"
          />

          <></>
        </Flex>
      </Flex>
    </>
  );
}
