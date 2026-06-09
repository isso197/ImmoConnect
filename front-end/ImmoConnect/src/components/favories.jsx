import { useState } from "react";

const allProperties = [
  {
    id: 1,
    name: "L'Écrin d'Azur",
    price: "2 450 000€",
    location: "Saint-Jean-Cap-Ferrat, France",
    tag: "Villa d'exception",
    category: "Villas",
    beds: 5, baths: 4, sqm: 450,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKjovhNWXTQyV8fgmLuI8g0W8HGH08euLonSiMRtx33OdxEjBjQtO5wiHT6qYc50qKxKubIzg1gO-J__AhhUJFM2zR41ZyJGKYIW3kZwFuM3pFckjbMpHzYCIEB32Zoy0466rMdl8a9Ct6fJtcF0eJ57N06TcdhMT6wYHmfbftnvt3u6mrwnQtMSRv8kuO2IXYYRGpLPr-voZZRNp8u5gk2MewwxMCHbXL6kI2BDqe_-qR4mLxl-e2hge7367fy1DEqQqT2jaylgsn",
  },
  {
    id: 2,
    name: "Le Belvédère",
    price: "1 890 000€",
    location: "Paris 16ème, France",
    tag: "Penthouse",
    category: "Appartements",
    beds: 3, baths: 2, sqm: 185,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUX8L3RhZrsAJwhzQHdyX0HvrUyupzEVI0Edh9NWThlAYu8E2M3rVi-EXzGSRMH4Yr2IceI8eXpmfcGFwilb54Qxhgv0vhfm4KWvcgUUkunFt4jUWK366ZnwB-wX1LSlC79DfiNY-H3Qu9fscyXc2yd8mMhsummMxu8JqgRxYeksZMh-4f5qEyWxidCOx2YCneVcH58m09D9hTC54WQTOd4M6YpRcddQZmpnqBUtIlJb2mgOOLnCJ3eiVJQZF8cCknriI8kl77DpBX",
  },
  {
    id: 3,
    name: "Villa Sylvestre",
    price: "1 240 000€",
    location: "Bordeaux, France",
    tag: "Contemporain",
    category: "Villas",
    beds: 4, baths: 3, sqm: 210,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxEX9wKXb4nc3MLVL06U9g1Q8ZcyLsJBX65a_oOiyjQ0hIoScmBjD-6teQtSAhZSoke3DJy9XqtEfEsHVirXECDJVYqI4fUbgBzCadmGTRdv-GinEs2UhMbYOiUc4cuYh53sj9NJDH7Ox2V2S9Tpf8k1sZ_XAYs4VHMrcmIxaF242vC14716RUbfKHBDs-ld1KAhpbzYtdL-Oeq2GJ-5n66RDVti4qUiFtGrneKYRE2hBJodL3Q0-olgKDFWCx7WPiXDchkZuXQQ2-",
  },
];

const filters = ["Tout", "Villas", "Appartements", "Châteaux"];

const navItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "home_work", label: "Mes Annonces" },
  { icon: "favorite", label: "Favoris", active: true, filled: true },
  { icon: "settings", label: "Paramètres" },
];

