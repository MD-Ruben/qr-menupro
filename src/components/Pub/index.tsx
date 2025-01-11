"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const publicites = [
  {
    id: 1,
    title: "Restaurant Mak",
    description: "Le meilleur de la cuisine africaine",
    image: "/images/pubs/pub1.jpg",
    bgColor: "bg-blue-600",
  },
  {
    id: 2,
    title: "Livraison Gratuite",
    description: "Pour toute commande supérieure à 20000 FCFA",
    image: "/images/pubs/pub2.jpg",
    bgColor: "bg-green-600",
  },
  {
    id: 3,
    title: "Happy Hour",
    description: "-20% sur tous les plats de 15h à 17h",
    image: "/images/pubs/pub3.jpg",
    bgColor: "bg-yellow-600",
  },
  {
    id: 4,
    title: "Box Spécial Weekend",
    description: "Découvrez nos offres spéciales du weekend",
    image: "/images/pubs/pub4.jpg",
    bgColor: "bg-purple-600",
  },
];

const Pub = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === publicites.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // Change toutes les 4 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {publicites.map((pub, index) => (
        <div
          key={pub.id}
          className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
            index === currentSlide 
              ? "translate-x-0 opacity-100" 
              : "translate-x-full opacity-0"
          }`}
        >
          <div className={`relative w-full h-full ${pub.bgColor}`}>
            <div className="absolute inset-0">
              <Image
                src={pub.image}
                alt={pub.title}
                fill
                className="object-cover opacity-50"
              />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
              <h2 className="text-4xl font-bold mb-4 text-center">
                {pub.title}
              </h2>
              <p className="text-xl text-center max-w-2xl">
                {pub.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Indicateurs de navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {publicites.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50"
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>

      {/* Boutons précédent/suivant */}
      <button
        onClick={() => setCurrentSlide(
          currentSlide === 0 
            ? publicites.length - 1 
            : currentSlide - 1
        )}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Précédent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide(
          currentSlide === publicites.length - 1 
            ? 0 
            : currentSlide + 1
        )}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Suivant"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pub;
