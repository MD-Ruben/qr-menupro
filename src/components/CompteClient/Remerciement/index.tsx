"use client";

import { useEffect, useState } from "react";
import { FaHeart, FaStar, FaSmile } from "react-icons/fa";
import confetti from "canvas-confetti";

const Remerciement = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [emoji, setEmoji] = useState("🙏");
  const emojis = ["🙏", "😊", "👨‍🍳", "🎉", "⭐", "💖"];

  useEffect(() => {
    // Lance le confetti à l'arrivée sur la page
    setShowConfetti(true);
    if (showConfetti) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (error) {
        console.error("Erreur confetti:", error);
      }
    }

    // Change l'emoji toutes les 2 secondes
    const emojiInterval = setInterval(() => {
      setEmoji(prev => {
        const currentIndex = emojis.indexOf(prev);
        return emojis[(currentIndex + 1) % emojis.length];
      });
    }, 2000);

    return () => clearInterval(emojiInterval);
  }, [showConfetti]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Carte principale */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* En-tête avec image */}
        <div className="relative h-48 bg-red-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl animate-bounce">{emoji}</span>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Merci pour votre confiance !
          </h1>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-xl text-red-600">
              <FaHeart className="animate-pulse" />
              <span>Votre satisfaction est notre priorité</span>
              <FaHeart className="animate-pulse" />
            </div>

            <p className="text-gray-600 text-lg">
              Nous sommes ravis d'avoir pu vous servir aujourd'hui et espérons que votre expérience a été à la hauteur de vos attentes.
            </p>

            {/* Points clés */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">🍽️</div>
                <h3 className="font-semibold mb-2">Votre Commande</h3>
                <p className="text-gray-600">
                  Préparée avec soin par notre équipe
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="font-semibold mb-2">Votre Avis</h3>
                <p className="text-gray-600">
                  Contribue à améliorer notre service
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl mb-2">🎮</div>
                <h3 className="font-semibold mb-2">Votre Participation</h3>
                <p className="text-gray-600">
                  Rend l'attente plus agréable
                </p>
              </div>
            </div>

            {/* Message de fidélité */}
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Programme de Fidélité 🎁
              </h3>
              <p className="text-gray-700">
                Vos commandes vous rapportent des points fidélité !
                Continuez à profiter de nos délicieux plats pour débloquer
                des récompenses exclusives.
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">
                Suivez-nous sur les réseaux sociaux
              </h3>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Bouton retour */}
            <div className="mt-8">
              <a
                href="/"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
              >
                Retour à l'accueil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remerciement;
