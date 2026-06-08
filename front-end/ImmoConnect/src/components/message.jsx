import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Elena Valois",
    preview: "C'est parfait pour la visite de demain.",
    time: "14:20",
    online: true,
    unread: true,
    active: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB10XRr9AMquNpbLCOh_G5WQWg1qM6ufkCjxopfo3gXj_ITPWBtOe59L7XPbGMCEMDWKCyzoDVEifiP0JRBjIg5hkTxVSqrq3YrkyrmoZgnkKeHfiMXKg5IEjmMSKcatm0tOQw9jXk0V5G8BWtDL6sDzgimUnXmmIF1fkoO3oqumi0i56slYxJLZuXz00Z3xTy5ZzH_vbBCMBCJo1Mtdwfiq4lECzBR4Ee3ErzXPq3qYDsBc1cvYOaQcC-OgoUc2zZ4dORBKDcqkvg",
  },
  {
    id: 2,
    name: "Marc Dupont",
    preview: "Le dossier est complet, je l'envoie.",
    time: "Hier",
    online: false,
    unread: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgtbugx7O74vHxXUqb-3KIkCp3MCAsc1gk-XZkdr0P7jk2NkJE2cufh7z2CMQ2LHyxiR6RUKPiz9XlOjv3KpYEb_dejx8YDA8Kq6HHKoLsc45v9TAI-JHAKlxgcm4yXmbIAvsXGqaO_A6ZqB2-tkroqsqu_mll0vN6CWLeHsOJlK1ExXd8urMmTTAmvf0b6P5MB82O5pmeLHQGfP5vIBvZIza_vv-RkEVwMK36lCOf9swNThnjeBicBIipeFVAzBQ9uQ2yB2lptwY",
  },
  {
    id: 3,
    name: "Sophie Arthaud",
    preview: "Merci pour votre retour rapide !",
    time: "Lun",
    online: false,
    unread: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRThR-ZjO7KMrDqjsjtYcy5WqMuXHBrTNR3tCbqQmHxQRGdMo0FcKXFc-thCyaCQn9pwOQjVauzi28xYyI7hkGFzfZ-wwEJ6ZwUKQL2WDjZLWiR7I85x_wNkgZFuhxsNX7Sc2dOoqjuR0rASvxgJmRa770ueEN7gwA-oyXyW9cj6YvtZgddphCWQsq-xaXskh09NXF67Mz4dNSVEAi-LXUxbpaENA3FxgZwRIUQL6dPLXnjGA2AcYg2e81pEurJHCurKhXsM3GMcI",
  },
  {
    id: 4,
    name: "Julien Meyer",
    preview: "L'offre a été acceptée par les clients.",
    time: "22 Mai",
    online: false,
    unread: false,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUuYEiYfJruawSMVoFRcLmgFw0OYAKqeYvdA2zpnuA8QCW8UgsXDRbE1eKAkphUANPSaMaMiAxJzD38iQrud5Jk3aiVWNG3H1CXVOxeq-60CqRFYzp8S-0jLzqOi-ATUTfVnaUI8O_T2p3iKxsjOeMnkHwCcBTN4qELANXfeSAwm1Hjz8kl1eL_jj979adw6K2ogFtiI5qG1girnTjIbs6lHMdkgFKdUBmCM1GHUCBiGa81M5pr0YZQEhCY6Yo7JTWLKWuF_im7_I",
  },
];

const initialMessages = [
  { id: 1, from: "elena", text: "Bonjour ! J'ai bien reçu vos documents pour la Villa Azure. Tout semble en ordre.", time: "10:15" },
  { id: 2, from: "me", text: "C'est une excellente nouvelle. Est-ce possible d'organiser une contre-visite avec mon architecte demain après-midi ?", time: "10:42" },
  { id: 3, from: "me", type: "card" },
  { id: 4, from: "elena", text: "C'est parfait pour la visite de demain à 15h. Je vous attends devant l'entrée principale.", time: "14:20" },
];

