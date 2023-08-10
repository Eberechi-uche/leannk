import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { UserInputs } from "@/components/Inputs/AuthInput";
import UserInputText from "@/components/Inputs/UserInputText";

export function CreateStackModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  stack?: [];
}) {
  function handleChange() {}
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", lg: "md" }}>
        <ModalOverlay />
        <ModalContent borderRadius={"none"}>
          <ModalHeader>Create stack</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserInputs
              value=""
              name="test"
              type="details"
              placeHolder="stack name"
              onChange={handleChange}
            />
            <UserInputText />
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
