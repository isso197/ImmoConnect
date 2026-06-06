import "./style/Annomce.css";
import {
  FaBuilding,
  FaShareAlt,
  FaHeart,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCar,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

import { MdStairs } from "react-icons/md";

const features = [
  "Piscine privée",
  "Climatisation centrale",
  "Cuisine équipée",
  "Domotique",
  "Chambre de service",
  "Sécurité 24/7",
];

export default function PropertyDetails() {
  return (
    <div className="bg-[#fdf7ff] min-h-screen text-slate-800">
      {/* Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold text-violet-700">
          <FaBuilding />
          ImmoConnect
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#">Annonces</a>
          <a href="#">Carte</a>
          <a href="#">Publier</a>
          <a href="#">À propos</a>
        </div>

        <button className="btn-primary">
          Se connecter
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-slate-500">
            Accueil / Ventes Immobilier /
            Villa d'Exception Casablanca
          </div>

          <div className="flex gap-3">
            <button className="action-pill">
              <FaShareAlt />
              Partager
            </button>

            <button className="action-pill">
              <FaHeart className="text-red-500" />
              Favoris
            </button>
          </div>
        </div>

        {/* Gallery */}
        <section className="grid grid-cols-12 gap-4 mb-12 h-[500px]">
          <div className="col-span-8 rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200"
              alt=""
              className="w-full h-full object-cover hover:scale-105 duration-700"
            />
          </div>

          <div className="col-span-4 grid grid-rows-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
              alt=""
              className="rounded-3xl h-full w-full object-cover"
            />

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
                alt=""
                className="rounded-3xl h-full object-cover"
              />

              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
                  alt=""
                  className="w-full h-full object-cover"
                />

            
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left */}
          <div className="lg:col-span-8 space-y-10">
            <section>
              <h1 className="text-4xl font-bold mb-3">
                Villa d'Exception au Cœur d'Anfa
              </h1>

              <div className="flex items-center gap-2 text-slate-500">
                <FaMapMarkerAlt />
                Quartier Anfa, Casablanca, Maroc
              </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-purple-50 rounded-3xl p-8">
              <Stat icon={<FaBed />} value="5" label="Chambres" />
              <Stat icon={<FaBath />} value="4" label="Bains" />
              <Stat icon={<FaRulerCombined />} value="450 m²" label="Surface" />
              <Stat icon={<MdStairs />} value="R+1" label="Étages" />
              <Stat icon={<FaCar />} value="2" label="Parking" />
            </section>

            {/* Description */}
            <section>
              <h2 className="section-title">
                Description du bien
              </h2>

              <p className="text-slate-600 leading-8">
                Nichée dans le prestigieux quartier
                d'Anfa, cette villa contemporaine
                redéfinit le luxe urbain...
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="section-title">
                Caractéristiques & Équipements
              </h2>

              <div className="grid md:grid-cols-3 gap-4">
                {features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-violet-600" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Map */}
            <section>
              <h2 className="section-title">
                Localisation
              </h2>

              <div className="rounded-3xl overflow-hidden h-80">
                api de Localisation
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-32">
              <div className="mb-8">
                <p className="uppercase text-xs text-slate-400">
                  Prix de vente
                </p>

                <h2 className="text-4xl font-bold text-violet-700">
                  1 850 000 MAD
                </h2>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="input-field"
                />

                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="input-field"
                />

                <textarea
                  rows="4"
                  placeholder="Votre message"
                  className="input-field"
                />

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Envoyer une demande
                </button>
              </form>
            </div>

            <div className="mt-6 bg-green-50 rounded-3xl p-6 flex gap-4">
              <FaShieldAlt className="text-green-600 text-2xl" />

              <div>
                <h4 className="font-bold text-green-700">
                  Garantie de Sécurité
                </h4>

                <p className="text-sm text-green-600">
                  Votre demande est traitée
                  uniquement par notre
                  administration certifiée.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="text-center">
      <div className="flex justify-center text-violet-600 text-xl mb-2">
        {icon}
      </div>

      <h3 className="font-bold">{value}</h3>

      <p className="text-xs text-slate-500">
        {label}
      </p>
    </div>
  );
}