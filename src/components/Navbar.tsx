import { Flex, Heading, Button } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Flex width={"100%"} px={"2"} py={"4"} bg={"brand.yellow"}>
        <Flex width={"100%"} align={"center"} justify={"space-between"}>
          <Heading fontWeight={"light"}>LEANNK</Heading>
          <Button>Get started</Button>
        </Flex>
      </Flex>
    </>
  );
}
