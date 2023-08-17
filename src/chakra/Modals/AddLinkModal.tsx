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
import { StackItemCardPreview } from "@/components/card/StackItemCard";
import UserInputText from "@/components/Inputs/UserInputText";
import { Dispatch, SetStateAction, useState } from "react";
import { useCreateDoc } from "@/Hooks/useCreateDoc";
import { useParams } from "next/navigation";

export type LinkType = {
  desc: string;
  link: string;
  metaImageLink: string;
  metaLinkDesc: string;
  metaFavicon: string;
  metaTitle: string;
  metaDomain: string;
  linkId: string;
};
export function AddlinkModal({
  isOpen,
  onClose,
  updateLink,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  updateLink: Dispatch<SetStateAction<LinkType[]>>;
}) {
  const [newLinkDetails, setNewLinkDetails] = useState({
    desc: "",
    link: "",
    metaImageLink: "",
    metaLinkDesc: "",
    metaFavicon: "",
    metaTitle: "",
    metaDomain: "",
  });
  const [addLinkView, setAddLinkView] = useState(0);

  const { stackId } = useParams();
  console.log(stackId);
  const { createDoc, loading, error, doc } = useCreateDoc([
    "Stacks",
    stackId as string,
    "Links",
  ]);
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
  async function handleAddLink() {
    const newLink = await createDoc(newLinkDetails);
    if (!loading && newLink) {
      updateLink((prev) => [
        { ...newLinkDetails, linkId: newLink.id } as LinkType,
        ...prev,
      ]);
      onClose();
    }
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
                <StackItemCardPreview
                  url={newLinkDetails.link}
                  updateNewLink={setNewLinkDetails}
                  desc={newLinkDetails.desc}
                />
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
                  ml={3}
                  onClick={() => {
                    setAddLinkView(1);
                  }}
                  isDisabled={
                    newLinkDetails.link.length < 8 ||
                    newLinkDetails.desc.length < 8
                  }
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
                    setNewLinkDetails((prev) => ({
                      ...prev,
                      link: "",
                    }));
                  }}
                >
                  Back
                </Button>
                <Button
                  ml={3}
                  onClick={handleAddLink}
                  size={"sm"}
                  isDisabled={newLinkDetails.metaDomain === ""}
                  isLoading={loading}
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
