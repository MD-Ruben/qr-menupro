import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import CommandeEncours from "@/components/CompteServeur/CommandeEncours";
import Pub from "@/components/CompteClient/Pub";

export const metadata: Metadata = {
  title: "Les commandes en cours | QR-menuPro",
  description: "La page des commandes en cours de QR-menuPro",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Pub />
      <CommandeEncours />
    </>
  );
}
