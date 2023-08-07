import { Input, SlideFade } from "@chakra-ui/react";

export default function AuthInput(props: {
  value: string;
  name: string;
  type: string;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <Input
        value={props.value}
        name={props.name}
        borderBottom={"2px"}
        onChange={(e) => {
          props.onChange(e);
        }}
        focusBorderColor="#fff"
        type={props.type}
        _focus={{
          borderBottom: "2px",
          borderColor: "brand.yellow",
        }}
        borderRadius={"none"}
        border={"0 0 0 0"}
        placeholder={props.placeHolder}
        my={"5"}
      />
    </>
  );
}
