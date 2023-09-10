import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
const colors = [
  "#C53030",
  "#2F855A",
  "#2b6cb0",
  "#0987A0",
  "#805AD5",
  "#B83280",
  "#4267B2",
  "#179848",
  "#718096",
];
export default function ColorPicker({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<
    SetStateAction<{
      stackName: string;
      note: string;
      stackColor: string;
      status: string;
    }>
  >;
}) {
  return (
    <>
      <Flex w={"100%"} flexDir={"column"} py={"4"}>
        <Text> Pick stack color</Text>
        <Flex
          w={"100%"}
          overflowX={"scroll"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          my={"4"}
        >
          <Flex>
            {colors.map((color, index) => (
              <Box
                key={index}
                bg={color}
                w={"20px"}
                h={"20px"}
                borderRadius={"full"}
                border={value === color ? "2.5px solid" : "none"}
                onClick={() => {
                  setValue((prev) => ({
                    ...prev,
                    stackColor: color,
                  }));
                }}
                mr={"10"}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
