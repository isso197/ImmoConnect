import "./style/aide.css";
import {
  FaBuilding,
  FaUserCircle,
  FaHome,
  FaCreditCard,
  FaShieldAlt,
  FaSearch,
  FaGlobe,
  FaShareAlt,
} from "react-icons/fa";

import { IoChevronDown } from "react-icons/io5";

const categories = [
  {
    icon: <FaUserCircle size={30} />,
    title: "Mon Compte",
    description:
      "Gérez vos informations personnelles et préférences.",
  },
  {
    icon: <FaHome size={30} />,
    title: "Annonces",
    description:
      "Publiez, modifiez ou supprimez vos biens immobiliers.",
  },
  {
    icon: <FaCreditCard size={30} />,
    title: "Paiements",
    description:
      "Facturation, abonnements et options de mise en avant.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Sécurité",
    description:
      "Confidentialité, vérification d'identité et signalements.",
  },
];

const faqs = [
  {
    question:
      "Comment fonctionne la vérification des annonces ?",
    answer:
      "Toutes nos annonces passent par un processus de validation manuel et automatique pour garantir l'authenticité des biens.",
  },
  {
    question:
      "Quels sont les frais pour publier un bien d'exception ?",
    answer:
      "La publication standard est gratuite. Des options premium permettent d'augmenter la visibilité.",
  },
  {
    question:
      "Puis-je modifier mon annonce après sa publication ?",
    answer:
      "Oui, vous pouvez modifier votre annonce à tout moment depuis votre tableau de bord.",
  },
  {
    question:
      "Comment contacter un propriétaire en toute sécurité ?",
    answer:
      "Utilisez notre messagerie interne pour protéger vos données personnelles.",
  },
];

export default function Aide() {
  return (
    <div className="bg-[#fdf7ff] min-h-screen text-slate-800">
      {/* Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto bg-white/70 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold text-violet-700">
          <FaBuilding />
          ImmoConnect
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#">Annonces</a>
          <a href="#">Carte</a>
          <a href="#">Publier</a>
          <a href="#">À propos</a>
        </div>

        <div className="flex gap-3">
          <button className="text-sm">
            Contact
          </button>

          <button className="btn-primary">
            Se connecter
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-36 pb-24">
        {/* Hero */}
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Aide - ImmoConnect
          </h1>

          <div className="max-w-2xl mx-auto relative">
            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Comment pouvons-nous vous aider ?"
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-purple-50 focus:ring-2 focus:ring-violet-500 outline-none"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {categories.map((item) => (
            <div
              key={item.title}
              className="category-card"
            >
              <div className="icon-box">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-10">
            Questions populaires
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="faq-item"
              >
                <summary className="faq-header">
                  {faq.question}
                  <IoChevronDown />
                </summary>

                <div className="faq-content">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-purple-100 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Vous n'avez pas trouvé votre réponse ?
          </h2>

          <p className="max-w-xl mx-auto text-slate-600 mb-8">
            Notre équipe de support est disponible 7j/7
            pour vous accompagner.
          </p>

          <button className="btn-primary px-10 py-4">
            Contacter le support
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-lg font-bold text-violet-700">
              ImmoConnect
            </h3>

            <p className="text-xs text-slate-400">
              © 2024 ImmoConnect
            </p>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#">Mentions Légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">Cookies</a>
            <a href="#">Presse</a>
          </div>

          <div className="flex gap-4 text-slate-500">
            <FaGlobe />
            <FaShareAlt />
          </div>
        </div>
      </footer>
    </div>
  );
}