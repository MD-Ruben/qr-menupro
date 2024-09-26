import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apropos de nous | Clairvitre",
  description: "La page d'a propos de nous de Clairvitre",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="A propos de nous"
        description="Plus de 10 ans d'expérience à votre service."
      />
      <AboutSectionTwo />
      <Testimonials />
      <Stats />
    </>
  );
};

export default AboutPage;
