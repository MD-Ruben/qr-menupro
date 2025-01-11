import Evaluation from "@/components/CompteClient/Evaluation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Évaluations | QR-menuPro",
  description: "Évaluez votre expérience au restaurant",
};

export default function EvaluationPage() {
  return (
    <main className="min-h-screen bg-red-600 py-12">
      <Evaluation />
    </main>
  );
}
