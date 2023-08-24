"use client";

import { useGetpost } from "@/Hooks/useGetPosts";
import Postcard, { PostType } from "@/components/card/PostCard";
import { firestore } from "@/firebase/clientApp";

import { collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function CommunityHome() {
  const { error, loading, getPosts, posts } = useGetpost();
  console.log(posts);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {posts && posts.map((post, index) => <Postcard {...post} key={index} />)}
    </>
  );
}
