"use client";
import { Divider, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import InfoCard from "../card/InfoCard";
import { PiDotsThreeFill } from "react-icons/pi";

import { HiSquare2Stack } from "react-icons/hi2";
import { GrCommand } from "react-icons/gr";

export default function SectionLayout() {
  const [color, setColor] = useState("#fff");
  let sectionroot = useRef(null);
  let section1 = useRef(null);
  let section2 = useRef(null);

  let options = {
    threshold: [0.5],
  };
  let observer;

  function changeBackgroundColor(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.target.id == "sectionroot" && !entry.isIntersecting) {
        setColor("#fff");
      }
      if (entry.target.id == "sectionroot" && entry.isIntersecting) {
        setColor("#C7A600");
      }
      if (entry.target.id == "section1" && entry.isIntersecting) {
        setColor("#FFD700");
      }
      if (entry.target.id == "section2" && entry.isIntersecting) {
        setColor("#FFFF24");
      }
    });
  }

  useEffect(() => {
    observer = new IntersectionObserver(changeBackgroundColor, options);
    if (sectionroot.current != null) {
      observer.observe(sectionroot.current);
      observer.observe(section1.current!);
      observer.observe(section2.current!);
    }
  }, []);
  return (
    <>
      <Flex
        h={"fit-content"}
        bg={color}
        direction={"column"}
        mt={"10"}
        transition={"all 0.7s ease-in-out"}
        fontWeight={"600"}
        py={"10"}
      >
        <Flex
          maxW={"1000px"}
          w={"100%"}
          alignSelf={"center"}
          flexDir={"column"}
        >
          <section>
            <Flex
              h={"100vh"}
              ref={sectionroot}
              id="sectionroot"
              borderBottom={"2px"}
              borderColor={"blackAlpha.200"}
              py={"2"}
            >
              <InfoCard
                icon={PiDotsThreeFill}
                smText={"Context"}
                lgText={"Add Meaningful Labels and descriptions"}
                desc={
                  "Dont just save Links or Bookmarks, you can Add meaningfull description to them, helping you locate them easily "
                }
                image={"images/Label.png"}
              />
            </Flex>
            <Flex
              h={"100vh"}
              ref={section1}
              id="section1"
              borderBottom={"2px"}
              borderColor={"blackAlpha.300"}
              py={"2"}
            >
              <InfoCard
                icon={HiSquare2Stack}
                smText={"Stacks"}
                lgText={"Organise your links based on topics"}
                desc={
                  "Keep all your links and bookmarks easily accesible and tidy by structuring in them in stacks."
                }
                image={"images/layers.webp"}
              />
            </Flex>
            <Flex
              h={"100vh"}
              ref={section2}
              id="section2"
              borderColor={"blackAlpha.300"}
              pt={"2"}
            >
              <InfoCard
                icon={GrCommand}
                smText={"Weave"}
                lgText={"Create the perfect curation"}
                desc={
                  "Share your Stack on topics or a particular subject and have others contribute to it"
                }
                image={"images/weave.webp"}
              />
            </Flex>
          </section>
        </Flex>
      </Flex>
    </>
  );
}
