import AuthInput from "@/components/Inputs/AuthInput";
import AuthCard from "@/components/card/AuthCard";
import extractUserId from "@/utility/extractUserId";
import { Flex, Heading, Button, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import { GoDot, GoDotFill } from "react-icons/go";

export default function SignUp() {
  const [userDetails, setUserDetails] = useState({
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
      <Flex p={"10"} flexDir={"column"} w={"100%"} minH={"max-content"}>
        <Heading fontWeight={"400"} fontSize={"4xl"} mb={"5"}>
          lynnk
        </Heading>
        <Flex
          w={"20%"}
          border={"1px solid"}
          borderRadius={"full"}
          justifyContent={"space-between"}
          borderColor={"gray.800"}
          color={"brand.yellow"}
        >
          <Icon as={userFlow !== 0 ? GoDot : GoDotFill} />
          <Icon
            as={userFlow !== 1 ? GoDot : GoDotFill}
            color={"brand.yellow"}
            transform={{
              color: "",
            }}
          />
        </Flex>

        <Text fontWeight={"700"} fontSize={"4xl"}>
          Create an account
        </Text>
        {userFlow === 0 && (
          <>
            <Flex w={"100%"} my={"2"}>
              <Text> Already have an account ?</Text>
              <Link href={"/UserAuth?auth=sign-in"}>
                <Text
                  color={"brand.yellow"}
                  mx={"2"}
                  fontWeight={"600"}
                  cursor={"pointer"}
                >
                  Sign in
                </Text>
              </Link>
            </Flex>

            <Flex w={"100%"}>
              <form>
                <AuthInput
                  value={userDetails.Email}
                  name={"Email"}
                  type="email"
                  placeHolder="Email"
                  onChange={handleChange}
                />
                <AuthInput
                  value={userDetails.Password}
                  name={"Password"}
                  type="password"
                  placeHolder="Password"
                  onChange={handleChange}
                />
                <AuthInput
                  value={userDetails.ConfirmPassword}
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
          <Flex w={"100%"} align={"center"} flexDir={"column"}>
            <AuthCard
              name={extractUserId(userDetails.Email)}
              image={`https://api.dicebear.com/6.x/thumbs/svg?seed=${userDetails.Email}`}
            />
            <Text my={"4"}>Almost done.</Text>
            <AuthInput
              value={userDetails.displayName}
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
