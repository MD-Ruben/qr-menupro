import Connexion from "@/components/CompteServeur/Connexion";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Pub from "@/components/CompteClient/Pub";
import DetailsCommande from "@/components/CompteServeur/DetailsCommande";

export const metadata: Metadata = {
  title: "Détails de la commande | QR-menuPro",
  description: "La page de détails de la commande de QR-menuPro",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Pub />
      <DetailsCommande />
    </>
  );
}
