"use client";

import { useGetpost } from "@/Hooks/useGetPosts";
import { LoadscreenCommunity } from "@/components/Animations/Loadscreen";
import Postcard from "@/components/card/PostCard";

import { useEffect, useState } from "react";

export default function CommunityHome() {
  const { error, loading, getPosts, posts } = useGetpost();
  console.log(posts);
  useEffect(() => {
    getPosts();
    console.log("i ran");
  }, []);
  return (
    <>
      {posts.map((post, index) => (
        <Postcard {...post} />
      ))}
      {loading && <LoadscreenCommunity />}
    </>
  );
}
