import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "École Multimédia de Paris",
    school: "Bachelor Développement Web & Conception d'Applications (En cours)",
    period: "2023 – 2026 | Paris, France",
    description:
      "Formation orientée full-stack centrée sur les technologies modernes du web et du mobile (React, Node.js, etc.), avec des projets collaboratifs, des méthodologies Agile et la conception d’expériences interactives.",
  },
  {
    title: "Bachelor 1 Cycle Ingénieur",
    school: "ECE Paris",
    period: "2023 – 2024",
    description:
      "Formation d’ingénieur généraliste axée sur des bases scientifiques et techniques solides.",
  },
  {
    title: "Baccalauréat Scientifique – Mention Bien",
    school: "New Century Institute of Learning, Yaoundé",
    period: "2015 – 2021",
    description:
      "Formation scientifique rigoureuse développant l’esprit logique, la méthode et les capacités d’analyse.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16 text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Parcours
      </motion.h2>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Ligne verticale */}
        <div className="absolute left-5 top-0 w-1 h-full bg-blue-200 rounded-full"></div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-16 md:pl-24"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Cercle sur la timeline */}
              <div className="absolute left-0 top-2 w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-blue-700 mb-1">
                  {edu.title}
                </h3>
                <p className="text-gray-700 font-semibold">{edu.school}</p>
                <p className="text-sm text-gray-500 italic">{edu.period}</p>
                <p className="mt-2 text-gray-600">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
