"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    name: "Poisson Braisé",
    price: "4500 FCFA",
    image: "/images/menu/poissonBraise.jpeg",
  },
  {
    name: "Poulet Braisé",
    price: "3500 FCFA",
    image: "/images/menu/pouletbraise.jpeg",
  },
  {
    name: "Côtes de Porc",
    price: "4000 FCFA",
    image: "/images/menu/coteproc.jpeg",
  },
  {
    name: "Garba",
    price: "5000 FCFA",
    image: "/images/menu/garba.jpeg",
  },
  {
    name: "Carpe Braisée",
    price: "5500 FCFA",
    image: "/images/menu/carpebraisee.jpeg",
  },
  {
    name: "Brochettes Mixtes",
    price: "3000 FCFA",
    image: "/images/menu/brochette.jpeg",
  },
  {
    name: "Capitaine Fumé",
    price: "6000 FCFA",
    image: "/images/menu/capitainefumee.jpeg",
  },
  {
    name: "Gambas Grillées",
    price: "7000 FCFA",
    image: "/images/menu/gambasgrillee.jpeg",
  }
];

const Menu = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/compteclient/detailsdelacommande')
  }

  return (
    <>
      <section className="relative bg-white py-20">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-52">
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
                  <button onClick={handleClick} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
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

export default Menu;
