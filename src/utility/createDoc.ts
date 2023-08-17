import { collection, addDoc } from "firebase/firestore";
import { firestore, auth } from "@/firebase/clientApp";
import extractUserId from "./extractUserId";

export async function createDoc(data: {}, path?: string) {
  const profileId =
    auth.currentUser?.email && extractUserId(auth.currentUser?.email);
  let docRef;
  if (path) {
    docRef = await addDoc(
      collection(firestore, "profile", profileId!, path),
      data
    );
  } else {
    docRef = await addDoc(collection(firestore, "profile", profileId!), data);
  }

  return docRef;
}
