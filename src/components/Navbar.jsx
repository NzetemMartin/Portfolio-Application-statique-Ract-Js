import React, { useState } from "react";

const Navbar = () => {
  // État de la langue
  const [lang, setLang] = useState("fr"); // ou "en"

  // Contenu de la navbar dans les deux langues
  const labels = {
    en: [
      { label: "Home", target: "home" },
      { label: "Projects", target: "projects" },
      { label: "Skills", target: "skills" },
      { label: "Education", target: "education" },
      { label: "About", target: "about" },
      { label: "Contact", target: "contact" },
    ],
    fr: [
      { label: "Accueil", target: "home" },
      { label: "Projets", target: "projects" },
      { label: "Compétences", target: "skills" },
      { label: "Éducation", target: "education" },
      { label: "À propos", target: "about" },
      { label: "Contacts", target: "contact" },
    ],
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nom */}
        <div className="text-xl font-bold">Martin CHANBOUNG</div>

        {/* Liens */}
        <ul className="flex space-x-6">
          {labels[lang].map(({ label, target }) => (
            <li key={target}>
              <a
                href={`#${target}`}
                className="hover:text-blue-500 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton de changement de langue */}
        <button
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
          className="ml-6 px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gray-100"
        >
          {lang === "fr" ? "EN" : "FR"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
