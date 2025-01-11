"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import Image from "next/image";

const SuiviCommande = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(25);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [reduction, setReduction] = useState(0);
  const [puzzlePieces, setPuzzlePieces] = useState<number[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [completedPuzzle, setCompletedPuzzle] = useState(false);
  const [orderNumber] = useState(`MAK-${Math.random().toString(36).substr(2, 6).toUpperCase()}`);

  // Initialisation du puzzle
  useEffect(() => {
    if (showPuzzle) {
      const pieces = Array.from({ length: 9 }, (_, i) => i);
      setPuzzlePieces(shuffleArray([...pieces]));
    }
  }, [showPuzzle]);

  // Timer pour le temps d'attente
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Mise à jour chaque minute

    return () => clearInterval(timer);
  }, []);

  // Fonction pour mélanger le tableau
  const shuffleArray = (array: number[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Vérifier si le puzzle est complété
  useEffect(() => {
    if (puzzlePieces.length > 0 && puzzlePieces.every((piece, index) => piece === index)) {
      setCompletedPuzzle(true);
      try {
        confetti({
          particleCount: 200,
          spread: 160,
          origin: { y: 0.6 }
        });
      } catch (error) {
        console.error("Erreur confetti:", error);
      }
      setReduction(10);
      setTimeout(() => {
        setShowPuzzle(false);
        setCompletedPuzzle(false);
      }, 2000);
    }
  }, [puzzlePieces]);

  // Questions du quiz
  const questions = [
    {
      question: "Quel est le plat signature du restaurant ?",
      options: ["Poisson Braisé", "Poulet Rôti", "Côtes de Porc", "Capitaine Fumé"],
      correct: 0
    },
    {
      question: "Depuis combien d'années le restaurant existe-t-il ?",
      options: ["2 ans", "5 ans", "10 ans", "15 ans"],
      correct: 2
    },
    {
      question: "Quelle est la spécialité du chef ?",
      options: ["Cuisine italienne", "Cuisine africaine", "Cuisine française", "Cuisine asiatique"],
      correct: 1
    }
  ];

  // États de la commande
  const steps = [
    { label: "Commande reçue", done: true },
    { label: "En préparation", done: false },
    { label: "Prêt à servir", done: false },
    { label: "Commande servie", done: false }
  ];

  // Gestion du puzzle
  const handlePieceClick = (index: number) => {
    if (selectedPiece === null) {
      setSelectedPiece(index);
    } else {
      const newPieces = [...puzzlePieces];
      [newPieces[selectedPiece], newPieces[index]] = [newPieces[index], newPieces[selectedPiece]];
      setPuzzlePieces(newPieces);
      setSelectedPiece(null);
    }
  };

  // Gestion des réponses du quiz
  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore((prev) => prev + 1);
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

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const newReduction = score === questions.length ? 15 : score * 5;
      setReduction(newReduction);
      setShowQuiz(false);
    }
  };

  // Gestion du retour au choix des jeux
  const handleReset = () => {
    setShowQuiz(false);
    setShowPuzzle(false);
    setCurrentQuestion(0);
    setScore(0);
    setReduction(0);
    setSelectedPiece(null);
    setPuzzlePieces([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg my-8">
      {/* En-tête */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Suivi de votre commande
        </h2>
        <p className="text-gray-600">
          Commande #{orderNumber}
        </p>
      </div>

      {/* Barre de progression */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-1/4">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === 1
                    ? "bg-red-600 text-white"
                    : index === 0
                    ? "bg-green-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {step.done ? "✓" : index + 1}
              </div>
              <p className="text-sm text-center mt-2">{step.label}</p>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-red-600 rounded-full transition-all duration-500"
            style={{ width: "25%" }}
          />
        </div>
      </div>

      {/* Temps d'attente estimé */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Temps d'attente estimé</h3>
        <p className="text-3xl font-bold text-red-600">{timeLeft} minutes</p>
      </div>

      {/* Section Jeux */}
      <div className="bg-gray-50 p-6 rounded-xl mb-8">
        {!showQuiz && !showPuzzle && !reduction ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Envie de gagner une réduction ?
            </h3>
            <p className="text-gray-600 mb-4">
              Choisissez votre défi !
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Quiz
              </button>
              <button
                onClick={() => setShowPuzzle(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Puzzle
              </button>
            </div>
          </div>
        ) : showPuzzle ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Reconstituez l'image du plat !
            </h3>
            <div className="grid grid-cols-3 gap-1 max-w-sm mx-auto mb-4">
              {puzzlePieces.map((piece, index) => (
                <div
                  key={index}
                  onClick={() => handlePieceClick(index)}
                  className={`aspect-square relative cursor-pointer ${
                    selectedPiece === index ? 'border-2 border-blue-500' : ''
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/images/puzzle/piece${piece + 1}.jpg`}
                      alt={`Piece ${piece + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setPuzzlePieces(shuffleArray([...puzzlePieces]))}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Mélanger
              </button>
              <button
                onClick={handleReset}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Retour
              </button>
            </div>
          </div>
        ) : showQuiz ? (
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1}/{questions.length}
            </h3>
            <p className="text-gray-800 mb-4">
              {questions[currentQuestion].question}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="bg-white p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleReset}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Abandonner
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">
              Félicitations !
            </h3>
            <p className="text-gray-600 mb-4">
              Vous avez gagné {reduction}% de réduction sur votre prochaine commande !
            </p>
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
              Code promo: GAME{Math.random().toString(36).substr(2, 6).toUpperCase()}
            </div>
            <button
              onClick={handleReset}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Jouer à nouveau
            </button>
          </div>
        )}
      </div>

      {/* Informations supplémentaires */}
      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
        <p>• Votre commande est en préparation dans nos cuisines</p>
        <p>• Vous recevrez une notification lorsque votre commande sera prête</p>
        <p>• Pour toute question, n'hésitez pas à contacter notre service client</p>
      </div>
    </div>
  );
};

export default SuiviCommande;