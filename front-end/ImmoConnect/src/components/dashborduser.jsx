import { useState } from "react";

const conciergeRows = [
  {
    id: 1,
    property: "Villa Azure",
    client: "Lucie Martin",
    status: "Validation profil",
    statusColor: "bg-[#e8defb] text-[#4a4455]",
    dot: "bg-amber-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7mlrpBZ7v1qvPpkqyGMk0z_oWtxaDU2t7pcoNJU3qvRU5i9SDevHFgkeZD_-ka_JYuiALYGbv-8zHv3z4MekfY2JAAWJBcxjHMURmpjbOSAV7DlbzPDfvDKUmUmphZRDSjLhXy_xpZseQB9eBBOa3wNp-b0YO-AeOeSkc3raDT6Sw3zlqLqKpworiaNFDSi6Yb82hGUTj8OYl6jqwj9sgCEpf1Tg349bhc5qbZ_ndRNm-B-PJQVpv7O2QGH9ZkHq4Sf69rK6Fv_d9",
  },
  {
    id: 2,
    property: "Loft Opéra",
    client: "Jean Dupont",
    status: "Visite organisée",
    statusColor: "bg-green-100 text-green-700",
    dot: "bg-green-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEL-qtFcHvTE5xnlCOveKtZgMF0myve2lIj8H_XChau1y9ENL1uVvORLcRahBwYFBT2Ntcw7Ubb-Znq7cAZLpvL5hkLSez8jLU5lJ19D9Pv3--kasnrUFp_JPZgcNFVRx_3i0Dpss-rcp0U7T5cdAENWtHHrd_FPMGyDHOEeWmHFb92AO-x-OScnO7xqTtoa3hkVgcqz5i7zsKhiMQkFSy9BxpkLnp3pwMwxaM23yUYxzW-8U5otGt5GK8aAOmpcnFdpZ4rnkOYY-w",
  },
  {
    id: 3,
    property: "Manoir Vert",
    client: "Marc Cohen",
    status: "Dossier rejeté",
    statusColor: "bg-red-100 text-red-700",
    dot: "bg-red-500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtpUckaJJ-Wmr3YvC-Kf-DhqGyboOX66h_-5dvufHtlDvicK3VWmMkz3cqCIDzjXHDdAVRfCVxytvH147PN-NBg8UJCytonYkeC4zQ5p4B0l5xvRb-5FFBOvuxcyfZno-ETVuNUIytfBa7oB6x5gLDGXQhQ3PH9konVbXx45ZyVbgpaw3wcbcRGUWneg3_LUEaLk8Nv-v_5ATVK3oey33IzOfeuO1flvVvr8x2SokeNQfD-xm6HK2LXH8C7_IUwqwwl4Snou3tCTTO",
  },
];

const activities = [
  { icon: "visibility", bg: "bg-violet-100", color: "text-violet-600", title: "Nouveau favori", desc: 'Votre bien "Villa Azure" a été ajouté en favoris par 12 personnes.', time: "Il y a 2h" },
  { icon: "edit_note", bg: "bg-blue-100", color: "text-blue-600", filled: false, title: "Annonce mise à jour", desc: 'Les modifications de l\'annonce "Loft Opéra" ont été validées.', time: "Il y a 5h" },
  { icon: "star", bg: "bg-amber-100", color: "text-amber-600", filled: true, title: "Nouvel avis", desc: "Vous avez reçu une note de 5 étoiles de Lucie Martin.", time: "Hier" },
];

const kpis = [
  { icon: "apartment", bg: "bg-[#d2bbff]", iconColor: "text-[#630ed4]", label: "Mes annonces", value: "12" },
  { icon: "question_answer", bg: "bg-[#e8ddff]", iconColor: "text-[#674bb5]", label: "Demandes", value: "48" },
  { icon: "stars", bg: "bg-[#ebddff]", iconColor: "text-[#6129bc]", label: "Favoris", value: "156", filled: true },
  { icon: "pending_actions", bg: "bg-[#ffdad6]", iconColor: "text-[#ba1a1a]", label: "En attente", value: "03" },
];

const navItems = [
  { icon: "dashboard", label: "Dashboard", active: true, filled: true },
  { icon: "home_work", label: "Mes Annonces" },
  { icon: "support_agent", label: "Conciergerie" },
  { icon: "mail", label: "Messages" },
  { icon: "favorite", label: "Favoris" },
  { icon: "settings", label: "Paramètres" },
];

