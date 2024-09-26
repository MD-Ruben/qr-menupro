import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Clairvitre",
  description: "La page de contact de Clairvitre",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Plus de 10 ans d'expérience à votre service."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