export default function Favorites() {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [favorites, setFavorites] = useState(allProperties);
  const [hoveredId, setHoveredId] = useState(null);

  const remove = (id) => setFavorites((prev) => prev.filter((p) => p.id !== id));

  const displayed = activeFilter === "Tout"
    ? favorites
    : favorites.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#fdf7ff] min-h-screen font-sans text-[#1d182d]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Manrope:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
        body, .font-body { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block; vertical-align: middle;
        }
        .fill-icon { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-nav { background: rgba(255,255,255,0.7); backdrop-filter: blur(16px); }
        .card-img { transition: transform 0.7s ease; }
        .card-root:hover .card-img { transform: scale(1.1); }
        .remove-btn {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .card-root:hover .remove-btn {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Top Nav */}
      <nav className="fixed top-4 left-4 right-4 rounded-full px-6 py-3 glass-nav shadow-[0_20px_40px_rgba(29,24,45,0.06)] z-50 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-violet-800 flex items-center gap-2 font-headline">
          ImmoConnect
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {["Annonces", "Carte", "Publier", "À propos"].map((l) => (
            <a key={l} href="#" className="text-slate-600 hover:text-violet-600 transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-600 font-medium hover:opacity-80 transition-all text-sm">Contact</button>
          <button className="text-white px-6 py-2 rounded-full font-bold text-sm active:scale-90 transition-transform"
            style={{ background: "linear-gradient(135deg, #630ed4, #7c3aed)" }}>
            Se connecter
          </button>
        </div>
      </nav>

      <div className="flex min-h-screen pt-24">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col h-screen w-64 py-8 bg-violet-50/50 sticky top-0 shrink-0">
          <div className="px-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhqcc7CxDy3JaZt-e2KeAeJC3Y1z1JRTAeiLjFEeSA04m7eTQgS6nNxxuvnRKahzyndwlmDzBPHbdDuSL4DI5RhU8mzyD6ZwaR03IXiZMcq3tDfRHQXHymkL3P95Rfd8ebWTKCvTVo2yGyjfeV_hTfnA-HdGeiU4U0UrQX-mzveEAp2tW2eK0AxiA7d_S7pacgx_J3Riw2GMzESLk39NgjeFMBbjB85yeclLVLPzHudjkE7nwytOOd-wo54AHk88kc8D9uiNf525gN"
                alt="Profil" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-violet-900">Mon Espace</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Édition Curateur</p>
              </div>
            </div>
            <button className="w-full py-3 bg-[#630ed4] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 hover:opacity-90 transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Publier un bien
            </button>
          </div>
          <nav className="flex-1 space-y-1">
            {navItems.map(({ icon, label, active, filled }) => (
              <a key={label} href="#"
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-colors text-sm font-medium ${
                  active ? "bg-violet-100 text-violet-800 font-semibold" : "text-slate-500 hover:bg-violet-100/50"
                }`}>
                <span className={`material-symbols-outlined ${active && filled ? "fill-icon" : ""}`}>{icon}</span>
                {label}
              </a>
            ))}
          </nav>
          <div className="px-2 mt-auto">
            {[{ icon: "help", label: "Aide" }, { icon: "logout", label: "Déconnexion" }].map(({ icon, label }) => (
              <a key={label} href="#" className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-violet-100/50 rounded-xl transition-colors text-sm">
                <span className="material-symbols-outlined">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 px-4 md:px-12 pb-24">
          {/* Header */}
          <header className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold font-headline text-[#1d182d] tracking-tight mb-4">
                Mes Favoris
              </h1>
              <p className="text-lg text-[#4a4455]">
                Vous avez{" "}
                <span className="text-[#630ed4] font-bold">{favorites.length} propriétés</span>{" "}
                sauvegardées dans votre collection.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                    activeFilter === f
                      ? "bg-[#630ed4] text-white shadow-md shadow-purple-500/20"
                      : "bg-[#e8defb] text-[#4a4455] hover:bg-[#ede4ff]"
                  }`}>
                  {f}
                </button>
              ))}
            </div>
          </header>

          {/* Cards Grid */}
          {displayed.length > 0 ? (
            <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayed.map((p) => (
                <div key={p.id}
                  className="card-root relative group bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_32px_64px_rgba(29,24,45,0.08)]">
                  <div className="relative h-72 overflow-hidden">
                    <img src={p.img} alt={p.name}
                      className="card-img w-full h-full object-cover" />
                    <button
                      onClick={() => remove(p.id)}
                      className="remove-btn absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-lg"
                      title="Retirer des favoris">
                      <span className="material-symbols-outlined text-xl">close</span>
                    </button>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-[#630ed4] text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {p.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold font-headline text-[#1d182d]">{p.name}</h3>
                      <span className="text-xl font-bold text-[#630ed4]">{p.price}</span>
                    </div>
                    <p className="text-sm text-[#4a4455] mb-6 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {p.location}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 border-t border-[#f3eaff] py-4">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">bed</span> {p.beds} Ch.
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">bathtub</span> {p.baths} Sdb.
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">square_foot</span> {p.sqm} m²
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            /* Empty State */
            <section className="max-w-4xl mx-auto py-32 flex flex-col items-center text-center">
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-[#630ed4]/10 blur-3xl rounded-full" />
                <div className="relative w-40 h-40 mx-auto rounded-full bg-[#f3eaff] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[80px] text-[#630ed4]/30 fill-icon">favorite</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold font-headline text-[#1d182d] mb-4">Votre collection est vide</h2>
              <p className="text-[#4a4455] max-w-md mx-auto mb-10">
                Commencez à explorer nos propriétés d'exception et ajoutez-les à vos favoris pour les retrouver ici.
              </p>
              <button
                onClick={() => { setFavorites(allProperties); setActiveFilter("Tout"); }}
                className="text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform"
                style={{ background: "linear-gradient(135deg, #630ed4, #7c3aed)" }}>
                Explorer les annonces
              </button>
            </section>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-violet-50/20 w-full py-12 px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-bold text-violet-800 font-headline">ImmoConnect</div>
          <div className="flex gap-8">
            {["Mentions Légales", "Confidentialité", "Cookies", "Presse"].map((l) => (
              <a key={l} href="#" className="text-slate-400 hover:text-violet-500 transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-slate-400">© 2024 ImmoConnect. L'art de l'habitat d'exception.</p>
        </div>
      </footer>
    </div>
  );
}