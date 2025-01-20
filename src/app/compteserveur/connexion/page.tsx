import Connexion from "@/components/CompteServeur/Connexion";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Pub from "@/components/CompteClient/Pub";

export const metadata: Metadata = {
  title: "Connexion | QR-menuPro",
  description: "La page de connexion au compte serveur de QR-menuPro",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Pub />
      <Connexion />
    </>
  );
}
