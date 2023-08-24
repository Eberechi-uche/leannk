"use client";

import { useGetpost } from "@/Hooks/useGetPosts";
import { LoadscreenCommunity } from "@/components/Animations/Loadscreen";
import Postcard from "@/components/card/PostCard";

import { useEffect, useState } from "react";

export default function CommunityHome() {
  const { error, loading, getPosts, posts } = useGetpost();
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {posts.map((post) => (
        <Postcard {...post} key={post.postId} />
      ))}
      {loading && <LoadscreenCommunity />}
    </>
  );
}
