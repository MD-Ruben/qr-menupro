import Link from "next/link";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[29/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="/images/about/about.jpg"
                alt="about image"
                className="h-full w-full drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <img
                src="/images/about/about.jpg"
                alt="about image"
                className="hidden h-full w-full drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  NOTRE MISSION ​
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Chaque jour, nos experts s’engagent à délivrer des services
                  d’excellence au coeur des sites de nos clients, au bénéfice de
                  celles et ceux qui les occupent. ​
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Expertise, engagement et ambition de l’excellence
                  caractérisent notre approche, pour une expérience de services
                  réussie.
                </p>
              </div>
              <div className="mt-4 flex flex-col items-center justify-start space-y-4 sm:flex-row sm:space-y-0">
                <Link
                  href="/apropos"
                  className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  Savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
