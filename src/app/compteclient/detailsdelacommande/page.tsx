import Details from "@/components/CompteClient/Details";
import Pub from "@/components/CompteClient/Pub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Détails de la commande | QR-menuPro",
  description: "La page de détails de la commande de QR-menuPro",
  // other metadata
};

export default function DetailsPage() {
  return (
    <>
      <Pub />
      <main className="min-h-screen bg-red-600 py-12">
        <Details />
      </main>
    </>
  );
}
