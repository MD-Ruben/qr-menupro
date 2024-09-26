"use client";
import { Feature } from "@/types/feature";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <div className="inline-block">
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
          <div className="mt-4 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Accordion 1"
                className="text-start text-sm font-bold text-black sm:text-base lg:text-lg xl:text-xl"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  incidunt dolorum quos quam, voluptatum animi? Aspernatur,
                  molestias, blanditiis labore possimus autem doloremque
                  consequuntur maxime sit ipsam sunt voluptatum nihil error.
                </p>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Accordion 2"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  incidunt dolorum quos quam, voluptatum animi? Aspernatur,
                  molestias, blanditiis labore possimus autem doloremque
                  consequuntur maxime sit ipsam sunt voluptatum nihil error.
                </p>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  incidunt dolorum quos quam, voluptatum animi? Aspernatur,
                  molestias, blanditiis labore possimus autem doloremque
                  consequuntur maxime sit ipsam sunt voluptatum nihil error.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
