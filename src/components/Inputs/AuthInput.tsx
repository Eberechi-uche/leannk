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
        onChange={(e) => {
          props.onChange(e);
        }}
        borderColor={"brand.dark"}
        focusBorderColor="brand.yellow"
        type={props.type}
        borderRadius={"none"}
        placeholder={props.placeHolder}
        my={"5"}
      />
    </>
  );
}

export function UserInputs(props: {
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
        onChange={(e) => {
          props.onChange(e);
        }}
        borderColor={"brand.dark"}
        type={props.type}
        borderRadius={"none"}
        focusBorderColor="brand.yellow"
        placeholder={props.placeHolder}
        my={"5"}
      />
    </>
  );
}
