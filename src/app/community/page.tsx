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
      <SingPageLayout>
        <SimpleGrid w={{ lg: "50%" }} gap={"2"}>
          {posts.map((post) => (
            <Postcard {...post} key={post.postId} />
          ))}
        </SimpleGrid>

        {loading && <LoadscreenCommunity />}
      </SingPageLayout>
    </>
  );
}
