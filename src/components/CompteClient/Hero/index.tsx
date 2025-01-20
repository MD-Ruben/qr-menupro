import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-red-600 py-4">
      <section className="mx-auto mt-24 max-w-screen-xl items-center px-4 pb-12 md:px-8 lg:flex">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left">
            <h1 className="text-[45px] md:text-9xl opacity-15">Bienvenue</h1>
          <p className="flex items-center gap-2 font-playfair-vietnam text-xl font-semibold text-white sm:text-4xl md:text-7xl">
            Tu as faim ?
            <Image
              src="/images/logo/thinking.png"
              alt="logo thinking"
              width={100}
              height={100}
            />
          </p>
          <p className="mt-2 text-blue-100 text-xl md:text-4xl font-semibold font-playfair-indian">
                Ton dabali est calé !
              </p>
          <div className="items-center justify-center space-y-3 pt-5 sm:flex sm:space-x-6 sm:space-y-0 lg:justify-start">
            <a
              href="javascript:void(0)"
              className="block w-full rounded-md bg-white px-7 py-3 text-center text-gray-800 shadow-md sm:w-auto"
            >
              Le siteweb
            </a>
          </div>
        </div>
        <div className="mt-7 flex-1 text-center lg:ml-3 lg:mt-0">
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="mx-auto w-full sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
    </div>
  );
};
export default Hero;
