"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaSave,
  FaPlus,
  FaMinus,
  FaTrash,
  FaSignOutAlt,
  FaHistory,
  FaBars,
} from "react-icons/fa";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  special?: string;
}

interface Order {
  id: string;
  table: string;
  items: OrderItem[];
  total: number;
  comment?: string;
}

const ModifierLaCommande = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const [order, setOrder] = useState<Order>({
    id: "CMD001",
    table: "Table 4",
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
    total: 12000,
    comment: "Client pressé, à servir en priorité",
  });

  const [showAddItem, setShowAddItem] = useState(false);
  const [comment, setComment] = useState(order.comment || "");

  // Menu items disponibles pour l'ajout
  const menuItems: MenuItem[] = [
    { id: "m1", name: "Poisson Braisé", price: 4500, category: "Plats" },
    { id: "m2", name: "Poulet Rôti", price: 3500, category: "Plats" },
    { id: "m3", name: "Alloco", price: 1000, category: "Accompagnements" },
    { id: "m4", name: "Coca Cola", price: 1000, category: "Boissons" },
    { id: "m5", name: "Jus de Gingembre", price: 1500, category: "Boissons" },
  ];

  const handleQuantityChange = (itemId: string, change: number) => {
    setOrder((prev) => ({
      ...prev,
      items: prev.items
        .map((item) => {
          if (item.id === itemId) {
            const newQuantity = Math.max(0, item.quantity + change);
            return {
              ...item,
              quantity: newQuantity,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    }));
  };

  const handleAddNewItem = (menuItem: MenuItem) => {
    setOrder((prev) => {
      const existingItem = prev.items.find(
        (item) => item.name === menuItem.name,
      );
      if (existingItem) {
        return {
          ...prev,
          items: prev.items.map((item) =>
            item.name === menuItem.name
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...prev,
        items: [
          ...prev.items,
          {
            id: `new-${Date.now()}`,
            name: menuItem.name,
            quantity: 1,
            price: menuItem.price,
          },
        ],
      };
    });
    setShowAddItem(false);
  };

  const calculateTotal = () => {
    return order.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  };

  const handleSave = () => {
    const updatedOrder = {
      ...order,
      total: calculateTotal(),
      comment,
    };
    console.log("Commande mise à jour:", updatedOrder);
    router.back();
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md mt-10">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Modifier la commande
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
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="mx-auto max-w-2xl rounded-xl bg-white shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-6">
            <button
              onClick={() => router.back()}
              className="text-gray-600 hover:text-gray-800"
            >
              <FaArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">
              Modifier la commande
            </h1>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              <FaSave />
              Sauvegarder
            </button>
          </div>

          {/* Contenu principal */}
          <div className="space-y-6 p-6">
            {/* Informations de la commande */}
            <div>
              <h2 className="mb-2 text-xl font-semibold">{order.table}</h2>
              <p className="text-gray-500">Commande #{order.id}</p>
            </div>

            {/* Liste des articles */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Articles</h3>
                <button
                  onClick={() => setShowAddItem(!showAddItem)}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  <FaPlus />
                  Ajouter un article
                </button>
              </div>

              {/* Menu d'ajout d'articles */}
              {showAddItem && (
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-4 font-semibold">
                    Sélectionner un article
                  </h4>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {menuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleAddNewItem(item)}
                        className="rounded-lg bg-white p-4 text-left hover:bg-gray-50"
                      >
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.price} FCFA
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles actuels */}
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg bg-gray-50 p-4"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.price} FCFA/unité
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                        >
                          <FaMinus />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, -item.quantity)
                        }
                        className="text-red-600 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commentaire */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Commentaire</h3>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full rounded-lg border p-3"
                rows={3}
                placeholder="Ajouter un commentaire..."
              />
            </div>

            {/* Total */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between text-xl font-bold">
                <span>Total</span>
                <span>{calculateTotal().toLocaleString()} FCFA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifierLaCommande;
