import { PostType } from "@/components/card/PostCard";
import { firestore } from "@/firebase/clientApp";
import { push } from "firebase/database";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { useState } from "react";

export function useGetpost() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [error, setError] = useState("");

  async function getPosts() {
    const resolvedPost = [];
    try {
      const postRef = await getDocs(collection(firestore, "posts"));
      const profilePosts = postRef.docs.map((doc) => ({ ...doc.data() }));
      setPosts(profilePosts as PostType[]);
    } catch (error) {
      setError("unable to fetch post retry");
      setLoading(false);
    }
    setLoading(false);
  }

  return {
    error,
    posts,
    getPosts,
    loading,
  };
}
