import { InfoCardAbout } from "@/components/card/InfoCard";
import { ProfileCard } from "@/components/card/ProfileCard";
import { Flex } from "@chakra-ui/react";

export default function StackId() {
  return (
    <>
      <ProfileCard />
      <InfoCardAbout />
    </>
  );
}
