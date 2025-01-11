import SuiviCommande from "@/components/Chargement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suivi de commande | QR-menuPro",
  description: "Suivez l'état de votre commande en temps réel",
};

export default function ChargementPage() {
  return (
    <main className="min-h-screen bg-red-600 py-12">
      <SuiviCommande />
    </main>
  );
} 