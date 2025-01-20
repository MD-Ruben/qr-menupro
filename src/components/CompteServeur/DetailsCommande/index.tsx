"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaClock,
  FaEdit,
  FaCheck,
  FaTimes,
  FaSignOutAlt,
  FaHistory,
  FaBars,
} from "react-icons/fa";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  special?: string;
}

interface OrderDetails {
  id: string;
  table: string;
  status: "en_attente" | "en_preparation" | "pret" | "servi";
  items: OrderItem[];
  orderTime: string;
  estimatedTime: number; // en minutes
  waitingTime: number; // en minutes
  total: number;
  comment?: string;
}

const DetailsCommande = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [order, setOrder] = useState<OrderDetails>({
    id: "CMD001",
    table: "Table 4",
    status: "en_preparation",
    items: [
      {
        id: "1",
        name: "Poisson Braisé",
        quantity: 2,
        price: 4500,
        special: "Bien cuit",
      },
      { id: "2", name: "Alloco", quantity: 1, price: 1000 },
      { id: "3", name: "Coca Cola", quantity: 2, price: 1000 },
    ],
    orderTime: "14:30",
    estimatedTime: 25,
    waitingTime: 15,
    total: 12000,
    comment: "Client pressé, à servir en priorité",
  });

  const getStatusColor = (status: OrderDetails["status"]) => {
    switch (status) {
      case "en_attente":
        return "bg-yellow-100 text-yellow-800";
      case "en_preparation":
        return "bg-blue-100 text-blue-800";
      case "pret":
        return "bg-green-100 text-green-800";
      case "servi":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: OrderDetails["status"]) => {
    switch (status) {
      case "en_attente":
        return "En attente";
      case "en_preparation":
        return "En préparation";
      case "pret":
        return "Prêt à servir";
      case "servi":
        return "Servi";
      default:
        return status;
    }
  };

  const handleQuantityChange = (itemId: string, change: number) => {
    if (!isEditing) return;

    setOrder((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === itemId) {
          const newQuantity = Math.max(0, item.quantity + change);
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      }),
    }));
  };

  const calculateTotal = () => {
    return order.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  };

  return (
    <>
      <header className="mt-10 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Détails de la commande
          </h1>
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <FaBars className="text-xl text-gray-600" />
            </button>

            {showMenu && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                <button
                  onClick={() => router.push("/compteserveur/historique")}
                  className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FaHistory className="mr-3" />
                  Historique
                </button>
                <button
                  onClick={() => router.push("/compteserveur/connexion")}
                  className="flex w-full items-center px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  <FaSignOutAlt className="mr-3" />
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="my-7 min-h-screen bg-gray-100 p-4">
        <div className="mx-auto max-w-2xl rounded-xl bg-white shadow-lg">
          {/* Header */}
          <div className="border-b p-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => router.back()}
                className="text-gray-600 hover:text-gray-800"
              >
                <FaArrowLeft size={24} />
              </button>
              <h1 className="text-center text-2xl font-bold text-gray-800">
                Détails de la commande
              </h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`${
                  isEditing ? "text-green-600" : "text-blue-600"
                } hover:opacity-80`}
              >
                {isEditing ? <FaCheck size={24} /> : <FaEdit size={24} />}
              </button>
            </div>
          </div>

          {/* Informations principales */}
          <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{order.table}</h2>
                <p className="text-gray-500">Commande #{order.id}</p>
              </div>
              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${getStatusColor(order.status)}`}
              >
                {getStatusText(order.status)}
              </span>
            </div>

            {/* Temps */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <FaClock className="mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">Heure commande</p>
                <p className="font-semibold">{order.orderTime}</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <FaClock className="mx-auto mb-2 text-blue-400" />
                <p className="text-sm text-gray-500">Temps estimé</p>
                <p className="font-semibold">{order.estimatedTime} min</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <FaClock className="mx-auto mb-2 text-red-400" />
                <p className="text-sm text-gray-500">Temps d'attente</p>
                <p className="font-semibold">{order.waitingTime} min</p>
              </div>
            </div>

            {/* Articles */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Articles commandés</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.special && (
                        <p className="text-sm text-gray-500">
                          Note: {item.special}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <span>x{item.quantity}</span>
                      )}
                      <span className="w-24 text-right">
                        {(item.price * item.quantity).toLocaleString()} FCFA
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between text-xl font-bold">
                <span>Total</span>
                <span>{calculateTotal().toLocaleString()} FCFA</span>
              </div>
            </div>

            {/* Commentaire */}
            {order.comment && (
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="text-yellow-800 mb-2 font-semibold">
                  Commentaire
                </h3>
                <p className="text-yellow-700">{order.comment}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCommande;
