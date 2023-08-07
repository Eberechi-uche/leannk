import AuthInput from "@/components/Inputs/AuthInput";
import { Flex, Heading, Button, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { GoDot, GoDotFill } from "react-icons/go";

export default function SignUp(props: {
  handleAuthPageChange: (e: number) => void;
}) {
  const [userDefails, setUserDetails] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
    displayName: "",
  });
  const [userFlow, setUserFlow] = useState(0);

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
    <>
      <Flex h={"80vh"} p={"10"} flexDir={"column"} w={"100%"}>
        <Heading fontWeight={"400"} fontSize={"sm"} mb={"5"}>
          LEANNK
        </Heading>
        <Flex
          w={"20%"}
          border={"2px solid"}
          borderRadius={"full"}
          justifyContent={"space-between"}
          borderColor={"gray.200"}
        >
          <Icon as={userFlow !== 0 ? GoDot : GoDotFill} />
          <Icon as={userFlow !== 1 ? GoDot : GoDotFill} />
        </Flex>

        <Text fontWeight={"700"} fontSize={"4xl"}>
          Create an account
        </Text>
        {userFlow === 0 && (
          <>
            <Flex w={"100%"} my={"2"}>
              <Text> Already have an account ?</Text>
              <Text
                color={"brand.yellow"}
                mx={"2"}
                fontWeight={"600"}
                cursor={"pointer"}
                onClick={() => {
                  props.handleAuthPageChange(0);
                }}
              >
                Sign in
              </Text>
            </Flex>
            <Flex w={"100%"}>
              <form>
                <AuthInput
                  value={userDefails.Email}
                  name={"Email"}
                  type="email"
                  placeHolder="Email"
                  onChange={handleChange}
                />
                <AuthInput
                  value={userDefails.Password}
                  name={"Password"}
                  type="password"
                  placeHolder="Password"
                  onChange={handleChange}
                />
                <AuthInput
                  value={userDefails.ConfirmPassword}
                  name={"ConfirmPassword"}
                  type="password"
                  placeHolder="confirm Password"
                  onChange={handleChange}
                />
                <Flex mt={"3"} justifyContent={"flex-end"}>
                  <Button
                    size={"sm"}
                    onClick={() => {
                      setUserFlow(1);
                    }}
                  >
                    continue
                  </Button>
                </Flex>
              </form>
            </Flex>
          </>
        )}
        {userFlow === 1 && (
          <Flex w={"100%"} mt={"20%"} align={"center"} flexDir={"column"}>
            <Text my={"4"}> Hello there! lets know you better</Text>
            <AuthInput
              value={userDefails.displayName}
              name={"displayName"}
              type="text"
              placeHolder="Display Name"
              onChange={handleChange}
            />
            <Button w={"50%"}> Done</Button>
          </Flex>
        )}
      </Flex>
    </>
  );
}
