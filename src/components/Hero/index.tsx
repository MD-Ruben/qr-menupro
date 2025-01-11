import Image from "next/image";

const menuItems = [
  {
    name: "Poisson Braisé",
    price: "4500 FCFA",
    image: "/images/menu/poisson-braise.jpg",
  },
  {
    name: "Poulet Braisé",
    price: "3500 FCFA",
    image: "/images/menu/poulet-braise.jpg",
  },
  {
    name: "Côtes de Porc",
    price: "4000 FCFA",
    image: "/images/menu/cotes-porc.jpg",
  },
  {
    name: "Box Mak Special",
    price: "5000 FCFA",
    image: "/images/menu/box-special.jpg",
  },
  {
    name: "Carpe Braisée",
    price: "5500 FCFA",
    image: "/images/menu/carpe-braisee.jpg",
  },
  {
    name: "Brochettes Mixtes",
    price: "3000 FCFA",
    image: "/images/menu/brochettes.jpg",
  },
  {
    name: "Capitaine Fumé",
    price: "6000 FCFA",
    image: "/images/menu/capitaine.jpg",
  },
  {
    name: "Gambas Grillées",
    price: "7000 FCFA",
    image: "/images/menu/gambas.jpg",
  },
  {
    name: "Tilapia Braisé",
    price: "4500 FCFA",
    image: "/images/menu/tilapia.jpg",
  },
  {
    name: "Gigot d'Agneau",
    price: "6500 FCFA",
    image: "/images/menu/gigot-agneau.jpg",
  },
  {
    name: "Mix Grill Viandes",
    price: "8000 FCFA",
    image: "/images/menu/mix-grill.jpg",
  },
  {
    name: "Assiette Découverte",
    price: "9000 FCFA",
    image: "/images/menu/decouverte.jpg",
  },
  {
    name: "Bar Braisé",
    price: "5500 FCFA",
    image: "/images/menu/bar-braise.jpg",
  },
  {
    name: "Côtes d'Agneau",
    price: "7500 FCFA",
    image: "/images/menu/cotes-agneau.jpg",
  },
  {
    name: "Sole Grillée",
    price: "6500 FCFA",
    image: "/images/menu/sole.jpg",
  },
  {
    name: "Box Fruits de Mer",
    price: "12000 FCFA",
    image: "/images/menu/fruits-mer.jpg",
  },
];

const Hero = () => {
  return (
    <>
      <section className="relative bg-red-600 py-20">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="max-w-xl md:mx-auto mb-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-red-600 font-bold text-xl mb-4">
                    {item.price}
                  </p>
                  <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                    Commander
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 