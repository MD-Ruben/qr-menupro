"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSpicy, setIsSpicy] = useState(false);
  const [supplements, setSupplements] = useState({
    alloco: 0,
    oeuf: 0,
    mayonnaise: 0
  });
  const [boissons, setBoissons] = useState({
    soda: 0,
    jusNaturel: 0,
    biere: 0
  });

  const orderNumber = "CMD-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  const handleSupplementChange = (type: keyof typeof supplements, value: number) => {
    setSupplements(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value)
    }));
  };

  const handleBoissonChange = (type: keyof typeof boissons, value: number) => {
    setBoissons(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value)
    }));
  };

  const router = useRouter()

  const handleClick = () => {
    router.push('/compteclient/chargement')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg my-8">
      {/* En-tête de la commande */}
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Détails de la commande</h2>
        <p className="text-gray-600">Numéro de commande: {orderNumber}</p>
      </div>

      {/* Image et informations du plat */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="relative w-full md:w-1/3 h-64">
          <Image
            src="/images/menu/poissonBraise.jpeg"
            alt="Poisson Braisé"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold mb-2">Poisson Braisé</h3>
          <span className="text-red-600 font-bold text-xl mb-4">5000 CFA</span>
          <p className="text-gray-600 mb-4">Poisson frais braisé accompagné de bananes plantains</p>
          <div className="flex items-center gap-4 mb-4">
            <button 
              className="bg-red-600 text-white px-3 py-1 rounded-full"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button 
              className="bg-red-600 text-white px-3 py-1 rounded-full"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <div className="flex gap-4 mb-4">
            <button 
              className={`px-4 py-2 rounded-full ${isSpicy ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setIsSpicy(true)}
            >
              Épicé
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${!isSpicy ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setIsSpicy(false)}
            >
              Non épicé
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="capitalize">Nombre de plat</span>
              <div className="flex items-center gap-3">
                <button 
                  className="bg-red-600 text-white px-2 py-1 rounded">
                  -
                </button>
                <span>1</span>
                <button 
                  className="bg-red-600 text-white px-2 py-1 rounded">
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="capitalize">Nombre de plat</span>
              <div className="flex items-center gap-3">
                <button 
                  className="bg-red-600 text-white px-2 py-1 rounded">
                  -
                </button>
                <span>1</span>
                <button 
                  className="bg-red-600 text-white px-2 py-1 rounded">
                  +
                </button>
              </div>
            </div>
        </div>  
        </div>
      </div>

      {/* Suppléments */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Suppléments</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(supplements).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="capitalize">{key}</span>
              <div className="flex items-center gap-3">
                <button 
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleSupplementChange(key as keyof typeof supplements, -1)}
                >
                  -
                </button>
                <span>{value}</span>
                <button 
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleSupplementChange(key as keyof typeof supplements, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Boissons */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Boissons</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(boissons).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <div className="flex items-center gap-3">
                <button 
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleBoissonChange(key as keyof typeof boissons, -1)}
                >
                  -
                </button>
                <span>{value}</span>
                <button 
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleBoissonChange(key as keyof typeof boissons, 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notation et commentaires */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Votre avis</h3>
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer text-2xl ${
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        <textarea
          className="w-full p-3 border rounded-lg"
          rows={4}
          placeholder="Laissez un commentaire..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      {/* Bouton de commande */}
      <button 
        className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
        onClick={handleClick}
        // onClick={() => {
        //   // Logique pour passer la commande
        //   console.log({
        //     orderNumber,
        //     quantity,
        //     isSpicy,
        //     supplements,
        //     boissons,
        //     rating,
        //     comment
        //   });
        // }}
      >
        Passer la commande
      </button>
    </div>
  );
};

export default Details;
