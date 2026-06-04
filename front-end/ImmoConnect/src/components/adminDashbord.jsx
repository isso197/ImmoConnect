import "./style/adminDashbord.css";

import {
  FaHome,
  FaHeart,
  FaCog,
  FaSignOutAlt,
  FaQuestionCircle,
  FaBell,
  FaEye,
  FaEdit,
  FaTrash,
  FaBuilding,
} from "react-icons/fa";

import { MdDashboard, MdMail } from "react-icons/md";

import {
  IoSearch,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

const stats = [
  { title: "Total", value: "1,284" },
  { title: "Validées", value: "842" },
  { title: "En attente", value: "329" },
  { title: "Refusées", value: "113" },
];

const properties = [
  {
    id: 1,
    name: "Villa Ethereal Horizon",
    location: "Biarritz, France",
    owner: "Jean Dupont",
    price: "2 450 000 €",
    date: "12 Oct 2024",
    status: "Validée",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
  },
  {
    id: 2,
    name: "Penthouse L'Azur",
    location: "Nice, France",
    owner: "Sarah Bernard",
    price: "1 120 000 €",
    date: "14 Oct 2024",
    status: "En attente",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  },
  {
    id: 3,
    name: "Manoir du Silvère",
    location: "Megève, France",
    owner: "Marc Lefebvre",
    price: "3 800 000 €",
    date: "15 Oct 2024",
    status: "Refusée",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  },
  {
    id: 4,
    name: "Appartement Haussmannien",
    location: "Paris VIII, France",
    owner: "Claire Petit",
    price: "1 850 000 €",
    date: "18 Oct 2024",
    status: "Validée",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
  },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-[#fdf7ff]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-slate-950 text-slate-400">
        <div className="p-6">
          <div className="flex items-center gap-2 text-xl font-bold text-violet-100 mb-10">
            <FaBuilding className="text-violet-500" />
            ImmoConnect
          </div>

          <div className="space-y-2">
            <NavItem icon={<MdDashboard />} text="Dashboard" />

            <NavItem
              active
              icon={<FaHome />}
              text="Mes Annonces"
            />

            <NavItem icon={<MdMail />} text="Messages" />

            <NavItem icon={<FaHeart />} text="Favoris" />

            <NavItem icon={<FaCog />} text="Paramètres" />
          </div>

          <button className="primary-gradient w-full mt-8 py-3 rounded-full text-white font-semibold">
            Publier un bien
          </button>
        </div>

        <div className="mt-auto p-6 border-t border-slate-900">
          <NavItem
            icon={<FaQuestionCircle />}
            text="Aide"
          />

          <NavItem
            icon={<FaSignOutAlt />}
            text="Déconnexion"
          />
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 md:ml-64">
        {/* Header */}
        <header className="sticky top-0 bg-white/70 backdrop-blur-md p-8 z-20">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Gestion des Annonces - Admin
            </h1>

            <div className="flex items-center gap-4">
              <div className="relative">
                <IoSearch
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Rechercher une annonce..."
                  className="w-80 pl-12 pr-4 py-3 rounded-xl bg-purple-50 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <button className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                <FaBell />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="filter-active">
              Toutes
            </button>

            <button className="filter-btn">
              Validée
            </button>

            <button className="filter-btn">
              En attente
            </button>

            <button className="filter-btn">
              Refusée
            </button>
          </div>
        </header>

        {/* Stats */}
        <section className="grid md:grid-cols-4 gap-6 p-8">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <p className="text-xs uppercase text-gray-400 mb-2">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold">
                {item.value}
              </h2>
            </div>
          ))}
        </section>

        {/* Table */}
        <section className="px-8 pb-10">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-purple-50">
                <tr>
                  <th className="table-head">Bien</th>
                  <th className="table-head">Propriétaire</th>
                  <th className="table-head">Prix</th>
                  <th className="table-head">Date</th>
                  <th className="table-head">Statut</th>
                  <th className="table-head text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {properties.map((property) => (
                  <tr
                    key={property.id}
                    className="border-t hover:bg-purple-50"
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-16 h-12 rounded-lg object-cover"
                        />

                        <div>
                          <h3 className="font-semibold">
                            {property.name}
                          </h3>

                          <p className="text-xs text-gray-400">
                            {property.location}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td>{property.owner}</td>

                    <td className="font-semibold">
                      {property.price}
                    </td>

                    <td>{property.date}</td>

                    <td>
                      <StatusBadge
                        status={property.status}
                      />
                    </td>

                    <td>
                      <div className="flex justify-end gap-2 pr-4">
                        <button className="action-btn hover:text-violet-600">
                          <FaEye />
                        </button>

                        <button className="action-btn hover:text-amber-500">
                          <FaEdit />
                        </button>

                        <button className="action-btn hover:text-red-500">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center p-6 border-t">
              <p className="text-sm text-gray-500">
                Affichage de 1 à 4 sur 1,284 annonces
              </p>

              <div className="flex gap-2">
                <button className="page-btn">
                  <IoChevronBack />
                </button>

                <button className="page-btn active-page">
                  1
                </button>

                <button className="page-btn">
                  2
                </button>

                <button className="page-btn">
                  3
                </button>

                <button className="page-btn">
                  <IoChevronForward />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function NavItem({ icon, text, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
        active
          ? "bg-violet-900/30 text-violet-200"
          : "hover:bg-slate-900"
      }`}
    >
      {icon}
      {text}
    </button>
  );
}

function StatusBadge({ status }) {
  if (status === "Validée") {
    return (
      <span className="badge-success">
        {status}
      </span>
    );
  }

  if (status === "En attente") {
    return (
      <span className="badge-warning">
        {status}
      </span>
    );
  }

  return (
    <span className="badge-danger">
      {status}
    </span>
  );
}