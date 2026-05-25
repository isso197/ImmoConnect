import { useState } from "react";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
import { MdFavoriteBorder,MdFavorite } from "react-icons/md";

import "./style/Accueil.css"

const properties = [
  {
    id: 1,
    name: "Villa Majorelle",
    price: "8 450 000",
    unit: "MAD",
    location: "Palmeraie, Marrakech",
    tag: "Vente",
    exclusive: true,
    beds: 5,
    baths: 4,
    sqm: 420,
    liked: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhQTaNe77pMpNGV1iMysebUKQefEn9vWrsUOavMZomqiXNe7E8rcAn6sBfLa6v59vOr1XoV13NXjIJX5Bj8Pl2_v5_viKz6Gh6Gbqkvs1XMP754FACdSUuhurqqK8CSTSIm7s0E4mzFsXtse9hQNNrC9K3rnRUZUQ-088QDzaCtPXS3UvLFhIfveK2PwPUkdV9vAR-5yR43dd3aXhNURLUoO4cSD_90_kYrqGx9RZAjnVSf1agGaiXIOXaOME31gqA9HtIftALY9MV",
  },
  {
    id: 2,
    name: "The Sky Loft",
    price: "22 000",
    unit: "MAD/Mois",
    location: "Anfa Place, Casablanca",
    tag: "Location",
    exclusive: false,
    beds: 2,
    baths: 2,
    sqm: 145,
    liked: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVyCrHHHSvvv1Pvyzc_6yGrS-ANnFvKcrGFk4Hk6C5_tfnNu6_gWkrCuQhHQGK9-56gH5zafLsDfugLqMQXb8u2SBEjI7hTXUHDHx5y83EFJy5bMGGGoHsjy_2vjE4vwqf954BT1mV7nhKLfbtTxlIt5_KGlSpUqobtHp5Di692GoqU2rN4KncxjsVZVoItw51hKPFKi75AOovxzAPSJuWSAg3X5NapNBqDW8T7LzsDhvJldyG0lVHAO2bfZSskmYPqQoGzcaz5y6L",
  },
  {
    id: 3,
    name: "Riad Azura",
    price: "4 200 000",
    unit: "MAD",
    location: "Médina, Essaouira",
    tag: "Vente",
    exclusive: false,
    beds: 4,
    baths: 4,
    sqm: 280,
    liked: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo601-G14RPlFf3l_XOWf7SIp5LYY4w_jf1GIJr62TLQ6rymBHeoZumKwwhQmVNfM-toNUBriYORlqIChrZM0Lrci9zv_a1rwNhanWI-tO7zOXqcqCuCwUp4Mnn1dFW1MRS27pI7DvsG1Lj0gzjS1EvGrJRDHQOJTaII3GYTtDVC8awN1v-p9XFMTVx2kJKfN4M5aVgbWw7ctdq27KOVyE9tydLe-KgMsKjHZaFQ_4R1srk6JO-J_4yKWp0l9UFfwDCWfRY4-oXFof",
  },
  {
    id: 4,
    name: "Villa Atlantica",
    price: "12 000 000",
    unit: "MAD",
    location: "Malabata, Tanger",
    tag: "Vente",
    exclusive: false,
    beds: 6,
    baths: 5,
    sqm: 650,
    liked: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCChGJrnpz2U88ICZwsbygfdj_FDtr-5vWvC4bTopV2LtPhni9MGlnQxD8Ixfj-IpTy5mQkHRfwbxcDplj0F_bz1q5wlojVe-Di-J29yiGSrVL1W1BLJRCamm8VnYdhYWxheZhde826tz9crVITQ2vKl2QUnIJ2XYNbfTO7FDhDl-C0AOPrS1Tz5CTa7PDG5PtfOba7CRl0G_3nyt7e111_R16t3vaR6-3zbhCAtHo9wqNg_-P2mAmlmVSQKipnuDM9fh5oSfIf-WN",
  },
];

const roomOptions = ["Toutes", "1+", "2+", "3+", "4+"];
const propertyTypes = ["Villas", "Appartements", "Riads", "Terrains"];
const navLinks = ["Annonces", "Carte", "Publier", "À propos"];

