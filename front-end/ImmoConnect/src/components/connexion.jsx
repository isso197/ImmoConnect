import { useState } from "react";
import "./style/login.css";
import logPhoto from "../assets/logPhoto.jpeg";
export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex items-stretch bg-[#fdf7ff] text-[#1d182d]">
      {/* Visual Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        <img 
          src={logPhoto}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 mt-auto p-16 w-full">
          <div className="glass-panel p-8 rounded-3xl border border-white/20 shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              L'art de l'habitat d'exception.
            </h2>

            <p className="text-lg text-gray-700 max-w-md">
              Découvrez une collection de biens soigneusement sélectionnés pour
              leur caractère unique et leur architecture remarquable.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-purple-50">
        <div className="w-full max-w-md space-y-10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 ethereal-gradient rounded-xl flex items-center justify-center text-white">
              🏠
            </div>

            <span className="text-2xl font-extrabold text-purple-700">
              ImmoConnect
            </span>
          </div>

          {/* Tabs */}
          <div className="bg-purple-100 p-1.5 rounded-full flex gap-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition ${
                isLogin
                  ? "bg-white text-purple-700 shadow"
                  : "text-gray-500"
              }`}
            >
              Connexion
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition ${
                !isLogin
                  ? "bg-white text-purple-700 shadow"
                  : "text-gray-500"
              }`}
            >
              Inscription
            </button>
          </div>

          {/* Login Form */}
          {isLogin ? (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">
                  Bon retour parmi nous.
                </h1>

                <p className="text-gray-500 mt-2">
                  Accédez à votre espace curateur immobilier.
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="nom@exemple.com"
                  className="w-full rounded-xl px-5 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl px-5 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <button className="w-full ethereal-gradient text-white py-4 rounded-full font-bold">
                Se connecter
              </button>
            </div>
          ) : (
            /* Register Form */
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">
                  Créer un compte.
                </h1>

                <p className="text-gray-500 mt-2">
                  Rejoignez la première plateforme immobilière premium.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="rounded-xl px-5 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />

                <input
                  type="tel"
                  placeholder="+33 6 00 00 00"
                  className="rounded-xl px-5 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <input
                type="email"
                placeholder="nom@exemple.com"
                className="w-full rounded-xl px-5 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl px-5 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <label className="flex items-start gap-3 text-sm text-gray-500">
                <input type="checkbox" />
                <span>
                  J'accepte les Conditions Générales et la Politique de
                  Confidentialité.
                </span>
              </label>

              <button className="w-full ethereal-gradient text-white py-4 rounded-full font-bold">
                Créer mon compte
              </button>
            </div>
          )}

          {/* Social Login */}
          <div>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>

              <div className="relative flex justify-center">
                <span className="bg-purple-50 px-4 text-xs uppercase tracking-widest text-gray-500">
                  Ou continuer avec
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="border rounded-xl py-3 font-semibold hover:bg-white">
                Google
              </button>

              <button className="border rounded-xl py-3 font-semibold hover:bg-white">
                Facebook
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Besoin d'aide ?{" "}
            <a href="/" className="text-purple-700 font-bold">
              Contacter le support
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}