"use client";

import Loadscreen from "@/components/Animations/Loadscreen";
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
      {!loading && user && <AuthHomePage />}
      {loading && <Loadscreen />}
      {!loading && !user && <HomePage />}
    </>
  );
}
