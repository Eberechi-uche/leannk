import {
  Modal,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { StackType } from "./CreateStackModal";
import UserInputText from "@/components/Inputs/UserInputText";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UserInputs } from "@/components/Inputs/AuthInput";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useCreateDoc } from "@/Hooks/useCreateDoc";
import { Timestamp, collection, doc, writeBatch } from "firebase/firestore";
import { auth, firestore } from "@/firebase/clientApp";
import extractUserId from "@/utility/extractUserId";
import { PostType } from "@/components/card/PostCard";
import StackId from "@/app/stack/[stackId]/page";

type PostStack = {
  isOpen: boolean;
  onClose: () => void;
};

type NewPost<StackType> = {
  postDes: string;
  tags: string[];
};
function PostStackModal(props: StackType & PostStack) {
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hashTags, setHashTags] = useState<string[]>([""]);
  const [flow, setFlow] = useState(0);

  async function handleNewPostCreation() {
    setLoading(true);
    const profileId = extractUserId(auth.currentUser?.email!);
    const batch = writeBatch(firestore);
    const stackItemsRef = collection(
      firestore,
      "profile",
      profileId,
      "Stacks",
      props.stackId,
      "Links"
    ).path;
    const newPostData: PostType = {
      stackColor: props.stackColor,
      stackId: props.stackId,
      stackName: props.stackName,
      profileDN: auth.currentUser?.displayName!,
      profileId: profileId,
      profileImageUrl: auth.currentUser?.photoURL!,
      postDesc: newPost,
      note: props.note,
      stackItemRef: stackItemsRef,
      tag: hashTags,
      timeStamp: Timestamp.fromDate(new Date()),
      status: "shared",
    };
    const sharedStacksRef = doc(
      collection(firestore, "profile", profileId, "posts", props.stackId)
    );

    try {
      batch.set(sharedStacksRef, newPostData);
      batch.set(doc(firestore, "posts", sharedStacksRef.id), newPostData);

      await batch.commit();
      props.onClose();
    } catch (error) {
      setError("Error while posting");
    }

    setLoading(false);
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalContent
          borderRadius={"none"}
          boxShadow={"none"}
          // bg={"#000"}
          // color={"#fff"}
        >
          <ModalHeader fontSize={"sm"}>
            <Flex width={"100%"} align={"center"}>
              <Icon as={HiOutlineGlobeAlt} mr={"4"} />
              <Text>Share to Community</Text>
            </Flex>
          </ModalHeader>

          <ModalBody>
            {error && (
              <Text color={"red.700"} fontSize={"xs"} fontWeight={"900"}>
                {error}
              </Text>
            )}
            <Flex
              minH={"100px"}
              bg={props.stackColor}
              borderRadius={"3px"}
              px={"7"}
              py={"3"}
            >
              <Flex
                flexDir={"column"}
                fontSize={"xs"}
                fontWeight={"900"}
                color={"blackAlpha.600"}
              >
                <Text fontSize={"xl"}> {props.stackName}</Text>
                <Text> {props.note}</Text>
              </Flex>
            </Flex>
            {flow === 0 && (
              <UserInputText
                value={newPost}
                name="post"
                placeHolder="Enter Post details"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setNewPost(e.target.value);
                }}
              />
            )}
            {flow === 1 && <PostTag setHashTags={setHashTags} />}
          </ModalBody>

          <ModalFooter>
            {flow === 0 && (
              <>
                <Button
                  variant={"whiteOutline"}
                  mr={3}
                  onClick={props.onClose}
                  size={"sm"}
                >
                  Close
                </Button>
                <Button
                  variant="white"
                  size={"sm"}
                  onClick={() => {
                    setFlow(1);
                  }}
                  isDisabled={newPost.length === 0}
                >
                  next
                </Button>
              </>
            )}
            {flow === 1 && (
              <>
                <Button
                  variant={"whiteOutline"}
                  mr={3}
                  onClick={() => {
                    setFlow(0);
                  }}
                  size={"sm"}
                >
                  back
                </Button>
                <Button
                  variant="white"
                  size={"sm"}
                  onClick={handleNewPostCreation}
                  isLoading={loading}
                >
                  post
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function PostTag({
  setHashTags,
}: {
  setHashTags: Dispatch<SetStateAction<string[]>>;
}) {
  const [tags, setTags] = useState("");

  function HandleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTags(e.target.value);
  }

  useEffect(() => {
    let tagArray = tags.split(" ").map((string) => {
      return `#${string}`;
    });
    setHashTags(tagArray);
  }, [tags]);
  return (
    <Flex w={"100%"} flexDir={"column"} mt={"7"}>
      <Flex
        w={"100%"}
        justifySelf={"center"}
        flexWrap={"wrap"}
        border={"1px solid"}
        px={"4"}
        py={"4"}
        borderRadius={"3px"}
        borderColor={"whiteAlpha.400"}
        flexDir={"column"}
      >
        <Text fontSize={"sm"} fontWeight={"900"} color={"whiteAlpha.600"}>
          Tags
        </Text>
        <Text fontWeight={"900"} fontSize={"sm"} textAlign={"center"}>
          {"#" + tags.replaceAll(" ", "  #")}
        </Text>
      </Flex>

      <Flex>
        <UserInputs
          value={tags}
          type="text"
          name="post"
          placeHolder="Enter search tags"
          onChange={HandleTextChange}
        />
      </Flex>
    </Flex>
  );
}

export default PostStackModal;
