import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { UserInputs } from "@/components/Inputs/AuthInput";
import { StackCardMini } from "@/components/card/StackCard";
import { useParams } from "next/navigation";
import UserInputText from "@/components/Inputs/UserInputText";
import { SelectIcon } from "@/components/Icons/Icons";

export function AddlinkModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  stack?: [];
}) {
  const { stackId } = useParams();
  function handleChange() {}
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", lg: "md" }}>
        <ModalOverlay />
        <ModalContent borderRadius={"none"}>
          <ModalHeader>Add Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {stackId === undefined && (
              <Flex flexDir={"column"}>
                <Text>select stack to add link</Text>
                <Flex
                  overflowX={"scroll"}
                  sx={{
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  <Flex
                    mx={"2"}
                    h={"fit-content"}
                    w={"50%"}
                    position={"relative"}
                  >
                    <SelectIcon />
                    <StackCardMini />
                  </Flex>
                  <Flex
                    mx={"2"}
                    h={"fit-content"}
                    w={"50%"}
                    position={"relative"}
                  >
                    <SelectIcon />
                    <StackCardMini />
                  </Flex>

                  <Flex
                    mx={"2"}
                    h={"fit-content"}
                    w={"50%"}
                    position={"relative"}
                  >
                    <SelectIcon />
                    <StackCardMini />
                  </Flex>
                  <Flex
                    mx={"2"}
                    h={"fit-content"}
                    w={"50%"}
                    position={"relative"}
                  >
                    <SelectIcon />
                    <StackCardMini />
                  </Flex>
                </Flex>
              </Flex>
            )}

            <UserInputs
              value=""
              name="test"
              type="details"
              placeHolder="Enter Link"
              onChange={handleChange}
            />
            <UserInputText />
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" size={"sm"}>
              Cancel
            </Button>
            <Button colorScheme="blue" ml={3} onClick={() => {}} size={"sm"}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
