import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/CompteClient/Hero";
import { Metadata } from "next";
import Menu from "@/components/CompteClient/Menu";
import Pub from "@/components/CompteClient/Pub";

export const metadata: Metadata = {
  title: "QR-menuPro",
  description: "La page de QR-menuPro",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Menu />
      <Pub />
    </>
  );
}
