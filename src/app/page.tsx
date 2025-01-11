import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Menu from "@/components/Menu";
import Pub from "@/components/Pub";

export const metadata: Metadata = {
  title: "QR-menuPro",
  description: "La page d'accueil de QR-menuPro",
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
