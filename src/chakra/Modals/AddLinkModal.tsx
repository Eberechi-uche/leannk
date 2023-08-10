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

export function AddlinkModal({
  stack,
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
                    border={"5px solid "}
                    h={"fit-content"}
                    w={"50%"}
                    borderColor={"brand.gray"}
                    borderRadius={"10px"}
                  >
                    <StackCardMini />
                  </Flex>
                  <Flex
                    mx={"2"}
                    border={"5px solid "}
                    h={"fit-content"}
                    w={"50%"}
                    borderColor={"brand.gray"}
                    borderRadius={"10px"}
                  >
                    <StackCardMini />
                  </Flex>
                </Flex>
              </Flex>
            )}

            <UserInputs
              value=""
              name="test"
              type="details"
              placeHolder="Enter description"
              onChange={handleChange}
            />
            <UserInputs
              value=""
              name="test"
              type="details"
              placeHolder="Enter Link"
              onChange={handleChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => {}} size={"sm"}>
              Add
            </Button>
            <Button variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
