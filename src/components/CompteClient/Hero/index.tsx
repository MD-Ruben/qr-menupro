import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="relative bg-red-600 py-20">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8 md:text-center">
          <div className="max-w-xl md:mx-auto">
            <div className="grid justify-items-stretch">
              <p className="justify-self-start flex items-center gap-2 text-xl md:text-4xl font-semibold text-white sm:text-4xl font-playfair-vietnam">
                Tu as faim ? 
                <Image src="/images/logo/thinking.png" alt="logo thinking" width={100} height={100} />
              </p>
              <p className="justify-self-end mt-3 text-blue-100 text-xl md:text-3xl font-semibold font-playfair-indian">
                Ton dabali est calé !
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-between gap-4">
            <a
              href="javascript:void(0)"
              className="inline-block rounded-xl bg-black px-4 py-4 font-bold text-white duration-150 hover:bg-slate-900 active:bg-slate-900"
            >
              Poissons
            </a>
            <a
              href="javascript:void(0)"
              className="inline-block rounded-xl bg-black px-4 py-4 font-bold text-white duration-150 hover:bg-slate-900 active:bg-slate-900"
            >
              Viandes
            </a>
            <a
              href="javascript:void(0)"
              className="inline-block rounded-xl bg-black px-4 py-4 font-bold text-white duration-150 hover:bg-slate-900 active:bg-slate-900"
            >
              Grillades
            </a>
            <a
              href="javascript:void(0)"
              className="inline-block rounded-xl bg-black px-4 py-4 font-bold text-white duration-150 hover:bg-slate-900 active:bg-slate-900"
            >
              Box Mak
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
