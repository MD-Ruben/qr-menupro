import Link from "next/link";

const AboutClairvitre = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-screen-xl md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="/images/about/about.jpg"
                alt="about image"
                className="drop-shadow-three dark:drop-shadow-none sm:rounded-lg md:max-w-lg"
              />
            </div>
            <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                NOTRE MISSION ​
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Chaque jour, nos experts s’engagent à délivrer des services
                d’excellence au coeur des sites de nos clients, au bénéfice de
                celles et ceux qui les occupent. ​
              </p>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Expertise, engagement et ambition de l’excellence caractérisent
                notre approche, pour une expérience de services réussie.
              </p>
              <Link
                href="/apropos"
                className="inline-flex items-center gap-x-1 font-medium text-primary duration-150 hover:text-primary"
              >
                Savoir plus
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClairvitre;
