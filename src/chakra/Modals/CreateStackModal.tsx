import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { UserInputs } from "@/components/Inputs/AuthInput";
import UserInputText from "@/components/Inputs/UserInputText";
import { Dispatch, SetStateAction, useState } from "react";
import { useCreateDoc } from "@/Hooks/useCreateDoc";
import ColorPicker from "@/components/Inputs/ColorPicker";

export type StackType = {
  stackId: string;
  stackName: string;
  note: string;
  stackColor: string;
};

export function CreateStackModal({
  isOpen,
  onClose,
  setStacK,
  stack,
}: {
  isOpen: boolean;
  onClose: () => void;
  stack: StackType[];
  setStacK: Dispatch<SetStateAction<StackType[]>>;
}) {
  const [newStack, setNewStackDetails] = useState({
    stackName: "",
    note: "",
    stackColor: "#F6F5F4",
  });
  const { createDoc, error, loading, doc } = useCreateDoc(["Stacks"]);

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
  async function handleCreateNewStack() {
    const Doc = await createDoc(newStack);
    if (error) return;
    if (!loading && Doc) {
      setStacK((prev) => [{ stackId: Doc.id, ...newStack }, ...prev]);
      setNewStackDetails({
        note: "",
        stackColor: "#fff",
        stackName: "",
      });
      onClose();
    }
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", lg: "md" }}
        motionPreset="slideInBottom"
      >
        {/* <ModalOverlay /> */}
        <ModalContent
          borderRadius={"none"}
          boxShadow={"none"}
          bg={"black"}
          color={"#fff"}
        >
          <ModalHeader>Create stack</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ColorPicker
              value={newStack.stackColor}
              setValue={setNewStackDetails}
            />
            {error && (
              <>
                <Text color={"red.800"} fontSize={"xs"} fontWeight={"900"}>
                  {error}
                </Text>
              </>
            )}
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
              onClick={handleCreateNewStack}
              size={"sm"}
              isDisabled={newStack.stackName.length < 4}
              isLoading={loading}
              variant={"white"}
            >
              Add
            </Button>
            <Button
              variant="whiteOutline"
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
