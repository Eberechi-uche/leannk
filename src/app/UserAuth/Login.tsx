import AuthInput from "@/components/Inputs/AuthInput";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Login(props: {
  handlePageChange: (e: number) => void;
}) {
  const [userDefails, setUserDetails] = useState({
    Email: "",
    Password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value, name },
    } = e;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <Flex h={"80vh"} p={"10"} flexDir={"column"} w={"100%"}>
      <Heading fontWeight={"400"} fontSize={"4xl"} mb={"5"}>
        lynnk
      </Heading>
      <Text fontWeight={"700"} fontSize={"4xl"}>
        Sign in
      </Text>
      <Flex w={"100%"} my={"2"}>
        <Text> New user ? </Text>
        <Text
          color={"brand.yellow"}
          mx={"2"}
          fontWeight={"600"}
          cursor={"pointer"}
          onClick={() => {
            props.handlePageChange(1);
          }}
        >
          Create an account
        </Text>
      </Flex>
      <form>
        <AuthInput
          value={userDefails.Email}
          name={"Email"}
          onChange={handleChange}
          type="email"
          placeHolder="Email"
        />
        <AuthInput
          value={userDefails.Password}
          name={"Password"}
          onChange={handleChange}
          type="password"
          placeHolder="Password"
        />
        <Flex mt={"3"} justifyContent={"flex-end"}>
          <Button size={"sm"}>Log in</Button>
        </Flex>
      </form>
    </Flex>
  );
}
