import { Textarea, Flex } from "@chakra-ui/react";
export default function UserInputText(props: {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

  placeHolder: string;
}) {
  return (
    <>
      <Flex w={"100%"} h={"100%"}>
        <Textarea
          value={props.value}
          name={props.name}
          onChange={(e) => {
            props.onChange(e);
          }}
          border={"2px solid"}
          borderRadius={"3px"}
          focusBorderColor="brand.yellow"
          placeholder={props.placeHolder}
          borderColor={"brand.gray"}
          my={"5"}
          bgColor={"none"}
        />
      </Flex>
    </>
  );
}
