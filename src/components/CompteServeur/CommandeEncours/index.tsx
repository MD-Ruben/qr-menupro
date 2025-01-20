"use client";

import { useState } from "react";
import { FaCheck, FaTimes, FaHistory, FaSignOutAlt, FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface OrderItem {
  name: string;
  quantity: number;
  special?: string;
}

interface Order {
  id: string;
  table: string;
  items: OrderItem[];
  status: "en_attente" | "en_preparation" | "pret" | "servi";
  time: string;
  total: number;
}

const CommandeEncours = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "CMD001",
      table: "Table 1",
      items: [
        { name: "Poisson Braisé", quantity: 2, special: "Bien cuit" },
        { name: "Jus de Gingembre", quantity: 2 }
      ],
      status: "en_preparation",
      time: "14:30",
      total: 15000
    },
    {
      id: "CMD002",
      table: "Table 4",
      items: [
        { name: "Poulet Rôti", quantity: 1 },
        { name: "Coca Cola", quantity: 3 }
      ],
      status: "pret",
      time: "14:45",
      total: 8500
    },
    {
      id: "CMD005",
      table: "Table 3",
      items: [
        { name: "Poulet Rôti", quantity: 1 },
        { name: "Coca Cola", quantity: 3 },
        { name: "Pizza", quantity: 1 }
      ],
      status: "pret",
      time: "14:45",
      total: 8500
    },
    {
      id: "CMD006",
      table: "Table 2",
      items: [
        { name: "Poulet Rôti", quantity: 1 },
        { name: "Coca Cola", quantity: 3 }
      ],
      status: "pret",
      time: "14:45",
      total: 8500
    },
    {
      id: "CMD007",
      table: "Table 5",
      items: [
        { name: "Poulet Rôti", quantity: 1 },
        { name: "Coca Cola", quantity: 3 }
      ],
      status: "pret",
      time: "14:45",
      total: 8500
    },
    {
      id: "CMD008",
      table: "Table 6",
      items: [
        { name: "Poulet Rôti", quantity: 1 },
        { name: "Coca Cola", quantity: 3 }
      ],
      status: "pret",
      time: "14:45",
      total: 8500
    }
  ]);

  const handleStatusChange = (orderId: string, newStatus: Order["status"]) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const handleDeleteOrder = (orderId: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette commande ?")) {
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "en_attente": return "bg-yellow-100 text-yellow-800";
      case "en_preparation": return "bg-blue-100 text-blue-800";
      case "pret": return "bg-green-100 text-green-800";
      case "servi": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "en_attente": return "En attente";
      case "en_preparation": return "En préparation";
      case "pret": return "Prêt à servir";
      case "servi": return "Servi";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Commandes en cours</h1>
          <div className="relative">
            <button 
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FaBars className="text-gray-600 text-xl" />
            </button>
            
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <button
                  onClick={() => router.push('/compteserveur/historique')}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                >
                  <FaHistory className="mr-3" />
                  Historique
                </button>
                <button
                  onClick={() => router.push('/compteserveur/connexion')}
                  className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 w-full"
                >
                  <FaSignOutAlt className="mr-3" />
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div 
              key={order.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{order.table}</h3>
                  <span className="text-sm text-gray-500">{order.time}</span>
                </div>

                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-800">{item.name} x{item.quantity}</p>
                        {item.special && (
                          <p className="text-sm text-gray-500">Note: {item.special}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                  <span className="font-semibold text-gray-800">
                    {order.total.toLocaleString()} FCFA
                  </span>
                </div>

                <div className="flex gap-2">
                  {order.status !== "servi" && (
                    <button
                      onClick={() => handleStatusChange(order.id, "servi")}
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <FaCheck />
                      Terminer
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteOrder(order.id)}
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaTimes />
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CommandeEncours;