const sideNavItems = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "home_work", label: "Mes Annonces" },
  { icon: "mail", label: "Messages", active: true, filled: true },
  { icon: "favorite", label: "Favoris" },
  { icon: "settings", label: "Paramètres" },
];

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), from: "me", text: input.trim(), time: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) }]);
    setInput("");
  };

  const filtered = conversations.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex h-screen overflow-hidden bg-[#fdf7ff]">
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
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .dot-bg { background-image: radial-gradient(#630ed4 1px, transparent 1px); background-size: 32px 32px; }
      `}</style>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col h-screen py-8 w-64 shrink-0 text-sm font-medium" style={{ background: "#2e1065" }}>
        <div className="px-6 mb-10">
          <h1 className="text-xl font-bold text-violet-100 font-headline">ImmoConnect</h1>
        </div>
        <div className="px-6 mb-8 flex items-center gap-3">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlM5O6aOaHjyyGLV68FDrA5BhjIaTKujHONfhqsXinWLK_pXB3tCxrEiIHW7YmbbuVDJdYTThEKyZcDVNcobbPPn9mv8AExgnpj_USayMLWVILy1ht9aFoYAU35jh_YT2nEdMxp68i3uVGdc3a363Z7AT05iu7ePuRl1hFX8bbhB5wIw_I47qA17PlfKHhEI6u0mcXtePFE3ItUbkERZLLmD-oBEmTEB6icX3GBTTCcoDkDZPqzWTs5F7U7uGbvZdRSNTWUsg5EV0"
            alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-violet-800" />
          <div>
            <p className="text-violet-100 font-semibold">Mon Espace</p>
            <p className="text-violet-400 text-xs">Édition Curateur</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          {sideNavItems.map(({ icon, label, active, filled }) => (
            <a key={label} href="#"
              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-colors duration-200 ${
                active ? "bg-violet-900/40 text-violet-100" : "text-slate-400 hover:bg-violet-900/50"
              }`}>
              <span className={`material-symbols-outlined ${active && filled ? "fill-icon" : ""}`}>{icon}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="px-4 mt-auto">
          <button className="w-full py-3 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90"
            style={{ background: "linear-gradient(to right, #630ed4, #7c3aed)" }}>
            Publier un bien
          </button>
        </div>
        <div className="mt-6 border-t border-violet-900/50 pt-6">
          {[{ icon: "help", label: "Aide" }, { icon: "logout", label: "Déconnexion" }].map(({ icon, label }) => (
            <a key={label} href="#" className="flex items-center gap-3 text-slate-400 hover:bg-violet-900/50 px-4 py-3 mx-2 rounded-xl transition-colors">
              <span className="material-symbols-outlined">{icon}</span> {label}
            </a>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#fdf7ff]">
        {/* Header */}
        <header className="h-20 flex items-center justify-between px-8 bg-white/70 backdrop-blur-xl z-30 shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWqsx2RA4JEtTqvv96EXV368wbIS5fnSuG2aDtvfcfofkZDiuStEvjObTOIxXZHNkun5ZvNnS7p4a4lcQ_4Ug9Sd1gdqlguyxPS8or8R18HPiEbb8UcL8VHude1pnuQ7Cz7e5TXqOnPCIF6u4yRo4eNOUN_HdcWdJUAaBzi-FR-DFNk1qcBaXWtsJOTNF0Gc43AwSxLXumF3dU_-G6Zz0IuS7RNdbKsoM4kbg90YKuhiO5DlE1VeDgGK2cyCFykl5mddmHaR40gzU"
                alt="Elena" className="w-10 h-10 rounded-full object-cover" />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <h2 className="font-headline font-bold text-[#1d182d] tracking-tight">Elena Valois</h2>
              <p className="text-xs text-[#7b7487] font-medium">En ligne • Propriétaire "Villa Azure"</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {["call", "videocam", "more_vert"].map((ic) => (
              <button key={ic} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f8f1ff] text-[#4a4455] hover:bg-[#ede4ff] transition-colors">
                <span className="material-symbols-outlined">{ic}</span>
              </button>
            ))}
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Conversation List */}
          <section className="w-80 shrink-0 flex flex-col bg-[#f8f1ff]/50">
            <div className="p-6">
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-[#7b7487]">
                  <span className="material-symbols-outlined text-[18px]">search</span>
                </span>
                <input value={search} onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border-0 rounded-xl text-sm focus:ring-2 focus:ring-[#630ed4]/20 outline-none placeholder-[#ccc3d8]"
                  placeholder="Rechercher..." />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide px-3 space-y-1">
              {filtered.map((c) => (
                <div key={c.id}
                  className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-colors ${
                    c.active ? "bg-white shadow-sm border-l-4 border-[#630ed4]" : "hover:bg-white/70"
                  }`}>
                  <div className="relative shrink-0">
                    <img src={c.img} alt={c.name} className="w-12 h-12 rounded-full object-cover" />
                    {c.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-sm font-bold text-[#1d182d] truncate">{c.name}</h3>
                      <span className="text-[10px] text-[#7b7487]">{c.time}</span>
                    </div>
                    <p className={`text-xs truncate ${c.active ? "text-[#630ed4] font-semibold" : "text-[#4a4455]"}`}>{c.preview}</p>
                  </div>
                  {c.unread && <div className="w-2 h-2 bg-[#630ed4] rounded-full shrink-0" />}
                </div>
              ))}
            </div>
          </section>

          {/* Chat Window */}
          <section className="flex-1 flex flex-col bg-[#fdf7ff] overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none dot-bg" />
            <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide z-10">
              <div className="flex justify-center">
                <span className="px-4 py-1 rounded-full bg-[#ede4ff] text-[10px] font-bold uppercase tracking-widest text-[#7b7487]">
                  Aujourd'hui
                </span>
              </div>

              {messages.map((msg) => {
                if (msg.type === "card") return (
                  <div key={msg.id} className="flex flex-row-reverse items-end gap-3 max-w-[80%] ml-auto">
                    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-sm border border-[#ccc3d8]/20">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT_efullc721CcPD_aXcLTzGMBO7LS5teO_JQPc99MmahSuqIGFvfkAzseobPaWHt5p_A7CEFUk9xv5RjD8WUgs2rijCrPNqyh2GrJ_3zmGDpOgubOf9M8qP8k8qulfmroRack1Yue3rkTHK1ev0VFrD3U1obRvUnJExZFB2FxV1bDW8ppYy5LFfDNw_gZ4FXhaLW1pX7S7Rmtw0RnGP884FTBO7Xn5mtNVYRZYWrG5WRxOa62weF9aWsk-XC6IxLqR99MMZ6iB8Q"
                        alt="Villa Azure" className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h4 className="text-sm font-bold text-[#1d182d]">Villa Azure • Antibes</h4>
                        <p className="text-xs text-[#7b7487] mb-3">Confirmation de visite envoyée</p>
                        <button className="w-full py-2 bg-[#ede4ff] text-[#630ed4] text-xs font-bold rounded-lg hover:bg-[#630ed4]/10 transition-colors">
                          Voir l'annonce
                        </button>
                      </div>
                    </div>
                  </div>
                );

                if (msg.from === "me") return (
                  <div key={msg.id} className="flex flex-row-reverse items-end gap-3 max-w-[80%] ml-auto">
                    <div className="space-y-1 items-end flex flex-col">
                      <div className="text-white px-5 py-3 rounded-2xl rounded-br-none shadow-md"
                        style={{ background: "linear-gradient(135deg, #630ed4, #7c3aed)" }}>
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                      <div className="flex items-center gap-1 px-1">
                        <p className="text-[10px] text-[#7b7487]">{msg.time}</p>
                        <span className="material-symbols-outlined text-[10px] text-[#630ed4]">done_all</span>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <div key={msg.id} className="flex items-end gap-3 max-w-[80%]">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaCsZcwVwzzBqPH9CVQnjir53HSq_LbbDIYS6gkWVKN-KeWG3IrXesusQFqqCHBrZUv3jlfnk11XfiE9aSgFFoh2mHCr0STESLlh5oOjwYp4q6AraF5Scw_i4zJ3NwL49RMH1Ds7GKGGZj__q1c_bZECp3kUG0Z4cYneAHXdNaUH0oGsTiCvRthCljmwRd6YWNidXqNiyz8gGavuWm63VChgWyxiUXN3QSLwMoVKwu9xHEq83Cznkbo481fGvEfT4dQjnsYnMauUU"
                      alt="Elena" className="w-8 h-8 rounded-full object-cover shrink-0" />
                    <div className="space-y-1">
                      <div className="bg-[#ede4ff] text-[#1d182d] px-5 py-3 rounded-2xl rounded-bl-none shadow-sm">
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                      <p className="text-[10px] text-[#7b7487] px-1">{msg.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input */}
            <div className="p-6 bg-white/80 backdrop-blur-md z-20 shrink-0">
              <div className="flex items-center gap-4 max-w-5xl mx-auto">
                <div className="flex gap-2">
                  {["add_circle", "image"].map((ic) => (
                    <button key={ic} className="w-11 h-11 flex items-center justify-center rounded-full text-[#4a4455] hover:bg-[#f8f1ff] transition-colors">
                      <span className="material-symbols-outlined">{ic}</span>
                    </button>
                  ))}
                </div>
                <div className="flex-1 relative">
                  <input value={input} onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    className="w-full py-3.5 px-5 bg-[#f8f1ff] border-0 rounded-2xl text-sm focus:ring-2 focus:ring-[#630ed4]/20 outline-none placeholder-[#ccc3d8] pr-12"
                    placeholder="Écrivez votre message..." />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a4455] hover:text-[#630ed4] transition-colors">
                    <span className="material-symbols-outlined">sentiment_satisfied</span>
                  </button>
                </div>
                <button onClick={send}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#630ed4] text-white shadow-lg shadow-[#630ed4]/20 active:scale-90 transition-transform">
                  <span className="material-symbols-outlined fill-icon">send</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl flex justify-around items-center px-4 shadow-[0_-10px_30px_rgba(29,24,45,0.05)] z-50">
        {[
          { icon: "dashboard", label: "Accueil" },
          { icon: "home_work", label: "Biens" },
          { icon: "mail", label: "Messages", active: true },
          { icon: "favorite", label: "Favoris" },
          { icon: "person", label: "Profil" },
        ].map(({ icon, label, active }) => (
          <button key={label} className={`flex flex-col items-center gap-1 ${active ? "text-violet-700" : "text-slate-400"}`}>
            <span className={`material-symbols-outlined ${active ? "fill-icon" : ""}`}>{icon}</span>
            <span className={`text-[10px] ${active ? "font-bold" : "font-medium"}`}>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}