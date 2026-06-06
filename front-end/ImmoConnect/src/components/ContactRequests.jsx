import { useState } from "react";

const requests = [
  {
    id: 1,
    name: "Villa Emeraude",
    location: "Neuilly-sur-Seine, FR",
    date: "12 Oct. 2024",
    status: "pending",
    response: "Analyse du dossier en cours...",
    responseStyle: "italic text-slate-400",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMdsjg15n0Tat0HL8Hty4cSyHninq4SC_mzGoMl8VTNWWEq9ouUkMkOkdU6C_NS60VabcrP_fCX3XPYRdbhQwn0cJ3hftC_Ve8nG6ZfQAW78-eGXqVtCuaVa8Xi74V7bfjMnMphKokga0m29oNQqUGj4V3GH_hNeDYUMIC-WEgTklrzUr0YGrRwme0--bPlMKJ6NEpNRNUg7cibAe5J8pPVCgvCwt3vH1ZP7Vb2opip6OZk2CA36vOSMOnuyvnganXXthVDj36ygsr",
  },
  {
    id: 2,
    name: "Le Loft Industriel",
    location: "Paris 11ème, FR",
    date: "08 Oct. 2024",
    status: "accepted",
    response: "Visite confirmée pour le 20/10.",
    responseStyle: "font-medium text-[#1d182d]",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeyuNRxEmmAx5i8xTmB39rH-NaPrrBbjhSS6BgzkPHL_0N04cu9JDiKIz6Ubd-GKy8akDSPE9lrAaXDvEAhi0ZD91uTUq9cBjsrS_5IDPtRn55d4D7hHvFFNk2RcgVAsHUUPWjOycN8TNhzkorc3LrwiVfOqrMvmCPSfzWeiy65QbyG6XdLCJIh99cMeLo6jAGx7_5Ni5VsqnZEKDnu3FkBDO4MPu5sUTPmoDf3AW-hvm-T8EgzcC-PZ289yBxSqGFX72m64601VEl",
  },
  {
    id: 3,
    name: "Résidence Blue Marine",
    location: "Biarritz, FR",
    date: "05 Oct. 2024",
    status: "rejected",
    response: "Bien déjà réservé par un tiers.",
    responseStyle: "text-slate-400",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjRWCp0zBnwwgGEWrZ-x5nuv3m_1p6cDGw2ftpojWU6B2ROJgsdgEbNAcf2m7n8ntbT4avIKhpsviv256VSCi387XksKhFgJV5-zOoWVkZOv8JKD__-4hTjZipXMuAQX2r8JXzWSRIleLXJAeEx8vl_StMgk9nWtyTHhTuNfl7z3WfG2viBABMZmSMm3ilmA9UagYkGGVdUR5SNtQn_7JxZYDIm2kKg0zq1TSHxE3B2Y3hre2dKCW7qDKrzq_X_3iv6dy-376ig84J",
  },
];

const filters = [
  { label: "Toutes", value: "all" },
  { label: "En attente", value: "pending" },
  { label: "Acceptées", value: "accepted" },
  { label: "Refusées", value: "rejected" },
];

const navItems = [
  { icon: "dashboard", label: "Dashboard", active: false },
  { icon: "home_work", label: "Mes Annonces", active: true, filled: true },
  { icon: "mail", label: "Messages", active: false },
  { icon: "favorite", label: "Favoris", active: false },
  { icon: "settings", label: "Paramètres", active: false },
];

const StatusBadge = ({ status }) => {
  if (status === "pending") return (
    <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full w-fit text-xs font-bold">
      <span className="w-2 h-2 rounded-full bg-amber-500 pulse-amber" />
      En attente
    </div>
  );
  if (status === "accepted") return (
    <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full w-fit text-xs font-bold">
      <span className="material-symbols-outlined text-[14px]">check_circle</span>
      Acceptée
    </div>
  );
  return (
    <div className="flex items-center gap-2 bg-rose-50 text-rose-700 px-3 py-1.5 rounded-full w-fit text-xs font-bold">
      <span className="material-symbols-outlined text-[14px]">cancel</span>
      Refusée
    </div>
  );
};

