import AuthInput from "@/components/Inputs/AuthInput";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
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
    console.log(name);
  }
  return (
    <Flex h={"80vh"} p={"10"} flexDir={"column"} w={"100%"}>
      <Heading fontWeight={"400"} fontSize={"sm"} mb={"5"}>
        LEANNK
      </Heading>
      <Text fontWeight={"700"} fontSize={"4xl"}>
        Sign in
      </Text>
      <Flex w={"100%"} my={"2"}>
        <Text> New user ? </Text>
        <Text color={"brand.yellow"} mx={"2"} fontWeight={"600"}>
          Create an account
        </Text>
      </Flex>
      <form>
        <AuthInput
          value={userDefails.Email}
          name={"Email"}
          onChange={handleChange}
        />
        <AuthInput
          value={userDefails.Password}
          name={"Password"}
          onChange={handleChange}
        />
        <Flex mt={"3"} justifyContent={"flex-end"}>
          <Button size={"sm"}>continue</Button>
        </Flex>
      </form>
    </Flex>
  );
}