export default function Dashboard() {
  const [activities_, setActivities] = useState(activities);

  return (
    <div className="flex min-h-screen bg-[#fdf7ff]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .font-headline { font-family: 'Sora', sans-serif; }
        body, .font-body { font-family: 'DM Sans', sans-serif; }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block; vertical-align: middle;
        }
        .fill-icon { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass { background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); }
        tr:hover td { background: #f8f1ff; }
      `}</style>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col h-screen py-8 w-64 fixed left-0 top-0 z-50 text-slate-100"
        style={{ background: "#0F0A1E" }}>
        <div className="px-6 mb-10">
          <div className="text-xl font-bold text-violet-100 font-headline">ImmoConnect</div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Édition Curateur</div>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map(({ icon, label, active, filled }) => (
            <a key={label} href="#"
              className={`px-4 py-3 mx-2 rounded-xl flex items-center gap-3 transition-colors duration-200 text-sm font-medium ${
                active ? "bg-violet-900/30 text-violet-200" : "text-slate-400 hover:bg-white/5"
              }`}>
              <span className={`material-symbols-outlined ${active && filled ? "fill-icon" : ""}`}>{icon}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="px-4 mt-auto space-y-4">
          <button className="w-full py-3 bg-[#630ed4] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Publier un bien
          </button>
          <div className="pt-6 border-t border-white/10">
            <a href="#" className="text-slate-500 hover:text-white px-4 py-2 flex items-center gap-3 text-sm transition-colors">
              <span className="material-symbols-outlined">help</span> Aide
            </a>
            <a href="#" className="text-slate-500 hover:text-white px-4 py-2 flex items-center gap-3 text-sm transition-colors">
              <span className="material-symbols-outlined">logout</span> Déconnexion
            </a>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-64 min-h-screen bg-[#fdf7ff]">
        {/* Header */}
        <header className="sticky top-0 glass z-40 px-8 py-4 flex justify-between items-center shadow-sm">
          <h1 className="font-headline font-bold text-xl text-[#1d182d]">Tableau de bord</h1>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              {["notifications", "search"].map((ic) => (
                <button key={ic} className="p-2 text-[#4a4455] hover:bg-[#f3eaff] rounded-full transition-colors">
                  <span className="material-symbols-outlined">{ic}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-[#ede4ff]">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-[#1d182d]">Ahmed B.</p>
                <p className="text-[11px] text-[#4a4455] uppercase tracking-tighter">Propriétaire Premium</p>
              </div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBxYCrq_9dqbQhVyTMTgLk5bScpqjG13GtDqY68jNQP-RtfpJh4OoYSathEpNlxu3T1rCWiSeeMSONgvGUBOC4ws0XMUiAjnsZSW9oZri5ke_kGduBqUo5JHUPl3E306_k7mJATT03d-jLGZQHyzK2B627wRRn7rEOB__TsjvqL-MxOO2vQEvmpA-y8G-E4E5Z4AvWRr3pEcx0NyuWbh9x6arPuQlXeX0f6nvk2LgMdPopNC2H6W_X5njPiO2wQ4KUR5pmjVCvUYRS"
                alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-[#ede4ff]" />
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-10">
          {/* Hero */}
          <section className="rounded-[2rem] p-10 text-white relative overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(135deg, #630ed4 0%, #7c3aed 100%)" }}>
            <div className="relative z-10 space-y-2">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">Bonjour, Ahmed</h2>
              <p className="text-white/80 max-w-md text-sm leading-relaxed">
                Bienvenue dans votre espace personnel. Vous avez 3 nouvelles demandes de visite aujourd'hui pour vos propriétés d'exception.
              </p>
              <div className="pt-6 flex gap-4">
                <button className="bg-white text-[#630ed4] px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Publier une annonce
                </button>
                <button className="bg-white/20 text-white px-6 py-3 rounded-full text-sm font-bold border border-white/30 hover:bg-white/30 transition-all">
                  Modifier profil
                </button>
              </div>
            </div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#7c3aed]/20 rounded-full blur-2xl pointer-events-none" />
          </section>

          {/* KPIs */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map(({ icon, bg, iconColor, label, value, filled }) => (
              <div key={label} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
                <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className={`material-symbols-outlined ${iconColor} ${filled ? "fill-icon" : ""}`}>{icon}</span>
                </div>
                <p className="text-[#4a4455] text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-3xl font-headline font-bold text-[#1d182d]">{value}</p>
              </div>
            ))}
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Concierge Table */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-[#1d182d] tracking-tight">Suivi Conciergerie</h3>
                  <p className="text-xs text-[#4a4455] mt-1">Suivez l'état d'avancement de vos demandes via notre équipe de conciergerie.</p>
                </div>
                <a href="#" className="text-[#630ed4] font-bold text-sm hover:underline">Voir tout le flux</a>
              </div>
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-[#f8f1ff] border-b border-[#f3eaff]">
                    <tr>
                      {["Bien concerné", "Client potentiel", "État Conciergerie", "Détails"].map((h, i) => (
                        <th key={h} className={`px-6 py-4 text-[11px] font-bold text-[#4a4455] uppercase tracking-widest ${i === 3 ? "text-right" : ""}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f3eaff]">
                    {conciergeRows.map((r) => (
                      <tr key={r.id} className="transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                              <img src={r.img} alt={r.property} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium text-sm text-[#1d182d]">{r.property}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-[#4a4455]">{r.client}</td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${r.dot}`} />
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${r.statusColor}`}>{r.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button className="bg-[#f3eaff] hover:bg-[#ede4ff] text-[#630ed4] px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">Suivre</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-6">
              <h3 className="text-2xl font-headline font-bold text-[#1d182d] tracking-tight">Activité Récente</h3>
              <div className="bg-white rounded-[2rem] p-6 shadow-sm space-y-6">
                {activities_.map(({ icon, bg, color, filled, title, desc, time }, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                      <span className={`material-symbols-outlined ${color} text-xl ${filled ? "fill-icon" : ""}`}>{icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1d182d]">{title}</p>
                      <p className="text-xs text-[#4a4455] leading-relaxed">{desc}</p>
                      <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">{time}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-[#f3eaff]">
                  <button onClick={() => setActivities([])}
                    className="w-full py-2 text-[#630ed4] font-bold text-xs uppercase tracking-widest hover:bg-[#630ed4]/5 rounded-xl transition-colors">
                    Tout vider
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full py-12 px-8 bg-white border-t border-[#ede4ff] mt-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-lg font-bold text-violet-800 font-headline">ImmoConnect</div>
            <div className="flex gap-8">
              {["Mentions Légales", "Confidentialité", "Cookies"].map((l) => (
                <a key={l} href="#" className="text-slate-400 hover:text-violet-500 text-xs transition-colors">{l}</a>
              ))}
            </div>
            <p className="text-slate-400 text-xs">© 2024 ImmoConnect. L'art de l'habitat d'exception.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}