import { Flex, Heading, Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
        borderBottom={"1px solid"}
      >
        <Flex width={"100%"} align={"center"} justify={"space-between"}>
          <Link href={"/"}>
            <Heading fontWeight={"light"}>lynnk</Heading>
          </Link>
          <Link href={"/UserAuth?auth=sign-in"}>
            <Button>Sign in</Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
