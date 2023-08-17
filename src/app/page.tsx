"use client";
import HomeHero from "@/components/Hero/HomeHero";
import Footer from "@/components/sections/Footer";
import SectionLayout from "@/components/sections/SectionLayout";
import { usePathname } from "next/navigation";

export default function Home() {
  const path = usePathname();

  console.log(path);
  return (
    <>
      <HomeHero />
      <SectionLayout />
      <Footer />
    </>
  );
}
