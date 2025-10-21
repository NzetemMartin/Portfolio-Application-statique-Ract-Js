import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      <p className="mb-4">{project.description}</p>
      <a href={project.link} className="text-blue-500 hover:underline">
        Voir le projet
      </a>
    </motion.div>
  );
};

export default ProjectCard;
