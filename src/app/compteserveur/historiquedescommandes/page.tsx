import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Pub from "@/components/CompteClient/Pub";
import HistoriqueDeLaCommande from "@/components/CompteServeur/HistoriqueDeLaCommande";

export const metadata: Metadata = {
  title: "Historique de la commande | QR-menuPro",
  description: "La page de l'historique de la commande de QR-menuPro",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Pub />
      <HistoriqueDeLaCommande />
    </>
  );
}
