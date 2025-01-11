"use client";

import { useState, useEffect } from "react";
import { FaStar, FaUser, FaClock } from "react-icons/fa";
import Image from "next/image";

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  plat: string;
  serviceRating: number;
  platRating: number;
  image?: string;
}

const Evaluation = () => {
  const [platRating, setPlatRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoveredPlatStar, setHoveredPlatStar] = useState(0);
  const [hoveredServiceStar, setHoveredServiceStar] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<"all" | "positive" | "negative">("all");

  // Simuler des avis existants
  useEffect(() => {
    const mockReviews: Review[] = [
      {
        id: "1",
        userName: "Jean D.",
        rating: 4.5,
        platRating: 5,
        serviceRating: 4,
        comment: "Excellent poisson braisé, service rapide et agréable !",
        date: "2024-02-15",
        plat: "Poisson Braisé",
        image: "/images/menu/poissonBraise.jpeg"
      },
      {
        id: "2",
        userName: "Marie K.",
        rating: 5,
        platRating: 5,
        serviceRating: 5,
        comment: "Une expérience culinaire exceptionnelle. Les saveurs sont authentiques.",
        date: "2024-02-14",
        plat: "Poulet Braisé",
        image: "/images/menu/pouletBraise.jpeg"
      }
    ];
    setReviews(mockReviews);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: Math.random().toString(36).substr(2, 9),
      userName: "Client",
      rating: (platRating + serviceRating) / 2,
      platRating,
      serviceRating,
      comment,
      date: new Date().toISOString().split('T')[0],
      plat: "Poisson Braisé",
      image: "/images/menu/poissonBraise.jpeg"
    };

    setReviews([newReview, ...reviews]);
    setComment("");
    setPlatRating(0);
    setServiceRating(0);
    setShowForm(false);
  };

  const filteredReviews = reviews.filter(review => {
    if (filter === "positive") return review.rating >= 4;
    if (filter === "negative") return review.rating < 4;
    return true;
  });

  const StarRating = ({ 
    rating, 
    onRating, 
    hoveredStar, 
    onHover 
  }: { 
    rating: number; 
    onRating: (rating: number) => void; 
    hoveredStar: number;
    onHover: (rating: number) => void;
  }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`cursor-pointer text-2xl ${
              star <= (hoveredStar || rating)
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
            onClick={() => onRating(star)}
            onMouseEnter={() => onHover(star)}
            onMouseLeave={() => onHover(0)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg my-8">
      {/* En-tête */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Évaluations des clients
        </h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all" 
                ? "bg-red-600 text-white" 
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setFilter("positive")}
            className={`px-4 py-2 rounded-lg ${
              filter === "positive" 
                ? "bg-green-600 text-white" 
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Positifs
          </button>
          <button
            onClick={() => setFilter("negative")}
            className={`px-4 py-2 rounded-lg ${
              filter === "negative" 
                ? "bg-yellow-600 text-white" 
                : "bg-gray-100 text-gray-700"
            }`}
          >
            À améliorer
          </button>
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Laisser un avis
          </button>
        )}
      </div>

      {/* Formulaire d'évaluation */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-6 rounded-xl">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Noter le plat</h3>
            <StarRating
              rating={platRating}
              onRating={setPlatRating}
              hoveredStar={hoveredPlatStar}
              onHover={setHoveredPlatStar}
            />
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Noter le service</h3>
            <StarRating
              rating={serviceRating}
              onRating={setServiceRating}
              hoveredStar={hoveredServiceStar}
              onHover={setHoveredServiceStar}
            />
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Votre commentaire</h3>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 border rounded-lg"
              rows={4}
              placeholder="Partagez votre expérience..."
              required
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Publier
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      )}

      {/* Liste des avis */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src={review.image || "/images/default-plat.jpg"}
                  alt={review.plat}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <FaUser className="text-gray-400" />
                  <span className="font-semibold">{review.userName}</span>
                  <FaClock className="text-gray-400 ml-4" />
                  <span className="text-gray-500 text-sm">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="mb-2">
                  <p className="font-semibold text-gray-700 mb-1">{review.plat}</p>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Plat</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={`text-sm ${
                              star <= review.platRating
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Service</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={`text-sm ${
                              star <= review.serviceRating
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evaluation;
