import PageService from "@/components/PageService";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos services | Clairvitre",
  description: "La page de services de Clairvitre",
  // other metadata
};

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nos services"
        description="Plus de 10 ans d'expérience à votre service."
      />
      <PageService />
    </>
  );
};

export default Page;
