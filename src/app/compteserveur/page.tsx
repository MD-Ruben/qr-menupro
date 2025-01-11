"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CompteServeur() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter votre logique d'authentification
    if (username === "serveur" && password === "12345") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Identifiants incorrects");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="/images/logo/logo.png"
                alt="Logo Restaurant"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Connexion Serveur
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Veuillez vous connecter pour accéder à votre espace
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Nom d'utilisateur
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Se connecter
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <a
              href="#"
              className="text-sm text-red-600 hover:text-red-500"
              onClick={(e) => {
                e.preventDefault();
                // Ajoutez ici la logique pour réinitialiser le mot de passe
              }}
            >
              Mot de passe oublié ?
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Le reste du code du tableau de bord serveur
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Tableau de Bord - Serveur
        </h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Déconnexion
        </button>
      </div>

      {/* Le reste du code du tableau de bord... */}
      {/* Copiez ici le contenu du tableau de bord de votre code précédent */}
    </div>
  );
} 