import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Stats from "@/components/Stats";
import Video from "@/components/Video";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import AboutClairvitre from "@/components/AboutClairvitre";

export const metadata: Metadata = {
  title: "Clairvitre",
  description: "La page d'accueil de Clairvitre",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutClairvitre />
      <Video />
      <Services />
      <Stats />
      {/* <Brands /> */}
      <Testimonials />
    </>
  );
}
