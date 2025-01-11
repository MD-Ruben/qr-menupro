import SuiviCommande from "@/components/CompteClient/Chargement";
import Pub from "@/components/CompteClient/Pub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chargement de commande | QR-menuPro",
  description: "Chargement de commande",
};

export default function ChargementPage() {
  return (
    <>
      <Pub />
      <main className="min-h-screen bg-red-600 py-12">
        <SuiviCommande />
      </main>
    </>
  );
}
