import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavDrawer } from "./Icons/Icons";
import { NavMenuAction } from "./Actions/MenuActions";

export default function Navbar() {
  const path = usePathname();
  const state = 0;

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
          {state !== 0 && (
            <Link href={"/UserAuth?auth=sign-in"}>
              <Button>Sign in</Button>
            </Link>
          )}
          {state == 0 && (
            <NavDrawer>
              <NavMenuAction />
            </NavDrawer>
          )}
        </Flex>
      </Flex>
    </>
  );
}
