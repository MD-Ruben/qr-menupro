import Remerciement from "@/components/Remerciement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci | QR-menuPro",
  description: "Merci pour votre commande et votre confiance",
};

export default function RemerciementsPage() {
  return (
    <main className="min-h-screen bg-red-600 py-12">
      <Remerciement />
    </main>
  );
}
