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
import { useState } from "react";

export function CreateStackModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  stack?: [];
}) {
  const [newStack, setNewStackDetails] = useState({
    stackName: "",
    note: "",
    color: "",
  });
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const {
      target: { value, name },
    } = e;

    setNewStackDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", lg: "md" }}>
        <ModalOverlay />
        <ModalContent borderRadius={"none"}>
          <ModalHeader>Create stack</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserInputs
              value={newStack.stackName}
              name="stackName"
              type="Text"
              placeHolder="stack name"
              onChange={handleChange}
            />
            <UserInputText
              name="note"
              value={newStack.note}
              placeHolder="short note"
              onChange={handleChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={() => {}} size={"sm"}>
              Add
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                onClose();
              }}
              size={"sm"}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
