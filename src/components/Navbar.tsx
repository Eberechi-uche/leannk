import { Flex, Heading, Button } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  const route = useRouter();
  return (
    <>
      <Flex
        width={"100%"}
        px={"2"}
        py={"4"}
        bg={"brand.yellow"}
        display={path === "/UserAuth" ? "none" : "flex"}
      >
        <Flex width={"100%"} align={"center"} justify={"space-between"}>
          <Heading fontWeight={"light"}>LEANNK</Heading>
          <Button
            onClick={() => {
              route.push("/UserAuth");
            }}
          >
            Get started
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
