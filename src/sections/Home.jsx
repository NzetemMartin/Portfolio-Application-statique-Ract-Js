import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import profile from "../assets/profile.jpg";
import cvPDF from "../../src/assets/My_CV.pdf"; //  Import du fichier PDF

const Home = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 relative"
    >
      {/* Photo de profil animée */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-blue-300 blur-3xl opacity-40 animate-pulse"></div>
        <img
          src={profile}
          alt="Martin CHANBOUNG"
          className="w-44 h-44 object-cover rounded-full border-4 border-blue-500 shadow-xl relative z-10"
        />
      </motion.div>

      {/* Nom et titre */}
      <motion.h1
        className="text-5xl font-extrabold mt-6 tracking-tight text-blue-700"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Martin <span className="text-gray-900">CHANBOUNG</span>
      </motion.h1>

      <motion.p
        className="mt-3 text-xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Apprenti Développeur <span className="text-blue-600">Full Stack</span>
      </motion.p>

      {/* Boutons */}
      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a
          href="https://www.linkedin.com/in/martin-chanboung-b992412ba"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Voir LinkedIn
        </a>
        <button
          onClick={() => setShowCV(true)}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300"
        >
          Voir le CV
        </button>
      </motion.div>

      {/* Icônes sociales */}
      <motion.div
        className="flex gap-6 mt-10 text-3xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href="https://github.com/NzetemMartin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:nzetemmartin@icloud.com"
          className="hover:text-red-500 transition-colors"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Modale CV */}
      {showCV && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setShowCV(false)}
        >
          <div
            className="bg-white w-[90%] max-w-4xl h-[80%] rounded-lg overflow-hidden shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl z-10"
            >
              <IoMdClose />
            </button>

            {/* Iframe pour afficher le PDF */}
            <iframe
              src={cvPDF}
              title="CV Martin Chanboung"
              className="w-full h-full border-none"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