export default function ContactRequests() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activePage, setActivePage] = useState(1);

  const filtered = activeFilter === "all"
    ? requests
    : requests.filter((r) => r.status === activeFilter);

  return (
    <div className="flex min-h-screen bg-[#fdf7ff] font-sans text-[#1d182d]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
        body, .font-body { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block; vertical-align: middle;
        }
        .fill-icon { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245,158,11,0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(245,158,11,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(245,158,11,0); }
        }
        .pulse-amber { animation: pulse-ring 2s infinite; }
        tr:hover td { background: #f3eaff; }
      `}</style>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col h-screen sticky top-0 py-8 bg-violet-50 w-64 shrink-0 text-sm font-medium">
        <div className="px-6 mb-10">
          <span className="text-xl font-bold text-violet-900 font-headline">ImmoConnect</span>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map(({ icon, label, active, filled }) => (
            <a
              key={label}
              href="#"
              className={`px-4 py-3 mx-2 flex items-center gap-3 rounded-xl transition-colors duration-200 ${
                active
                  ? "bg-violet-100 text-violet-800"
                  : "text-slate-500 hover:bg-violet-100/50"
              }`}
            >
              <span className={`material-symbols-outlined ${filled && active ? "fill-icon" : ""}`}>{icon}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mt-auto px-4 space-y-1">
          <button
            className="w-full text-white rounded-full py-3 px-4 mb-6 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
            style={{ background: "linear-gradient(135deg, #630ed4, #7c3aed)" }}
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Publier un bien
          </button>
          <a href="#" className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-violet-100/50 rounded-xl transition-colors">
            <span className="material-symbols-outlined">help</span>
            Aide
          </a>
          <a href="#" className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-violet-100/50 rounded-xl transition-colors">
            <span className="material-symbols-outlined text-red-600">logout</span>
            Déconnexion
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="fixed top-4 left-4 right-4 md:left-72 z-50 max-w-5xl">
          <div className="glass rounded-full px-6 py-3 shadow-[0_20px_40px_rgba(29,24,45,0.06)] flex justify-between items-center">
            <span className="text-2xl font-bold text-violet-800 font-headline tracking-tight">
              Mes demandes de contact
            </span>
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
                {["Annonces", "Carte", "Publier"].map((l) => (
                  <a key={l} href="#" className="hover:text-violet-600 transition-colors">{l}</a>
                ))}
              </div>
              <button className="bg-[#ede4ff] text-[#3f1e8c] px-5 py-2 rounded-full font-semibold hover:opacity-80 transition-all flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Exporter CSV
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="mt-28 px-6 pb-20 max-w-7xl mx-auto w-full">

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {filters.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all text-sm ${
                  activeFilter === value
                    ? "bg-[#630ed4] text-white"
                    : "bg-[#e8defb] text-[#4a4455] hover:bg-[#ede4ff]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="bg-[#f8f1ff] rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left text-[#4a4455]/70 text-xs font-bold uppercase tracking-widest">
                    {["Propriété", "Date d'envoi", "Statut", "Réponse Admin", "Actions"].map((h, i) => (
                      <th key={h} className={`px-8 py-6 ${i === 4 ? "text-right" : ""}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-8 py-16 text-center text-slate-400 text-sm">
                        Aucune demande dans cette catégorie.
                      </td>
                    </tr>
                  ) : filtered.map((r) => (
                    <tr key={r.id} className="transition-colors border-t border-violet-100/30">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                            <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-bold text-base">{r.name}</p>
                            <p className="text-xs text-slate-400 mt-0.5">{r.location}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-slate-500 font-medium text-sm">{r.date}</td>
                      <td className="px-8 py-5"><StatusBadge status={r.status} /></td>
                      <td className={`px-8 py-5 text-sm ${r.responseStyle}`}>{r.response}</td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-[#630ed4] font-bold hover:underline transition-all text-sm">
                          Voir détail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-slate-400 font-medium">
              Affichage de {filtered.length} sur 24 demandes
            </p>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#ede4ff] text-[#4a4455] hover:bg-[#630ed4] hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setActivePage(n)}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm transition-all ${
                    activePage === n
                      ? "bg-[#630ed4] text-white"
                      : "bg-[#ede4ff] text-[#4a4455] hover:bg-[#630ed4] hover:text-white"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#ede4ff] text-[#4a4455] hover:bg-[#630ed4] hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto bg-violet-50/20 w-full py-12 px-8 border-t border-violet-100/30 text-xs">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-lg font-bold text-violet-800 font-headline">ImmoConnect</div>
            <div className="flex gap-8">
              {["Mentions Légales", "Confidentialité", "Cookies", "Presse"].map((l) => (
                <a key={l} href="#" className="text-slate-400 hover:text-violet-500 transition-colors">{l}</a>
              ))}
            </div>
            <p className="text-slate-400 italic">© 2024 ImmoConnect. L'art de l'habitat d'exception.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
