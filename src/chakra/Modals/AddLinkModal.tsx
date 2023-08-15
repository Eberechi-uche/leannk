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
import { StackItemCardPreview } from "@/components/card/StackItemCard";
import UserInputText from "@/components/Inputs/UserInputText";
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
    metaImageLink: "",
  });
  const [addLinkView, setAddLinkView] = useState(0);
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
            {addLinkView === 0 ? (
              <>
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
              </>
            ) : (
              <>
                <StackItemCardPreview />
              </>
            )}
          </ModalBody>

          <ModalFooter>
            {addLinkView === 0 ? (
              <>
                <Button
                  variant="outline"
                  size={"sm"}
                  onClick={() => {
                    onClose();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="blue"
                  ml={3}
                  onClick={() => {
                    setAddLinkView(1);
                  }}
                  isDisabled={newLinkDetails.link.length < 8}
                  size={"sm"}
                >
                  Next
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size={"sm"}
                  onClick={() => {
                    setAddLinkView(0);
                  }}
                >
                  Back
                </Button>
                <Button
                  colorScheme="blue"
                  ml={3}
                  onClick={() => {}}
                  size={"sm"}
                >
                  Add
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
