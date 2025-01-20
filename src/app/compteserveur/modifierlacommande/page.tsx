import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Pub from "@/components/CompteClient/Pub";
import ModifierLaCommande from "@/components/CompteServeur/ModifierLaCommande";

export const metadata: Metadata = {
  title: "Modifier la commande | QR-menuPro",
  description: "La page pour modifier la commande de QR-menuPro",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Pub />
      <ModifierLaCommande />
    </>
  );
}
