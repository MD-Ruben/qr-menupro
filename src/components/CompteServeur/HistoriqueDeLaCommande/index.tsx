"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaEye, FaTrash, FaFilePdf, FaFilter, FaCalendar } from "react-icons/fa";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

interface HistoryOrder {
  id: string;
  table: string;
  date: string;
  time: string;
  total: number;
  status: "completed" | "cancelled" | "deleted";
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
}

const HistoriqueDeLaCommande = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<HistoryOrder[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "completed" | "cancelled" | "deleted">("all");
  const [showFilters, setShowFilters] = useState(false);

  // Simuler le chargement des données
  useEffect(() => {
    const mockOrders: HistoryOrder[] = [
      {
        id: "CMD001",
        table: "Table 4",
        date: "2024-02-15",
        time: "14:30",
        total: 12000,
        status: "completed",
        items: [
          { name: "Poisson Braisé", quantity: 2, price: 4500 },
          { name: "Coca Cola", quantity: 2, price: 1000 }
        ]
      },
      {
        id: "CMD002",
        table: "Table 2",
        date: "2024-02-15",
        time: "15:45",
        total: 8500,
        status: "cancelled",
        items: [
          { name: "Poulet Rôti", quantity: 1, price: 3500 },
          { name: "Jus de Gingembre", quantity: 2, price: 1500 }
        ]
      },
      {
        id: "CMD003",
        table: "Table 3",
        date: "2024-02-15",
        time: "16:00",
        total: 10000,
        status: "deleted",
        items: []
      },
      {
        id: "CMD004",
        table: "Table 4",
        date: "2024-02-15",
        time: "16:00",
        total: 10000,
        status: "deleted",
        items: []
      }
    ];
    setOrders(mockOrders);
  }, []);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.table.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDate = !dateFilter || order.date === dateFilter;
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;

    return matchesSearch && matchesDate && matchesStatus;
  });

  const handleDelete = (orderId: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette commande de l'historique ?")) {
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Titre
    doc.setFontSize(18);
    doc.text("Historique des Commandes", 14, 20);
    
    // Filtres appliqués
    doc.setFontSize(10);
    doc.text(`Date d'extraction: ${new Date().toLocaleDateString()}`, 14, 30);
    if (dateFilter) doc.text(`Filtre date: ${dateFilter}`, 14, 35);
    if (statusFilter !== "all") doc.text(`Filtre statut: ${statusFilter}`, 14, 40);
    
    // Tableau des commandes
    const tableData = filteredOrders.map(order => [
      order.id,
      order.table,
      `${order.date} ${order.time}`,
      order.status,
      `${order.total.toLocaleString()} FCFA`
    ]);

    (doc as any).autoTable({
      startY: 45,
      head: [["N° Commande", "Table", "Date et Heure", "Statut", "Total"]],
      body: tableData,
      theme: "striped",
      styles: { fontSize: 8 },
      headStyles: { fillColor: [220, 53, 69] }
    });

    doc.save("historique-commandes.pdf");
  };

  const getStatusColor = (status: HistoryOrder["status"]) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-yellow-100 text-yellow-800";
      case "deleted": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: HistoryOrder["status"]) => {
    switch (status) {
      case "completed": return "Terminée";
      case "cancelled": return "Annulée";
      case "deleted": return "Supprimée";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Historique des Commandes
            </h1>
            <div className="flex gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
              >
                <FaFilter />
                Filtres
              </button>
              <button
                onClick={exportToPDF}
                className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700"
              >
                <FaFilePdf />
                Exporter PDF
              </button>
            </div>
          </div>

          {/* Filtres */}
          {showFilters && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
              <div className="relative">
                <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="all">Tous les statuts</option>
                <option value="completed">Terminées</option>
                <option value="cancelled">Annulées</option>
                <option value="deleted">Supprimées</option>
              </select>
            </div>
          )}
        </div>

        {/* Liste des commandes */}
        <div className="grid gap-6">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{order.table}</h2>
                  <p className="text-gray-500">Commande #{order.id}</p>
                  <p className="text-gray-500">
                    {new Date(`${order.date} ${order.time}`).toLocaleString()}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <span className={`px-4 py-2 rounded-full text-sm ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                  <span className="font-semibold text-lg">
                    {order.total.toLocaleString()} FCFA
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => router.push(`/compteserveur/detaildelacommande/${order.id}`)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                    >
                      <FaEye />
                      Voir
                    </button>
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700"
                    >
                      <FaTrash />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoriqueDeLaCommande;