export default function Accueil() {
  const [liked, setLiked] = useState(properties.map((p) => p.liked));
  const [activeRoom, setActiveRoom] = useState(0);
  const [checkedTypes, setCheckedTypes] = useState([true, false, false, false]);
  const [activeFilters] = useState(["Marrakech", "Villa"]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleLike = (i) =>
    setLiked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const toggleType = (i) =>
    setCheckedTypes((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="bg-[#fdf7ff] font-sans text-[#1d182d] min-h-screen">
      {/* Nav */}
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/92 glass-nav rounded-full px-8 py-3 shadow-lg shadow-black/5">
          <div className="text-2xl font-bold text-violet-800 flex items-center gap-2 font-headline tracking-tight">
            <span className="material-symbols-outlined fill-icon text-[#630ed4]">domain</span>
            ImmoConnect
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className={i === 0
                  ? "text-violet-700 border-b-2 border-violet-600"
                  : "text-slate-600 hover:text-violet-600 transition-colors"}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2 text-[#630ed4] font-semibold hover:opacity-80 transition-opacity">
              Se connecter
            </button>
            <button className="bg-[#630ed4] text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-purple-500/20 hover:scale-[0.98] active:scale-95 transition-transform">
              Contact
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero */}
        <section className="relative px-6 py-20 overflow-hidden" style={{background:'#7c3aed'}}>
          <div
            className="absolute inset-0 -z-10"
            />
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                1 248 annonces disponibles
              </span>
            </div>
            <h1 className="text-white font-headline text-5xl md:text-6xl font-bold mb-12 tracking-tight leading-tight">
              Trouvez votre bien idéal <br />
              <span style={{ color: "#ebddff" }}>au Maroc</span>
            </h1>

            {/* Search Bar */}
            <div className="max-w-5xl mx-auto bg-white p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {[
                  { label: "Type", options: ["Villa de Luxe", "Appartement", "Riad"] },
                  { label: "Ville", options: ["Marrakech", "Casablanca", "Tanger"] },
                  { label: "Offre", options: ["Vente", "Location"] },
                ].map(({ label, options }, i) => (
                  <div
                    key={label}
                    className={`flex flex-col items-start px-4 ${i < 2 ? "border-r border-gray-200" : ""}`}
                  >
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      {label}
                    </label>
                    <select className="w-full bg-transparent border-none p-0 focus:ring-0 font-medium text-[#1d182d] text-sm">
                      {options.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
                <div className="flex flex-col items-start px-4">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Mots-clés
                  </label>
                  <input
                    className="w-full bg-transparent border-none p-0 focus:ring-0 font-medium text-[#1d182d] text-sm placeholder-gray-300"
                    placeholder="Piscine, Jardin..."
                  />
                </div>
              </div>
              <button className="bg-[#630ed4] text-white w-full md:w-auto px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-violet-700 transition-colors shadow-lg">
                <span className="material-symbols-outlined">search</span>
                Rechercher
              </button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="space-y-10">
            <div>
              <h3 className="font-headline text-xl font-bold mb-6">Filtres</h3>
              <div className="space-y-8">
                {/* Price */}
                <div>
                  <label className="block text-sm font-bold mb-4">Prix (MAD)</label>
                  <div className="flex items-center gap-2">
                    <input className="w-full bg-[#f8f1ff] border-transparent focus:border-[#630ed4] focus:ring-0 rounded-lg text-sm p-3" placeholder="Min" type="number" />
                    <input className="w-full bg-[#f8f1ff] border-transparent focus:border-[#630ed4] focus:ring-0 rounded-lg text-sm p-3" placeholder="Max" type="number" />
                  </div>
                </div>
                {/* Surface */}
                <div>
                  <label className="block text-sm font-bold mb-4">Surface (m²)</label>
                  <div className="flex items-center gap-2">
                    <input className="w-full bg-[#f8f1ff] border-transparent focus:border-[#630ed4] focus:ring-0 rounded-lg text-sm p-3" placeholder="Min" type="number" />
                    <input className="w-full bg-[#f8f1ff] border-transparent focus:border-[#630ed4] focus:ring-0 rounded-lg text-sm p-3" placeholder="Max" type="number" />
                  </div>
                </div>
                {/* Rooms */}
                <div>
                  <label className="block text-sm font-bold mb-4">Chambres</label>
                  <div className="flex flex-wrap gap-2">
                    {roomOptions.map((r, i) => (
                      <button
                        key={r}
                        onClick={() => setActiveRoom(i)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                          activeRoom === i
                            ? "bg-[#630ed4] text-white"
                            : "bg-[#e8defb] text-[#4a4455] hover:bg-[#ede4ff]"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Type */}
                <div>
                  <label className="block text-sm font-bold mb-4">Type de bien</label>
                  <div className="space-y-2">
                    {propertyTypes.map((type, i) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          checked={checkedTypes[i]}
                          onChange={() => toggleType(i)}
                          className="w-5 h-5 rounded border-gray-300 text-[#630ed4] focus:ring-[#630ed4]"
                          type="checkbox"
                        />
                        <span className="text-sm font-medium group-hover:text-[#630ed4] transition-colors">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-[#630ed4] text-white py-4 rounded-xl font-bold shadow-lg shadow-purple-500/20 hover:bg-violet-700 transition-colors">
                  Appliquer les filtres
                </button>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div>
            {/* Filters & Sort */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((f) => (
                  <div key={f} className="flex items-center gap-2 bg-purple-100 text-[#630ed4] px-3 py-1.5 rounded-full text-xs font-bold">
                    {f}
                    <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
                  </div>
                ))}
                <button className="text-xs font-bold text-gray-400 hover:text-[#630ed4] transition-colors ml-2">
                  Tout effacer
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400 font-medium whitespace-nowrap">Trier par:</span>
                <select className="bg-transparent border-none font-bold text-sm text-[#630ed4] focus:ring-0 p-0 pr-6">
                  <option>Plus récents</option>
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                </select>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {properties.map((p, i) => (
                <article key={p.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm card-hover">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover card-img"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-md text-[#630ed4] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                        {p.tag}
                      </span>
                      {p.exclusive && (
                        <span className="bg-[#630ed4] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                          Exclusivité
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => toggleLike(i)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all"
                    >
                      <span >
                        {liked[i]?<MdFavorite color='red' size={20}/>:<MdFavoriteBorder color="red" size={20} />
}
                      </span>
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="font-headline text-xl font-bold">{p.name}</h2>
                      <span className="font-headline text-2xl font-extrabold text-[#630ed4]">
                        {p.price} <span className="text-xs">{p.unit}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 mb-6 text-sm">
                      <span className="material-symbols-outlined text-[18px]">location_on</span>
                      {p.location}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      {[
                        { icon: "bed", val: `${p.beds} Ch.` },
                        { icon: "bathtub", val: `${p.baths} Sdb.` },
                        { icon: "square_foot", val: `${p.sqm} m²` },
                      ].map(({ icon, val }) => (
                        <div key={icon} className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-gray-400">{icon}</span>
                          <span className="text-sm font-bold">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex justify-center items-center gap-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ede4ff] transition-colors">
                <span className="material-symbols-outlined"><FaChevronLeft /></span>
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    currentPage === n
                      ? "bg-[#630ed4] text-white"
                      : "text-gray-400 hover:bg-[#ede4ff]"
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="px-2 text-gray-400">...</span>
              <button
                onClick={() => setCurrentPage(12)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  currentPage === 12 ? "bg-[#630ed4] text-white" : "text-gray-400 hover:bg-[#ede4ff]"
                }`}
              >
                12
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#ede4ff] transition-colors">
                <span className="material-symbols-outlined"><FaChevronRight /></span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-violet-50/20 w-full py-12 px-8 mt-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-bold text-violet-800 font-headline">ImmoConnect</div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Mentions Légales", "Confidentialité", "Cookies", "Presse"].map((l) => (
              <a key={l} href="#" className="text-slate-400 hover:text-violet-500 text-xs transition-colors">
                {l}
              </a>
            ))}
          </div>
          <p className="text-slate-400 text-xs">© 2024 ImmoConnect. L'art de l'habitat d'exception.</p>
        </div>
      </footer>
    </div>
  );
}
