import { auth, firestore } from "@/firebase/clientApp";
import extractUserId from "@/utility/extractUserId";
import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
} from "firebase/firestore";
import { useState } from "react";

export function useCreateDoc(path?: string[]) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [doc, setDoc] = useState<DocumentData>({});
  const profileId =
    auth.currentUser?.email && extractUserId(auth.currentUser?.email);

  async function createDoc(data: {}) {
    try {
      setLoading(true);
      if (path) {
        const docRef = await addDoc(
          collection(firestore, "profile", profileId!, ...path),
          data
        );
        setDoc(doc);
        setLoading(false);
        return docRef;
      } else {
        const docRef = await addDoc(
          collection(firestore, "profile", profileId!),
          data
        );

        setDoc(docRef);
        return docRef;
      }
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      console.log(error);
      setLoading(false);
    }
  }

  return { doc, error, loading, createDoc };
}
