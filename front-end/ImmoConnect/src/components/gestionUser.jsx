import { useState } from "react";
const users = [
  {
    id: "#482930",
    name: "Alexandre Dubois",
    email: "alex.dubois@immo.com",
    role: "Administrateur",
    roleStyle: "bg-purple-100 text-purple-700",
    date: "12 Oct 2023",
    status: "Actif",
    suspended: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGoM24ZXYEDgLzmXScMp2WTU-ufOat1i-GjAnTdH0Ue9AIKJGl93Sg9IIfzAL1Qz1IlNKzeDFrqhmePsbR3frffwOmNO_cVMc8W6r-9imfbS0h2UKCkSm-91nl0RDqD7drhhWoC0sRRimtpGK7VKAdU3HVC3z_aIDXWMtmPAJaK5uYBYQGsZDTHHkXNa-79KUUoP7mfLu5ZXJv4U9JgLZkPJSe98y1-JsiO-UDgBuvFwdq7slN24y-4tPmKaK0F8PrdIfoIFLYxcc",
  },
  {
    id: "#482931",
    name: "Sophie Martin",
    email: "sophie.m@gmail.com",
    role: "Vendeur",
    roleStyle: "bg-indigo-100 text-indigo-600",
    date: "25 Nov 2023",
    status: "Actif",
    suspended: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQDeLylvaX_mBdiFqNrt6zp-06B3QPxAJPJWF3iqDObXdJ5SiVquhGqtLwsbe9rOl1QZjQrN5-KmfgUVlbJDEH2MYanH5xMEd4dvFXiTHCWwAaMj7ji8ANlViRiIXtzFC8H0CvVXQeuaA3tIwDvT3mPapXAd-M555hYJD_0PcVElJeoK6aJilHf8MO0cjPpvjXNye0ccfBZCbAMTDB3esafL9muiYrwwhr5yF1py4us7icMgvXCdwYlediJpr7ETY6cIi0ak5SOjU",
  },
  {
    id: "#482932",
    name: "Marc Lefebvre",
    email: "m.lefebvre@outlook.fr",
    role: "Acheteur",
    roleStyle: "bg-slate-100 text-slate-400",
    date: "05 Jan 2024",
    status: "Suspendu",
    suspended: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWz_aMA_RsDgMHlAKwZd_D_xSwAHNqO8cQyO0bP1luhF_WCrIyp74QpfG2YCvAn9xnxpXcEFQqSvtZeOnlvkeQBDsRUaQXdZBqaf6NjGOYtpiNfLdv86CONhFzep_UAq0HBEWC50II1UzekSP6VMA_BrBzBwSWOwwday3YzWY1TS9TPSWNeOXGJ1AUqsxnBuFtgBL4wHEk1GLxDbx8QLyXN37Kg_6NzqITdIsNrSHwcTnGf4ilO-HxJJAJ-mD82aYg2kEHKzOkj80",
  },
  {
    id: "#482933",
    name: "Julie Renard",
    email: "julie.renard@agence.com",
    role: "Vendeur",
    roleStyle: "bg-indigo-100 text-indigo-600",
    date: "14 Fév 2024",
    status: "Actif",
    suspended: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-AV83BCGgqovaAwcFab2ZH8VnKPrwtJVgCzx8q38xiKNMpk-HjJHJzOd2uS4MvVzQ_TkfQOA8QjNi7vvwkXgVxAxlZZ-7i9H8vMB7ZMTXiyDjsO4H5nT82sZQs9MXZT34J3Rtbj1u-R692OzabNggKBXsjiNHB-roCT5kwXnmzAPb_vCQMQlfdx91RA6LtH-Op4PuIE_JCR0bOOxiEGeUNcd6YjxTZtaZUmRnB_BIt7AMrQaOeiYeq1iPd5TSsqePVRFGbY-Cyg8",
  },
];
const navItems = [
  { icon: "dashboard", label: "Dashboard", active: true },
  { icon: "home_work", label: "Mes Annonces" },
  { icon: "favorite", label: "Favoris" },
  { icon: "settings", label: "Paramètres" },
];

const stats = [
  { label: "Total Utilisateurs", value: "1,284", sub: "12% ce mois", subColor: "text-emerald-600", icon: "trending_up", highlight: "text-[#630ed4]" },
  { label: "Acheteurs", value: "842", sub: "65% de la base", subColor: "text-slate-400", highlight: "text-[#1d182d]" },
  { label: "Vendeurs", value: "392", sub: "Accès Premium (40)", subColor: "text-slate-400", highlight: "text-[#1d182d]" },
  { label: "Suspendus", value: "50", sub: "En attente de révision", subColor: "text-slate-400", highlight: "text-red-600", border: true },
];

