import { PostType } from "@/components/card/PostCard";
import { firestore } from "@/firebase/clientApp";

import { collection, getDoc, getDocs } from "firebase/firestore";

export default async function getCollection() {
  let postStack: PostType[] = [];
  let postdata = await getDocs(collection(firestore, "posts"));
  postdata.docs.forEach(async (doc) => {
    let stackref = doc.data();
    let stack = await getDoc(stackref.stackRef);

    postStack.push(stack.data() as PostType);
  });
  return postStack;
}
