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
    const resolvedPosts: PostType[] = [];
    try {
      const postRef = await getDocs(collection(firestore, "posts"));
      const postsData = postRef.docs.forEach(async (post) => {
        let resolvedPost = await getDoc(post.data().stackRef);
        resolvedPosts.push(resolvedPost.data() as PostType);
      });
      setPosts(resolvedPosts as PostType[]);
      setLoading(false);
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
