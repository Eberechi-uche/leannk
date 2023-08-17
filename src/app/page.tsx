"use client";

import AuthHomePage from "@/components/Home/AuthHomePage";
import HomePage from "@/components/Home/HomePage";

import { auth } from "@/firebase/clientApp";
import { usePathname } from "next/navigation";
import { useIdToken } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading, error] = useIdToken(auth);
  const path = usePathname();

  return (
    <>
      {user && <AuthHomePage />}
      {!user && <HomePage />}
    </>
  );
}
