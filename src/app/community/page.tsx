"use client";

import { useGetpost } from "@/Hooks/useGetPosts";
import SingPageLayout from "@/Layouts/SinglePageLayout";
import { LoadscreenCommunity } from "@/components/Animations/Loadscreen";
import Postcard from "@/components/card/PostCard";
import { SimpleGrid } from "@chakra-ui/react";

import { useEffect } from "react";

export default function CommunityHome() {
  const { error, loading, getPosts, posts } = useGetpost();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {loading && <LoadscreenCommunity />}
      <SingPageLayout>
        <SimpleGrid gap={"2"} p={"4"} columns={[1, 2, 3]}>
          {posts.map((post) => (
            <Postcard {...post} key={post.postId} />
          ))}
        </SimpleGrid>
      </SingPageLayout>
    </>
  );
}
