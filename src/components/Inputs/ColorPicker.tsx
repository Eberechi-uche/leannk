import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
const colors = [
  "#47A9DA",
  "#3cdd78",
  "#B7C2DA",
  "#D6BCFA",
  "#FAF089",
  "#FBD38D",
  "#9AE6B4",
  "#ECC94B",
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
    }>
  >;
}) {
  return (
    <>
      <Flex w={"100%"} flexDir={"column"} py={"4"}>
        <Text> Pick stack color - default is white</Text>
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
