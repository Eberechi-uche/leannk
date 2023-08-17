import {
  Modal,
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
import { createDoc } from "@/utility/createDoc";
import ColorPicker from "@/components/Inputs/ColorPicker";

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
    stackColor: "#0000",
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
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", lg: "md" }}>
        {/* <ModalOverlay /> */}
        <ModalContent
          borderRadius={"none"}
          boxShadow={"none"}
          border={"1px solid"}
          borderColor={"brand.gray"}
        >
          <ModalHeader>Create stack</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ColorPicker
              value={newStack.stackColor}
              setValue={setNewStackDetails}
            />
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
              placeHolder="short note (optional)"
              onChange={handleChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              onClick={() => {
                createDoc(newStack, "Stacks");
              }}
              size={"sm"}
              isDisabled={newStack.stackName.length < 4}
            >
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
