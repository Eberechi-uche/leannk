import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  ModalOverlay,
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
  status: "private" | "shared";
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
    status: "private",
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
      setStacK((prev) => [
        { ...newStack, stackId: Doc.id, status: "private" } as StackType,
        ...prev,
      ]);
      setNewStackDetails({
        note: "",
        stackColor: "#F6F5F4",
        stackName: "",
        status: "private",
      });
      onClose();
    }
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", lg: "lg" }}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={"20px"}
          boxShadow={"none"}
          bg={"#fff"}
          color={"brand.black"}
        >
          <ModalHeader>Create stack</ModalHeader>

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
              onClick={() => {
                onClose();
              }}
              size={"sm"}
              variant={"outline"}
            >
              Cancel
            </Button>
            <Button
              ml={3}
              onClick={handleCreateNewStack}
              size={"sm"}
              isDisabled={newStack.stackName.length < 4}
              isLoading={loading}
              variant={"solid"}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
