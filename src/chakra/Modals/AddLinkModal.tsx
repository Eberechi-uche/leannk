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
import { useState } from "react";

export function AddlinkModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  stack?: [];
}) {
  const [newLinkDetails, setNewLinkDetails] = useState({
    desc: "",
    link: "",
  });
  const { stackId } = useParams();
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const {
      target: { value, name },
    } = e;

    setNewLinkDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", lg: "md" }}>
        <ModalOverlay />
        <ModalContent borderRadius={"none"}>
          <ModalHeader>Add Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserInputs
              value={newLinkDetails.link}
              name="link"
              type="text"
              placeHolder="Enter or paste link"
              onChange={handleChange}
            />
            <UserInputText
              value={newLinkDetails.desc}
              name="desc"
              placeHolder="enter short description"
              onChange={handleChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              variant="outline"
              size={"sm"}
              onClick={() => {
                onClose();
              }}
            >
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
