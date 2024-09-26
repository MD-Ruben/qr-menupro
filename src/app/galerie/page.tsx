import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Clairvitre",
  description: "La page de contact de Clairvitre",
  // other metadata
};

const Page = () => {
  return (
    <>
      <div className="bg-[url('/images/contact.jpg')] bg-cover bg-center">
        <Breadcrumb
          pageName="Contact"
          description="Le meilleur & le plus fiable Service de nettoyage."
        />
      </div>

      <Contact />
    </>
  );
};

export default Page;
