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
          borderColor={"brand.dark"}
          outline={"1px"}
          borderRadius={"none"}
          focusBorderColor="brand.yellow"
          placeholder={props.placeHolder}
          my={"5"}
        ></Textarea>
      </Flex>
    </>
  );
}
