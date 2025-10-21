import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      {/* Titre animé */}
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        À propos
      </motion.h2>

      {/* Carte contenant le texte */}
      <motion.div
        className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-center text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Je suis Martin, développeur full stack en formation, passionné par la
          création d’applications web et mobiles modernes, performantes et
          intuitives. J’aime travailler avec React, React Native et Node.js,
          explorer de nouvelles technologies et concevoir des expériences
          utilisateur engageantes. Curieux et motivé, je m’efforce d’allier
          design, fonctionnalité et performance dans chaque projet.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