export default function AdminUsers() {
  const [activePage, setActivePage] = useState(1);
  const [moderationOn, setModerationOn] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen overflow-hidden bg-[#fdf7ff] font-sans text-[#1d182d]">
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
        .glass { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .card-img-zoom { transition: transform 0.7s ease; }
        .card-img-zoom:hover { transform: scale(1.1); }
        tr:hover td { background: #f8f1ff; }
      `}</style>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col h-screen py-8 bg-violet-50/50 w-64 border-r border-violet-100/50 shrink-0">
        <div className="px-8 mb-12">
          <h1 className="text-xl font-bold text-violet-900 tracking-tight font-headline">ImmoConnect</h1>
        </div>
        <div className="flex-1 space-y-1.5 px-4">
          {navItems.map(({ icon, label, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-3 transition-all duration-200 px-4 py-3 rounded-xl text-sm font-medium ${
                active
                  ? "bg-violet-100 text-violet-800"
                  : "text-slate-500 hover:bg-violet-100/50 hover:text-violet-700"
              }`}
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
        <div className="px-6 mb-10">
          <button className="w-full text-white py-3.5 px-4 rounded-full font-bold tracking-wide transition-all hover:opacity-90 shadow-lg shadow-purple-500/20 text-sm"
            style={{ background: "linear-gradient(135deg, #630ed4, #7c3aed)" }}>
            Publier un bien
          </button>
        </div>
        <div className="pt-6 border-t border-violet-100/50 space-y-1.5 px-4">
          <a href="#" className="flex items-center gap-3 text-slate-500 px-4 py-3 rounded-xl hover:bg-violet-100/50 text-sm font-medium transition-colors">
            <span className="material-symbols-outlined text-[20px]">help</span>
            <span>Aide</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-red-600 px-4 py-3 rounded-xl hover:bg-red-50 text-sm font-medium transition-colors">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>Déconnexion</span>
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto h-full">
        {/* Header */}
        <header className="sticky top-6 left-0 right-0 z-30 px-6 max-w-7xl mx-auto">
          <div className="bg-white/70 glass rounded-full px-8 py-4 flex justify-between items-center shadow-[0_20px_40px_rgba(29,24,45,0.06)]">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-violet-700">admin_panel_settings</span>
              <h2 className="text-xl font-headline font-bold tracking-tight">Gestion des Utilisateurs - Admin</h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative hidden lg:block">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-[#f8f1ff] border-0 rounded-full pl-12 pr-6 py-2.5 w-64 text-sm focus:ring-2 focus:ring-[#630ed4] outline-none transition-all"
                  placeholder="Rechercher un utilisateur..."
                />
              </div>
              <button className="text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:shadow-lg transition-all shadow-purple-500/20"
                style={{ background: "linear-gradient(135deg, #630ed4, #7c3aed)" }}>
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                Ajouter un Utilisateur
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-12 pt-28 pb-12">

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {stats.map(({ label, value, sub, subColor, icon, highlight, border }) => (
              <div key={label} className={`bg-white p-6 rounded-3xl shadow-sm border ${border ? "border-l-4 border-l-red-200 border-violet-100/10" : "border-violet-100/10"} flex flex-col gap-2`}>
                <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">{label}</span>
                <span className={`text-3xl font-bold font-headline ${highlight}`}>{value}</span>
                <div className={`flex items-center gap-1 text-xs mt-2 font-bold ${subColor}`}>
                  {icon && <span className="material-symbols-outlined text-[16px]">{icon}</span>}
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-violet-100/10">
            <div className="px-8 py-6 flex justify-between items-center bg-[#f8f1ff]/30">
              <h3 className="text-lg font-headline font-semibold">Annuaire des Utilisateurs</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-xl hover:bg-[#ede4ff] transition-colors text-slate-600">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button className="p-2 rounded-xl hover:bg-[#ede4ff] transition-colors text-slate-600">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8f1ff]/10 text-slate-500 text-xs uppercase tracking-wider">
                    {["Avatar & Nom", "Email", "Rôle", "Date d'inscription", "Statut", "Actions"].map((h, i) => (
                      <th key={h} className={`px-6 py-5 font-semibold ${i === 5 ? "text-right" : ""} ${i === 0 ? "pl-8" : ""}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-violet-100/50">
                  {users
                    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()))
                    .map((u) => (
                    <tr key={u.id} className="transition-colors">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full overflow-hidden bg-violet-100 shrink-0 ${u.suspended ? "grayscale opacity-70" : ""}`}>
                            <img src={u.img} alt={u.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className={`font-semibold text-sm ${u.suspended ? "text-slate-400" : "text-[#1d182d]"}`}>{u.name}</p>
                            <p className="text-xs text-slate-400">{u.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 text-sm ${u.suspended ? "text-slate-400 line-through" : "text-slate-600"}`}>{u.email}</td>
                      <td className="px-6 py-4">
                        <span className={`${u.roleStyle} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide`}>{u.role}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{u.date}</td>
                      <td className="px-6 py-4">
                        <div className={`flex items-center gap-2 font-semibold text-sm ${u.suspended ? "text-red-600" : "text-emerald-600"}`}>
                          <span className={`w-2 h-2 rounded-full ${u.suspended ? "bg-red-500" : "bg-emerald-500"}`} />
                          {u.status}
                        </div>
                      </td>
                      <td className="px-8 py-4 text-right">
                        <button className="p-2 text-slate-400 hover:text-[#630ed4] transition-colors">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-8 py-6 flex justify-between items-center border-t border-violet-100/30">
              <p className="text-xs text-slate-500 font-medium">Affichage de 1-10 sur 1,284 utilisateurs</p>
              <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#ede4ff] transition-colors text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    onClick={() => setActivePage(n)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                      activePage === n ? "bg-[#630ed4] text-white" : "hover:bg-[#ede4ff] text-slate-600"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#ede4ff] transition-colors text-slate-400">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Security Audit */}
            <div className="relative overflow-hidden rounded-3xl p-8 flex flex-col justify-end min-h-[240px] group"
              style={{ background: "linear-gradient(135deg, #1e1b4b, #312e81)" }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNd8480PuLT4bfM-dLw6ohIj_QF5TvF4kmZYuUwkVQazXotI4E0dAk6eCLWiVjK3tgt_UhRip6sjdrW-oYjOc7lX5ExyCEH6_Z6pOPdMogdol8-qG9rAzhFXNygqk4Vc9O3dQ3OpxiAmYWNfnSRegLEPPzwyX6MgOLKXkU-XZs0UljAft7N85N3FG2gMOlfICgOJ6Zq42sJJT4A9Qi2iLVy9OGnbPiWYHom1TSvIn84TAYbj1UsoyiNSAvNY-xcJG3BPkJ9-UoXbU"
                alt="Security"
                className="absolute inset-0 w-full h-full object-cover opacity-20 card-img-zoom"
              />
              <div className="relative z-10">
                <h4 className="text-2xl font-headline font-bold mb-2 text-white">Audit de Sécurité</h4>
                <p className="text-violet-200/80 text-sm mb-6 max-w-sm">
                  Générez un rapport détaillé sur les accès récents et les activités suspectes du dernier trimestre.
                </p>
                <button className="bg-white/10 glass text-white border border-white/20 px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-all">
                  Lancer l'audit
                </button>
              </div>
            </div>

            {/* Smart Moderation */}
            <div className="bg-purple-50/50 rounded-3xl p-8 flex flex-col justify-center border border-purple-100/20">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-[#630ed4] mb-6">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-2">Modération Intelligente</h4>
              <p className="text-slate-500 text-sm mb-6">
                Activez l'analyse automatique des nouveaux profils pour détecter les doublons et les fraudes potentielles.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setModerationOn((v) => !v)}
                  className={`w-12 h-6 rounded-full relative p-1 cursor-pointer transition-colors ${moderationOn ? "bg-[#630ed4]" : "bg-slate-300"}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${moderationOn ? "right-1" : "left-1"}`} />
                </button>
                <span className={`text-sm font-bold ${moderationOn ? "text-[#630ed4]" : "text-slate-400"}`}>
                  {moderationOn ? "Activé" : "Désactivé"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-12 px-12 bg-white border-t border-violet-100/30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-lg font-bold text-violet-800 tracking-tight font-headline">ImmoConnect</p>
              <p className="text-xs text-slate-400 mt-2">© 2024 ImmoConnect. L'art de l'habitat d'exception.</p>
            </div>
            <div className="flex gap-8">
              {["Mentions Légales", "Confidentialité", "Cookies", "Presse"].map((l) => (
                <a key={l} href="#" className="text-xs text-slate-400 hover:text-violet-500 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
